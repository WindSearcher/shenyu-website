"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[58408],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99084:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},o=void 0,i={unversionedId:"developer/spi/custom-load-balance",id:"version-2.4.3/developer/spi/custom-load-balance",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/spi/custom-load-balance.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-load-balance",permalink:"/zh/docs/2.4.3/developer/spi/custom-load-balance",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/spi/custom-load-balance.md",version:"2.4.3",frontMatter:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",description:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u7f13\u5b58\u63d2\u4ef6",permalink:"/zh/docs/2.4.3/plugin-center/cache/cache-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u5339\u914d\u65b9\u5f0f",permalink:"/zh/docs/2.4.3/developer/spi/custom-match-mode"}},p=[],c={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer")," \u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomLoadBalancer"),"\uff0c\u7ee7\u627f",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.AbstractLoadBalancer"),"\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class CustomLoadBalancer extends AbstractLoadBalancer {\n\n    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        // \u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u5b9e\u73b0\u903b\u8f91\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u5de5\u7a0b\u7684META-INF/services\u76ee\u5f55\u521b\u5efa ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer"),"\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\u8868\u793a",(0,r.yg)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"${custom class path}"),"\u8868\u793a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u540d\u3002\u6bd4\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomLoadBalancer\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u5de5\u7a0b\u6253\u5305\uff0c\u62f7\u8d1d\u5230\u7f51\u5173 (bootstrap-bin) \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," \u76ee\u5f55\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u7ba1\u7406\u7cfb\u7edf --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406\uff0c \u627e\u5230\u5b57\u5178\u7f16\u7801\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),"\uff0c\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u6ce8\u610f\u5b57\u5178\u540d\u79f0\u8981\u4e3a: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u56fe\u4e2d\u7684\u793a\u4f8b\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"custom"),"\u3002"))),(0,r.yg)("img",{src:"/img/shenyu/custom/custom_load_balancer_zh.png",width:"80%",height:"70%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7c7b\u578b\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"loadBalance"),"\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u7f16\u7801\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),"\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u540d\u79f0\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"\uff0c\u586b\u5199\u81ea\u5b9a\u4e49",(0,r.yg)("inlineCode",{parentName:"p"},"spi"),"\u7684\u540d\u79f0\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u503c\uff1a\u4f7f\u7528\u65f6\uff0c\u4e0b\u62c9\u6846\u7684\u503c\uff0c\u4e0d\u8981\u548c\u73b0\u6709\u7684\u91cd\u590d\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u5b57\u5178\u63cf\u8ff0\u6216\u5907\u6ce8\u4fe1\u606f\uff1a\u63cf\u8ff0\u4fe1\u606f\uff1b"),(0,r.yg)("p",{parentName:"blockquote"},"\u6392\u5e8f\uff1a \u6392\u5e8f\uff1b")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u6dfb\u52a0\u9009\u62e9\u5668\u6216\u89c4\u5219\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u5339\u914d\u65b9\u5f0f\uff1a")),(0,r.yg)("img",{src:"/img/shenyu/custom/use_custom_load_balancer_zh.png",width:"90%",height:"80%"}))}u.isMDXComponent=!0}}]);