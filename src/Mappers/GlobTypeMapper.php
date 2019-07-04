<?php

declare(strict_types=1);

namespace TheCodingMachine\GraphQLite\Mappers;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\OutputType;
use GraphQL\Type\Definition\Type;
use Mouf\Composer\ClassNameMapper;
use Psr\Container\ContainerInterface;
use Psr\SimpleCache\CacheInterface;
use ReflectionClass;
use ReflectionException;
use Symfony\Component\Cache\Adapter\Psr16Adapter;
use Symfony\Contracts\Cache\CacheInterface as CacheContractInterface;
use TheCodingMachine\CacheUtils\ClassBoundCache;
use TheCodingMachine\CacheUtils\ClassBoundCacheContract;
use TheCodingMachine\CacheUtils\ClassBoundCacheContractInterface;
use TheCodingMachine\CacheUtils\ClassBoundMemoryAdapter;
use TheCodingMachine\CacheUtils\FileBoundCache;
use TheCodingMachine\ClassExplorer\Glob\GlobClassExplorer;
use TheCodingMachine\GraphQLite\AnnotationReader;
use TheCodingMachine\GraphQLite\InputTypeGenerator;
use TheCodingMachine\GraphQLite\InputTypeUtils;
use TheCodingMachine\GraphQLite\NamingStrategyInterface;
use TheCodingMachine\GraphQLite\TypeGenerator;
use TheCodingMachine\GraphQLite\Types\MutableObjectType;
use TheCodingMachine\GraphQLite\Types\ResolvableMutableInputInterface;
use function class_exists;
use function str_replace;

/**
 * Scans all the classes in a given namespace of the main project (not the vendor directory).
 * Analyzes all classes and uses the @Type annotation to find the types automatically.
 *
 * Assumes that the container contains a class whose identifier is the same as the class name.
 */
final class GlobTypeMapper implements TypeMapperInterface
{
    /** @var string */
    private $namespace;
    /** @var AnnotationReader */
    private $annotationReader;
    /** @var CacheInterface */
    private $cache;
    /** @var int|null */
    private $globTtl;

    /**
     * Cache storing the GlobAnnotationsCache objects linked to a given ReflectionClass.
     *
     * @var ClassBoundCacheContractInterface
     */
    private $mapClassToAnnotationsCache;
    /**
     * Cache storing the GlobAnnotationsCache objects linked to a given ReflectionClass.
     *
     * @var ClassBoundCacheContractInterface
     */
    private $mapClassToExtendAnnotationsCache;

    /** @var ContainerInterface */
    private $container;
    /** @var TypeGenerator */
    private $typeGenerator;
    /** @var int|null */
    private $mapTtl;
    /** @var NamingStrategyInterface */
    private $namingStrategy;
    /** @var InputTypeGenerator */
    private $inputTypeGenerator;
    /** @var InputTypeUtils */
    private $inputTypeUtils;
    /**
     * The array of globbed classes.
     * Only instantiable classes are returned.
     * Key: fully qualified class name
     *
     * @var array<string,ReflectionClass>
     */
    private $classes;
    /** @var bool */
    private $recursive;
    /** @var RecursiveTypeMapperInterface */
    private $recursiveTypeMapper;
    /** @var CacheContractInterface */
    private $cacheContract;
    /** @var GlobTypeMapperCache */
    private $globTypeMapperCache;
    /** @var GlobExtendTypeMapperCache */
    private $globExtendTypeMapperCache;

