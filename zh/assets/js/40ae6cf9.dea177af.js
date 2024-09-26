"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[37875],{15680:(e,n,i)=>{i.d(n,{xA:()=>c,yg:()=>s});var r=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,r,a=function(e,n){if(null==e)return{};var i,r,a={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=r.createContext({}),g=function(e){var n=r.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=g(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var i=e.components,a=e.mdxType,t=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=g(i),m=a,s=u["".concat(o,".").concat(m)]||u[m]||y[m]||t;return i?r.createElement(s,l(l({ref:n},c),{},{components:i})):r.createElement(s,l({ref:n},c))}));function s(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=i.length,l=new Array(t);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var g=2;g<t;g++)l[g]=i[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},29688:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>p,toc:()=>o});var r=i(58168),a=(i(96540),i(15680));const t={title:"Resilience4j\u63d2\u4ef6",keywords:["Resilience4j"],description:"resilience4j\u63d2\u4ef6"},l=void 0,p={unversionedId:"plugin-center/fault-tolerance/resilience4j-plugin",id:"version-2.4.2/plugin-center/fault-tolerance/resilience4j-plugin",isDocsHomePage:!1,title:"Resilience4j\u63d2\u4ef6",description:"resilience4j\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/plugin-center/fault-tolerance/resilience4j-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/resilience4j-plugin",permalink:"/zh/docs/2.4.2/plugin-center/fault-tolerance/resilience4j-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/plugin-center/fault-tolerance/resilience4j-plugin.md",version:"2.4.2",frontMatter:{title:"Resilience4j\u63d2\u4ef6",keywords:["Resilience4j"],description:"resilience4j\u63d2\u4ef6"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"RateLimiter\u63d2\u4ef6",permalink:"/zh/docs/2.4.2/plugin-center/fault-tolerance/rate-limiter-plugin"},next:{title:"Sentinel\u63d2\u4ef6",permalink:"/zh/docs/2.4.2/plugin-center/fault-tolerance/sentinel-plugin"}},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 resilience4j \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-resilience4j-\u63d2\u4ef6",children:[]},{value:"Resilience4j \u63d2\u4ef6\u914d\u7f6e",id:"resilience4j-\u63d2\u4ef6\u914d\u7f6e",children:[]}],g={toc:o},c="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(c,(0,r.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"resilience4j"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u9650\u6d41\u4e0e\u7194\u65ad\u7684\u53ef\u9009\u9009\u62e9\u4e4b\u4e00\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"resilience4j"),"\u4e3a\u7f51\u5173\u7194\u65ad\u9650\u6d41\u63d0\u4f9b\u80fd\u529b\u3002")),(0,a.yg)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,a.yg)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"../../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,a.yg)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,a.yg)("inlineCode",{parentName:"li"},"resilience4j"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002 \u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u53ef\u4ee5\u5c06\u5176\u5173\u95ed\u3002")),(0,a.yg)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-1.png",width:"80%",height:"80%"}),(0,a.yg)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-resilience4j-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 resilience4j \u63d2\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"li"},"resilience4j"),"\u7684\u4f9d\u8d56\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu resilience4j plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-resilience4j</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu resilience4j plugin end--\x3e\n")),(0,a.yg)("h2",{id:"resilience4j-\u63d2\u4ef6\u914d\u7f6e"},"Resilience4j \u63d2\u4ef6\u914d\u7f6e"),(0,a.yg)("p",null,"\u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\uff0c \u8fd9\u91cc\u53ea\u5bf9\u90e8\u5206\u5b57\u6bb5\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002"),(0,a.yg)("h4",{id:"\u9009\u62e9\u5668\u914d\u7f6e"},"\u9009\u62e9\u5668\u914d\u7f6e"),(0,a.yg)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u7b2c\u4e00\u6b21\u7b5b\u9009\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\u5b57\u6bb5\u3002"),(0,a.yg)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-2.png",width:"80%",height:"80%"}),(0,a.yg)("h4",{id:"\u89c4\u5219\u914d\u7f6e"},"\u89c4\u5219\u914d\u7f6e"),(0,a.yg)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u6700\u7ec8\u7b5b\u9009\uff0c\u6709\u89c4\u5219\u5904\u7406\u903b\u8f91\u3002"),(0,a.yg)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-3.png",width:"80%",height:"80%"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"resilience4j"),"\u5904\u7406\u8be6\u89e3\uff1a"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"limitForPeriod"),"(\u6bcf\u6b21\u5237\u65b0\u4ee4\u724c\u7684\u6570\u91cf): \u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"50"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"limitRefreshPeriod"),"(\u5237\u65b0\u4ee4\u724c\u7684\u65f6\u95f4\u95f4\u9694): \u5355\u4f4d",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"500"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"timeoutDurationRate"),"(\u7b49\u5f85\u83b7\u53d6\u4ee4\u724c\u7684\u8d85\u65f6\u65f6\u95f4): \u5355\u4f4d",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"5000"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"circuitEnable"),"(\u662f\u5426\u5f00\u542f\u7194\u65ad): ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\uff1a\u5173\u95ed\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"1"),"\uff1a\u5f00\u542f\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"failureRateThreshold"),"(\u9519\u8bef\u7387\u767e\u5206\u6bd4): \u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\uff0c\u7194\u65ad\u5668\u624d\u4f1a\u5f00\u542f\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"50"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"fallbackUri"),"\uff1a\u964d\u7ea7\u5904\u7406\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"uri"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"minimumNumberOfCalls"),"(\u5f00\u542f\u7194\u65ad\u7684\u6700\u5c0f\u8bf7\u6c42\u6570): \u8d85\u8fc7\u8fd9\u4e2a\u8bf7\u6c42\u6570\u624d\u5f00\u542f\u7194\u65ad\u7edf\u8ba1\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"100"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"bufferSizeInHalfOpen"),"(\u534a\u5f00\u72b6\u6001\u4e0b\u7684\u73af\u5f62\u7f13\u51b2\u533a\u5927\u5c0f): \u5fc5\u987b\u8fbe\u5230\u6b64\u6570\u91cf\u624d\u4f1a\u8ba1\u7b97\u5931\u8d25\u7387\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"10"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"slidingWindowSize"),"(\u6ed1\u52a8\u7a97\u53e3\u5927\u5c0f): \u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"100"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"slidingWindowType"),"(\u6ed1\u52a8\u7a97\u53e3\u7c7b\u578b): ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\uff1a\u57fa\u4e8e\u8ba1\u6570\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"1"),"\uff1a\u57fa\u4e8e\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"timeoutDuration"),"(\u7194\u65ad\u8d85\u65f6\u65f6\u95f4): \u5355\u4f4d",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"30000"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"waitIntervalInOpen"),"(\u7194\u65ad\u5668\u5f00\u542f\u6301\u7eed\u65f6\u95f4): \u5355\u4f4d",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"60000"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"automaticTransitionFromOpenToHalfOpenEnabled"),"\uff1a\u662f\u5426\u81ea\u52a8\u4ece",(0,a.yg)("inlineCode",{parentName:"p"},"open"),"\u72b6\u6001\u8f6c\u6362\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"half-open"),"\u72b6\u6001\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"\uff1a\u662f\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"\uff1a\u5426\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"\u3002"))))))}u.isMDXComponent=!0}}]);