"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[25972],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var i=a(96540);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,i,p=function(e,n){if(null==e)return{};var a,i,p={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=i.createContext({}),y=function(e){var n=i.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=y(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var a=e.components,p=e.mdxType,t=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=y(a),c=p,u=g["".concat(l,".").concat(c)]||g[c]||m[c]||t;return a?i.createElement(u,o(o({ref:n},d),{},{components:a})):i.createElement(u,o({ref:n},d))}));function u(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var t=a.length,o=new Array(t);o[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[g]="string"==typeof e?e:p,o[1]=r;for(var y=2;y<t;y++)o[y]=a[y];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78200:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=a(58168),p=(a(96540),a(15680));const t={sidebar_position:2,title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",keywords:["Apache ShenYu"],description:"\u6570\u636e\u540c\u6b65"},o=void 0,r={unversionedId:"design/data-sync",id:"version-2.5.0/design/data-sync",isDocsHomePage:!1,title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",description:"\u6570\u636e\u540c\u6b65",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/design/data-sync.md",sourceDirName:"design",slug:"/design/data-sync",permalink:"/zh/docs/2.5.0/design/data-sync",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.0/design/data-sync.md",version:"2.5.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",keywords:["Apache ShenYu"],description:"\u6570\u636e\u540c\u6b65"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"\u7ba1\u7406\u540e\u53f0\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1",permalink:"/zh/docs/2.5.0/design/database-design"},next:{title:"\u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1",permalink:"/zh/docs/2.5.0/design/flow-control"}},l=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u539f\u7406\u5206\u6790",id:"\u539f\u7406\u5206\u6790",children:[]},{value:"Zookeeper\u540c\u6b65\u539f\u7406",id:"zookeeper\u540c\u6b65\u539f\u7406",children:[]},{value:"WebSocket\u540c\u6b65\u539f\u7406",id:"websocket\u540c\u6b65\u539f\u7406",children:[]},{value:"Http\u957f\u8f6e\u8be2\u540c\u6b65\u539f\u7406",id:"http\u957f\u8f6e\u8be2\u540c\u6b65\u539f\u7406",children:[]},{value:"Nacos\u540c\u6b65\u539f\u7406",id:"nacos\u540c\u6b65\u539f\u7406",children:[]},{value:"Etcd\u540c\u6b65\u539f\u7406",id:"etcd\u540c\u6b65\u539f\u7406",children:[]},{value:"Consul\u540c\u6b65\u539f\u7406",id:"consul\u540c\u6b65\u539f\u7406",children:[]}],y={toc:l},d="wrapper";function g(e){let{components:n,...t}=e;return(0,p.yg)(d,(0,i.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,p.yg)("p",null,"\u672c\u7bc7\u4e3b\u8981\u8bb2\u89e3\u6570\u636e\u540c\u6b65\u539f\u7406\uff0c\u6570\u636e\u540c\u6b65\u662f\u6307\u5728 ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u540e\u53f0\u64cd\u4f5c\u6570\u636e\u4ee5\u540e\uff0c\u4f7f\u7528\u4f55\u79cd\u7b56\u7565\u5c06\u6570\u636e\u540c\u6b65\u5230 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u5f53\u524d\u652f\u6301",(0,p.yg)("inlineCode",{parentName:"p"},"ZooKeeper"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos")," \u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Etcd")," \u548c ",(0,p.yg)("inlineCode",{parentName:"p"},"Consul")," \u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002"),(0,p.yg)("img",{src:"/img/shenyu/dataSync/data-sync-dir-zh.png",width:"60%",height:"50%"}),(0,p.yg)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\u7528\u6237\u6587\u6863\u4e2d\u7684 ",(0,p.yg)("a",{parentName:"p",href:"/zh/docs/2.5.0/user-guide/property-config/use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e")," \u3002"),(0,p.yg)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,p.yg)("p",null,"\u7f51\u5173\u662f\u6d41\u91cf\u8bf7\u6c42\u7684\u5165\u53e3\uff0c\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u627f\u62c5\u4e86\u975e\u5e38\u91cd\u8981\u7684\u89d2\u8272\uff0c\u7f51\u5173\u9ad8\u53ef\u7528\u7684\u91cd\u8981\u6027\u4e0d\u8a00\u800c\u55bb\u3002\u5728\u4f7f\u7528\u7f51\u5173\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u6ee1\u8db3\u4e1a\u52a1\u8bc9\u6c42\uff0c\u7ecf\u5e38\u9700\u8981\u53d8\u66f4\u914d\u7f6e\uff0c\u6bd4\u5982\u6d41\u63a7\u89c4\u5219\u3001\u8def\u7531\u89c4\u5219\u7b49\u7b49\u3002\u56e0\u6b64\uff0c\u7f51\u5173\u52a8\u6001\u914d\u7f6e\u662f\u4fdd\u969c\u7f51\u5173\u9ad8\u53ef\u7528\u7684\u91cd\u8981\u56e0\u7d20\u3002"),(0,p.yg)("p",null,"\u5728\u5b9e\u9645\u4f7f\u7528 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u4e5f\u53cd\u9988\u4e86\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"\u4f9d\u8d56 ",(0,p.yg)("inlineCode",{parentName:"li"},"Zookeeper"),"\uff0c\u600e\u4e48\u4f7f\u7528 ",(0,p.yg)("inlineCode",{parentName:"li"},"Etcd"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"Consul"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"Nacos"),"\u7b49\u5176\u4ed6\u6ce8\u518c\u4e2d\u5fc3\uff1f"),(0,p.yg)("li",{parentName:"ul"},"\u4f9d\u8d56 ",(0,p.yg)("inlineCode",{parentName:"li"},"Redis"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"influxdb"),"\uff0c\u6ca1\u6709\u4f7f\u7528\u9650\u6d41\u63d2\u4ef6\u3001\u76d1\u63a7\u63d2\u4ef6\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e9b\uff1f"),(0,p.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u540c\u6b65\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528\u914d\u7f6e\u4e2d\u5fc3\uff1f"),(0,p.yg)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e\u66f4\u65b0\uff1f"),(0,p.yg)("li",{parentName:"ul"},"\u6bcf\u6b21\u90fd\u8981\u67e5\u8be2\u6570\u636e\u5e93\uff0c\u4f7f\u7528",(0,p.yg)("inlineCode",{parentName:"li"},"Redis"),"\u4e0d\u5c31\u884c\u4e86\u5417\uff1f")),(0,p.yg)("p",null,"\u6839\u636e\u7528\u6237\u7684\u53cd\u9988\u4fe1\u606f\uff0c\u6211\u4eec\u5bf9 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u4e5f\u8fdb\u884c\u4e86\u90e8\u5206\u7684\u91cd\u6784\uff0c\u5f53\u524d\u6570\u636e\u540c\u6b65\u7279\u6027\u5982\u4e0b\uff1a"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"\u6240\u6709\u7684\u914d\u7f6e\u90fd\u7f13\u5b58\u5728 ",(0,p.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5185\u5b58\u4e2d\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f7f\u7528\u672c\u5730\u7f13\u5b58\uff0c\u901f\u5ea6\u975e\u5e38\u5feb\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u5728 ",(0,p.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u540e\u53f0\u4efb\u610f\u4fee\u6539\u6570\u636e\uff0c\u5e76\u9a6c\u4e0a\u540c\u6b65\u5230\u7f51\u5173\u5185\u5b58\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u652f\u6301 ",(0,p.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7684\u63d2\u4ef6\u3001\u9009\u62e9\u5668\u3001\u89c4\u5219\u6570\u636e\u3001\u5143\u6570\u636e\u3001\u7b7e\u540d\u6570\u636e\u7b49\u6570\u636e\u540c\u6b65\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u6240\u6709\u63d2\u4ef6\u7684\u9009\u62e9\u5668\uff0c\u89c4\u5219\u90fd\u662f\u52a8\u6001\u914d\u7f6e\uff0c\u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u6570\u636e\u540c\u6b65\u65b9\u5f0f\u652f\u6301 ",(0,p.yg)("inlineCode",{parentName:"li"},"Zookeeper"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"Http \u957f\u8f6e\u8be2"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"Websocket"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"Nacos"),"\u3001",(0,p.yg)("inlineCode",{parentName:"li"},"Etcd")," \u548c ",(0,p.yg)("inlineCode",{parentName:"li"},"Consul"),"\u3002")),(0,p.yg)("h3",{id:"\u539f\u7406\u5206\u6790"},"\u539f\u7406\u5206\u6790"),(0,p.yg)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u6570\u636e\u540c\u6b65\u7684\u6d41\u7a0b\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u5728\u542f\u52a8\u65f6\uff0c\u4f1a\u4ece\u914d\u7f6e\u670d\u52a1\u540c\u6b65\u914d\u7f6e\u6570\u636e\uff0c\u5e76\u4e14\u652f\u6301\u63a8\u62c9\u6a21\u5f0f\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4\u4fe1\u606f\uff0c\u7136\u540e\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002\u7ba1\u7406\u5458\u53ef\u4ee5\u5728\u7ba1\u7406\u540e\u53f0\uff08",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff09\uff0c\u53d8\u66f4\u7528\u6237\u6743\u9650\u3001\u89c4\u5219\u3001\u63d2\u4ef6\u3001\u6d41\u91cf\u914d\u7f6e\uff0c\u901a\u8fc7\u63a8\u62c9\u6a21\u5f0f\u5c06\u53d8\u66f4\u4fe1\u606f\u540c\u6b65\u7ed9 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c\u5177\u4f53\u662f ",(0,p.yg)("inlineCode",{parentName:"p"},"push")," \u6a21\u5f0f\uff0c\u8fd8\u662f ",(0,p.yg)("inlineCode",{parentName:"p"},"pull")," \u6a21\u5f0f\u53d6\u51b3\u4e8e\u4f7f\u7528\u54ea\u79cd\u540c\u6b65\u65b9\u5f0f\u3002"),(0,p.yg)("p",null," ",(0,p.yg)("img",{src:a(84971).A})),(0,p.yg)("p",null,"\u5728\u6700\u521d\u7684\u7248\u672c\u4e2d\uff0c\u914d\u7f6e\u670d\u52a1\u4f9d\u8d56 ",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper")," \u5b9e\u73b0\uff0c\u7ba1\u7406\u540e\u53f0\u5c06\u53d8\u66f4\u4fe1\u606f ",(0,p.yg)("inlineCode",{parentName:"p"},"push")," \u7ed9\u7f51\u5173\u3002\u800c\u73b0\u5728\u53ef\u4ee5\u652f\u6301 ",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Etcd")," \u548c ",(0,p.yg)("inlineCode",{parentName:"p"},"Consul"),"\uff0c\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu.sync.${strategy}")," \u6307\u5b9a\u5bf9\u5e94\u7684\u540c\u6b65\u7b56\u7565\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket")," \u540c\u6b65\u7b56\u7565\uff0c\u53ef\u4ee5\u505a\u5230\u79d2\u7ea7\u6570\u636e\u540c\u6b65\u3002\u4f46\u662f\uff0c\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173 \u548c ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u540c\u6b65\u7b56\u7565\u3002"),(0,p.yg)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u5728\u7528\u6237\u53d1\u751f\u914d\u7f6e\u53d8\u66f4\u4e4b\u540e\uff0c\u4f1a\u901a\u8fc7 ",(0,p.yg)("inlineCode",{parentName:"p"},"EventPublisher")," \u53d1\u51fa\u914d\u7f6e\u53d8\u66f4\u901a\u77e5\uff0c\u7531 ",(0,p.yg)("inlineCode",{parentName:"p"},"EventDispatcher")," \u5904\u7406\u8be5\u53d8\u66f4\u901a\u77e5\uff0c\u7136\u540e\u6839\u636e\u914d\u7f6e\u7684\u540c\u6b65\u7b56\u7565(",(0,p.yg)("inlineCode",{parentName:"p"},"Http\u3001WebSocket\u3001Zookeeper\u3001Nacos\u3001Etcd\u3001Consul"),")\uff0c\u5c06\u914d\u7f6e\u53d1\u9001\u7ed9\u5bf9\u5e94\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u3002"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,p.yg)("inlineCode",{parentName:"li"},"WebSocket")," \u540c\u6b65\u7b56\u7565\uff0c\u5219\u5c06\u53d8\u66f4\u540e\u7684\u6570\u636e\u4e3b\u52a8\u63a8\u9001\u7ed9 ",(0,p.yg)("inlineCode",{parentName:"li"},"shenyu-web"),"\uff0c\u5e76\u4e14\u5728\u7f51\u5173\u5c42\uff0c\u4f1a\u6709\u5bf9\u5e94\u7684 ",(0,p.yg)("inlineCode",{parentName:"li"},"WebsocketDataHandler")," \u5904\u7406\u5668\u6765\u5904\u7406 ",(0,p.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u7684\u6570\u636e\u63a8\u9001\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,p.yg)("inlineCode",{parentName:"li"},"Zookeeper")," \u540c\u6b65\u7b56\u7565\uff0c\u5c06\u53d8\u66f4\u6570\u636e\u66f4\u65b0\u5230 ",(0,p.yg)("inlineCode",{parentName:"li"},"Zookeeper"),"\uff0c\u800c ",(0,p.yg)("inlineCode",{parentName:"li"},"ZookeeperSyncCache")," \u4f1a\u76d1\u542c\u5230 ",(0,p.yg)("inlineCode",{parentName:"li"},"Zookeeper")," \u7684\u6570\u636e\u53d8\u66f4\uff0c\u5e76\u4e88\u4ee5\u5904\u7406\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,p.yg)("inlineCode",{parentName:"li"},"Http")," \u540c\u6b65\u7b56\u7565\uff0c\u7531\u7f51\u5173\u4e3b\u52a8\u53d1\u8d77\u957f\u8f6e\u8be2\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u6709 ",(0,p.yg)("inlineCode",{parentName:"li"},"90s")," \u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c ",(0,p.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u6ca1\u6709\u6570\u636e\u53d8\u66f4\uff0c\u5219\u4f1a\u963b\u585e ",(0,p.yg)("inlineCode",{parentName:"li"},"Http")," \u8bf7\u6c42\uff0c\u5982\u679c\u6709\u6570\u636e\u53d1\u751f\u53d8\u66f4\u5219\u54cd\u5e94\u53d8\u66f4\u7684\u6570\u636e\u4fe1\u606f\uff0c\u5982\u679c\u8d85\u8fc7 ",(0,p.yg)("inlineCode",{parentName:"li"},"60s")," \u4ecd\u7136\u6ca1\u6709\u6570\u636e\u53d8\u66f4\u5219\u54cd\u5e94\u7a7a\u6570\u636e\uff0c\u7f51\u5173\u5c42\u63a5\u5230\u54cd\u5e94\u540e\uff0c\u7ee7\u7eed\u53d1\u8d77 ",(0,p.yg)("inlineCode",{parentName:"li"},"Http")," \u8bf7\u6c42\uff0c\u53cd\u590d\u540c\u6837\u7684\u8bf7\u6c42\u3002")),(0,p.yg)("img",{src:"/img/shenyu/dataSync/config-strategy-processor-zh.png",width:"90%",height:"80%"}),(0,p.yg)("h3",{id:"zookeeper\u540c\u6b65\u539f\u7406"},"Zookeeper\u540c\u6b65\u539f\u7406"),(0,p.yg)("p",null,"\u57fa\u4e8e ",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper")," \u7684\u540c\u6b65\u539f\u7406\u5f88\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u4f9d\u8d56 ",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper")," \u7684 ",(0,p.yg)("inlineCode",{parentName:"p"},"watch")," \u673a\u5236\u3002",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u76d1\u542c\u914d\u7f6e\u7684\u8282\u70b9\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u5728\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u5c06\u6570\u636e\u5168\u91cf\u5199\u5165 ",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper"),"\uff0c\u540e\u7eed\u6570\u636e\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u4f1a\u589e\u91cf\u66f4\u65b0 ",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper")," \u7684\u8282\u70b9\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u76d1\u542c\u914d\u7f6e\u4fe1\u606f\u7684\u8282\u70b9\uff0c\u4e00\u65e6\u6709\u4fe1\u606f\u53d8\u66f4\u65f6\uff0c\u4f1a\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002"),(0,p.yg)("p",null,(0,p.yg)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/soul-zookeeper.png",alt:"zookeeper\u8282\u70b9\u8bbe\u8ba1"})),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u5c06\u914d\u7f6e\u4fe1\u606f\u5199\u5230",(0,p.yg)("inlineCode",{parentName:"p"},"zookeeper"),"\u8282\u70b9\uff0c\u662f\u901a\u8fc7\u7cbe\u5fc3\u8bbe\u8ba1\u7684\uff0c\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3\u4ee3\u7801\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6e90\u7801 ",(0,p.yg)("inlineCode",{parentName:"p"},"ZookeeperSyncDataService"),"\u3002"),(0,p.yg)("h3",{id:"websocket\u540c\u6b65\u539f\u7406"},"WebSocket\u540c\u6b65\u539f\u7406"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket")," \u548c ",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper")," \u673a\u5236\u6709\u70b9\u7c7b\u4f3c\uff0c\u5c06\u7f51\u5173\u4e0e ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u5efa\u7acb\u597d ",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket")," \u8fde\u63a5\u65f6\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u4f1a\u63a8\u9001\u4e00\u6b21\u5168\u91cf\u6570\u636e\uff0c\u540e\u7eed\u5982\u679c\u914d\u7f6e\u6570\u636e\u53d1\u751f\u53d8\u66f4\uff0c\u5219\u4ee5\u589e\u91cf\u5f62\u5f0f\u5c06\u53d8\u66f4\u6570\u636e\u901a\u8fc7 ",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket")," \u4e3b\u52a8\u63a8\u9001\u7ed9 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002"),(0,p.yg)("p",null,"\u4f7f\u7528 ",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket")," \u540c\u6b65\u7684\u65f6\u5019\uff0c\u7279\u522b\u8981\u6ce8\u610f\u65ad\u7ebf\u91cd\u8fde\uff0c\u4e5f\u5c31\u662f\u8981\u4fdd\u6301\u5fc3\u8df3\u3002",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u4f7f\u7528",(0,p.yg)("inlineCode",{parentName:"p"},"java-websocket")," \u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5e93\u6765\u8fdb\u884c",(0,p.yg)("inlineCode",{parentName:"p"},"websocket"),"\u8fde\u63a5\u3002\n\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3\u4ee3\u7801\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6e90\u7801 ",(0,p.yg)("inlineCode",{parentName:"p"},"WebsocketSyncDataService"),"\u3002"),(0,p.yg)("h3",{id:"http\u957f\u8f6e\u8be2\u540c\u6b65\u539f\u7406"},"Http\u957f\u8f6e\u8be2\u540c\u6b65\u539f\u7406"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper"),"\u548c",(0,p.yg)("inlineCode",{parentName:"p"},"WebSocket")," \u6570\u636e\u540c\u6b65\u7684\u673a\u5236\u6bd4\u8f83\u7b80\u5355\uff0c\u800c ",(0,p.yg)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2"),"\u5219\u6bd4\u8f83\u590d\u6742\u3002 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u501f\u9274\u4e86 ",(0,p.yg)("inlineCode",{parentName:"p"},"Apollo"),"\u3001",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos")," \u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u53d6\u5176\u7cbe\u534e\uff0c\u81ea\u5df1\u5b9e\u73b0\u4e86 ",(0,p.yg)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2"),"\u6570\u636e\u540c\u6b65\u529f\u80fd\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u5e76\u975e\u4f20\u7edf\u7684 ",(0,p.yg)("inlineCode",{parentName:"p"},"ajax")," \u957f\u8f6e\u8be2\uff01"),(0,p.yg)("img",{src:"/img/shenyu/dataSync/http-long-polling-zh.png",width:"90%",height:"80%"}),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2")," \u673a\u5236\u5982\u4e0a\u6240\u793a\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4e3b\u52a8\u8bf7\u6c42 ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u7684\u914d\u7f6e\u670d\u52a1\uff0c\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4\u4e3a ",(0,p.yg)("inlineCode",{parentName:"p"},"90s"),"\uff0c\u610f\u5473\u7740\u7f51\u5173\u5c42\u8bf7\u6c42\u914d\u7f6e\u670d\u52a1\u6700\u591a\u4f1a\u7b49\u5f85 ",(0,p.yg)("inlineCode",{parentName:"p"},"90s"),"\uff0c\u8fd9\u6837\u4fbf\u4e8e ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u914d\u7f6e\u670d\u52a1\u53ca\u65f6\u54cd\u5e94\u53d8\u66f4\u6570\u636e\uff0c\u4ece\u800c\u5b9e\u73b0\u51c6\u5b9e\u65f6\u63a8\u9001\u3002"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\u5230\u8fbe ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u4e4b\u540e\uff0c\u5e76\u975e\u7acb\u9a6c\u54cd\u5e94\u6570\u636e\uff0c\u800c\u662f\u5229\u7528 ",(0,p.yg)("inlineCode",{parentName:"p"},"Servlet3.0")," \u7684\u5f02\u6b65\u673a\u5236\uff0c\u5f02\u6b65\u54cd\u5e94\u6570\u636e\u3002\u9996\u5148\uff0c\u5c06\u957f\u8f6e\u8be2\u8bf7\u6c42\u4efb\u52a1 ",(0,p.yg)("inlineCode",{parentName:"p"},"LongPollingClient")," \u6254\u5230 ",(0,p.yg)("inlineCode",{parentName:"p"},"BlockingQueue")," \u4e2d\uff0c\u5e76\u4e14\u5f00\u542f\u8c03\u5ea6\u4efb\u52a1\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"60s")," \u540e\u6267\u884c\uff0c\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f ",(0,p.yg)("inlineCode",{parentName:"p"},"60s")," \u540e\u5c06\u8be5\u957f\u8f6e\u8be2\u8bf7\u6c42\u79fb\u9664\u961f\u5217\u3002\u56e0\u4e3a\u5373\u4fbf\u662f\u6ca1\u6709\u914d\u7f6e\u53d8\u66f4\uff0c\u4e5f\u9700\u8981\u8ba9\u7f51\u5173\u77e5\u9053\uff0c\u4e0d\u80fd\u4e00\u76f4\u7b49\u5f85\u3002\u800c\u4e14\u7f51\u5173\u8bf7\u6c42\u914d\u7f6e\u670d\u52a1\u65f6\uff0c\u4e5f\u6709 ",(0,p.yg)("inlineCode",{parentName:"p"},"90s")," \u7684\u8d85\u65f6\u65f6\u95f4\u3002"),(0,p.yg)("p",null,"\u5982\u679c\u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u7ba1\u7406\u5458\u5728 ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u53d8\u66f4\u4e86\u914d\u7f6e\u6570\u636e\uff0c\u6b64\u65f6\uff0c\u4f1a\u6328\u4e2a\u79fb\u9664\u961f\u5217\u4e2d\u7684\u957f\u8f6e\u8be2\u8bf7\u6c42\uff0c\u5e76\u54cd\u5e94\u6570\u636e\uff0c\u544a\u77e5\u662f\u54ea\u4e2a ",(0,p.yg)("inlineCode",{parentName:"p"},"Group")," \u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u66f4\uff08\u6211\u4eec\u5c06\u63d2\u4ef6\u3001\u89c4\u5219\u3001\u6d41\u91cf\u914d\u7f6e\u3001\u7528\u6237\u914d\u7f6e\u6570\u636e\u5206\u6210\u4e0d\u540c\u7684\u7ec4\uff09\u3002\u7f51\u5173\u6536\u5230\u54cd\u5e94\u4fe1\u606f\u4e4b\u540e\uff0c\u53ea\u77e5\u9053\u662f\u54ea\u4e2a ",(0,p.yg)("inlineCode",{parentName:"p"},"Group")," \u53d1\u751f\u4e86\u914d\u7f6e\u53d8\u66f4\uff0c\u8fd8\u9700\u8981\u518d\u6b21\u8bf7\u6c42\u8be5 ",(0,p.yg)("inlineCode",{parentName:"p"},"Group")," \u7684\u914d\u7f6e\u6570\u636e\u3002\u8fd9\u91cc\u53ef\u80fd\u4f1a\u5b58\u5728\u4e00\u4e2a\u7591\u95ee\uff1a\u4e3a\u4ec0\u4e48\u4e0d\u662f\u76f4\u63a5\u5c06\u53d8\u66f4\u7684\u6570\u636e\u5199\u51fa\uff1f\u6211\u4eec\u5728\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u4e5f\u6df1\u5165\u8ba8\u8bba\u8fc7\u8be5\u95ee\u9898\uff0c\u56e0\u4e3a ",(0,p.yg)("inlineCode",{parentName:"p"},"http \u957f\u8f6e\u8be2")," \u673a\u5236\u53ea\u80fd\u4fdd\u8bc1\u51c6\u5b9e\u65f6\uff0c\u5982\u679c\u5728\u7f51\u5173\u5c42\u5904\u7406\u4e0d\u53ca\u65f6\uff0c\u6216\u8005\u7ba1\u7406\u5458\u9891\u7e41\u66f4\u65b0\u914d\u7f6e\uff0c\u5f88\u6709\u53ef\u80fd\u4fbf\u9519\u8fc7\u4e86\u67d0\u4e2a\u914d\u7f6e\u53d8\u66f4\u7684\u63a8\u9001\uff0c\u5b89\u5168\u8d77\u89c1\uff0c\u6211\u4eec\u53ea\u544a\u77e5\u67d0\u4e2a ",(0,p.yg)("inlineCode",{parentName:"p"},"Group")," \u4fe1\u606f\u53d1\u751f\u4e86\u53d8\u66f4\u3002"),(0,p.yg)("p",null,"\u5f53 ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-web")," \u7f51\u5173\u5c42\u63a5\u6536\u5230 ",(0,p.yg)("inlineCode",{parentName:"p"},"http")," \u54cd\u5e94\u4fe1\u606f\u4e4b\u540e\uff0c\u62c9\u53d6\u53d8\u66f4\u4fe1\u606f\uff08\u5982\u679c\u6709\u53d8\u66f4\u7684\u8bdd\uff09\uff0c\u7136\u540e\u518d\u6b21\u8bf7\u6c42 ",(0,p.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," \u7684\u914d\u7f6e\u670d\u52a1\uff0c\u5982\u6b64\u53cd\u590d\u5faa\u73af\u3002\n\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3\u4ee3\u7801\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6e90\u7801 ",(0,p.yg)("inlineCode",{parentName:"p"},"HttpSyncDataService"),"\u3002"),(0,p.yg)("h3",{id:"nacos\u540c\u6b65\u539f\u7406"},"Nacos\u540c\u6b65\u539f\u7406"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u7684\u540c\u6b65\u539f\u7406\u4e0eZookeeper\u57fa\u672c\u7c7b\u4f3c\uff0c\u4e3b\u8981\u4f9d\u8d56\u4e8e",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u7684",(0,p.yg)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u7ba1\u7406"),",\u5404\u4e2a\u914d\u7f6e\u8282\u70b9\u7684\u8def\u5f84\u4e0eZookeeper\u7c7b\u4f3c\u3002"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u76d1\u542c\u914d\u7f6e\u7684\u8282\u70b9\uff0c\u542f\u52a8\u65f6\uff0c\u5982\u679c",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u4e2d\u4e0d\u5b58\u5728\u914d\u7f6e\u8282\u70b9\uff0c\u5c06\u540c\u6b65\u5168\u91cf\u7684\u6570\u636e\u5199\u5165",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u4e2d\uff0c\u540e\u5e8f\u6570\u636e\u53d1\u9001\u53d8\u66f4\u65f6\uff0c\u5168\u91cf\u66f4\u65b0",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u4e2d\u7684\u914d\u7f6e\u8282\u70b9\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u76d1\u542c\u914d\u7f6e\u4fe1\u606f\u7684\u8282\u70b9\uff0c\u4e00\u65e6\u6709\u4fe1\u606f\u53d8\u66f4\u65f6\uff0c\u4f1a\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002"),(0,p.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3\u4ee3\u7801\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6e90\u7801 ",(0,p.yg)("inlineCode",{parentName:"p"},"NacosSyncDataService"),"\u548c",(0,p.yg)("inlineCode",{parentName:"p"},"Nacos"),"\u7684",(0,p.yg)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/sdk.html"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.yg)("h3",{id:"etcd\u540c\u6b65\u539f\u7406"},"Etcd\u540c\u6b65\u539f\u7406"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Etcd")," \u6570\u636e\u540c\u6b65\u539f\u7406\u4e0eZookeeper\u7c7b\u4f3c\uff0c\u4e3b\u8981\u4f9d\u8d56\u4e8e",(0,p.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u7684",(0,p.yg)("inlineCode",{parentName:"p"},"watch"),"\u673a\u5236\uff0c\u5404\u4e2a\u914d\u7f6e\u8282\u70b9\u8def\u5f84\u4e0e",(0,p.yg)("inlineCode",{parentName:"p"},"Zookeeper"),"\u76f8\u540c\u3002"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u7684\u539f\u751fAPI\u4f7f\u7528\u7a0d\u6709\u70b9\u590d\u6742\uff0c\u6240\u6709\u5bf9\u5176\u8fdb\u884c\u4e86\u4e00\u5b9a\u7684\u5c01\u88c5\u3002"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u76d1\u542c\u914d\u7f6e\u7684\u8282\u70b9\uff0c\u542f\u52a8\u65f6\uff0c\u5982\u679c",(0,p.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u4e2d\u4e0d\u5b58\u5728\u914d\u7f6e\u8282\u70b9\uff0c\u5c06\u540c\u6b65\u5168\u91cf\u7684\u6570\u636e\u5199\u5165",(0,p.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u4e2d\uff0c\u540e\u5e8f\u6570\u636e\u53d1\u9001\u53d8\u66f4\u65f6\uff0c\u589e\u91cf\u66f4\u65b0",(0,p.yg)("inlineCode",{parentName:"p"},"Etcd"),"\u4e2d\u7684\u914d\u7f6e\u8282\u70b9\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u76d1\u542c\u914d\u7f6e\u4fe1\u606f\u7684\u8282\u70b9\uff0c\u4e00\u65e6\u6709\u4fe1\u606f\u53d8\u66f4\u65f6\uff0c\u4f1a\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002"),(0,p.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3\u4ee3\u7801\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6e90\u7801 ",(0,p.yg)("inlineCode",{parentName:"p"},"EtcdSyncDataService"),"\u3002"),(0,p.yg)("h3",{id:"consul\u540c\u6b65\u539f\u7406"},"Consul\u540c\u6b65\u539f\u7406"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Consul")," \u6570\u636e\u540c\u6b65\u539f\u7406\u662f\u7f51\u5173\u5b9a\u65f6\u8f6e\u8be2 ",(0,p.yg)("inlineCode",{parentName:"p"},"Consul")," \u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c\u83b7\u53d6\u914d\u7f6e\u7248\u672c\u53f7\u4e0e\u672c\u5730\u8fdb\u884c\u6bd4\u5bf9\u3002"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u5b9a\u65f6\u8f6e\u8be2\u914d\u7f6e\u7684\u8282\u70b9\uff0c\u9ed8\u8ba4\u95f4\u9694\u65f6\u95f4\u4e3a1s\u3002\u542f\u52a8\u65f6\uff0c\u5982\u679c ",(0,p.yg)("inlineCode",{parentName:"p"},"Consul")," \u4e2d\u4e0d\u5b58\u5728\u914d\u7f6e\u8282\u70b9\uff0c\u5c06\u540c\u6b65\u5168\u91cf\u7684\u6570\u636e\u5199\u5165",(0,p.yg)("inlineCode",{parentName:"p"},"Consul"),"\u4e2d\uff0c\u540e\u7eed\u6570\u636e\u53d1\u9001\u53d8\u66f4\u65f6\uff0c\u589e\u91cf\u66f4\u65b0 ",(0,p.yg)("inlineCode",{parentName:"p"},"Consul")," \u4e2d\u7684\u914d\u7f6e\u8282\u70b9\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c",(0,p.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u5b9a\u65f6\u8f6e\u8be2\u914d\u7f6e\u4fe1\u606f\u7684\u8282\u70b9\uff0c\u62c9\u53d6\u914d\u7f6e\u7248\u672c\u53f7\u4e0e\u672c\u5730\u8fdb\u884c\u6bd4\u5bf9\uff0c\u82e5\u53d1\u73b0\u7248\u672c\u53f7\u53d8\u66f4\u65f6\uff0c\u4f1a\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002"),(0,p.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u6df1\u5165\u4e86\u89e3\u4ee3\u7801\u5b9e\u73b0\uff0c\u8bf7\u53c2\u8003\u6e90\u7801 ",(0,p.yg)("inlineCode",{parentName:"p"},"ConsulSyncDataService"),"\u3002"))}g.isMDXComponent=!0},84971:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/plugin-data-5c5e8976bda725e8a236faef293b185a.png"}}]);