    /**
     * @param string $namespace The namespace that contains the GraphQL types (they must have a `@Type` annotation)
     */
    public function __construct(string $namespace, TypeGenerator $typeGenerator, InputTypeGenerator $inputTypeGenerator, InputTypeUtils $inputTypeUtils, ContainerInterface $container, AnnotationReader $annotationReader, NamingStrategyInterface $namingStrategy, RecursiveTypeMapperInterface $recursiveTypeMapper, CacheInterface $cache, ?int $globTtl = 2, ?int $mapTtl = null, bool $recursive = true)
    {
        $this->namespace           = $namespace;
        $this->typeGenerator       = $typeGenerator;
        $this->container           = $container;
        $this->annotationReader    = $annotationReader;
        $this->namingStrategy      = $namingStrategy;
        $this->cache               = $cache;
        $cachePrefix = str_replace(['\\', '{', '}', '(', ')', '/', '@', ':'], '_', $namespace);
        $this->cacheContract       = new Psr16Adapter($this->cache, $cachePrefix, $this->globTtl ?? 0);
        $this->globTtl             = $globTtl;
        $this->mapTtl              = $mapTtl;
        $this->inputTypeGenerator  = $inputTypeGenerator;
        $this->inputTypeUtils      = $inputTypeUtils;
        $this->recursive           = $recursive;
        $this->recursiveTypeMapper = $recursiveTypeMapper;
        $this->mapClassToAnnotationsCache = new ClassBoundCacheContract(new ClassBoundMemoryAdapter(new ClassBoundCache(new FileBoundCache($this->cache, 'classToAnnotations_' . $cachePrefix))));
        $this->mapClassToExtendAnnotationsCache = new ClassBoundCacheContract(new ClassBoundMemoryAdapter(new ClassBoundCache(new FileBoundCache($this->cache, 'classToExtendAnnotations_' . $cachePrefix))));
    }

    /**
     * Returns an object mapping all types.
     */
    private function getMaps(): GlobTypeMapperCache
    {
        if ($this->globTypeMapperCache === null) {
            $this->globTypeMapperCache = $this->cacheContract->get('fullMapComputed', function () {
                return $this->buildMap();
            });
        }

        return $this->globTypeMapperCache;
    }

    private function getMapClassToExtendTypeArray(): GlobExtendTypeMapperCache
    {
        if ($this->globExtendTypeMapperCache === null) {
            $this->globExtendTypeMapperCache = $this->cacheContract->get('fullExtendMapComputed', function () {
                return $this->buildMapClassToExtendTypeArray();
            });
        }

        return $this->globExtendTypeMapperCache;
    }

    /**
     * Returns the array of globbed classes.
     * Only instantiable classes are returned.
     *
     * @return array<string,ReflectionClass> Key: fully qualified class name
     */
    private function getClassList(): array
    {
        if ($this->classes === null) {
            $this->classes = [];
            $explorer      = new GlobClassExplorer($this->namespace, $this->cache, $this->globTtl, ClassNameMapper::createFromComposerFile(null, null, true), $this->recursive);
            $classes       = $explorer->getClasses();
            foreach ($classes as $className) {
                if (! class_exists($className)) {
                    continue;
                }
                $refClass = new ReflectionClass($className);
                if (! $refClass->isInstantiable()) {
                    continue;
                }
                $this->classes[$className] = $refClass;
            }
        }

        return $this->classes;
    }

    private function buildMap(): GlobTypeMapperCache
    {
        $globTypeMapperCache = new GlobTypeMapperCache();

        /** @var ReflectionClass[] $classes */
        $classes = $this->getClassList();
        foreach ($classes as $className => $refClass) {
            $annotationsCache = $this->mapClassToAnnotationsCache->get($refClass, function () use ($refClass, $className) {
                $annotationsCache = new GlobAnnotationsCache();

                $containsAnnotations = false;

                $type = $this->annotationReader->getTypeAnnotation($refClass);
                if ($type !== null) {
                    $typeName = $this->namingStrategy->getOutputTypeName($className, $type);
                    $annotationsCache->setType($type->getClass(), $typeName);
                    $containsAnnotations = true;
                }

                $isAbstract = $refClass->isAbstract();

                foreach ($refClass->getMethods() as $method) {
                    if (! $method->isPublic() || ($isAbstract && ! $method->isStatic())) {
                        continue;
                    }
                    $factory = $this->annotationReader->getFactoryAnnotation($method);

                    if ($factory !== null) {
                        [$inputName, $className] = $this->inputTypeUtils->getInputTypeNameAndClassName($method);

                        $annotationsCache->registerFactory($method->getName(), $inputName, $className, $factory->isDefault(), $refClass->getName());
                        $containsAnnotations = true;
                    }

                    $decorator = $this->annotationReader->getDecorateAnnotation($method);

                    if ($decorator === null) {
                        continue;
                    }

                    $annotationsCache->registerDecorator($method->getName(), $decorator->getInputTypeName(), $refClass->getName());
                    $containsAnnotations = true;
                }

                if (! $containsAnnotations) {
                    return 'nothing';
                }

                return $annotationsCache;
            }, '', $this->mapTtl);

            if ($annotationsCache === 'nothing') {
                continue;
            }

            $globTypeMapperCache->registerAnnotations($refClass, $annotationsCache);
        }

        return $globTypeMapperCache;
    }

