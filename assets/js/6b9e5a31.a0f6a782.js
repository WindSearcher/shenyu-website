"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3403],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>y});var t=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),d=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(i),s=a,y=c["".concat(p,".").concat(s)]||c[s]||g[s]||r;return i?t.createElement(y,l(l({ref:n},u),{},{components:i})):t.createElement(y,l({ref:n},u))}));function y(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}s.displayName="MDXCreateElement"},17159:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=i(58168),a=(i(96540),i(15680));const r={title:"Waf Plugin",keywords:["waf"],description:"waf plugin"},l=void 0,o={unversionedId:"plugin-center/authority-and-certification/waf-plugin",id:"version-2.4.3/plugin-center/authority-and-certification/waf-plugin",isDocsHomePage:!1,title:"Waf Plugin",description:"waf plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/authority-and-certification/waf-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/waf-plugin",permalink:"/docs/2.4.3/plugin-center/authority-and-certification/waf-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/authority-and-certification/waf-plugin.md",version:"2.4.3",frontMatter:{title:"Waf Plugin",keywords:["waf"],description:"waf plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Sign Plugin",permalink:"/docs/2.4.3/plugin-center/authority-and-certification/sign-plugin"},next:{title:"Logging Plugin",permalink:"/docs/2.4.3/plugin-center/observability/logging-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add Dependency",id:"add-dependency",children:[]},{value:"Waf Plugin Configuration",id:"waf-plugin-configuration",children:[]},{value:"Situation",id:"situation",children:[]}],d={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,t.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Waf")," is the core implementation of gateway to realize firewall function for network traffic.")),(0,a.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.yg)("p",null,"Please refer to the ",(0,a.yg)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, through ",(0,a.yg)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," to start the ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," management system."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"In ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,a.yg)("inlineCode",{parentName:"p"},"waf")," set to enable.If you don't want to use this function, please disable this plugin in the ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"."),(0,a.yg)("img",{src:"/img/shenyu/plugin/waf/waf_open_en.jpg",width:"80%",height:"80%"})),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Add configuration mode in plugin editing."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"{\"model\":\"black\"}\n# model can be 'black' or 'mixed'\n# The default mode is blacklist mode; If setting is mixed, it will be mixed mode. We will explain it specifically below.\n")),(0,a.yg)("h2",{id:"add-dependency"},"Add Dependency"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Introducing ",(0,a.yg)("inlineCode",{parentName:"li"},"waf")," dependency in the pom.xml of the gateway.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu waf plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-waf</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu waf plugin end--\x3e\n")),(0,a.yg)("h2",{id:"waf-plugin-configuration"},"Waf Plugin Configuration"),(0,a.yg)("p",null,"For more instructions on selector and rule configuration, please refer to: ",(0,a.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),", here only some fields are introduced."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Waf")," plugin rule configuration page:"),(0,a.yg)("img",{src:"/img/shenyu/plugin/waf/waf_rule_en.jpg",width:"80%",height:"80%"}),(0,a.yg)("p",null,"For requests that are denied access by ",(0,a.yg)("inlineCode",{parentName:"p"},"Waf")," , the response header status code is: ",(0,a.yg)("inlineCode",{parentName:"p"},"403"),"."),(0,a.yg)("h4",{id:"black-model"},"Black Model"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When ",(0,a.yg)("inlineCode",{parentName:"li"},"model")," is set to ",(0,a.yg)("inlineCode",{parentName:"li"},"black")," mode, only the matched traffic will execute the rejection policy, and the unmatched traffic will be skipped directly."),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"Handler")," feild in the rule configuration is invalid and can be configured to be empty.")),(0,a.yg)("h4",{id:"mixed-model"},"Mixed Model"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"When ",(0,a.yg)("inlineCode",{parentName:"p"},"model")," is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"mixed")," mode, all traffic will pass through waf plugin. For different matching traffic, users can set whether to reject or pass.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," feild  in the rule configuration must be configured:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"permission"),": The handle logic that matches the rule. ",(0,a.yg)("inlineCode",{parentName:"p"},"reject"),": deny access, ",(0,a.yg)("inlineCode",{parentName:"p"},"allow"),": allow access.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"statusCode"),": When access is denied, the value of the code field in the response body. ",(0,a.yg)("inlineCode",{parentName:"p"},"Will not modify the status code of the response header"),"."),(0,a.yg)("p",{parentName:"li"},"  e.g.\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"statusCode=10001"),"\uff0cThe rejected response body is :"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{"code":10001,"message":"You are forbidden to visit"}\n')))))),(0,a.yg)("h2",{id:"situation"},"Situation"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Waf")," is also the pre-plugin of ",(0,a.yg)("inlineCode",{parentName:"li"},"ShenYu"),", which is mainly used to intercept illegal requests or exception requests and give relevant rejection policies."),(0,a.yg)("li",{parentName:"ul"},"When faced with replay attacks, you can intercept illegal ",(0,a.yg)("inlineCode",{parentName:"li"},"ip")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"host"),", and set reject strategy according to matched ",(0,a.yg)("inlineCode",{parentName:"li"},"ip")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"host"),"."),(0,a.yg)("li",{parentName:"ul"},"How to determine ",(0,a.yg)("inlineCode",{parentName:"li"},"ip")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"host"),", please refer to: ",(0,a.yg)("a",{parentName:"li",href:"../../developer/custom-parsing-ip-and-host"},"parsing-ip-and-host"))))}c.isMDXComponent=!0}}]);