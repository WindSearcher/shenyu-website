"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[50222],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24978:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(58168),i=(r(96540),r(15680));const a={title:"WASM plugin design",keywords:["WASM"],description:"Apache ShenYu WASM plugin design"},o=void 0,s={unversionedId:"design/wasm-plugin-design",id:"version-2.6.1/design/wasm-plugin-design",isDocsHomePage:!1,title:"WASM plugin design",description:"Apache ShenYu WASM plugin design",source:"@site/versioned_docs/version-2.6.1/design/wasm-plugin-design.md",sourceDirName:"design",slug:"/design/wasm-plugin-design",permalink:"/docs/design/wasm-plugin-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/design/wasm-plugin-design.md",version:"2.6.1",frontMatter:{title:"WASM plugin design",keywords:["WASM"],description:"Apache ShenYu WASM plugin design"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"SPI Design",permalink:"/docs/design/spi-design"},next:{title:"Deployment Prerequisites",permalink:"/docs/deployment/deployment-before"}},l=[{value:"Develop Phase",id:"develop-phase",children:[]},{value:"Prepare Phase",id:"prepare-phase",children:[]},{value:"Runtime Phase",id:"runtime-phase",children:[]}],p={toc:l},u="wrapper";function c(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," is a Java native API Gateway for service proxy, protocol conversion and API governance. Currently, ShenYu has good scalability in the Java language. However, ShenYu's support for multiple languages is still relatively weak."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"WASM"),"(WebAssembly) bytecode is designed to be encoded in a size- and load-time-efficient binary format. WebAssembly aims to leverage the common hardware features available on various platforms to execute in browsers at machine code speed."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"WASI"),"(WebAssembly System Interface) allows WASM to run in non browser environments such as Linux."),(0,i.yg)("p",null,"The goal of ",(0,i.yg)("inlineCode",{parentName:"p"},"WASMPlugin")," is to be able to run WASM bytecode. Other languages, as long as their code can be compiled into WASM bytecode (such as Rust/golang/C++), can be used to write ShenYu plugins."),(0,i.yg)("h2",{id:"develop-phase"},"Develop Phase"),(0,i.yg)("img",{src:"/img/shenyu/plugin/wasm/wasm-plugin-develop.png"}),(0,i.yg)("h2",{id:"prepare-phase"},"Prepare Phase"),(0,i.yg)("img",{src:"/img/shenyu/plugin/wasm/wasm-plugin-prepare.png"}),(0,i.yg)("h2",{id:"runtime-phase"},"Runtime Phase"),(0,i.yg)("img",{src:"/img/shenyu/plugin/wasm/wasm-plugin-runtime.png"}))}c.isMDXComponent=!0}}]);