    private function buildMapClassToExtendTypeArray(): GlobExtendTypeMapperCache
    {
        $globExtendTypeMapperCache = new GlobExtendTypeMapperCache();

        /** @var ReflectionClass[] $classes */
        $classes = $this->getClassList();
        foreach ($classes as $className => $refClass) {
            $annotationsCache = $this->mapClassToExtendAnnotationsCache->get($refClass, function () use ($refClass) {
                $extendAnnotationsCache = new GlobExtendAnnotationsCache();

                $extendType = $this->annotationReader->getExtendTypeAnnotation($refClass);

                if ($extendType !== null) {
                    $targetType = $this->recursiveTypeMapper->mapClassToType($extendType->getClass(), null);
                    $typeName   = $targetType->name;

                    $extendAnnotationsCache->setExtendType($extendType->getClass(), $typeName);

                    return $extendAnnotationsCache;
                }

                return 'nothing';
            }, '', $this->mapTtl);

            if ($annotationsCache === 'nothing') {
                continue;
            }

            $globExtendTypeMapperCache->registerAnnotations($refClass, $annotationsCache);
        }

        return $globExtendTypeMapperCache;
    }

    /**
     * Returns true if this type mapper can map the $className FQCN to a GraphQL type.
     */
    public function canMapClassToType(string $className): bool
    {
        return $this->getMaps()->getTypeByObjectClass($className) !== null;
    }

    /**
     * Maps a PHP fully qualified class name to a GraphQL type.
     *
     * @param string          $className The exact class name to look for (this function does not look into parent classes).
     * @param OutputType|null $subType   An optional sub-type if the main class is an iterator that needs to be typed.
     *
     * @throws CannotMapTypeExceptionInterface
     */
    public function mapClassToType(string $className, ?OutputType $subType): MutableObjectType
    {
        $typeClassName = $this->getMaps()->getTypeByObjectClass($className);

        if ($typeClassName === null) {
            throw CannotMapTypeException::createForType($className);
        }

        return $this->typeGenerator->mapAnnotatedObject($typeClassName);
    }

    /**
     * Returns the list of classes that have matching input GraphQL types.
     *
     * @return string[]
     */
    public function getSupportedClasses(): array
    {
        return $this->getMaps()->getSupportedClasses();
    }

    /**
     * Returns true if this type mapper can map the $className FQCN to a GraphQL input type.
     */
    public function canMapClassToInputType(string $className): bool
    {
        return $this->getMaps()->getFactoryByObjectClass($className) !== null;
    }

    /**
     * Maps a PHP fully qualified class name to a GraphQL input type.
     *
     * @return ResolvableMutableInputInterface&InputObjectType
     *
     * @throws CannotMapTypeExceptionInterface
     */
    public function mapClassToInputType(string $className): ResolvableMutableInputInterface
    {
        $factory = $this->getMaps()->getFactoryByObjectClass($className);

        if ($factory === null) {
            throw CannotMapTypeException::createForInputType($className);
        }

        return $this->inputTypeGenerator->mapFactoryMethod($factory[0], $factory[1], $this->container);
    }

