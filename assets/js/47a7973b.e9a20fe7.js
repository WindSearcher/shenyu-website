"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4399],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,d=u["".concat(l,".").concat(y)]||u[y]||g[y]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},80690:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(58168),i=(t(96540),t(15680));const o={title:"CryptorResponse plugin",keywords:["CryptorResponse"],description:"CryptorResponse plugin"},a=void 0,p={unversionedId:"plugin-center/authority-and-certification/cryptor-response-plugin",id:"version-2.4.1/plugin-center/authority-and-certification/cryptor-response-plugin",isDocsHomePage:!1,title:"CryptorResponse plugin",description:"CryptorResponse plugin",source:"@site/versioned_docs/version-2.4.1/plugin-center/authority-and-certification/cryptor-response-plugin.md",sourceDirName:"plugin-center/authority-and-certification",slug:"/plugin-center/authority-and-certification/cryptor-response-plugin",permalink:"/docs/2.4.1/plugin-center/authority-and-certification/cryptor-response-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/authority-and-certification/cryptor-response-plugin.md",version:"2.4.1",frontMatter:{title:"CryptorResponse plugin",keywords:["CryptorResponse"],description:"CryptorResponse plugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"CryptorRequest plugin",permalink:"/docs/2.4.1/plugin-center/authority-and-certification/cryptor-request-plugin"},next:{title:"JWT plugin",permalink:"/docs/2.4.1/plugin-center/authority-and-certification/jwt-plugin"}},l=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"CryptorResponse")," plug-in uses ",(0,i.yg)("inlineCode",{parentName:"li"},"fieldNames")," to match the parameters in ",(0,i.yg)("inlineCode",{parentName:"li"},"responseBody")," for ",(0,i.yg)("inlineCode",{parentName:"li"},"encryption")," processing, replacing the corresponding content of the current ",(0,i.yg)("inlineCode",{parentName:"li"},"fieldNames"),".")),(0,i.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"In ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," BasicConfig --\x3e plugin -> ",(0,i.yg)("inlineCode",{parentName:"li"},"cryptor_response")," set to enable.")),(0,i.yg)("img",{src:"/img/shenyu/plugin/cryptor/enable-cryptor-response-plugin.png",width:"80%",height:"80%"}),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open ",(0,i.yg)("inlineCode",{parentName:"p"},"selector")," to configure the traffic that needs to be matched.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"Rules")," configuration corresponding to the ",(0,i.yg)("inlineCode",{parentName:"p"},"selector"),"."),(0,i.yg)("img",{src:"/img/shenyu/plugin/cryptor/cryptor-response-rules-config.png",width:"80%",height:"80%"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"strategyName: Algorithm name. Currently, based on shenyu's SPI mechanism, the encryption and decryption algorithms can be customized,\nNeed to implement the ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cryptor.strategy.CryptorStrategy")," interface."),(0,i.yg)("p",{parentName:"li"},"At the same time find the ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cryptor.strategy.CryptorStrategy")," file under ",(0,i.yg)("inlineCode",{parentName:"p"},"resources/META-INF/shenyu/"),",\nWrite the name of the algorithm, and the package name of the class that implements the ",(0,i.yg)("inlineCode",{parentName:"p"},"CryptorStrategy")," interface."))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"fieldNames: Matching parameter name. Support parsing multi-level json format matching, using ",(0,i.yg)("inlineCode",{parentName:"li"},".")," segmentation, such as data.id.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json5"},'    {\n      data: {\n        "id": ""\n      }\n    }\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"key: Secret key. Used to encrypt data.")),(0,i.yg)("h2",{id:"plugin-use"},"Plugin Use"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add support for ",(0,i.yg)("inlineCode",{parentName:"li"},"cryptorResponse")," in the ",(0,i.yg)("inlineCode",{parentName:"li"},"pom.xml")," file of shenyu-bootstrap.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu Cryptor Response plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-cryptor</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu Cryptor Response plugin end--\x3e\n")),(0,i.yg)("h2",{id:"situation"},"Situation"),(0,i.yg)("p",null,"Prevent Internet hacking and obtain data maliciously. Improve data security."))}u.isMDXComponent=!0}}]);