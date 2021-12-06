"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9780],{58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),a=n(67294),s=n(72389),o=n(79443);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(83039),u=n(86010),p="tabItem_vU9c";function c(e){var t,n,r,s=e.lazy,o=e.block,c=e.defaultValue,h=e.values,d=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),k=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,a.useState)(y),P=w[0],N=w[1],x=[],$=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var U=k[d];null!=U&&U!==P&&b.some((function(e){return e.value===U}))&&N(U)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==P&&($(t),N(r),null!=d&&T(d,r))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},m)},b.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":P===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:C,onClick:C},null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function h(e){var t=(0,s.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},42938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=n(55064),l=n(58215),i=["components"],u={id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},p=void 0,c={unversionedId:"prefetch-method",id:"version-5.0/prefetch-method",isDocsHomePage:!1,title:"Prefetching records",description:"The problem",source:"@site/versioned_docs/version-5.0/prefetch-method.mdx",sourceDirName:".",slug:"/prefetch-method",permalink:"/docs/prefetch-method",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/prefetch-method.mdx",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1638758894,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},sidebar:"version-5.0/docs",previous:{title:"Query plan",permalink:"/docs/query-plan"},next:{title:"File uploads",permalink:"/docs/file-uploads"}},h=[{value:"The problem",id:"the-problem",children:[],level:2},{value:"The &quot;prefetch&quot; method",id:"the-prefetch-method",children:[],level:2},{value:"Input arguments",id:"input-arguments",children:[],level:2}],d={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"the-problem"},"The problem"),(0,s.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,s.kt)("p",null,"Consider a request where a user attached to a post must be returned:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    posts {\n        id\n        user {\n            id\n        }\n    }\n}\n")),(0,s.kt)("p",null,"A naive implementation will do this:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"1 query to fetch the list of posts"),(0,s.kt)("li",{parentName:"ul"},"1 query per post to fetch the user")),(0,s.kt)("p",null,'Assuming we have "N" posts, we will make "N+1" queries.'),(0,s.kt)("p",null,'There are several ways to fix this problem.\nAssuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "posts" and "users".\nThis method is described in the ',(0,s.kt)("a",{parentName:"p",href:"/docs/query-plan"},'"analyzing the query plan" documentation'),"."),(0,s.kt)("p",null,"But this can be difficult to implement. This is also only useful for relational databases. If your data comes from a\nNoSQL database or from the cache, this will not help."),(0,s.kt)("p",null,"Instead, GraphQLite offers an easier to implement solution: the ability to fetch all fields from a given type at once."),(0,s.kt)("h2",{id:"the-prefetch-method"},'The "prefetch" method'),(0,s.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param Post $post\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    #[Field(prefetchMethod: "prefetchUsers")]\n    public function getUser(Post $post, $prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as second argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n'))),(0,s.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type\n */\nclass PostType {\n    /**\n     * @Field(prefetchMethod="prefetchUsers")\n     * @param Post $post\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    public function getUser(Post $post, $prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as second argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n')))),(0,s.kt)("p",null,'When the "prefetchMethod" attribute is detected in the "@Field" annotation, the method is called automatically.\nThe first argument of the method is an array of instances of the main type.\nThe "prefetchMethod" can return absolutely anything (mixed). The return value will be passed as the second parameter of the "@Field" annotated method.'),(0,s.kt)("h2",{id:"input-arguments"},"Input arguments"),(0,s.kt)("p",null,"Field arguments can be set either on the @Field annotated method OR/AND on the prefetchMethod."),(0,s.kt)("p",null,"For instance:"),(0,s.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param Post $post\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    #[Field(prefetchMethod: "prefetchComments")]\n    public function getComments(Post $post, $prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n'))),(0,s.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type\n */\nclass PostType {\n    /**\n     * @Field(prefetchMethod="prefetchComments")\n     * @param Post $post\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    public function getComments(Post $post, $prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n')))),(0,s.kt)("p",null,"The prefetch method MUST be in the same class as the @Field-annotated method and MUST be public."))}m.isMDXComponent=!0}}]);