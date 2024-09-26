"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[71908],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),s=u(t),d=i,y=s["".concat(a,".").concat(d)]||s[d]||c[d]||l;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var g={};for(var a in n)hasOwnProperty.call(n,a)&&(g[a]=n[a]);g.originalType=e,g[s]="string"==typeof e?e:i,o[1]=g;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62727:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>a});var r=t(58168),i=(t(96540),t(15680));const l={title:"Logging\u63d2\u4ef6",keywords:["logging"],description:"logging\u63d2\u4ef6"},o="1. \u6982\u8ff0",g={unversionedId:"plugin-center/observability/logging-plugin",id:"plugin-center/observability/logging-plugin",isDocsHomePage:!1,title:"Logging\u63d2\u4ef6",description:"logging\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/logging-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-plugin",permalink:"/zh/docs/next/plugin-center/observability/logging-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/plugin-center/observability/logging-plugin.md",version:"current",frontMatter:{title:"Logging\u63d2\u4ef6",keywords:["logging"],description:"logging\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"Logging-Kafka\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/observability/logging-kafka"},next:{title:"Logging-Pulsar\u63d2\u4ef6",permalink:"/zh/docs/next/plugin-center/observability/logging-pulsar"}},a=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[]},{value:"2.5.1 \u6536\u96c6http\u8bf7\u6c42\u4fe1\u606f",id:"251-\u6536\u96c6http\u8bf7\u6c42\u4fe1\u606f",children:[{value:"2.5.1.1 \u9009\u62e9\u5668\u914d\u7f6e",id:"2511-\u9009\u62e9\u5668\u914d\u7f6e",children:[]},{value:"2.5.1.2 \u89c4\u5219\u914d\u7f6e",id:"2512-\u89c4\u5219\u914d\u7f6e",children:[]},{value:"2.5.1.3 \u8c03\u7528\u670d\u52a1",id:"2513-\u8c03\u7528\u670d\u52a1",children:[]},{value:"2.5.1.4 \u9a8c\u8bc1\u7ed3\u679c",id:"2514-\u9a8c\u8bc1\u7ed3\u679c",children:[]}]}],u={toc:a},p="wrapper";function s(e){let{components:n,...l}=e;return(0,i.yg)(p,(0,r.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8bf7\u6c42\u65e5\u5fd7\u8bb0\u5f55\u63d2\u4ef6")),(0,i.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5f00\u53d1\u65f6\u8c03\u8bd5\u6216\u8005\u7ebf\u4e0a\u6392\u67e5\u95ee\u9898\u7b49\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u5728\u7f51\u5173\u4fa7\u67e5\u770b\u672c\u6b21\u8bf7\u6c42\u5728\u8f6c\u53d1\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5982\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\u6216\u54cd\u5e94\u5934\u3001\u54cd\u5e94\u4f53\u7b49\u3002")),(0,i.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u901a\u8fc7logback\u6216\u8005log4j\u6536\u96c6\u8bf7\u6c42\u7684url\uff0c\u8bf7\u6c42\u5934\uff0c\u8bf7\u6c42\u4f53\uff0c\u54cd\u5e94\u4fe1\u606f\u548c\u54cd\u5e94\u4f53\uff0c\u5e76\u5c06\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u5728\u672c\u5730\u3002")),(0,i.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-pluign-logging-console"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.logging.console.LoggingConsolePlugin")))),(0,i.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ShenYu 2.4.0")),(0,i.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.yg)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(56053).A})),(0,i.yg)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728ShenYu-Bootstrap\u5bfc\u5165\u5bf9\u5e94\u7684pom\u4f9d\u8d56\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-console</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,i.yg)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> logging \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.yg)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\u548c\u9009\u62e9\u5668\u914d\u7f6e\u3002\u8bf7\u67e5\u770b: ",(0,i.yg)("a",{parentName:"li",href:"/zh/docs/next/user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,i.yg)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,i.yg)("h2",{id:"251-\u6536\u96c6http\u8bf7\u6c42\u4fe1\u606f"},"2.5.1 \u6536\u96c6http\u8bf7\u6c42\u4fe1\u606f"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u5728\u4f60\u4f7f\u7528\u65e5\u5fd7\u4e4b\u524d\u8bf7\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"ShenYuAdmin"),"\u5f00\u542f\u65e5\u5fd7\u63d2\u4ef6.")),(0,i.yg)("h3",{id:"2511-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.1.1 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(10370).A})),(0,i.yg)("h3",{id:"2512-\u89c4\u5219\u914d\u7f6e"},"2.5.1.2 \u89c4\u5219\u914d\u7f6e"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(21093).A})),(0,i.yg)("h3",{id:"2513-\u8c03\u7528\u670d\u52a1"},"2.5.1.3 \u8c03\u7528\u670d\u52a1"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(12119).A})),(0,i.yg)("h3",{id:"2514-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.1.4 \u9a8c\u8bc1\u7ed3\u679c"),(0,i.yg)("p",null,"\u5982\u679c\u8bf7\u6c42\u6210\u529f\uff0c\u4f60\u5c06\u4f1a\u5728\u63a7\u5236\u53f0\u770b\u5230\u5982\u4e0b\u4fe1\u606f\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'Request Uri: http://localhost:9195/test/payment\nRequest Method: POST\n\n[Request Headers Start]\nContent-Type: application/json\nContent-Length: 46\nHost: localhost:9195\nConnection: Keep-Alive\nUser-Agent: Apache-HttpClient/4.5.13 (Java/11.0.11)\nCookie: JSESSIONID=CD325CE813F61BB37783A1D0835959DD\nAccept-Encoding: gzip,deflate\n[Request Headers End]\n\n[Request Body Start]\n{\n  "userId": "11",\n  "userName": "xiaoming"\n}\n[Request Body End]\n\nResponse Code: 200 OK\n\n[Response Headers Start]\ntransfer-encoding: chunked\nContent-Length: 37\nContent-Type: application/json\n[Response Headers End]\n\n[Response Body Start]\n{"userId":"11","userName":"xiaoming"}\n[Response Body End]\n')),(0,i.yg)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> logging \uff0c\u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(6603).A})))}s.isMDXComponent=!0},12119:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/call-service-ceeafb89bf58792af70883bdaedbcb93.png"},21093:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/log-rule-zh-8f391d68df1da1547987fd31767e18c9.jpg"},10370:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/log-selector-zh-6b503d5c238255e7873d08f15668ab5c.jpg"},56053:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/loggingConsole-use-en-64a3c389309209c07d4ae4602e0e3895.png"},6603:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/unenable-log-plugin-zh-45d1c7612c40f2a45a66fa824c7fdfd6.jpg"}}]);