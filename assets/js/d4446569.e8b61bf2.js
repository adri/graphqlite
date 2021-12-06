"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8835],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,p=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:p},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(87462),p=a(67294),r=a(72389),o=a(79443);var l=function(){var e=(0,p.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(83039),u=a(86010),s="tabItem_vU9c";function c(e){var t,a,n,r=e.lazy,o=e.block,c=e.defaultValue,y=e.values,d=e.groupId,m=e.className,h=p.Children.map(e.children,(function(e){if((0,p.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=y?y:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=l(),b=T.tabGroupChoices,v=T.setTabGroupChoices,N=(0,p.useState)(g),w=N[0],$=N[1],I=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var M=b[d];null!=M&&M!==w&&f.some((function(e){return e.value===M}))&&$(M)}var x=function(e){var t=e.currentTarget,a=I.indexOf(t),n=f[a].value;n!==w&&(C(t),$(n),null!=d&&v(d,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var p=I.indexOf(e.currentTarget)-1;a=I[p]||I[I.length-1]}null==(t=a)||t.focus()};return p.createElement("div",{className:"tabs-container"},p.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},m)},f.map((function(e){var t=e.value,a=e.label;return p.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:x,onClick:x},null!=a?a:t)}))),r?(0,p.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):p.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,p.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function y(e){var t=(0,r.Z)();return p.createElement(c,(0,n.Z)({key:String(t)},e))}},98366:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return y},default:function(){return m}});var n=a(87462),p=a(63366),r=(a(67294),a(3905)),o=a(55064),l=a(58215),i=["components"],u={id:"custom-types",title:"Custom types",sidebar_label:"Custom types"},s=void 0,c={unversionedId:"custom-types",id:"version-4.2/custom-types",isDocsHomePage:!1,title:"Custom types",description:"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.",source:"@site/versioned_docs/version-4.2/custom-types.mdx",sourceDirName:".",slug:"/custom-types",permalink:"/docs/4.2/custom-types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/custom-types.mdx",tags:[],version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1638758894,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"custom-types",title:"Custom types",sidebar_label:"Custom types"},sidebar:"version-4.2/docs",previous:{title:"Pagination",permalink:"/docs/4.2/pagination"},next:{title:"Custom annotations",permalink:"/docs/4.2/field-middlewares"}},y=[{value:"Usage",id:"usage",children:[],level:2},{value:"Registering a custom output type (advanced)",id:"registering-a-custom-output-type-advanced",children:[{value:"Symfony users",id:"symfony-users",children:[],level:3},{value:"Other frameworks",id:"other-frameworks",children:[],level:3}],level:2},{value:"Registering a custom scalar type (advanced)",id:"registering-a-custom-scalar-type-advanced",children:[],level:2}],d={toc:y};function m(e){var t=e.components,a=(0,p.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Type(class: Product::class)]\nclass ProductType\n{\n    #[Field]\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field\n     */\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n")))),(0,r.kt)("p",null,"In the example above, GraphQLite will generate a GraphQL schema with a field ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n    id: String!\n}\n")),(0,r.kt)("p",null,"GraphQL comes with an ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," scalar type. But PHP has no such type. So GraphQLite does not know when a variable\nis an ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," or not."),(0,r.kt)("p",null,"You can help GraphQLite by manually specifying the output type to use:"),(0,r.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    #[Field(outputType: "ID")]\n'))),(0,r.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    /**\n     * @Field(name="id", outputType="ID")\n     */\n')))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute will map the return value of the method to the output type passed in parameter."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute in the following annotations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@MagicField"))),(0,r.kt)("h2",{id:"registering-a-custom-output-type-advanced"},"Registering a custom output type (advanced)"),(0,r.kt)("p",null,"In order to create a custom output type, you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Design a class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ObjectType"),"."),(0,r.kt)("li",{parentName:"ol"},"Register this class in the GraphQL schema.")),(0,r.kt)("p",null,"You'll find more details on the ",(0,r.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/object-types/"},"Webonyx documentation"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In order to find existing types, the schema is using ",(0,r.kt)("em",{parentName:"p"},"type mappers")," (classes implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeMapperInterface")," interface)."),(0,r.kt)("p",null,"You need to make sure that one of these type mappers can return an instance of your type. The way you do this will depend on the framework\nyou use."),(0,r.kt)("h3",{id:"symfony-users"},"Symfony users"),(0,r.kt)("p",null,"Any class extending ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\ObjectType")," (and available in the container) will be automatically detected\nby Symfony and added to the schema."),(0,r.kt)("p",null,"If you want to automatically map the output type to a given PHP class, you will have to explicitly declare the output type\nas a service and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.output_type")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# config/services.yaml\nservices:\n    App\\MyOutputType:\n        tags:\n            - { name: 'graphql.output_type', class: 'App\\MyPhpClass' }\n")),(0,r.kt)("h3",{id:"other-frameworks"},"Other frameworks"),(0,r.kt)("p",null,"The easiest way is to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTypeMapper"),". Use this class to register custom output types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Sample code:\n$staticTypeMapper = new StaticTypeMapper();\n\n// Let's register a type that maps by default to the \"MyClass\" PHP class\n$staticTypeMapper->setTypes([\n    MyClass::class => new MyCustomOutputType()\n]);\n\n// If you don't want your output type to map to any PHP class by default, use:\n$staticTypeMapper->setNotMappedTypes([\n    new MyCustomOutputType()\n]);\n\n// Register the static type mapper in your application using the SchemaFactory instance\n$schemaFactory->addTypeMapper($staticTypeMapper);\n")),(0,r.kt)("h2",{id:"registering-a-custom-scalar-type-advanced"},"Registering a custom scalar type (advanced)"),(0,r.kt)("p",null,"If you need to add custom scalar types, first, check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),'.\nIt contains a number of "out-of-the-box" scalar types ready to use and you might find what you need there.'),(0,r.kt)("p",null,"You still need to develop your custom scalar type? Ok, let's get started."),(0,r.kt)("p",null,"In order to add a scalar type in GraphQLite, you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a ",(0,r.kt)("a",{parentName:"li",href:"https://webonyx.github.io/graphql-php/type-system/scalar-types/#writing-custom-scalar-types"},"Webonyx custom scalar type"),".\nYou do this by creating a class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ScalarType"),"."),(0,r.kt)("li",{parentName:"ul"},'create a "type mapper" that will map PHP types to the GraphQL scalar type. You do this by writing a class implementing the ',(0,r.kt)("inlineCode",{parentName:"li"},"RootTypeMapperInterface"),"."),(0,r.kt)("li",{parentName:"ul"},'create a "type mapper factory" that will be in charge of creating your "type mapper".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"interface RootTypeMapperInterface\n{\n    /**\n     * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n     */\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n    /**\n     * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n     */\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n\n    public function mapNameToType(string $typeName): NamedType;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"toGraphQLInputType")," are meant to map a return type (for output types) or a parameter type (for input types)\nto your GraphQL scalar type. Return your scalar type if there is a match or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if there no match."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mapNameToType")," should return your GraphQL scalar type if ",(0,r.kt)("inlineCode",{parentName:"p"},"$typeName")," is the name of your scalar type."),(0,r.kt)("p",null,"RootTypeMapper are organized ",(0,r.kt)("strong",{parentName:"p"},"in a chain")," (they are actually middlewares).\nEach instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTypeMapper")," holds a reference on the next root type mapper to be called in the chain."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class AnyScalarTypeMapper implements RootTypeMapperInterface\n{\n    /** @var RootTypeMapperInterface */\n    private $next;\n\n    public function __construct(RootTypeMapperInterface $next)\n    {\n        $this->next = $next;\n    }\n\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?OutputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLOutputType($type, $subType, $refMethod, $docBlockObj);\n    }\n\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?InputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLInputType($type, $subType, $argumentName, $refMethod, $docBlockObj);\n    }\n\n    /**\n     * Returns a GraphQL type by name.\n     * If this root type mapper can return this type in "toGraphQLOutputType" or "toGraphQLInputType", it should\n     * also map these types by name in the "mapNameToType" method.\n     *\n     * @param string $typeName The name of the GraphQL type\n     * @return NamedType|null\n     */\n    public function mapNameToType(string $typeName): ?NamedType\n    {\n        if ($typeName === AnyScalarType::NAME) {\n            return AnyScalarType::getInstance();\n        }\n        return null;\n    }\n}\n')),(0,r.kt)("p",null,"Now, in order to create an instance of your ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyScalarTypeMapper")," class, you need an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"$next")," type mapper in the chain.\nHow do you get the ",(0,r.kt)("inlineCode",{parentName:"p"},"$next")," type mapper? Through a factory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class AnyScalarTypeMapperFactory implements RootTypeMapperFactoryInterface\n{\n    public function create(RootTypeMapperInterface $next, RootTypeMapperFactoryContext $context): RootTypeMapperInterface\n    {\n        return new AnyScalarTypeMapper($next);\n    }\n}\n")),(0,r.kt)("p",null,"Now, you need to register this factory in your application, and we are done."),(0,r.kt)("p",null,"You can register your own root mapper factories using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addRootTypeMapperFactory()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addRootTypeMapperFactory(new AnyScalarTypeMapperFactory());\n")),(0,r.kt)("p",null,'If you are using the Symfony bundle, the factory will be automatically registered, you have nothing to do (the service\nis automatically tagged with the "graphql.root_type_mapper_factory" tag).'))}m.isMDXComponent=!0}}]);