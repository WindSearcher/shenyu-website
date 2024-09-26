"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[55994],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,u=c["".concat(l,".").concat(d)]||c[d]||y[d]||a;return r?n.createElement(u,s(s({ref:t},g),{},{components:r})):n.createElement(u,s({ref:t},g))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24926:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(58168),i=(r(96540),r(15680));const a={title:"Client Registry Design",keywords:["Client Access"],description:"Application Client Access"},s=void 0,o={unversionedId:"design/register-center-design",id:"design/register-center-design",isDocsHomePage:!1,title:"Client Registry Design",description:"Application Client Access",source:"@site/docs/design/register-center-design.md",sourceDirName:"design",slug:"/design/register-center-design",permalink:"/docs/next/design/register-center-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/design/register-center-design.md",version:"current",frontMatter:{title:"Client Registry Design",keywords:["Client Access"],description:"Application Client Access"},sidebar:"tutorialSidebar",previous:{title:"Flow Control Design",permalink:"/docs/next/design/flow-control"},next:{title:"SPI Design",permalink:"/docs/next/design/spi-design"}},l=[{value:"Design principle",id:"design-principle",children:[]},{value:"Http Registry",id:"http-registry",children:[]},{value:"SPI",id:"spi",children:[]}],p={toc:l},g="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("em",{parentName:"p"},"Notice"),"\nAfter ShenYu version 2.6.1, the ShenYu register just support http type, and the middleware register type has been removed.\nSo, please use the http register type to register your service.\nShenYu Register Center isn't microservice register center, it just register metadata, selector data, rule data to shenyu-admin, and then shenyu-admin will sync data to shenyu-gateway.")),(0,i.yg)("p",null,"Application client access means to access your microservice to ShenYu gateway, currently supports HTTP, Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols access."),(0,i.yg)("p",null,"Refer to the client access configuration in the user documentation for ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,i.yg)("img",{src:"/img/shenyu/register/application-client-access-en.png",width:"70%",height:"60%"}),(0,i.yg)("h2",{id:"design-principle"},"Design principle"),(0,i.yg)("h4",{id:"client"},"Client"),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(97834).A})),(0,i.yg)("p",null,"Declare the registry client type, such as HTTP, in your microservice configuration. Use SPI to load and initialize the corresponding registry client when the application starts, implement the post-processor interface associated with the Spring Bean, get the service interface information to register in it, and place the obtained information into Disruptor."),(0,i.yg)("p",null,"The Registry client reads data from the Disruptor and registers the interface information with shenyu-admin, where the Disruptor decouples data from operations for scaling."),(0,i.yg)("h4",{id:"server"},"Server"),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(1782).A})),(0,i.yg)("p",null,"Declare the registry server type, such as HTTP in the Shenyu-Admin configuration. When shenyu-admin is started, it will read the configuration type, load and initialize the corresponding registry server, and when the registry server receives the interface information registered by shenyu-client, it will put it into Disruptor, which will trigger the registration processing logic to update the interface information and publish a synchronous event."),(0,i.yg)("p",null,"Disruptor provides data and operations decoupling for expansion. If there are too many registration requests, resulting in abnormal registration, there is also a data buffer role."),(0,i.yg)("h2",{id:"http-registry"},"Http Registry"),(0,i.yg)("p",null,"The principle of HTTP service registration is relatively simple. After Shenyu-Client is started, the relevant service registration interface of Shenyu-Admin will be called to upload data for registration."),(0,i.yg)("p",null,"After receiving the request, shenyu-admin will update the data and publish the data synchronization event to synchronize the interface information to ShenYu Gateway."),(0,i.yg)("h2",{id:"spi"},"SPI"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"SPI Name")),(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"Description")))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ShenyuClientRegisterRepository"),(0,i.yg)("td",{parentName:"tr",align:null},"ShenYu client register SPI")))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"Implementation Class")),(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"Description")))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"HttpClientRegisterRepository"),(0,i.yg)("td",{parentName:"tr",align:null},"Http client register repository")))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"SPI Name")),(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"Description")))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ShenyuServerRegisterRepository"),(0,i.yg)("td",{parentName:"tr",align:null},"ShenYu server register SPI")))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"Implementation Class")),(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("em",{parentName:"th"},"Description")))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ShenyuHttpRegistryController"),(0,i.yg)("td",{parentName:"tr",align:null},"Http server repository")))))}c.isMDXComponent=!0},97834:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/client-8ca2283dbd01d24dfceb32bd0057c8dd.png"},1782:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/server-11fb112ea24bec622c29ca1224dfee31.png"}}]);