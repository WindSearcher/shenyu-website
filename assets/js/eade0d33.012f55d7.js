"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1630],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74636:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(58168),i=(n(96540),n(15680));const a={description:"http",title:"Http Example"},s="The Http type Register",o={unversionedId:"http",id:"version-1.0.0/http",isDocsHomePage:!1,title:"Http Example",description:"http",source:"@site/shenyuClientGolang_versioned_docs/version-1.0.0/http.md",sourceDirName:".",slug:"/http",permalink:"/shenyuClientGolang/http",version:"1.0.0",lastUpdatedBy:"WindSearcher",lastUpdatedAt:1729094489,formattedLastUpdatedAt:"10/16/2024",frontMatter:{description:"http",title:"Http Example"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Etcd Example",permalink:"/shenyuClientGolang/etcd"},next:{title:"Nacos Example",permalink:"/shenyuClientGolang/nacos"}},l=[{value:"Entire Success log",id:"entire-success-log",children:[]}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"the-http-type-register"},"The Http type Register"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1.Fist make sure The ShenYuAdmin is Started, and ShenYuAdmin service active port is 9095.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'Or you will see this error :\n \n2022-05-05 15:24:28 [WARN] [github.com/apache/shenyu-client-golang/example/http_client/main.go:53] MetaDataRegister has error: The errCode is ->:503, The errMsg is  ->:Please check ShenYu admin service status\n\ncaused by:\nPost "http://127.0.0.1:9095/shenyu-client/register-metadata": dial tcp 127.0.0.1:9095: connect: connection refused\n2022-05-05 15:24:28 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:55] finish register metadata ,the result is-> false\n2022-05-05 15:24:28 [WARN] [github.com/apache/shenyu-client-golang/example/http_client/main.go:68] UrlRegister has error: The errCode is ->:503, The errMsg is  ->:Please check ShenYu admin service status\n\ncaused by:\nPost "http://127.0.0.1:9095/shenyu-client/register-uri": dial tcp 127.0.0.1:9095: connect: connection refused\n2022-05-05 15:24:28 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:70] finish UrlRegister ,the result is-> false\n \n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2.Step 1 Get shenyu_admin_client. (Register service need this)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'//init ShenYuAdminClient\nadminClient := &model.ShenYuAdminClient{\n    UserName: "admin",  //require user provide\n    Password: "123456", //require user provide\n}\n\nadminToken, err := clients.NewShenYuAdminClient(adminClient)\n\nThe adminToken like this :\n{\n    "code":200,\n    "message":"login dashboard user success",\n    "data":{\n        "id":"1",\n        "userName":"admin",\n        "role":1,\n        "enabled":true,\n        "dateCreated":"2018-06-23 15:12:22",\n        "dateUpdated":"2022-03-09 15:08:14",\n        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUwNjc5OTQ2fQ.K92Il2kmJ0X3FgjY4igW35-pw9nsf5VKdUyqBoyIaF4"\n    }\n}\n\nWhen you success get toekn, you will see this :\nthis is ShenYu Admin client token -> eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUwNjc5OTQ2fQ.K92Il2kmJ0X3FgjY4igW35-pw9nsf5VKdUyqBoyIaF4\n\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3.Step 2 Register MetaData to ShenYu GateWay. (Need step 1 token to invoke)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'//MetaDataRegister(Need Step 1 toekn adminToken.AdminTokenData)\nmetaData := &model.MetaDataRegister{\n  AppName: "testMetaDataRegister", //require user provide\n  Path:    "/your/path",           //require user provide\n  Enabled: true,                   //require user provide\n  Host:    "127.0.0.1",            //require user provide\n  Port:    "8080",                 //require user provide\n }\n result, err := clients.RegisterMetaData(adminToken.AdminTokenData, metaData)\n if err != nil {\n  logger.Warn("MetaDataRegister has error:",err)\n }\n logger.Info("finish register metadata ,the result is->", result)\n \n \nWhen Register success , you will see this :  \nfinish register metadata ,the result is-> true\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"4.Step 3  Url  Register  to ShenYu GateWay. (Need step 1 token to invoke)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'//URIRegister(Need Step 1 toekn adminToken.AdminTokenData)\n//init urlRegister\n urlRegister := &model.URIRegister{\n  Protocol:    "testMetaDataRegister", //require user provide\n  AppName:     "testURLRegister",      //require user provide\n  ContextPath: "contextPath",          //require user provide\n  RPCType:     constants.RPCTYPE_HTTP, //require user provide\n  Host:        "127.0.0.1",            //require user provide\n  Port:        "8080",                 //require user provide\n }\n result, err = clients.UrlRegister(adminToken.AdminTokenData, urlRegister)\n if err != nil {\n  logger.Warn("UrlRegister has error:", err)\n }\n logger.Info("finish UrlRegister ,the result is->", result)\n')),(0,i.yg)("h2",{id:"entire-success-log"},"Entire Success log"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"2022-05-05 15:43:56 [INFO] [github.com/apache/shenyu-client-golang/clients/admin_client/shenyu_admin_client.go:51] Get ShenYu Admin response, body is -> {200 login dashboard user success {1 admin 1 true 2018-06-23 15:12:22 2022-03-09 15:08:14 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUxODIzMDM2fQ.gMzPKaNlXEd1Q517qQamOpg358W9L0-0cZN3lkk06WE}}\n2022-05-05 15:43:56 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:40] this is ShenYu Admin client token -> eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUxODIzMDM2fQ.gMzPKaNlXEd1Q517qQamOpg358W9L0-0cZN3lkk06WE\n2022-05-05 15:43:57 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:55] finish register metadata ,the result is-> true\n2022-05-05 15:43:57 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:70] finish UrlRegister ,the result is-> true\n\n")))}p.isMDXComponent=!0}}]);