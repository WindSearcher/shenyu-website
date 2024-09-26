"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[60211],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||g[d]||r;return n?i.createElement(y,o(o({ref:t},s),{},{components:n})):i.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55427:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(58168),a=(n(96540),n(15680));const r={title:"ContextPath Plugin",keywords:["contextPath"],description:"contextPath plugin"},o="1. Overview",l={unversionedId:"plugin-center/http-process/contextpath-plugin",id:"version-2.5.0/plugin-center/http-process/contextpath-plugin",isDocsHomePage:!1,title:"ContextPath Plugin",description:"contextPath plugin",source:"@site/versioned_docs/version-2.5.0/plugin-center/http-process/contextpath-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/contextpath-plugin",permalink:"/docs/2.5.0/plugin-center/http-process/contextpath-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/plugin-center/http-process/contextpath-plugin.md",version:"2.5.0",frontMatter:{title:"ContextPath Plugin",keywords:["contextPath"],description:"contextPath plugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Websocket Proxy",permalink:"/docs/2.5.0/user-guide/proxy/websocket-proxy"},next:{title:"ModifyResponse Plugin",permalink:"/docs/2.5.0/plugin-center/http-process/modifyresponse-plugin"}},p=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin Code",id:"14-plugin-code",children:[]},{value:"1.5 Added since which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Example set service context path",id:"251-example-set-service-context-path",children:[]},{value:"2.5.2 Example add prefix",id:"252-example-add-prefix",children:[]}]}],c={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"1-overview"},"1. Overview"),(0,a.yg)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ContextPath Plugin")),(0,a.yg)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Different services can do traffic governance of services by setting different context paths.")),(0,a.yg)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set the context path for service."),(0,a.yg)("li",{parentName:"ul"},"When the interface is called, the plug-in uniformly prefixes the interface address of the service.")),(0,a.yg)("h2",{id:"14-plugin-code"},"1.4 Plugin Code"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core module ",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu-plugin-context-path")),(0,a.yg)("li",{parentName:"ul"},"Core class ",(0,a.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.context.path.ContextPathPlugin"))),(0,a.yg)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added since which shenyu version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"2.3.0")),(0,a.yg)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,a.yg)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(29158).A})),(0,a.yg)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"import maven config in shenyu-bootstrap project's ",(0,a.yg)("inlineCode",{parentName:"li"},"pom.xml")," file.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n")),(0,a.yg)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In ",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.yg)("inlineCode",{parentName:"li"},"contextPath")," set Status enable.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(43304).A})),(0,a.yg)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set client project's contextPath.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(57167).A})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Selector and rule config, please refer: ",(0,a.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),"."),(0,a.yg)("li",{parentName:"ul"},"shenyu-admin contextPath plugin config, config contextPath and addPrefix, contextPath defines the value of contextPath, "),(0,a.yg)("li",{parentName:"ul"},"and addPrefix defines the prefix that needs to be automatically added when the interface is called.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(62259).A})),(0,a.yg)("h2",{id:"25-examples"},"2.5 Examples"),(0,a.yg)("h3",{id:"251-example-set-service-context-path"},"2.5.1 Example set service context path"),(0,a.yg)("h4",{id:"2511-refer-local-deployment-to-start-admin-and-bootstrap"},"2.5.1.1 Refer ",(0,a.yg)("a",{parentName:"h4",href:"https://shenyu.apache.org/docs/deployment/deployment-local/"},"Local Deployment")," to start admin and bootstrap."),(0,a.yg)("h4",{id:"2512-refer-22-to-import-pom-and-restart-bootstrap"},"2.5.1.2 Refer 2.2 to import pom and restart bootstrap."),(0,a.yg)("h4",{id:"2513-refer-23-to-enable-plugin"},"2.5.1.3 Refer 2.3 to enable plugin."),(0,a.yg)("h4",{id:"2514-client-project-config-contextpath"},"2.5.1.4 Client project config contextPath."),(0,a.yg)("p",null,"Client project can directly use ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),", and config contextPath in application.yml."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(57167).A})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After the configuration is completed, and start client project, you can see that there is an additional context selector and rule configuration in shenyu-admin.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(509).A})),(0,a.yg)("h4",{id:"2515-call-interface"},"2.5.1.5 Call Interface"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(21845).A})),(0,a.yg)("h3",{id:"252-example-add-prefix"},"2.5.2 Example add prefix"),(0,a.yg)("h4",{id:"2521-refer-local-deployment-to-start-admin-and-bootstrap"},"2.5.2.1 Refer ",(0,a.yg)("a",{parentName:"h4",href:"https://shenyu.apache.org/docs/deployment/deployment-local/"},"Local Deployment")," to start admin and bootstrap."),(0,a.yg)("h4",{id:"2522-refer-22-to-import-pom-and-restart-bootstrap"},"2.5.2.2 Refer 2.2 to import pom and restart bootstrap."),(0,a.yg)("h4",{id:"2523-refer-23-to-enable-plugin"},"2.5.2.3 Refer 2.3 to enable plugin."),(0,a.yg)("h4",{id:"2524-client-project-config-contextpath"},"2.5.2.4 Client project config contextPath."),(0,a.yg)("p",null,"For client project we can directly use ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),", and config contextPath in application.yml."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(57167).A})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After the configuration is completed, start client project, you can see that there is an additional context selector and rule configuration in shenyu-admin.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(509).A})),(0,a.yg)("h4",{id:"2525-config-addprefix"},"2.5.2.5 Config addPrefix"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(77885).A})),(0,a.yg)("h4",{id:"2526-modify-the-value-of-uri-in-the-selector-and-condition-configuration-to-delete-the-addprefix-part"},"2.5.2.6 Modify the value of uri in the selector and condition configuration to delete the addPrefix part."),(0,a.yg)("p",null,"Since this example uses the service of the http protocol, we need to modify the divide plugin."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(15930).A})),(0,a.yg)("h4",{id:"2525-call-interface"},"2.5.2.5 Call Interface"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(3022).A})),(0,a.yg)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In ",(0,a.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.yg)("inlineCode",{parentName:"li"},"contextPath")," set Status disable.")),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(61323).A})))}u.isMDXComponent=!0},77885:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-prefix-en-a804086aec06625788372c6a3933ff32.png"},57167:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/client-project-config-1b8ee987a5aaf08a17499f11a013f548.png"},509:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/context-path-selector-and-rule-en-73179545dae6c534b9dd2639949e1a57.png"},61323:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/disable-en-e92e23f9495300ceabd7f3937970e5db.png"},43304:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/enable-en-93474e3fbe53b33a7870f7cc5a2990e6.png"},3022:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/invoke-interface-add-prefix-51c6dfad10bf466ae61d0bfc507a7443.png"},21845:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/invoke-interface-cde95ab27ebf6f7608fcfe075e5245f7.png"},62259:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/plugin-config-en-eb907beb602715d69ffe2df9e66b66ce.png"},29158:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/procedure-en-1e938b19eab6ff11bd956e3e9641bc52.png"},15930:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remove-add-prefix-en-9c8f7b7d266761d4ceb0f3ca720a5928.png"}}]);