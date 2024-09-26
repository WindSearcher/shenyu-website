"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[82909],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,y=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66845:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(58168),i=(r(96540),r(15680));const a={title:"Custom Sign Algorithm",keywords:["Custom Sign"],description:"specify sign plugins for examination"},o=void 0,s={unversionedId:"developer/custom-sign-algorithm",id:"version-2.6.0/developer/custom-sign-algorithm",isDocsHomePage:!1,title:"Custom Sign Algorithm",description:"specify sign plugins for examination",source:"@site/versioned_docs/version-2.6.0/developer/custom-sign-algorithm.md",sourceDirName:"developer",slug:"/developer/custom-sign-algorithm",permalink:"/docs/2.6.0/developer/custom-sign-algorithm",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/developer/custom-sign-algorithm.md",version:"2.6.0",frontMatter:{title:"Custom Sign Algorithm",keywords:["Custom Sign"],description:"specify sign plugins for examination"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Custom Response",permalink:"/docs/2.6.0/developer/custom-result"},next:{title:"A multilingual HTTP client",permalink:"/docs/2.6.0/developer/developer-shenyu-client"}},l=[{value:"Description",id:"description",children:[]},{value:"Extension",id:"extension",children:[]}],c={toc:l},u="wrapper";function p(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Users can customize the signature authentication algorithm to achieve verification.")),(0,i.yg)("h2",{id:"extension"},"Extension"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The default implementation is ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.sign.service.ComposableSignService"),".",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@Bean\n@ConditionalOnMissingBean(value = SignService.class, search = SearchStrategy.ALL)\npublic SignService signService() {\n    return new ComposableSignService(new DefaultExtractor(), new DefaultSignProvider());\n}\n"))),(0,i.yg)("li",{parentName:"ul"},"Declare a new class named ",(0,i.yg)("inlineCode",{parentName:"li"},"CustomSignService")," and implements  ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.plugin.sign.service"),".")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public interface SignService {\n\n    /**\n     * Gets verifyResult.\n     * @param exchange exchange\n     * @param requestBody requestBody\n     * @return result\n     */\n    VerifyResult signatureVerify(ServerWebExchange exchange, String requestBody);\n\n    /**\n     * Gets verifyResult.\n     * @param exchange exchange\n     * @return result\n     */\n    VerifyResult signatureVerify(ServerWebExchange exchange);\n}\n\n\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When returning is ",(0,i.yg)("inlineCode",{parentName:"li"},"isSuccess()")," of VerifyResult, the sign verification passes. If there's false, the ",(0,i.yg)("inlineCode",{parentName:"li"},"getReason()")," of VerifyResult will be return to the frontend to show."),(0,i.yg)("li",{parentName:"ul"},"Register defined class as a Spring Bean.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"   @Bean\n   public SignService customSignService() {\n         return new CustomSignService();\n   }\n")))}p.isMDXComponent=!0}}]);