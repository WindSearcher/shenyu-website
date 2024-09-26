"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[78998],{15680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>g});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||y[d]||o;return r?t.createElement(g,i(i({ref:n},l),{},{components:r})):t.createElement(g,i({ref:n},l))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48977:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={title:"Brpc Proxy",description:"Brpc Proxy"},i=void 0,p={unversionedId:"user-guide/proxy/brpc-proxy",id:"version-2.6.0/user-guide/proxy/brpc-proxy",isDocsHomePage:!1,title:"Brpc Proxy",description:"Brpc Proxy",source:"@site/versioned_docs/version-2.6.0/user-guide/proxy/brpc-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/brpc-proxy",permalink:"/docs/2.6.0/user-guide/proxy/brpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.0/user-guide/proxy/brpc-proxy.md",version:"2.6.0",frontMatter:{title:"Brpc Proxy",description:"Brpc Proxy"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Using Zookeeper with Shenyu-SDK",permalink:"/docs/2.6.0/user-guide/sdk-usage/shenyu-sdk-zookeeper"},next:{title:"Dubbo Proxy",permalink:"/docs/2.6.0/user-guide/proxy/dubbo-proxy"}},c=[{value:"Add Brpc plugin in gateway",id:"add-brpc-plugin-in-gateway",children:[]},{value:"Brpc service access gateway",id:"brpc-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],s={toc:c},l="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(l,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document is intended to help the ",(0,a.yg)("inlineCode",{parentName:"p"},"Brpc")," service access the ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"Brpc")," plugin to handle ",(0,a.yg)("inlineCode",{parentName:"p"},"Brpc")," service."),(0,a.yg)("p",null,"Before the connection, start ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,a.yg)("inlineCode",{parentName:"p"},"Brpc")," plugin, and add related dependencies on the gateway and ",(0,a.yg)("inlineCode",{parentName:"p"},"Brpc")," application client. Refer to the previous ",(0,a.yg)("a",{parentName:"p",href:"../quick-start/quick-start-brpc"},"Quick start with Brpc")," ."),(0,a.yg)("p",null,"For details about client access configuration, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.6.0/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,a.yg)("p",null,"For details about data synchronization configurations, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.6.0/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,a.yg)("h2",{id:"add-brpc-plugin-in-gateway"},"Add Brpc plugin in gateway"),(0,a.yg)("p",null,"Add the following dependencies to the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu brpc plugin --\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-brpc</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Restart your gateway service.")),(0,a.yg)("h2",{id:"brpc-service-access-gateway"},"Brpc service access gateway"),(0,a.yg)("p",null,"Please refer to: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-brpc"},"shenyu-examples-brpc")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"In the microservice built by ",(0,a.yg)("inlineCode",{parentName:"li"},"Brpc"),", add the following dependencies:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-client-brpc</artifactId>\n      <version>${shenyu.version}</version>\n  </dependency>\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Add the following configuration to the ",(0,a.yg)("inlineCode",{parentName:"li"},"application.yaml")," configuration file:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 8011\n  address: 0.0.0.0\n  servlet:\n    context-path: /\nspring:\n  main:\n    allow-bean-definition-overriding: true\n  application:\n    name: brpc-exmaples\n\nshenyu:\n  register:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      username: admin\n      password: 123456\n  client:\n    brpc:\n      props:\n        contextPath: /brpc\n        ipAndPort: brpc\n        appName: brpc\n        port: ${starlight.server.port}\n\n# starlight\nstarlight:\n  server:\n    enable: true\n    port: 8005\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"@ShenyuBrpcClient")," annotation to the method of ",(0,a.yg)("inlineCode",{parentName:"li"},"Brpc")," service interface implementation class, start your service provider, after successful registration, go to PluginList -> rpc proxy -> brpc in the background management system, you will see automatic registration of selectors and rules information.")),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@ShenyuBrpcService\npublic class BrpcDemoServiceImpl implements BrpcDemoService {\n    @Override\n    @ShenyuBrpcClient("/connect")\n    public void connect() {\n        LOG.info("Connect Success");\n    }\n}\n')),(0,a.yg)("h2",{id:"user-request"},"User Request"),(0,a.yg)("p",null,"You can request your ",(0,a.yg)("inlineCode",{parentName:"p"},"Brpc")," service by Http. The ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix which is the ",(0,a.yg)("inlineCode",{parentName:"p"},"contextPath")," configured by the access gateway. For example: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:9195/brpc/connect")," ."))}u.isMDXComponent=!0}}]);