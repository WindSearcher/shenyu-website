"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[93991],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>c});var r=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function t(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var g=r.createContext({}),u=function(e){var n=r.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},y=function(e){var n=u(e.components);return r.createElement(g.Provider,{value:n},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,g=e.parentName,y=t(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,c=m["".concat(g,".").concat(d)]||m[d]||o[d]||l;return a?r.createElement(c,p(p({ref:n},y),{},{components:a})):r.createElement(c,p({ref:n},y))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,p=new Array(l);p[0]=d;var t={};for(var g in n)hasOwnProperty.call(n,g)&&(t[g]=n[g]);t.originalType=e,t[m]="string"==typeof e?e:i,p[1]=t;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88273:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>g});var r=a(58168),i=(a(96540),a(15680));const l={title:"Param-mapping\u63d2\u4ef6",keywords:["Param-mapping"],description:"Param-mapping\u63d2\u4ef6"},p="1. \u6982\u8ff0",t={unversionedId:"plugin-center/http-handle/param-mapping-plugin",id:"version-2.4.1/plugin-center/http-handle/param-mapping-plugin",isDocsHomePage:!1,title:"Param-mapping\u63d2\u4ef6",description:"Param-mapping\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/plugin-center/http-handle/param-mapping-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/param-mapping-plugin",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/param-mapping-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/plugin-center/http-handle/param-mapping-plugin.md",version:"2.4.1",frontMatter:{title:"Param-mapping\u63d2\u4ef6",keywords:["Param-mapping"],description:"Param-mapping\u63d2\u4ef6"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"ModifyResponse\u63d2\u4ef6",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/modify-response-plugin"},next:{title:"Redirect\u63d2\u4ef6",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/redirect-plugin"}},g=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u9009\u62e9\u5668\u914d\u7f6e",children:[]},{value:"2.4.3 \u89c4\u5219\u914d\u7f6e",id:"243-\u89c4\u5219\u914d\u7f6e",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u5728\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u53c2\u6570",id:"251-\u5728\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u53c2\u6570",children:[]}]}],u={toc:g},y="wrapper";function m(e){let{components:n,...l}=e;return(0,i.yg)(y,(0,r.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"paramMapping\u63d2\u4ef6")),(0,i.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6dfb\u52a0/\u5220\u9664/\u66ff\u6362\u8bf7\u6c42\u4f53\u4e2d\u56fa\u5b9a\u7684\u53c2\u6570")),(0,i.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7528\u6765\u5bf9\u4f60\u7684\u8bf7\u6c42\u53c2\u6570\u8fdb\u884c\u4fee\u6539\u7684\u63d2\u4ef6\u3002")),(0,i.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-param-mapping"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.param.mapping.ParamMappingPlugin")))),(0,i.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,i.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.yg)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(99607).A})),(0,i.yg)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,i.yg)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.yg)("inlineCode",{parentName:"li"},"paramMapping")," \u7684\u652f\u6301\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu param_mapping plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-param-mapping</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu param_mapping plugin end--\x3e\n")),(0,i.yg)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"paramMapping")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,i.yg)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,i.yg)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u518d\u4f7f\u7528\u63d2\u4ef6\u65f6\u5e94\u8be5\u5f00\u542f\u63d2\u4ef6\uff01")),(0,i.yg)("h3",{id:"242-\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u624d\u4f1a\u4fee\u6539\u8bf7\u6c42\u4f53\u3002"))),(0,i.yg)("h3",{id:"243-\u89c4\u5219\u914d\u7f6e"},"2.4.3 \u89c4\u5219\u914d\u7f6e"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(70172).A})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u53c2\u6570\u89e3\u6790:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addParameterKeys"),": \u5728\u8bf7\u6c42\u4f53\u4e2d\u589e\u52a0\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"li"},"key-value")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"replaceParameterKeys"),": \u66ff\u6362\u8bf7\u6c42\u4f53\u4e2d\u7684\u67d0\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"li"},"key")," \uff0c",(0,i.yg)("inlineCode",{parentName:"li"},"key")," \u662f\u8981\u88ab\u66ff\u6362\u7684\u503c\uff0c",(0,i.yg)("inlineCode",{parentName:"li"},"value")," \u662f\u66ff\u6362\u540e\u7684\u503c"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"removeParameterKeys"),": \u79fb\u9664\u8bf7\u6c42\u4f53\u4e2d\u7684\u67d0\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"li"},"key")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u4fee\u6539\u8bf7\u6c42\u4f53\u662f\u901a\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"p"},"JSONPath")," \u6765\u5b9e\u73b0\u7684\uff0c ",(0,i.yg)("inlineCode",{parentName:"p"},"$.")," \u4ee3\u8868\u6839\u76ee\u5f55"))),(0,i.yg)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,i.yg)("h3",{id:"251-\u5728\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u53c2\u6570"},"2.5.1 \u5728\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u53c2\u6570"),(0,i.yg)("h4",{id:"2511-\u914d\u7f6e\u63d2\u4ef6"},"2.5.1.1 \u914d\u7f6e\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u8be5\u63d2\u4ef6\u65f6\u5e94\u5148\u5f00\u542f\u63d2\u4ef6\uff01")),(0,i.yg)("h4",{id:"2512-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.yg)("h4",{id:"2513-\u89c4\u5219\u914d\u7f6e"},"2.5.1.3 \u89c4\u5219\u914d\u7f6e"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(70172).A})),(0,i.yg)("p",null,"\u4e0a\u9762\u7684\u914d\u7f6e\uff0c\u63d2\u4ef6\u5f00\u542f\u524d\uff0c\u8bf7\u6c42\u5185\u5bb9\u4e3a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{"id":3,"data":{"value":"18","age":"36"}}\n')),(0,i.yg)("h4",{id:"2514-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.1.4 \u9a8c\u8bc1\u7ed3\u679c"),(0,i.yg)("p",null,"\u63d2\u4ef6\u5f00\u542f\u540e\uff0c\u8bf7\u6c42\u5185\u5bb9\u4e3a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{"name":"shenyu","userId":3,"data":{"age":"36"}}\n')),(0,i.yg)("p",null,"\u4e0a\u8ff0\u64cd\u4f5c\uff0c\u589e\u52a0\u4e00\u4e2a",(0,i.yg)("inlineCode",{parentName:"p"},"name:shenyu"),"\uff0c\u628a",(0,i.yg)("inlineCode",{parentName:"p"},"id"),"\u66ff\u6362\u4e3a",(0,i.yg)("inlineCode",{parentName:"p"},"userId"),"\uff0c\u79fb\u9664",(0,i.yg)("inlineCode",{parentName:"p"},"data"),"\u4e2d\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"value")," \u3002"),(0,i.yg)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"paramMapping")," \u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}m.isMDXComponent=!0},70172:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/param-mapping-48f0bc50c54e2044a1904fe4870ba9b5.png"},99607:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/plugin_use_zh-cf88744e5c4b7cc85accbcf32af6e1a3.jpg"}}]);