    /**
     * Returns a GraphQL type by name (can be either an input or output type)
     *
     * @param string $typeName The name of the GraphQL type
     *
     * @return Type&((ResolvableMutableInputInterface&InputObjectType)|MutableObjectType)
     *
     * @throws CannotMapTypeExceptionInterface
     * @throws ReflectionException
     */
    public function mapNameToType(string $typeName): Type
    {
        $typeClassName = $this->getMaps()->getTypeByGraphQLTypeName($typeName);

        if ($typeClassName !== null) {
            return $this->typeGenerator->mapAnnotatedObject($typeClassName);
        }

        $factory = $this->getMaps()->getFactoryByGraphQLInputTypeName($typeName);
        if ($factory !== null) {
            return $this->inputTypeGenerator->mapFactoryMethod($factory[0], $factory[1], $this->container);
        }

        throw CannotMapTypeException::createForName($typeName);
    }

    /**
     * Returns true if this type mapper can map the $typeName GraphQL name to a GraphQL type.
     *
     * @param string $typeName The name of the GraphQL type
     */
    public function canMapNameToType(string $typeName): bool
    {
        $typeClassName = $this->getMaps()->getTypeByGraphQLTypeName($typeName);

        if ($typeClassName !== null) {
            return true;
        }

        $factory = $this->getMaps()->getFactoryByGraphQLInputTypeName($typeName);

        return $factory !== null;
    }

    /**
     * Returns true if this type mapper can extend an existing type for the $className FQCN
     */
    public function canExtendTypeForClass(string $className, MutableObjectType $type): bool
    {
        return $this->getMapClassToExtendTypeArray()->getExtendTypesByObjectClass($className) !== null;
    }

    /**
     * Extends the existing GraphQL type that is mapped to $className.
     *
     * @throws CannotMapTypeExceptionInterface
     */
    public function extendTypeForClass(string $className, MutableObjectType $type): void
    {
        $extendTypeClassNames = $this->getMapClassToExtendTypeArray()->getExtendTypesByObjectClass($className);

        if ($extendTypeClassNames === null) {
            throw CannotMapTypeException::createForExtendType($className, $type);
        }

        foreach ($extendTypeClassNames as $extendedTypeClass) {
            $this->typeGenerator->extendAnnotatedObject($this->container->get($extendedTypeClass), $type);
        }
    }

    /**
     * Returns true if this type mapper can extend an existing type for the $typeName GraphQL type
     */
    public function canExtendTypeForName(string $typeName, MutableObjectType $type): bool
    {
        $typeClassNames = $this->getMapClassToExtendTypeArray()->getExtendTypesByGraphQLTypeName($typeName);

        return $typeClassNames !== null;
    }

    /**
     * Extends the existing GraphQL type that is mapped to the $typeName GraphQL type.
     *
     * @throws CannotMapTypeExceptionInterface
     */
    public function extendTypeForName(string $typeName, MutableObjectType $type): void
    {
        $extendTypeClassNames = $this->getMapClassToExtendTypeArray()->getExtendTypesByGraphQLTypeName($typeName);
        if ($extendTypeClassNames === null) {
            throw CannotMapTypeException::createForExtendName($typeName, $type);
        }

        foreach ($extendTypeClassNames as $extendedTypeClass) {
            $this->typeGenerator->extendAnnotatedObject($this->container->get($extendedTypeClass), $type);
        }
    }

    /**
     * Returns true if this type mapper can decorate an existing input type for the $typeName GraphQL input type
     */
    public function canDecorateInputTypeForName(string $typeName, ResolvableMutableInputInterface $type): bool
    {
        return ! empty($this->getMaps()->getDecorateByGraphQLInputTypeName($typeName));
    }

    /**
     * Decorates the existing GraphQL input type that is mapped to the $typeName GraphQL input type.
     *
     * @param ResolvableMutableInputInterface &InputObjectType $type
     *
     * @throws CannotMapTypeExceptionInterface
     */
    public function decorateInputTypeForName(string $typeName, ResolvableMutableInputInterface $type): void
    {
        $decorators = $this->getMaps()->getDecorateByGraphQLInputTypeName($typeName);

        if (empty($decorators)) {
            throw CannotMapTypeException::createForDecorateName($typeName, $type);
        }

        foreach ($decorators as $decorator) {
            $this->inputTypeGenerator->decorateInputType($decorator[0], $decorator[1], $type, $this->container);
        }
    }
}
