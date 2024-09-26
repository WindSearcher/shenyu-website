"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32689],{15680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>y});var a=i(96540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function p(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function t(e,n){if(null==e)return{};var i,a,r=function(e,n){if(null==e)return{};var i,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):p(p({},n),e)),i},g=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var i=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,g=t(e,["components","mdxType","originalType","parentName"]),d=o(i),c=r,y=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return i?a.createElement(y,p(p({ref:n},g),{},{components:i})):a.createElement(y,p({ref:n},g))}));function y(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=i.length,p=new Array(l);p[0]=c;var t={};for(var u in n)hasOwnProperty.call(n,u)&&(t[u]=n[u]);t.originalType=e,t[d]="string"==typeof e?e:r,p[1]=t;for(var o=2;o<l;o++)p[o]=i[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},70302:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>u});var a=i(58168),r=(i(96540),i(15680));const l={title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},p="1. Overview",t={unversionedId:"plugin-center/http-process/parammapping-plugin",id:"version-2.6.1/plugin-center/http-process/parammapping-plugin",isDocsHomePage:!1,title:"ParamMapping Plugin",description:"paramMapping-plugin",source:"@site/versioned_docs/version-2.6.1/plugin-center/http-process/parammapping-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/parammapping-plugin",permalink:"/docs/plugin-center/http-process/parammapping-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/plugin-center/http-process/parammapping-plugin.md",version:"2.6.1",frontMatter:{title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"ModifyResponse Plugin",permalink:"/docs/plugin-center/http-process/modifyresponse-plugin"},next:{title:"Redirect Plugin",permalink:"/docs/plugin-center/http-process/redirect-plugin"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Add parameters in request",id:"251-add-parameters-in-request",children:[]}]}],o={toc:u},g="wrapper";function d(e){let{components:n,...l}=e;return(0,r.yg)(g,(0,a.A)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"1-overview"},"1. Overview"),(0,r.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"ParamMapping Plugin")),(0,r.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add/remove/replace certain fixed parameters to the request")),(0,r.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"paramMapping")," is used to edit your request parameters.")),(0,r.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Module ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-param-mapping"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Core Class ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.param.mapping.ParamMappingPlugin")))),(0,r.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,r.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(86400).A})),(0,r.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Introduce ",(0,r.yg)("inlineCode",{parentName:"li"},"paramMapping")," dependency in the pom.xml file of the gateway.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu param_mapping plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-param-mapping</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu param_mapping plugin end--\x3e\n")),(0,r.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"paramMapping")," set Status enabled.")),(0,r.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.yg)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"you should open this plugin when using.")),(0,r.yg)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Selectors and rules, please refer to:",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Only those matched requests can be modified your request body."))),(0,r.yg)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(70172).A})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"param details:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"addParameterKeys"),": add a new ",(0,r.yg)("inlineCode",{parentName:"li"},"key-value")," on body"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"replaceParameterKeys"),": replace request body's ",(0,r.yg)("inlineCode",{parentName:"li"},"key")," \uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"removeParameterKeys"),": remove a body ",(0,r.yg)("inlineCode",{parentName:"li"},"key")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"param_mapping modify the request body is achieved through ",(0,r.yg)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"$.")," represents the root directory."))),(0,r.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,r.yg)("h3",{id:"251-add-parameters-in-request"},"2.5.1 Add parameters in request"),(0,r.yg)("h4",{id:"2511-config-plugin"},"2.5.1.1 Config Plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"you should open the plugin when using.")),(0,r.yg)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,r.yg)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,r.yg)("p",null,(0,r.yg)("img",{src:i(70172).A})),(0,r.yg)("p",null,"use the configuration\uff0cunopened the plugin\uff0crequest body is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"id":3,"data":{"value":"18","age":"36"}}\n')),(0,r.yg)("h4",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,r.yg)("p",null,"open the plugin\uff0cthe final request body is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"name":"shenyu","userId":3,"data":{"age":"36"}}\n')),(0,r.yg)("p",null,"add a new key-value ",(0,r.yg)("inlineCode",{parentName:"p"},"name:shenyu"),",replace the key ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"userId"),", remove the key ",(0,r.yg)("inlineCode",{parentName:"p"},"data.value")," ."),(0,r.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.yg)("inlineCode",{parentName:"li"},"paramMapping")," set Status disable.")))}d.isMDXComponent=!0},70172:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/param-mapping-48f0bc50c54e2044a1904fe4870ba9b5.png"},86400:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);