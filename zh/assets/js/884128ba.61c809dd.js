"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[44107],{15680:(e,n,i)=>{i.d(n,{xA:()=>o,yg:()=>s});var t=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=t.createContext({}),g=function(e){var n=t.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},o=function(e){var n=g(e.components);return t.createElement(u.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),y=g(i),m=a,s=y["".concat(u,".").concat(m)]||y[m]||d[m]||r;return i?t.createElement(s,l(l({ref:n},o),{},{components:i})):t.createElement(s,l({ref:n},o))}));function s(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[y]="string"==typeof e?e:a,l[1]=p;for(var g=2;g<r;g++)l[g]=i[g];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},48791:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var t=i(58168),a=(i(96540),i(15680));const r={sidebar_position:1,title:"ShenYu Admin\u6570\u636e\u7ed3\u6784",keywords:["db"],description:"ShenYu Admin\u6570\u636e\u7ed3\u6784"},l=void 0,p={unversionedId:"design/database-design",id:"version-2.4.0/design/database-design",isDocsHomePage:!1,title:"ShenYu Admin\u6570\u636e\u7ed3\u6784",description:"ShenYu Admin\u6570\u636e\u7ed3\u6784",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/design/database-design.md",sourceDirName:"design",slug:"/design/database-design",permalink:"/zh/docs/2.4.0/design/database-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/design/database-design.md",version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ShenYu Admin\u6570\u636e\u7ed3\u6784",keywords:["db"],description:"ShenYu Admin\u6570\u636e\u7ed3\u6784"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Apache ShenYu \u4ecb\u7ecd",permalink:"/zh/docs/2.4.0/index"},next:{title:"\u6570\u636e\u540c\u6b65\u539f\u7406",permalink:"/zh/docs/2.4.0/design/data-sync"}},u=[{value:"\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219",id:"\u63d2\u4ef6\u9009\u62e9\u5668\u548c\u89c4\u5219",children:[]},{value:"\u8d44\u6e90\u6743\u9650",id:"\u8d44\u6e90\u6743\u9650",children:[]},{value:"\u6570\u636e\u6743\u9650",id:"\u6570\u636e\u6743\u9650",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u5b57\u5178\u7ba1\u7406",id:"\u5b57\u5178\u7ba1\u7406",children:[]}],g={toc:u},o="wrapper";function y(e){let{components:n,...i}=e;return(0,a.yg)(o,(0,t.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu Admin")," \u662f\u7f51\u5173\u7684\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\uff0c\u80fd\u591f\u53ef\u89c6\u5316\u7ba1\u7406\u6240\u6709\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u8bbe\u7f6e\u7528\u6237\u3001\u89d2\u8272\uff0c\u63a7\u5236\u8d44\u6e90\u3002"),(0,a.yg)("h2",{id:"\u63d2\u4ef6\u9009\u62e9\u5668\u548c\u89c4\u5219"},"\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u548c\u89c4\u5219"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u4f7f\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b9e\u73b0\u63d2\u4ef6\u7684\u70ed\u63d2\u62d4\uff0c\u6781\u6613\u6269\u5c55\u3002\u5185\u7f6e\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u5305\u62ec ",(0,a.yg)("inlineCode",{parentName:"li"},"RPC")," \u4ee3\u7406\u3001\u7194\u65ad\u548c\u9650\u6d41\u3001\u6743\u9650\u8ba4\u8bc1\u3001\u76d1\u63a7\u7b49\u7b49\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u9009\u62e9\u5668\uff1a\u6bcf\u4e2a\u63d2\u4ef6\u53ef\u8bbe\u7f6e\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u521d\u6b65\u7b5b\u9009\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u89c4\u5219\uff1a\u6bcf\u4e2a\u9009\u62e9\u5668\u53ef\u8bbe\u7f6e\u591a\u4e2a\u89c4\u5219\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe:")),(0,a.yg)("img",{src:"/img/shenyu/db/shenyu-plugin-table.png",width:"80%",height:"60%"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8bbe\u8ba1\u8be6\u89e3:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e00\u4e2a\u63d2\u4ef6\u5bf9\u5e94\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u4e2a\u89c4\u5219\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e00\u4e2a\u9009\u62e9\u5668\u5bf9\u5e94\u591a\u4e2a\u5339\u914d\u6761\u4ef6\uff0c\u4e00\u4e2a\u89c4\u5219\u5bf9\u5e94\u591a\u4e2a\u5339\u914d\u6761\u4ef6\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6bcf\u4e2a\u89c4\u5219\u5728\u5bf9\u5e94\u63d2\u4ef6\u4e0b\uff0c\u6709\u4e0d\u540c\u7684\u5904\u7406\u80fd\u529b\u3002"))))),(0,a.yg)("h2",{id:"\u8d44\u6e90\u6743\u9650"},"\u8d44\u6e90\u6743\u9650"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8d44\u6e90\u4ee3\u8868\u7684\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u7528\u6237\u540e\u53f0\u4e2d\u7684\u83dc\u5355\u6216\u8005\u6309\u94ae\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8d44\u6e90\u6743\u9650\u6570\u636e\u8868\u7528\u6765\u5b58\u50a8\u7528\u6237\u540d\u79f0\u3001\u89d2\u8272\u3001\u8d44\u6e90\u6570\u636e\u4ee5\u53ca\u5bf9\u5e94\u5173\u7cfb\u3002\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"UML")," \u7c7b\u56fe\uff1a"))),(0,a.yg)("img",{src:"/img/shenyu/db/shenyu-permission-table.png",width:"80%",height:"60%"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8bbe\u8ba1\u8be6\u89e3:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u4e00\u4e2a\u7528\u6237\u5bf9\u5e94\u591a\u4e2a\u89d2\u8272\uff0c\u4e00\u4e2a\u89d2\u8272\u5bf9\u5e94\u591a\u4e2a\u8d44\u6e90\u3002")))),(0,a.yg)("h2",{id:"\u6570\u636e\u6743\u9650"},"\u6570\u636e\u6743\u9650"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u8868\u7528\u6765\u5b58\u50a8\u7528\u6237\uff0c\u9009\u62e9\u5668\u3001\u89c4\u5219\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.yg)("img",{src:"/img/shenyu/db/shenyu-data_permission-table.png",width:"80%",height:"60%"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8bbe\u8ba1\u8be6\u89e3\uff1a",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u7684\u8868\u4e3a\uff1a ",(0,a.yg)("inlineCode",{parentName:"li"},"data_permission"),"\uff0c\u4e00\u4e2a\u7528\u6237\u5bf9\u5e94\u591a\u6761\u6570\u636e\u6743\u9650\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u8868\u4e2d\u5b57\u6bb5 ",(0,a.yg)("inlineCode",{parentName:"li"},"data_type")," \u533a\u5206\u4e0d\u540c\u7684\u7c7b\u578b\u6570\u636e\uff0c \u5177\u4f53\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a",(0,a.yg)("inlineCode",{parentName:"li"},"0 -> \u9009\u62e9\u5668, 1 -> \u89c4\u5219"),"\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u6743\u9650\u8868\u4e2d\u5b57\u6bb5 ",(0,a.yg)("inlineCode",{parentName:"li"},"data_id")," \u5b58\u653e\u76f8\u5e94\u7c7b\u578b\u7684\u4e3b\u952e",(0,a.yg)("inlineCode",{parentName:"li"},"id"),"\u3002")))),(0,a.yg)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5143\u6570\u636e\u4e3b\u8981\u662f\u7528\u4e8e\u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6bcf\u4e2a\u63a5\u53e3\u65b9\u6cd5\uff0c\u5bf9\u5e94\u4e00\u6761\u5143\u6570\u636e\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.yg)("img",{src:"/img/shenyu/db/mata_data_table.png",width:"30%",height:"30%"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8bbe\u8ba1\u8be6\u89e3\uff1a"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"path"),"\uff1a\u5728\u8bf7\u6c42\u7f51\u5173\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e ",(0,a.yg)("inlineCode",{parentName:"p"},"path")," \u6765\u5339\u914d\u5230\u4e00\u6761\u6570\u636e\uff0c\u7136\u540e\u8fdb\u884c\u540e\u7eed\u7684\u6d41\u7a0b\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"rpc_ext"),"\uff1a\u7528\u4e8e\u4fdd\u5b58",(0,a.yg)("inlineCode",{parentName:"p"},"RPC"),"\u4ee3\u7406\u4e2d\u7684\u6269\u5c55\u4fe1\u606f\u3002"))))),(0,a.yg)("h2",{id:"\u5b57\u5178\u7ba1\u7406"},"\u5b57\u5178\u7ba1\u7406"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5b57\u5178\u7ba1\u7406\u4e3b\u8981\u7528\u6765\u7ef4\u62a4\u548c\u7ba1\u7406\u516c\u7528\u6570\u636e\u5b57\u5178\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"li"},"UML")," \u7c7b\u56fe\uff1a")),(0,a.yg)("img",{src:"/img/shenyu/db/shenyu_dict.png",width:"30%",height:"30%"}))}y.isMDXComponent=!0}}]);