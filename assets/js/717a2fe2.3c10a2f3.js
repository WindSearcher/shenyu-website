"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46822],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),g=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=g(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=g(t),y=r,m=s["".concat(o,".").concat(y)]||s[y]||c[y]||i;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=y;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var g=2;g<i;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},98727:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=t(58168),r=(t(96540),t(15680));const i={title:"Tars Plugin",keywords:["tars-plugin"],description:"tars-plugin"},l=void 0,p={unversionedId:"plugin-center/proxy/tars-plugin",id:"version-2.4.3/plugin-center/proxy/tars-plugin",isDocsHomePage:!1,title:"Tars Plugin",description:"tars-plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/proxy/tars-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/tars-plugin",permalink:"/docs/2.4.3/plugin-center/proxy/tars-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/proxy/tars-plugin.md",version:"2.4.3",frontMatter:{title:"Tars Plugin",keywords:["tars-plugin"],description:"tars-plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Spring Cloud Plugin",permalink:"/docs/2.4.3/plugin-center/proxy/spring-cloud-plugin"},next:{title:"Websocket Plugin",permalink:"/docs/2.4.3/plugin-center/proxy/websocket-plugin"}},o=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]},{value:"Metadata",id:"metadata",children:[]}],g={toc:o},u="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The tars plugin is a plugin that converts the Http protocol into the tars protocol.")),(0,r.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../quick-start/quick-start-tars"},"Quick start with Tars")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Tars")," client access, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/tars-proxy"},"Tars Proxy")," ."))),(0,r.yg)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,r.yg)("p",null,"After the client accesses the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information. You can see it in PluginList -> rpc proxy -> tars. For details about the selector and rule configuration, see ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."),(0,r.yg)("h4",{id:"selector-handler"},"Selector Handler"),(0,r.yg)("img",{src:"/img/shenyu/plugin/tars/selector_en.png",width:"80%",height:"80%"}),(0,r.yg)("p",null,"Selector Handler, the ",(0,r.yg)("inlineCode",{parentName:"p"},"handle")," field is the tars service that is actually invoked after the gateway matches the traffic. You can configure multiple load balancing weights and specify the specific load balancing policy in the rules. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"Plugin Handle Management")," ."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"config details\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"host"),"\uff1agenerally, enter ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"ip:port"),"\uff1aenter the ip:port of your real service .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"protocol"),"\uff1aindicates the Http protocol. Generally, the value is ",(0,r.yg)("inlineCode",{parentName:"p"},"http://")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"https://"),". If the value is not specified, the default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"http://")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"startupTime"),"\uff1a start up time.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"weight"),"\uff1a load balancing weight.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"warmupTime"),"\uff1awarm up time.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"status"),"\uff1aopen or close."))))),(0,r.yg)("h4",{id:"rule-handle"},"Rule Handle"),(0,r.yg)("img",{src:"/img/shenyu/plugin/tars/rule_en.png",width:"80%",height:"80%"}),(0,r.yg)("p",null,"Rule Handle, the ",(0,r.yg)("inlineCode",{parentName:"p"},"handle")," field indicates the processing rule adopted by the gateway after the final matching of traffic. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"Plugin Handle Management")," ."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"config details:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"loadStrategy"),": if the ",(0,r.yg)("inlineCode",{parentName:"li"},"Http")," client is a cluster, Apache ShenYu gateway uses the load balancing policy when calling, currently supporting ",(0,r.yg)("inlineCode",{parentName:"li"},"roundRobin"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"random"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"hash"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"retryCount"),": the number of retries to invoke the client."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"timeout"),": time out to invoke the client.")))),(0,r.yg)("h2",{id:"metadata"},"Metadata"),(0,r.yg)("p",null,"Each ",(0,r.yg)("inlineCode",{parentName:"p"},"tars")," interface method, will correspond to a metadata, when the ",(0,r.yg)("inlineCode",{parentName:"p"},"tars")," application client access to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,r.yg)("img",{src:"/img/shenyu/plugin/tars/metadata_en.png",width:"80%",height:"80%"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Path: http request path.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RpcExpand: describes each interface in a ",(0,r.yg)("inlineCode",{parentName:"p"},"tars")," service. For example, here are the two interfaces for the ",(0,r.yg)("inlineCode",{parentName:"p"},"tars")," service:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "methodInfo": [\n    {\n      "methodName": "helloInt",\n      "params": [\n        {\n          "left": "int",\n          "right": "no"\n        },\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ],\n      "returnType": "int"\n    },\n    {\n      "methodName": "hello",\n      "params": [\n        {\n          "left": "int",\n          "right": "no"\n        },\n        {\n          "left": "java.lang.String",\n          "right": "name"\n        }\n      ],\n      "returnType": "java.lang.String"\n    }\n  ]\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Interface: The ",(0,r.yg)("inlineCode",{parentName:"p"},"serviceName")," specified in the ",(0,r.yg)("inlineCode",{parentName:"p"},"@ShenyuTarsService")," annotation.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,r.yg)("inlineCode",{parentName:"p"},"tars"),"."))))}s.isMDXComponent=!0}}]);