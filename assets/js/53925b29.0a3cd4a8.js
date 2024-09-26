"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[67776],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>y});var a=i(96540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var c=a.createContext({}),p=function(e){var n=a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(i),d=t,y=g["".concat(c,".").concat(d)]||g[d]||s[d]||l;return i?a.createElement(y,r(r({ref:n},u),{},{components:i})):a.createElement(y,r({ref:n},u))}));function y(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,r=new Array(l);r[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[g]="string"==typeof e?e:t,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},63244:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=i(58168),t=(i(96540),i(15680));const l={title:"Cache Plugin",keywords:["Cache"],description:"Cache Plugin"},r="1. Overview",o={unversionedId:"plugin-center/cache/cache-plugin",id:"version-2.5.1/plugin-center/cache/cache-plugin",isDocsHomePage:!1,title:"Cache Plugin",description:"Cache Plugin",source:"@site/versioned_docs/version-2.5.1/plugin-center/cache/cache-plugin.md",sourceDirName:"plugin-center/cache",slug:"/plugin-center/cache/cache-plugin",permalink:"/docs/2.5.1/plugin-center/cache/cache-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.1/plugin-center/cache/cache-plugin.md",version:"2.5.1",frontMatter:{title:"Cache Plugin",keywords:["Cache"],description:"Cache Plugin"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"GeneralContext Plugin",permalink:"/docs/2.5.1/plugin-center/common/general-context-plugin"},next:{title:"Mock Plugin",permalink:"/docs/2.5.1/plugin-center/mock/mock-plugin"}},c=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Use redis cache request result",id:"251-use-redis-cache-request-result",children:[]}]}],p={toc:c},u="wrapper";function g(e){let{components:n,...l}=e;return(0,t.yg)(u,(0,a.A)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"1-overview"},"1. Overview"),(0,t.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Cache Plugin")),(0,t.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Situation where data is not updated frequently and a large number of calls are required.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For Situation where data consistency is not required."))),(0,t.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"Cache")," plugin is able to cache the results of the target service, allowing the user to configure the expiration\ntime of the cached results.")),(0,t.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Module ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-cache-handler"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Module ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-cache-redis"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Module ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-cache-memory"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Class ",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cache.CachePlugin"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Class ",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cache.redis.RedisCache"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Core Class ",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cache.memory.MemoryCache")))),(0,t.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Since 2.4.3")),(0,t.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,t.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(86400).A})),(0,t.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Import cache plugin dependency in ",(0,t.yg)("inlineCode",{parentName:"li"},"ShenYu Bootstrap"),".")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu cache plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-cache</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu cache plugin end--\x3e\n")),(0,t.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"cache")," set Status enabled.")),(0,t.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,t.yg)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(44267).A})),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"cacheType"),": Cache currently supports two modes of caching data.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"memory\uff1alocal memory mode")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"redis\uff1aredis mode"))),(0,t.yg)("p",null,"The current default is ",(0,t.yg)("inlineCode",{parentName:"p"},"local memory mode"),", the results of the target service are stored in the local memory, if the\ngateway is deployed by way of cluster, it is not recommended to use ",(0,t.yg)("inlineCode",{parentName:"p"},"local memory mode"),", it is recommended to\nuse ",(0,t.yg)("inlineCode",{parentName:"p"},"redis mode"),", the data of the target service are cached in redis."),(0,t.yg)("p",null,"If you are using ",(0,t.yg)("inlineCode",{parentName:"p"},"local memory mode"),", you only need to select memory in cacheType, no other configuration is needed."),(0,t.yg)("p",null,"If you are using ",(0,t.yg)("inlineCode",{parentName:"p"},"redis mode"),", select redis in cacheType, and the parameters are as follows"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"database"),": which database the cache results are stored in, the default is index database 0.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"master"),": default is master.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"mode"),": the working mode of redis, the default is single-point mode: ",(0,t.yg)("inlineCode",{parentName:"p"},"standalone"),", in addition to cluster\nmode: ",(0,t.yg)("inlineCode",{parentName:"p"},"cluster"),", sentinel mode: ",(0,t.yg)("inlineCode",{parentName:"p"},"sentinel"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"url"),": configure the IP and port of the redis database, configured by colon connection, example: ",(0,t.yg)("inlineCode",{parentName:"p"},"192.168.1.1:6379"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"password"),": the password of the redis database, if not, you can not configure.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"maxldle"),": the maximum free connections in the connection pool")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"minldle"),": minimum idle connections in the connection pool")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"maxActive"),": the maximum number of connections in the connection pool")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"maxWait"),": the maximum blocking wait time for the connection pool (use negative values to indicate no limit) default -1"))),(0,t.yg)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,t.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," .")),(0,t.yg)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(94819).A})),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Only matching requests will be cached by the Cache plugin for the results of the target service.")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"timeoutSecods"),": the value is the target service result data cache time, the default is 60, in ",(0,t.yg)("inlineCode",{parentName:"p"},"seconds"),"."),(0,t.yg)("p",null,"Notice: The current version of the Cache plugin uses the url as a unique key to identify the same request."),(0,t.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,t.yg)("h3",{id:"251-use-redis-cache-request-result"},"2.5.1 Use redis cache request result"),(0,t.yg)("h4",{id:"2511-plugin-config"},"2.5.1.1 Plugin Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(67020).A})),(0,t.yg)("p",null,"select redis cache type, config redis database, url, mode, password"),(0,t.yg)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(73856).A})),(0,t.yg)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(94819).A})),(0,t.yg)("h4",{id:"2514-send-request"},"2.5.1.4 Send Request"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"send http request to cache result.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-http",metastring:'title="request"',title:'"request"'},"### shengyu getway proxy orderSave\nGET http://localhost:9195/http/order/findById?id=123\nAccept: application/json\nContent-Type: application/json\n")),(0,t.yg)("h4",{id:"2515-check-result"},"2.5.1.5 Check Result"),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(24544).A})),(0,t.yg)("p",null,(0,t.yg)("img",{src:i(54419).A})),(0,t.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In ",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,t.yg)("inlineCode",{parentName:"li"},"cache")," set Status disable.")))}g.isMDXComponent=!0},44267:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/cache-plugin-config-en-a94429e8eb8d41ab800b4cf63f83ebd6.png"},67020:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/cache-plugin-config-example-en-51e820d0cd6ca19fb8ebea5ee045352d.png"},94819:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/cache-plugin-rule-en-f87256d214b81b378f155e1cf02b6fdf.png"},73856:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/cache-plugin-selector-en-a4d58981c816f3776646f74865ae102c.png"},54419:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/cache-result-check-0070758c84d5ab1ba0d88d4bab73fe92.png"},24544:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/cache-result-6cf64e74954ad4fb3bbd1f0bae2cfc9b.jpg"},86400:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);