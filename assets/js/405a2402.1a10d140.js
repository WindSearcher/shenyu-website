"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[81153],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(t),g=a,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return t?r.createElement(y,o(o({ref:n},d),{},{components:t})):r.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24423:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const i={title:"Using Zookeeper with Shenyu-SDK",keywords:["Using Shenyu-Sdk","zookeeper"],description:"Using Shenyu-Sdk"},o=void 0,p={unversionedId:"user-guide/sdk-usage/shenyu-sdk-zookeeper",id:"user-guide/sdk-usage/shenyu-sdk-zookeeper",isDocsHomePage:!1,title:"Using Zookeeper with Shenyu-SDK",description:"Using Shenyu-Sdk",source:"@site/docs/user-guide/sdk-usage/shenyu-sdk-zookeeper.md",sourceDirName:"user-guide/sdk-usage",slug:"/user-guide/sdk-usage/shenyu-sdk-zookeeper",permalink:"/docs/next/user-guide/sdk-usage/shenyu-sdk-zookeeper",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/user-guide/sdk-usage/shenyu-sdk-zookeeper.md",version:"current",frontMatter:{title:"Using Zookeeper with Shenyu-SDK",keywords:["Using Shenyu-Sdk","zookeeper"],description:"Using Shenyu-Sdk"},sidebar:"tutorialSidebar",previous:{title:"Using Nacos with Shenyu-SDK",permalink:"/docs/next/user-guide/sdk-usage/shenyu-sdk-nacos"},next:{title:"Discovery",permalink:"/docs/next/user-guide/discovery/discovery-mode"}},s=[{value:"Background explanation",id:"background-explanation",children:[]},{value:"Environment preparation",id:"environment-preparation",children:[]},{value:"shenyu-bootstrap",id:"shenyu-bootstrap",children:[{value:"Maven dependency",id:"maven-dependency",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file",children:[]}]},{value:"Client Application",id:"client-application",children:[{value:"Maven dependency",id:"maven-dependency-1",children:[]},{value:"Edit the configuration file",id:"edit-the-configuration-file-1",children:[]}]},{value:"Writing the local interface for the SDK",id:"writing-the-local-interface-for-the-sdk",children:[]}],l={toc:s},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"background-explanation"},"Background explanation"),(0,a.yg)("p",null,"Shenyu offers Shenyu-Sdk to make it easy for services to quickly integrate with the Shenyu gateway. By simply depending on the SDK and doing some simple configuration, client services can call the gateway's exposed APIs as if they were calling local interfaces."),(0,a.yg)("img",{src:"/img/shenyu/sdk/shenyu-sdk_process.png",width:"80%",height:"50%"}),(0,a.yg)("p",null,"The registration center supported by the gateway for client access includes (nacos, eureka, etcd, zookeeper, consul), and the following is the relevant guide for using ",(0,a.yg)("strong",{parentName:"p"},"Zookeeper")," registration center when ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"application client")," are used."),(0,a.yg)("h2",{id:"environment-preparation"},"Environment preparation"),(0,a.yg)("p",null,"Refer to ",(0,a.yg)("inlineCode",{parentName:"p"},"Deployment")," guide, and choose a way to start ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-bootstrap"),"."),(0,a.yg)("h2",{id:"shenyu-bootstrap"},"shenyu-bootstrap"),(0,a.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,a.yg)("p",null,"In the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file, introduce the following dependencies."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-registry</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.yg)("h3",{id:"edit-the-configuration-file"},"Edit the configuration file"),(0,a.yg)("p",null,"Add the following configuration to the gateway's ",(0,a.yg)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181\n    props:\n      appName: http\n      port: xx\n# registerType: service registration type, fill in zookeeper.\n# serverList: Enter the zookeeper address(es), separated by commas in English.\n# appName\uff1aYour application name. If not configured, the default value will be taken from spring.application.name.\n# port: Your project's startup port, currently springmvc/tars/grpc needs to be filled in.\n\n# for detailed reference, please see the `user-guide> Property Config> Register Center Instance Config` configuration document.\n")),(0,a.yg)("h2",{id:"client-application"},"Client Application"),(0,a.yg)("h3",{id:"maven-dependency-1"},"Maven dependency"),(0,a.yg)("p",null,"In the ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml")," file of the application client, introduce the following dependencies."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Shenyu-Sdk Core")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-sdk-core</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sdk</artifactId>\n        <version>2.5.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Shenyu-Sdk http implementation")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"HTTP client implementation, offering okhttp and httpclient as implementation options. Other implementations can be created by extending the ",(0,a.yg)("inlineCode",{parentName:"p"},"AbstractShenyuSdkClient")," class.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- httpclient --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-httpclient</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n\n\x3c!-- okhttp --\x3e\n\x3c!-- \n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-sdk-okhttp</artifactId>\n    <version>2.5.1-SNAPSHOT</version>\n</dependency>\n--\x3e\n")),(0,a.yg)("h3",{id:"edit-the-configuration-file-1"},"Edit the configuration file"),(0,a.yg)("p",null,"Add the following configuration in the application client's ",(0,a.yg)("inlineCode",{parentName:"p"},"yml")," configuration file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sdk:\n    enabled: true\n    register-type: zookeeper \n    server-lists: localhost:2181\n    props:\n      retry:\n        enable: true\n        period: 100\n        maxPeriod: 1000\n        maxAttempts: 5\n      algorithm: roundRobin\n      scheme: http\n\n# register-type: service registration type, fill in zookeeper.\n# server-lists: Enter the zookeeper address(es), separated by commas in English.\n# scheme: Request protocol.\n\n# retry: Configuration related to failure retries.\n# retry.period: Retry waiting time.\n# retry.maxPeriod: Maximum retry waiting time .\n# retry.maxAttempts: Maximum retry count.\n")),(0,a.yg)("h2",{id:"writing-the-local-interface-for-the-sdk"},"Writing the local interface for the SDK"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the project startup class, annotate ",(0,a.yg)("inlineCode",{parentName:"p"},'@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")'),", where ",(0,a.yg)("inlineCode",{parentName:"p"},"basePackages")," maintains the package location of Shenyu-Sdk's corresponding maintained gateway API interface.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create an interface and use the ",(0,a.yg)("inlineCode",{parentName:"p"},'@ShenyuClient(name = "xxx", contextId = "ShenyuSdkApiName")')," annotation to mark it, where ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," represents the gateway service name. If you need to define multiple beans to maintain the gateway's API, you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"contextId")," as the corresponding bean alias.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the defined interface, add the methods of the interface to be mapped to the shenyu gateway, where the ",(0,a.yg)("inlineCode",{parentName:"p"},"value")," of ",(0,a.yg)("inlineCode",{parentName:"p"},"@xxMapping")," corresponds to the path of the corresponding request in the gateway."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example")),(0,a.yg)("p",null,"Project startup class"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.spring.EnableShenyuClients;\n\n@SpringBootApplication\n@EnableShenyuClients(basePackages = "org.apache.shenyu.examples.sdk.http.api")\npublic class ShenyuSdkHttpExampleApplication {\n\n    /**\n     * main.\n     *\n     * @param args args\n     */\n    public static void main(final String[] args) {\n        SpringApplication.run(ShenyuSdkHttpExampleApplication.class, args);\n    }\n}\n')),(0,a.yg)("p",null,"Shenyu-SDK interface"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.shenyu.sdk.spring.ShenyuClient;\n\n@ShenyuClient(name = "shenyu-gateway", contextId = "ShenyuSdkApiName")\npublic interface ShenyuHttpClientApi {\n\n    /**\n     * findById.\n     * test Get.\n     *\n     * @param id id\n     * @return SdkTestDto\n     */\n    @GetMapping("/http/shenyu/client/findById")\n    SdkTestDto findById(@RequestParam("id") String id);\n}\n')),(0,a.yg)("p",null,"For more information, refer to the sample project ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-sdk"},"shenyu-examples-sdk")))}c.isMDXComponent=!0}}]);