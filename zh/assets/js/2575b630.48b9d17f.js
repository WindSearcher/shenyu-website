"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31585],{15680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>y});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),g=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=g(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=g(r),u=t,y=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return r?a.createElement(y,p(p({ref:n},l),{},{components:r})):a.createElement(y,p({ref:n},l))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,p=new Array(i);p[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:t,p[1]=o;for(var g=2;g<i;g++)p[g]=r[g];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13042:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(58168),t=(r(96540),r(15680));const i={title:"\u62c9\u53d6swagger\u6ce8\u518cAPI\u6587\u6863",keywords:["swagger api \u63a5\u53e3 \u6587\u6863\u805a\u5408"],description:"\u8fdc\u7a0b\u62c9\u53d6swagger \u6ce8\u518c API\u6587\u6863"},p=void 0,o={unversionedId:"user-guide/api-doc/swagger-apidoc",id:"user-guide/api-doc/swagger-apidoc",isDocsHomePage:!1,title:"\u62c9\u53d6swagger\u6ce8\u518cAPI\u6587\u6863",description:"\u8fdc\u7a0b\u62c9\u53d6swagger \u6ce8\u518c API\u6587\u6863",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/api-doc/swagger-apidoc.md",sourceDirName:"user-guide/api-doc",slug:"/user-guide/api-doc/swagger-apidoc",permalink:"/zh/docs/next/user-guide/api-doc/swagger-apidoc",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/api-doc/swagger-apidoc.md",version:"current",frontMatter:{title:"\u62c9\u53d6swagger\u6ce8\u518cAPI\u6587\u6863",keywords:["swagger api \u63a5\u53e3 \u6587\u6863\u805a\u5408"],description:"\u8fdc\u7a0b\u62c9\u53d6swagger \u6ce8\u518c API\u6587\u6863"},sidebar:"tutorialSidebar",previous:{title:"Shenyu\u5ba2\u6237\u7aef\u6ce8\u518cAPI\u6587\u6863",permalink:"/zh/docs/next/user-guide/api-doc/shenyu-annotation-apidoc"},next:{title:"Context Path\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/http-process/contextpath-plugin"}},c=[{value:"1. \u8bf4\u660e",id:"1-\u8bf4\u660e",children:[]},{value:"2. \u73af\u5883\u51c6\u5907",id:"2-\u73af\u5883\u51c6\u5907",children:[{value:"2.1 \u542f\u52a8<code>shenyu-admin</code>",id:"21-\u542f\u52a8shenyu-admin",children:[]},{value:"2.2 \u5f00\u542f\u8fdc\u7a0b\u62c9\u53d6swagger\u6587\u6863\u7684\u5168\u5c40\u5f00\u5173",id:"22-\u5f00\u542f\u8fdc\u7a0b\u62c9\u53d6swagger\u6587\u6863\u7684\u5168\u5c40\u5f00\u5173",children:[]}]},{value:"3. \u8fd0\u884c\u793a\u4f8b\u9879\u76ee",id:"3-\u8fd0\u884c\u793a\u4f8b\u9879\u76ee",children:[]},{value:"4. \u6f14\u793a\u6548\u679c",id:"4-\u6f14\u793a\u6548\u679c",children:[{value:"4.1 API\u6587\u6863\u5217\u8868",id:"41-api\u6587\u6863\u5217\u8868",children:[]},{value:"4.2 API\u8be6\u60c5\u6548\u679c",id:"42-api\u8be6\u60c5\u6548\u679c",children:[]}]},{value:"5. \u5982\u4f55\u81ea\u52a8\u66f4\u65b0API\u6587\u6863",id:"5-\u5982\u4f55\u81ea\u52a8\u66f4\u65b0api\u6587\u6863",children:[{value:"5.1 \u91cd\u542f\u9879\u76ee",id:"51-\u91cd\u542f\u9879\u76ee",children:[]},{value:"5.2 \u4fee\u6539proxy\u63d2\u4ef6\u9009\u62e9\u5668\u7684\u542f\u52a8\u65f6\u95f4",id:"52-\u4fee\u6539proxy\u63d2\u4ef6\u9009\u62e9\u5668\u7684\u542f\u52a8\u65f6\u95f4",children:[]}]}],g={toc:c},l="wrapper";function s(e){let{components:n,...i}=e;return(0,t.yg)(l,(0,a.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u6b64\u7bc7\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06\u5404\u4e2a\u540e\u7aef\u5fae\u670d\u52a1\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"Swagger API\u6587\u6863")," \u805a\u5408\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,t.yg)("h2",{id:"1-\u8bf4\u660e"},"1. \u8bf4\u660e"),(0,t.yg)("p",null,"\u8fdc\u7a0b\u62c9\u53d6swagger\u6587\u6863\uff0c\u76ee\u524d\u4ec5\u652f\u6301swaggger2.0\uff0c\u5e76\u4e14\u53ea\u652f\u6301 Divide \u548c SpringCloud \u4e24\u79cd\u4ee3\u7406\u63d2\u4ef6\u3002"),(0,t.yg)("h2",{id:"2-\u73af\u5883\u51c6\u5907"},"2. \u73af\u5883\u51c6\u5907"),(0,t.yg)("h3",{id:"21-\u542f\u52a8shenyu-admin"},"2.1 \u542f\u52a8",(0,t.yg)("inlineCode",{parentName:"h3"},"shenyu-admin")),(0,t.yg)("p",null,"\u53c2\u8003 ",(0,t.yg)("inlineCode",{parentName:"p"},"\u8fd0\u7ef4\u90e8\u7f72")," , \u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002"),(0,t.yg)("h3",{id:"22-\u5f00\u542f\u8fdc\u7a0b\u62c9\u53d6swagger\u6587\u6863\u7684\u5168\u5c40\u5f00\u5173"},"2.2 \u5f00\u542f\u8fdc\u7a0b\u62c9\u53d6swagger\u6587\u6863\u7684\u5168\u5c40\u5f00\u5173"),(0,t.yg)("p",null,"\u9ed8\u8ba4\u5df2\u5f00\u542f\u3002\u5728",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"apidoc"),"\u7684\u6570\u636e\uff0c\u4fee\u6539 \u5b57\u5178\u503c: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u3010\u6ce8\u610f\u3011\u5b57\u5178\u503c\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"\u8868\u793a\u5f00\u5173\u5df2\u5f00\u542f\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"\u8868\u793a\u5df2\u5173\u95ed\u3002\u82e5\u5173\u95ed\u540e\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u4e0d\u4f1a\u81ea\u52a8\u62c9\u53d6\u5404\u4e2a\u5fae\u670d\u52a1\u7684swaggger\u6587\u6863\u3002")),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"apidoc-dictionary-cn",src:r(78674).A})),(0,t.yg)("h2",{id:"3-\u8fd0\u884c\u793a\u4f8b\u9879\u76ee"},"3. \u8fd0\u884c\u793a\u4f8b\u9879\u76ee"),(0,t.yg)("p",null,"3.1. \u4e0b\u8f7d ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http-swagger2"},"shenyu-examples-http-swagger2")),(0,t.yg)("p",null,"3.2. \u8fd0\u884c",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.examples.http.ShenyuTestSwaggerApplication")," main\u65b9\u6cd5\u542f\u52a8\u9879\u76ee\u3002"),(0,t.yg)("p",null,"examples\u9879\u76ee\u4f1a\u6839\u636e ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu.register.serverLists")," \u914d\u7f6e\u7684\u5730\u5740\uff0c\u901a\u8fc7 Shenyu client \u6ce8\u89e3(\u6bd4\u5982",(0,t.yg)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient"),") \u5c06\u670d\u52a1\u542f\u52a8\u4fe1\u606f\u540c\u6b65\u7ed9 ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),", \u7136\u540e\u89e6\u53d1 ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u8fdc\u7a0b\u62c9\u53d6swagger\u6587\u6863\u5e76\u5b8c\u6210\u89e3\u6790\uff0c\u6700\u540e\u805a\u5408\u4ea7\u51fa\u65b0\u7684API\u6587\u6863\u3002"),(0,t.yg)("h2",{id:"4-\u6f14\u793a\u6548\u679c"},"4. \u6f14\u793a\u6548\u679c"),(0,t.yg)("h3",{id:"41-api\u6587\u6863\u5217\u8868"},"4.1 API\u6587\u6863\u5217\u8868"),(0,t.yg)("p",null,"\u5728",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u6587\u6863\u8bf4\u660e --\x3e API\u6587\u6863\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u805a\u5408\u597d\u7684API\u6587\u6863\u3002"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"apidoc-swagger-list-cn",src:r(14437).A})),(0,t.yg)("h3",{id:"42-api\u8be6\u60c5\u6548\u679c"},"4.2 API\u8be6\u60c5\u6548\u679c"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"apidoc-detail-cn",src:r(76323).A})),(0,t.yg)("h2",{id:"5-\u5982\u4f55\u81ea\u52a8\u66f4\u65b0api\u6587\u6863"},"5. \u5982\u4f55\u81ea\u52a8\u66f4\u65b0API\u6587\u6863"),(0,t.yg)("h3",{id:"51-\u91cd\u542f\u9879\u76ee"},"5.1 \u91cd\u542f\u9879\u76ee"),(0,t.yg)("p",null,"\u5982\u4e0a\u9762\u793a\u4f8b\u90a3\u6837\uff0c\u901a\u8fc7\u542f\u52a8\u9879\u76ee\u89e6\u53d1\u81ea\u52a8\u66f4\u65b0API\u6587\u6863\u3002"),(0,t.yg)("h3",{id:"52-\u4fee\u6539proxy\u63d2\u4ef6\u9009\u62e9\u5668\u7684\u542f\u52a8\u65f6\u95f4"},"5.2 \u4fee\u6539proxy\u63d2\u4ef6\u9009\u62e9\u5668\u7684\u542f\u52a8\u65f6\u95f4"),(0,t.yg)("p",null,"\u5728 proxy\u63d2\u4ef6--\x3e \u9009\u62e9\u5668\uff0c\u627e\u5230\u76ee\u6807\u670d\u52a1\uff0c\u7136\u540e\u4fee\u6539\u542f\u52a8\u65f6\u95f4\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u65b0\u8bbe\u7f6e\u7684\u542f\u52a8\u65f6\u95f4\u4e00\u5b9a\u4e0d\u80fd\u65e9\u4e8e\u539f\u542f\u52a8\u65f6\u95f4\uff0c\u5426\u5219\u4e0d\u4f1a\u89e6\u53d1\u81ea\u52a8\u62c9\u53d6\u5e76\u5237\u65b0API\u6587\u6863\u3002")),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"app-proxy-startuptime-cn",src:r(84116).A})))}s.isMDXComponent=!0},76323:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/apidoc-detail-cn-e24f1ae2cf56ba7ca9feaf38d673cac1.png"},78674:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/apidoc-dictionary-cn-7b382d90ab4b282737fd255a7cdeabe5.png"},14437:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/apidoc-swagger-list-cn-66a850d042c878bde4d0843e06f1b536.png"},84116:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/app-proxy-startuptime-cn-78f5ec9a379bbc7f6c7fca1dc6ac9e5b.png"}}]);