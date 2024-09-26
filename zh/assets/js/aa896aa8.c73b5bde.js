"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10588],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(t),m=a,d=y["".concat(l,".").concat(m)]||y[m]||u[m]||i;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[y]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37384:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const i={sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},o=void 0,p={unversionedId:"deployment/deployment-package",id:"version-2.4.0/deployment/deployment-package",isDocsHomePage:!1,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/zh/docs/2.4.0/deployment/deployment-package",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-package.md",version:"2.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"\u672c\u5730\u90e8\u7f72",permalink:"/zh/docs/2.4.0/deployment/deployment-local"},next:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/2.4.0/deployment/deployment-docker"}},l=[{value:"\u542f\u52a8 Apache ShenYu Admin",id:"\u542f\u52a8-apache-shenyu-admin",children:[]},{value:"\u542f\u52a8 Apache ShenYu Bootstrap",id:"\u542f\u52a8-apache-shenyu-bootstrap",children:[]}],c={toc:l},s="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.yg)("h3",{id:"\u542f\u52a8-apache-shenyu-admin"},"\u542f\u52a8 Apache ShenYu Admin"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.0/apache-shenyu-incubating-2.4.0-admin-bin.tar.gz"},"apache-shenyu-incubating-2.4.0-admin-bin.tar.gz"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.yg)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.0-admin-bin.tar.gz"),"\u3002 \u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = h2\n\n> linux: ./start.sh --spring.profiles.active = h2\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u5c06 ",(0,a.yg)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,a.yg)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff0c \u8fdb\u5165 ",(0,a.yg)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d ",(0,a.yg)("inlineCode",{parentName:"li"},"mysql")," \u7684\u914d\u7f6e\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,a.yg)("h3",{id:"\u542f\u52a8-apache-shenyu-bootstrap"},"\u542f\u52a8 Apache ShenYu Bootstrap"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.0/apache-shenyu-incubating-2.4.0-bootstrap-bin.tar.gz"},"apache-shenyu-incubating-2.4.0-bootstrap-bin.tar.gz"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.yg)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.0-bootstrap-bin.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}y.isMDXComponent=!0}}]);