"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[95855],{15680:(A,e,t)=>{t.d(e,{xA:()=>f,yg:()=>i});var n=t(96540);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function d(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var s=n.createContext({}),c=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},f=function(A){var e=c(A.components);return n.createElement(s.Provider,{value:e},A.children)},u="mdxType",b={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,s=A.parentName,f=d(A,["components","mdxType","originalType","parentName"]),u=c(t),l=r,i=u["".concat(s,".").concat(l)]||u[l]||b[l]||a;return t?n.createElement(i,o(o({ref:e},f),{},{components:t})):n.createElement(i,o({ref:e},f))}));function i(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,o=new Array(a);o[0]=l;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=A,d[u]="string"==typeof A?A:r,o[1]=d;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},31510:(A,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const a={title:"Casdoor\u63d2\u4ef6",keywords:["Casdoor"],description:"Casdoor\u63d2\u4ef6"},o=void 0,d={unversionedId:"plugin-center/security/casdoor",id:"plugin-center/security/casdoor",isDocsHomePage:!1,title:"Casdoor\u63d2\u4ef6",description:"Casdoor\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/security/casdoor.md",sourceDirName:"plugin-center/security",slug:"/plugin-center/security/casdoor",permalink:"/zh/docs/next/plugin-center/security/casdoor",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/security/casdoor.md",version:"current",frontMatter:{title:"Casdoor\u63d2\u4ef6",keywords:["Casdoor"],description:"Casdoor\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Sentinel\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/fault-tolerance/sentinel-plugin"},next:{title:"CryptorRequest \u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/security/cryptor-request-plugin"}},s=[{value:"\u7b2c\u4e00\u6b65.\u90e8\u7f72Casdoor",id:"\u7b2c\u4e00\u6b65\u90e8\u7f72casdoor",children:[]},{value:"\u7b2c\u4e8c\u6b65.\u8bbe\u7f6eCasdoor\u5e94\u7528",id:"\u7b2c\u4e8c\u6b65\u8bbe\u7f6ecasdoor\u5e94\u7528",children:[{value:"1.\u521b\u5efa\u6216\u5e94\u7528\u4e00\u4e2a\u5b58\u5728\u7684\u7ec4\u7ec7",id:"1\u521b\u5efa\u6216\u5e94\u7528\u4e00\u4e2a\u5b58\u5728\u7684\u7ec4\u7ec7",children:[]},{value:"2.\u6dfb\u52a0\u6211\u4eec\u7684\u56de\u8c03url",id:"2\u6dfb\u52a0\u6211\u4eec\u7684\u56de\u8c03url",children:[]},{value:"3.\u5728\u8bc1\u4e66\u7684\u7f16\u8f91\u9875\u9762\uff0c\u6211\u4eec\u80fd\u770b\u5230\u6211\u4eec\u7684<code>Certificate</code>",id:"3\u5728\u8bc1\u4e66\u7684\u7f16\u8f91\u9875\u9762\u6211\u4eec\u80fd\u770b\u5230\u6211\u4eec\u7684certificate",children:[]}]},{value:"\u7b2c\u4e09\u6b65.\u8fd0\u7528Casdoor\u63d2\u4ef6\u5728Shenyu",id:"\u7b2c\u4e09\u6b65\u8fd0\u7528casdoor\u63d2\u4ef6\u5728shenyu",children:[{value:"1.\u8bbe\u7f6eCasdoor\u63d2\u4ef6\u5728Shenyu",id:"1\u8bbe\u7f6ecasdoor\u63d2\u4ef6\u5728shenyu",children:[]},{value:"3.\u5f97\u5230\u670d\u52a1\u548c\u8fd0\u7528",id:"3\u5f97\u5230\u670d\u52a1\u548c\u8fd0\u7528",children:[]}]}],c={toc:s},f="wrapper";function u(A){let{components:e,...a}=A;return(0,r.yg)(f,(0,n.A)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ShenYu \u6709Casdoor\u63d2\u4ef6\u53bb\u4f7f\u7528Casdoor"),(0,r.yg)("h2",{id:"\u7b2c\u4e00\u6b65\u90e8\u7f72casdoor"},"\u7b2c\u4e00\u6b65.\u90e8\u7f72Casdoor"),(0,r.yg)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u90e8\u7f72Casdoor."),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53c2\u8003Casdoor\u5b98\u65b9\u6587\u6863\u53bb\u90e8\u7f72\u5b83."),(0,r.yg)("p",null,"\u5728\u6210\u529f\u90e8\u7f72\u4e4b\u540e,\u6211\u4eec\u9700\u8981\u786e\u4fdd:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Casdoor\u670d\u52a1\u6210\u529f\u5728 ",(0,r.yg)("strong",{parentName:"p"},"http://localhost:8000"),"\u4e0a\u8fd0\u884c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6253\u5f00\u4f60\u559c\u7231\u7684\u6d4f\u89c8\u5668\u6d4f\u89c8 ",(0,r.yg)("strong",{parentName:"p"},"http://localhost:7001"),",\u4f60\u53ef\u4ee5\u770b\u5230Casdoor\u7684\u767b\u9646\u9875\u9762")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8f93\u5165",(0,r.yg)("inlineCode",{parentName:"p"},"admin"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"123"),"\u53bb\u6d4b\u8bd5\u767b\u5f55\u662f\u5426\u6210\u529f"),(0,r.yg)("p",{parentName:"li"},"\u767b\u9646\u6210\u529f\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528casdoor."))),(0,r.yg)("h2",{id:"\u7b2c\u4e8c\u6b65\u8bbe\u7f6ecasdoor\u5e94\u7528"},"\u7b2c\u4e8c\u6b65.\u8bbe\u7f6eCasdoor\u5e94\u7528"),(0,r.yg)("h3",{id:"1\u521b\u5efa\u6216\u5e94\u7528\u4e00\u4e2a\u5b58\u5728\u7684\u7ec4\u7ec7"},"1.\u521b\u5efa\u6216\u5e94\u7528\u4e00\u4e2a\u5b58\u5728\u7684\u7ec4\u7ec7"),(0,r.yg)("h3",{id:"2\u6dfb\u52a0\u6211\u4eec\u7684\u56de\u8c03url"},"2.\u6dfb\u52a0\u6211\u4eec\u7684\u56de\u8c03url"),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_config",src:t(78455).A})),(0,r.yg)("h3",{id:"3\u5728\u8bc1\u4e66\u7684\u7f16\u8f91\u9875\u9762\u6211\u4eec\u80fd\u770b\u5230\u6211\u4eec\u7684certificate"},"3.\u5728\u8bc1\u4e66\u7684\u7f16\u8f91\u9875\u9762\uff0c\u6211\u4eec\u80fd\u770b\u5230\u6211\u4eec\u7684",(0,r.yg)("inlineCode",{parentName:"h3"},"Certificate")),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_cert",src:t(30087).A})),(0,r.yg)("h2",{id:"\u7b2c\u4e09\u6b65\u8fd0\u7528casdoor\u63d2\u4ef6\u5728shenyu"},"\u7b2c\u4e09\u6b65.\u8fd0\u7528Casdoor\u63d2\u4ef6\u5728Shenyu"),(0,r.yg)("h3",{id:"1\u8bbe\u7f6ecasdoor\u63d2\u4ef6\u5728shenyu"},"1.\u8bbe\u7f6eCasdoor\u63d2\u4ef6\u5728Shenyu"),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_configPlugin",src:t(5406).A})),(0,r.yg)("p",null,"\u6ce8\u610f:\u56e0\u4e3aShenyu\u53ea\u6709\u5355\u884c\u8f93\u5165\u6846\u6240\u4ee5\u6211\u4eec\u9700\u8981\u589e\u52a0\\n\u5728\u6bcf\u4e00\u884c\u7684\u8bc1\u4e66."),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_cert2",src:t(72949).A})),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u590d\u5236\u4ed6\u4eec\u5e76\u5c06\u5b83\u4eec\u7c98\u8d34\u5230Shenyu\u7684Casdoor\u914d\u7f6e\u4e2d\u7684certificate\u8fd9\u4e00\u9879\u4e2d"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6211\u4eec\u4e0d\u9700\u8981\u4fdd\u5b58\u6211\u4eec\u52a0\\n\u7684\u5185\u5bb9\u5728Casdoor\u7684\u8bc1\u4e66\u8bbe\u7f6e\u5904"),",\u56e0\u4e3a\u8fd9\u53ea\u662f\u4e3a\u4e86\u590d\u5236\u65b9\u4fbf."),(0,r.yg)("h4",{id:"2\u8bbe\u7f6eshenyu-casdoor\u7684\u63d2\u4ef6\u914d\u7f6e"},"2.\u8bbe\u7f6eShenyu Casdoor\u7684\u63d2\u4ef6\u914d\u7f6e"),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_casdoor",src:t(15766).A})),(0,r.yg)("p",null,"\u200b\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4f60\u6240\u62e5\u6709\u7684casdoor\u914d\u7f6e\u5728Shenyu\u914d\u7f6e\u4e2d"),(0,r.yg)("h3",{id:"3\u5f97\u5230\u670d\u52a1\u548c\u8fd0\u7528"},"3.\u5f97\u5230\u670d\u52a1\u548c\u8fd0\u7528"),(0,r.yg)("h4",{id:"31-\u76f4\u63a5\u8bbf\u95ee\u9875\u9762"},"3.1 \u76f4\u63a5\u8bbf\u95ee\u9875\u9762"),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_faillogin",src:t(39902).A})),(0,r.yg)("h4",{id:"32-\u4f7f\u7528casdoor\u767b\u5f55"},"3.2 \u4f7f\u7528Casdoor\u767b\u5f55"),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_login",src:t(40510).A}),"\n",(0,r.yg)("img",{alt:"casdoor_successlogin",src:t(88853).A})),(0,r.yg)("h4",{id:"33\u643a\u5e26token\u5728headers\u4f60\u53ef\u4ee5\u8bbf\u95ee\u8be5\u9875\u9762"},"3.3\u643a\u5e26token\u5728Headers,\u4f60\u53ef\u4ee5\u8bbf\u95ee\u8be5\u9875\u9762"),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"casdoor_token",src:t(68158).A})),(0,r.yg)("h4",{id:"34-\u6211\u4eec\u53ef\u4ee5\u4fdd\u5b58nameid\u548corganization\u5728headers\u4ee5\u81f3\u4e8e\u4f60\u53ef\u4ee5\u8fd0\u7528\u4ed6\u4eec\u5728\u4e0b\u4e00\u6b21"},"3.4 \u6211\u4eec\u53ef\u4ee5\u4fdd\u5b58name,id\u548corganization\u5728Headers\u4ee5\u81f3\u4e8e\u4f60\u53ef\u4ee5\u8fd0\u7528\u4ed6\u4eec\u5728\u4e0b\u4e00\u6b21"))}u.isMDXComponent=!0},15766:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_casdoor-9382e2b98d7facaf3b335574d2696df0.png"},30087:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_cert-ea19a42199bd15b7446d569b67509100.png"},72949:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_cert2-b483af40e83475bafaddc1e41727137c.png"},78455:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_config-20e7c6a1dc3df10781df800415ee651c.png"},5406:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_configPlugin-e92c5ad845808a848120645fb00413ba.png"},39902:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},40510:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_login-a3f60223d82325df9f22d48084074985.png"},88853:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},68158:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/casdoor_token-e317f35a2028635bc978ad9261e3e384.png"}}]);