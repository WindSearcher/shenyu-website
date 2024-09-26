"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6810],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),y=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=y(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=y(t),s=a,u=m["".concat(i,".").concat(s)]||m[s]||d[s]||p;return t?r.createElement(u,o(o({ref:n},c),{},{components:t})):r.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var y=2;y<p;y++)o[y]=t[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},89070:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=t(58168),a=(t(96540),t(15680));const p={sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},o=void 0,l={unversionedId:"deployment/deployment-local",id:"deployment/deployment-local",isDocsHomePage:!1,title:"\u672c\u5730\u90e8\u7f72",description:"\u672c\u5730\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-local.md",sourceDirName:"deployment",slug:"/deployment/deployment-local",permalink:"/zh/docs/next/deployment/deployment-local",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-local.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6",permalink:"/zh/docs/next/deployment/deployment-before"},next:{title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-quick"}},i=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",children:[]}],y={toc:i},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u672c\u5730\u73af\u5883\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,a.yg)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5JDK1.8+"),(0,a.yg)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Git"),(0,a.yg)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Maven"),(0,a.yg)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u6b3e\u5f00\u53d1\u5de5\u5177\uff0c\u6bd4\u5982IDEA")),(0,a.yg)("h3",{id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"},"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git clone https://github.com/apache/shenyu.git\ncd shenyu\nmvn clean install '-Dmaven.javadoc.skip=true' '-B' '-Drat.skip=true' '-Djacoco.skip=true' '-DskipITs' '-DskipTests'\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.admin.ShenyuAdminBootstrap"),"\uff0c\u8bbf\u95ee http://localhost:9095 \uff0c \u9ed8\u8ba4\u7528\u6237\u540d\u548c\u5bc6\u7801\u5206\u522b\u4e3a: ",(0,a.yg)("inlineCode",{parentName:"p"},"admin")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"123456"),"\u3002"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"h2"),"\u6765\u5b58\u50a8\uff0c\u8bbe\u7f6e\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2")," \u542f\u52a8\u670d\u52a1\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"MySQL"),"\u6765\u5b58\u50a8\uff0c\u9700\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/deployment/deployment-before#mysql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u548c\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"application-mysql.yml")," \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc")," \u76f8\u5173\u914d\u7f6e\uff0c\u518d\u8bbe\u7f6e\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"--spring.profiles.active = mysql")," \u542f\u52a8\u670d\u52a1\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"PostgreSql"),"\u6765\u5b58\u50a8\uff0c\u9700\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/deployment/deployment-before#postgresql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u548c\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"application-pg.yml")," \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc")," \u76f8\u5173\u914d\u7f6e\uff0c\u518d\u8bbe\u7f6e\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"--spring.profiles.active = pg")," \u542f\u52a8\u670d\u52a1\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"Oracle"),"\u6765\u5b58\u50a8\uff0c\u9700\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/deployment/deployment-before#oracle"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u548c\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"application-oracle.yml")," \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc")," \u76f8\u5173\u914d\u7f6e\uff0c\u518d\u8bbe\u7f6e\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"--spring.profiles.active = oracle")," \u542f\u52a8\u670d\u52a1\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"OpenGuass"),"\u6765\u5b58\u50a8\uff0c\u9700\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"/zh/docs/next/deployment/deployment-before#opengauss"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u548c\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"application-og.yml")," \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"jdbc")," \u76f8\u5173\u914d\u7f6e\uff0c\u518d\u8bbe\u7f6e\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"--spring.profiles.active = og")," \u542f\u52a8\u670d\u52a1\u3002")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.bootstrap.ShenyuBootstrapApplication"),"\u3002"))))}m.isMDXComponent=!0}}]);