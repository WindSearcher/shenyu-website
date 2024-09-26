"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[95349],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=u(n),d=o,m=y["".concat(p,".").concat(d)]||y[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3510:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const i={title:"ShenYu \u6027\u80fd\u4f18\u5316",keywords:["\u4f18\u5316"],description:"ShenYu \u6027\u80fd\u4f18\u5316"},a=void 0,l={unversionedId:"developer/shenyu-optimize",id:"version-2.4.1/developer/shenyu-optimize",isDocsHomePage:!1,title:"ShenYu \u6027\u80fd\u4f18\u5316",description:"ShenYu \u6027\u80fd\u4f18\u5316",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/developer/shenyu-optimize.md",sourceDirName:"developer",slug:"/developer/shenyu-optimize",permalink:"/zh/docs/2.4.1/developer/shenyu-optimize",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/developer/shenyu-optimize.md",version:"2.4.1",frontMatter:{title:"ShenYu \u6027\u80fd\u4f18\u5316",keywords:["\u4f18\u5316"],description:"ShenYu \u6027\u80fd\u4f18\u5316"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"\u672c\u5730\u6a21\u5f0f",permalink:"/zh/docs/2.4.1/developer/local-model"},next:{title:"\u7ebf\u7a0b\u6a21\u578b",permalink:"/zh/docs/2.4.1/developer/thread-model"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u672c\u8eab\u6d88\u8017",id:"\u672c\u8eab\u6d88\u8017",children:[]},{value:"\u5e95\u5c42Netty\u8c03\u4f18",id:"\u5e95\u5c42netty\u8c03\u4f18",children:[]}],u={toc:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,o.yg)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u8fdb\u884c\u4f18\u5316\u3002")),(0,o.yg)("h2",{id:"\u672c\u8eab\u6d88\u8017"},"\u672c\u8eab\u6d88\u8017"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u672c\u8eab\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u90fd\u662f\u57fa\u4e8e ",(0,o.yg)("inlineCode",{parentName:"li"},"JVM")," \u5185\u5b58\u6765\u5339\u914d\uff0c\u672c\u8eab\u6d88\u8017\u65f6\u95f4\u5927\u6982\u5728 ",(0,o.yg)("inlineCode",{parentName:"li"},"1-3ms")," \u5de6\u53f3\u3002")),(0,o.yg)("h2",{id:"\u5e95\u5c42netty\u8c03\u4f18"},"\u5e95\u5c42Netty\u8c03\u4f18"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u5185\u7f6e\u4f9d\u8d56 ",(0,o.yg)("inlineCode",{parentName:"p"},"spring-webflux")," \u800c\u5176\u5e95\u5c42\u662f\u4f7f\u7528\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"netty")," \u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49 ",(0,o.yg)("inlineCode",{parentName:"p"},"netty")," \u7684\u76f8\u5173\u53c2\u6570\u6765\u5bf9 ",(0,o.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u8fdb\u884c\u4f18\u5316\uff0c\u4ee5\u4e0b\u662f\u793a\u4f8b\uff1a"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'   @Bean\n    public NettyReactiveWebServerFactory nettyReactiveWebServerFactory() {\n        NettyReactiveWebServerFactory webServerFactory = new NettyReactiveWebServerFactory();\n        webServerFactory.addServerCustomizers(new EventLoopNettyCustomizer());\n        return webServerFactory;\n    }\n\n    private static class EventLoopNettyCustomizer implements NettyServerCustomizer {\n\n        @Override\n        public HttpServer apply(final HttpServer httpServer) {\n            return httpServer\n                    .tcpConfiguration(tcpServer -> tcpServer\n                            .runOn(LoopResources.create("shenyu-netty", 1, DEFAULT_IO_WORKER_COUNT, true), false)\n                            .selectorOption(ChannelOption.SO_REUSEADDR, true)\n                            .selectorOption(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT)\n                            .option(ChannelOption.TCP_NODELAY, true)\n                            .option(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT));\n        }\n    }\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u8fd9\u4e2a\u7c7b\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap")," \u4e2d\u5df2\u7ecf\u5185\u7f6e\uff0c\u5728\u538b\u6d4b\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6765\u8fdb\u884c\u4f18\u5316\u8bbe\u7f6e\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u4e1a\u52a1\u7ebf\u7a0b\u6a21\u578b\uff0c\u8bf7\u53c2\u8003\uff1a",(0,o.yg)("a",{parentName:"p",href:"./thread-model"},"\u7ebf\u7a0b\u6a21\u578b")," \u3002"))))}y.isMDXComponent=!0}}]);