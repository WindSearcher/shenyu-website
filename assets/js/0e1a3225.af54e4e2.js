"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8e3],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>y});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),l=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=t,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return a?r.createElement(y,o(o({ref:n},u),{},{components:a})):r.createElement(y,o({ref:n},u))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:t,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17613:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(58168),t=(a(96540),a(15680));const i={title:"Dubbo Proxy",keywords:["Dubbo"],description:"Dubbo Client Access"},o=void 0,p={unversionedId:"user-guide/proxy/dubbo-proxy",id:"version-2.6.1/user-guide/proxy/dubbo-proxy",isDocsHomePage:!1,title:"Dubbo Proxy",description:"Dubbo Client Access",source:"@site/versioned_docs/version-2.6.1/user-guide/proxy/dubbo-proxy.md",sourceDirName:"user-guide/proxy",slug:"/user-guide/proxy/dubbo-proxy",permalink:"/docs/user-guide/proxy/dubbo-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/user-guide/proxy/dubbo-proxy.md",version:"2.6.1",frontMatter:{title:"Dubbo Proxy",keywords:["Dubbo"],description:"Dubbo Client Access"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Discovery",permalink:"/docs/user-guide/discovery/discovery-mode"},next:{title:"gRPC Proxy",permalink:"/docs/user-guide/proxy/grpc-proxy"}},s=[{value:"Add dubbo plugin in gateway",id:"add-dubbo-plugin-in-gateway",children:[]},{value:"Dubbo service access gateway",id:"dubbo-service-access-gateway",children:[]},{value:"Dubbo configuration",id:"dubbo-configuration",children:[{value:"Configure the interface with gateway",id:"configure-the-interface-with-gateway",children:[]},{value:"Dubbo user request and parameter explanation.",id:"dubbo-user-request-and-parameter-explanation",children:[]}]},{value:"Service governance",id:"service-governance",children:[]},{value:"Http --&gt; Gateway --&gt; Dubbo Provider",id:"http----gateway----dubbo-provider",children:[]}],l={toc:s},u="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"This document is intended to help the ",(0,t.yg)("inlineCode",{parentName:"p"},"Dubbo")," service access the ",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"Dubbo")," plugin to handle ",(0,t.yg)("inlineCode",{parentName:"p"},"dubbo")," service."),(0,t.yg)("p",null,"Support Alibaba Dubbo(< 2.7.x) and Apache Dubbo (>=2.7.x)."),(0,t.yg)("p",null,"Before the connection, start ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,t.yg)("inlineCode",{parentName:"p"},"Dubbo")," plugin, and add related dependencies on the gateway and ",(0,t.yg)("inlineCode",{parentName:"p"},"Dubbo")," application client. Refer to the previous ",(0,t.yg)("a",{parentName:"p",href:"../../quick-start/quick-start-dubbo"},"Quick start with Dubbo")," ."),(0,t.yg)("p",null,"For details about client access configuration, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/user-guide/property-config/register-center-access"},"Application Client Access Config")," ."),(0,t.yg)("p",null,"For details about data synchronization configurations, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/user-guide/property-config/use-data-sync"},"Data Synchronization Config")," ."),(0,t.yg)("h2",{id:"add-dubbo-plugin-in-gateway"},"Add dubbo plugin in gateway"),(0,t.yg)("p",null,"Add these dependencies in gateway's ",(0,t.yg)("inlineCode",{parentName:"p"},"pom.xml"),"."),(0,t.yg)("p",null,"Alibaba dubbo user, configure the dubbo version and registry center with yours."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu alibaba dubbo plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-client-alibaba-dubbo</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu  alibaba dubbo plugin end--\x3e\n<dependency>\n  <groupId>com.alibaba</groupId>\n  <artifactId>dubbo</artifactId>\n  <version>2.6.5</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-client</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-framework</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-recipes</artifactId>\n  <version>4.0.1</version>\n</dependency>\n")),(0,t.yg)("p",null,"Apache dubbo user, configure the dubbo version and registry center with yours."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu apache dubbo plugin start--\x3e\n<dependency>\n   <groupId>org.apache.shenyu</groupId>\n   <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu apache dubbo plugin end--\x3e\n\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo</artifactId>\n   <version>2.7.5</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency start --\x3e\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo-registry-nacos</artifactId>\n   <version>2.7.5</version>\n</dependency>\n<dependency>\n   <groupId>com.alibaba.nacos</groupId>\n   <artifactId>nacos-client</artifactId>\n   <version>1.1.4</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency  end--\x3e\n\n\x3c!-- Dubbo zookeeper registry dependency start--\x3e\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-client</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-framework</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-recipes</artifactId>\n   <version>4.0.1</version>\n</dependency>\n\x3c!-- Dubbo zookeeper registry dependency end --\x3e\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"restart gateway service.")),(0,t.yg)("h2",{id:"dubbo-service-access-gateway"},"Dubbo service access gateway"),(0,t.yg)("p",null,"Dubbo integration with gateway, please refer to : ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," ."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Alibaba Dubbo User"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"SpringBoot"),(0,t.yg)("p",{parentName:"li"},"   Add these dependencies:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.apache.shenyu</groupId>\n     <artifactId>shenyu-spring-boot-starter-client-alibaba-dubbo</artifactId>\n     <version>${shenyu.version}</version>\n</dependency>\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Spring"),(0,t.yg)("p",{parentName:"li"},"  Add these dependencies\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"   <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-client-alibaba-dubbo</artifactId>\n      <version>${shenyu.version}</version>\n   </dependency>\n")),(0,t.yg)("p",{parentName:"li"},"  Inject these properties into your Spring beans XML file\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<bean id="clientConfig" class="org.apache.shenyu.register.common.config.PropertiesConfig">\n     <property name="props">\n       <map>\n         <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n         <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n       </map>\n     </property>\n </bean>\n\n <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n   <property name="registerType" value="http"/>\n   <property name="serverList" value="http://localhost:9095"/>\n </bean>\n\n <bean id="shenyuClientRegisterRepository" class="org.apache.shenyu.client.core.register.ShenyuClientRegisterRepositoryFactory" factory-method="newInstance">\n       <property name="shenyuRegisterCenterConfig" ref="shenyuRegisterCenterConfig"/>\n </bean>\n\n <bean id ="alibabaDubboServiceBeanListener" class ="org.apache.shenyu.client.alibaba.dubbo.AlibabaDubboServiceBeanListener">\n   <constructor-arg name="clientConfig" ref="clientConfig"/>\n   <constructor-arg name="shenyuClientRegisterRepository" ref="shenyuClientRegisterRepository"/> \n </bean>\n'))))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Apache Dubbo User"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"SpringBoot"),(0,t.yg)("p",{parentName:"li"},"  Add these dependencies:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n      <version>${shenyu.version}</version>\n </dependency>\n")),(0,t.yg)("p",{parentName:"li"},"   Add these in your client project's application.yml:  "),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-yml"},"dubbo:\n  registry:\n    address: dubbo register address\n    port: dubbo service port\n\nshenyu:\n  register:\n    registerType: shenyu service register type #http #zookeeper #etcd #nacos #consul\n    serverLists: shenyu service register address #http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n  client:\n    dubbo:\n      props:\n        contextPath: /your contextPath\n        appName: your app name\n"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Spring"),(0,t.yg)("p",{parentName:"li"},"  Add these dependencies:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"   <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-client-apache-dubbo</artifactId>\n       <version>${shenyu.version}</version>\n    </dependency>\n")),(0,t.yg)("p",{parentName:"li"},"  Injecct these properties into your Spring beans XML file:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<bean id = "apacheDubboServiceBeanListener" class="org.apache.shenyu.client.apache.dubbo.ApacheDubboServiceBeanListener">\n    <constructor-arg ref="clientPropertiesConfig"/>\n    <constructor-arg ref="clientRegisterRepository"/>\n</bean>\n\n \x3c!-- Config register repository according to your register type --\x3e\n <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n     <property name="registerType" value="your service registerType"/>\n     <property name="serverLists" value="your service register serverLists"/>\n </bean>\n\n \x3c!-- Client properties config --\x3e\n <bean id="clientPropertiesConfig"\n    class="org.apache.shenyu.register.common.config.ShenyuClientConfig.ClientPropertiesConfig">\n    <property name="props">\n        <map>\n            <entry key="contextPath" value="/your contextPath"/>\n            <entry key="appName" value="your appName"/>\n        </map>\n    </property>\n </bean>\n\n\x3c!-- Config register repository according to your register type --\x3e\n<bean id="clientRegisterRepository" class="org.apache.shenyu.register.client.http.HttpClientRegisterRepository">\n    <constructor-arg ref="shenyuRegisterCenterConfig"/>\n</bean>\n\n<bean id="shenyuClientShutdownHook" class="org.apache.shenyu.client.core.shutdown.ShenyuClientShutdownHook">\n    <constructor-arg ref="shenyuRegisterCenterConfig"/>\n    <constructor-arg ref="clientRegisterRepository"/>\n</bean>\n')),(0,t.yg)("p",{parentName:"li"},"  Add these in your client project's application.yml:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-yml"},"dubbo:\n  registry:\n    address: dubbo register address\n    port: dubbo service port\n")))))),(0,t.yg)("h2",{id:"dubbo-configuration"},"Dubbo configuration"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Enable ",(0,t.yg)("inlineCode",{parentName:"li"},"dubbo")," option in ",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"."),(0,t.yg)("li",{parentName:"ul"},"Configure your registry address in ",(0,t.yg)("inlineCode",{parentName:"li"},"dubbo"),".")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'{"register":"zookeeper://localhost:2181"}   or {"register":"nacos://localhost:8848"}\n')),(0,t.yg)("h3",{id:"configure-the-interface-with-gateway"},"Configure the interface with gateway"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"you can add the annotation ",(0,t.yg)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," to your dubbo service implementation class, so that the interface method will be configured with gateway.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Start your provider. After successful startup, go to PluginList -> rpc Proxy -> dubbo in the backend management system. You will see auto-registered selectors and rules information."))),(0,t.yg)("h3",{id:"dubbo-user-request-and-parameter-explanation"},"Dubbo user request and parameter explanation."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Communicate with dubbo service through Http transport protocol."),(0,t.yg)("li",{parentName:"ul"},"Apache ShenYu gateway need a route prefix which configured when accessing the project.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"# for example: you have an order service and it has a interface, registry address: /order/test/save\n\n# now we can communicate with gateway through POST request http://localhost:9195/order/test/save\n\n# localhost:9195 is gateway's ip port\uff0cdefault port is 9195 \uff0c/order is the contextPath you set through gateway.\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"parameter deliver:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"communicate with gateway through body or json of http post request."),(0,t.yg)("li",{parentName:"ul"},"more parameter types, please refer to the interface definition in  ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," and parameter passing\nmethod."))),(0,t.yg)("li",{parentName:"ul"},"Single java bean parameter type (",(0,t.yg)("inlineCode",{parentName:"li"},"default"),")."),(0,t.yg)("li",{parentName:"ul"},"Multi-parameter type support, add this config value in gateway's yaml file:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  dubbo:\n    parameter: multi\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Support for customized multi-parameter type"),(0,t.yg)("li",{parentName:"ul"},"Create a new implementation class ",(0,t.yg)("inlineCode",{parentName:"li"},"MyDubboParamResolveService")," in your gateway project of ",(0,t.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.web.dubbo.DubboParamResolveService"),".")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"public interface DubboParamResolveService {\n\n   /**\n    * Build parameter pair.\n    * this is Resolve http body to get dubbo param.\n    *\n    * @param body           the body\n    * @param parameterTypes the parameter types\n    * @return the pair\n    */\n   Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"body")," is the json string in http request."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"parameterTypes"),": the list of method parameter types that are matched\uff0csplit with ",(0,t.yg)("inlineCode",{parentName:"li"},","),"."),(0,t.yg)("li",{parentName:"ul"},"in Pair\uff0cleft is parmeter type\uff0cright is parameter value, it's the standard of dubbo generalization calls."),(0,t.yg)("li",{parentName:"ul"},"Inject your class into Spring bean, cover the default implementation.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic DubboParamResolveService myDubboParamResolveService() {\n      return new MyDubboParamResolveService();\n}\n")),(0,t.yg)("h2",{id:"service-governance"},"Service governance"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Tag route"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"Dubbo_Tag_Route")," when send request, the current request will be routed to the provider of the specified tag, which is only valid for the current request."))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Explicit Target"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Set the ",(0,t.yg)("inlineCode",{parentName:"li"},"url")," property in the annotation ",(0,t.yg)("inlineCode",{parentName:"li"},"@ShenyuDubboClient"),"."),(0,t.yg)("li",{parentName:"ul"},"Update the configuration in Admin."),(0,t.yg)("li",{parentName:"ul"},"It's valid for all request."))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Param valid and ShenyuException"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},'validation="shenyuValidation"'),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"When ",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuException")," is thrown in the interface, exception information will be returned. It should be noted that ",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuException")," is thrown explicitly."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},'@Service(validation = "shenyuValidation")\npublic class TestServiceImpl implements TestService {\n\n        @Override\n        @ShenyuDubboClient(path = "/test", desc = "test method")\n        public String test(@Valid HelloServiceRequest name) throws ShenyuException {\n            if (true){\n                throw new ShenyuException("Param binding error.");\n            }\n            return "Hello " + name.getName();\n        }\n}\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Request param"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    public class HelloServiceRequest implements Serializable {\n\n        private static final long serialVersionUID = -5968745817846710197L;\n\n        @NotEmpty(message = "name cannot be empty")\n        private String name;\n\n        @NotNull(message = "age cannot be null")\n        private Integer age;\n\n        public String getName() {\n            return name;\n        }\n\n        public void setName(String name) {\n            this.name = name;\n        }\n\n        public Integer getAge() {\n            return age;\n        }\n\n        public void setAge(Integer age) {\n            this.age = age;\n        }\n    }\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Send request"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "name": ""\n}\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Response"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "name cannot be empty,age cannot be null"\n}\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Error message"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "Param binding error."\n}\n')))))),(0,t.yg)("h2",{id:"http----gateway----dubbo-provider"},"Http --\x3e Gateway --\x3e Dubbo Provider"),(0,t.yg)("p",null,"It basically switches from HTTP request to Dubbo protocol, then invoke Dubbo service and return to the result.\nTwo things need to notice after intgeration with gateway, one is the added annoation ",(0,t.yg)("inlineCode",{parentName:"p"},"@ShenyuDubboClient"),", another is a path used to speicify the request path.\nAnd you added a config value of ",(0,t.yg)("inlineCode",{parentName:"p"},"contextPath"),"."),(0,t.yg)("p",null,"If you have a function like this, the config value in contextPath is ",(0,t.yg)("inlineCode",{parentName:"p"},"/dubbo")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @ShenyuDubboClient(path = "/insert", desc = "insert data")\n    public DubboTest insert(final DubboTest dubboTest) {\n        return dubboTest;\n    }\n')),(0,t.yg)("p",null,"So our request path is: http://localhost:9195/dubbo/insert, localhost:9195 is the gateway's domain name,if you changed before,so does with yours here.."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DubboTest")," is a java bean object\uff0chas 2 parameters, id and name, so we can transfer the value's json type through request body."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{"id":"1234","name":"XIAO5y"}\n')),(0,t.yg)("p",null,"If your interface has no parameter, then the value is:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"{}\n")),(0,t.yg)("p",null,"If the interface has multiple parameters, refer to the multi-parameter type support described above."))}c.isMDXComponent=!0}}]);