"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2521],{41454:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],u={id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},r=void 0,s={unversionedId:"symfony-bundle-advanced",id:"version-4.0/symfony-bundle-advanced",isDocsHomePage:!1,title:"Symfony bundle: advanced usage",description:"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony.",source:"@site/versioned_docs/version-4.0/symfony-bundle-advanced.mdx",sourceDirName:".",slug:"/symfony-bundle-advanced",permalink:"/docs/4.0/symfony-bundle-advanced",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/symfony-bundle-advanced.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1638758894,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},sidebar:"version-4.0/docs",previous:{title:"Class with multiple output types",permalink:"/docs/4.0/multiple_output_types"},next:{title:"Laravel specific features",permalink:"/docs/4.0/laravel-package-advanced"}},d=[{value:"Login and logout",id:"login-and-logout",children:[{value:"Login using the &quot;login&quot; mutation",id:"login-using-the-login-mutation",children:[],level:3},{value:"Get the current user with the &quot;me&quot; query",id:"get-the-current-user-with-the-me-query",children:[],level:3},{value:"Logout using the &quot;logout&quot; mutation",id:"logout-using-the-logout-mutation",children:[],level:3}],level:2},{value:"Injecting the Request",id:"injecting-the-request",children:[],level:2}],m={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony."),(0,l.kt)("h2",{id:"login-and-logout"},"Login and logout"),(0,l.kt)("p",null,'Out of the box, the GraphQLite bundle will expose a "login" and a "logout" mutation as well\nas a "me" query (that returns the current user).'),(0,l.kt)("p",null,'If you need to customize this behaviour, you can edit the "graphqlite.security" configuration key.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: auto # Default setting\n    enable_me: auto # Default setting\n")),(0,l.kt)("p",null,'By default, GraphQLite will enable "login" and "logout" mutations and the "me" query if the following conditions are met:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'the "security" bundle is installed and configured (with a security provider and encoder)'),(0,l.kt)("li",{parentName:"ul"},'the "session" support is enabled (via the "framework.session.enabled" key).')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: on\n")),(0,l.kt)("p",null,"By settings ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_login=on"),", you are stating that you explicitly want the login/logout mutations.\nIf one of the dependencies is missing, an exception is thrown (unlike in default mode where the mutations\nare silently discarded)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: off\n")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_login=off")," to disable the mutations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    firewall_name: main # default value\n")),(0,l.kt)("p",null,'By default, GraphQLite assumes that your firewall name is "main". This is the default value used in the\nSymfony security bundle so it is likely the value you are using. If for some reason you want to use\nanother firewall, configure the name with ',(0,l.kt)("inlineCode",{parentName:"p"},"graphqlite.security.firewall_name"),"."),(0,l.kt)("h3",{id:"login-using-the-login-mutation"},'Login using the "login" mutation'),(0,l.kt)("p",null,"The mutation below will log-in a user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation login {\n  login(userName:"foo", password:"bar") {\n    userName\n    roles\n  }\n}\n')),(0,l.kt)("h3",{id:"get-the-current-user-with-the-me-query"},'Get the current user with the "me" query'),(0,l.kt)("p",null,'Retrieving the current user is easy with the "me" query:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n  }\n}\n")),(0,l.kt)("p",null,"In Symfony, user objects implement ",(0,l.kt)("inlineCode",{parentName:"p"},"Symfony\\Component\\Security\\Core\\User\\UserInterface"),".\nThis interface is automatically mapped to a type with 2 fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userName: String!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roles: [String!]!"))),(0,l.kt)("p",null,"If you want to get more fields, just add the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation to your user class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n")),(0,l.kt)("p",null,"You can now query this field using an ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragment"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n    ... on User {\n      email\n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"logout-using-the-logout-mutation"},'Logout using the "logout" mutation'),(0,l.kt)("p",null,'Use the "logout" mutation to log a user out'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation logout {\n  logout\n}\n")),(0,l.kt)("h2",{id:"injecting-the-request"},"Injecting the Request"),(0,l.kt)("p",null,"You can inject the Symfony Request object in any query/mutation/field."),(0,l.kt)("p",null,"Most of the time, getting the request object is irrelevant. Indeed, it is GraphQLite's job to parse this request and\nmanage it for you. Sometimes yet, fetching the request can be needed. In those cases, simply type-hint on the request\nin any parameter of your query/mutation/field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n/**\n * @Query\n */\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n")))}p.isMDXComponent=!0}}]);