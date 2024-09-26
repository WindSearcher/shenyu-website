"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[63402],{15680:(e,i,n)=>{n.d(i,{xA:()=>l,yg:()=>m});var t=n(96540);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function s(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?s(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function o(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),d=function(e){var i=t.useContext(u),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},l=function(e){var i=d(e.components);return t.createElement(u.Provider,{value:i},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},c=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=d(n),c=r,m=g["".concat(u,".").concat(c)]||g[c]||p[c]||s;return n?t.createElement(m,a(a({ref:i},l),{},{components:n})):t.createElement(m,a({ref:i},l))}));function m(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=c;var o={};for(var u in i)hasOwnProperty.call(i,u)&&(o[u]=i[u]);o.originalType=e,o[g]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<s;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87475:(e,i,n)=>{n.r(i),n.d(i,{contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=n(58168),r=(n(96540),n(15680));const s={title:"Data Permission Management",keywords:["user data permission"],description:"user data permission"},a=void 0,o={unversionedId:"user-guide/admin-usage/data-permission",id:"version-2.5.0/user-guide/admin-usage/data-permission",isDocsHomePage:!1,title:"Data Permission Management",description:"user data permission",source:"@site/versioned_docs/version-2.5.0/user-guide/admin-usage/data-permission.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/data-permission",permalink:"/docs/2.5.0/user-guide/admin-usage/data-permission",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/user-guide/admin-usage/data-permission.md",version:"2.5.0",frontMatter:{title:"Data Permission Management",keywords:["user data permission"],description:"user data permission"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Quick start with Websocket",permalink:"/docs/2.5.0/quick-start/quick-start-websocket"},next:{title:"Dictionary Management",permalink:"/docs/2.5.0/user-guide/admin-usage/dictionary-management"}},u=[{value:"Design Notes",id:"design-notes",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Create User",id:"create-user",children:[]},{value:"Edit Date",id:"edit-date",children:[]}]},{value:"New User Login",id:"new-user-login",children:[]}],d={toc:u},l="wrapper";function g(e){let{components:i,...n}=e;return(0,r.yg)(l,(0,t.A)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"design-notes"},"Design Notes"),(0,r.yg)("p",null,"In order to achieve the different selector / rule represented by the plugin managed by different business units, the need for the plugin selector / rule data security for the user to control\nWhen the user does not configure data permissions, it has all the data permissions, as long as the permissions are configured, the data permissions will be controlled. As shown in the following picture."),(0,r.yg)("img",{src:"/img/shenyu/basicConfig/dataPermission/data-permission-profile-en.png",width:"80%",height:"50%"}),(0,r.yg)("h2",{id:"how-to-use"},"How to use"),(0,r.yg)("p",null,"The Brief introduce is as follows."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Users with administrative user resource permissions (including the admin user) create a new user."),(0,r.yg)("li",{parentName:"ul"},"Users with administrative user data resource permissions (including admin user) click ",(0,r.yg)("inlineCode",{parentName:"li"},"ConfigureDataPermission")," to manage the user's data permissions.",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Make sure the data exists in the plugin list before doing so. If not, you will have any data to configure.")))),(0,r.yg)("p",null,"Now, let's look how to operation step by step:"),(0,r.yg)("h3",{id:"create-user"},"Create User"),(0,r.yg)("p",null,'Clicking the menu "System Manage -> User" to create user, like this:'),(0,r.yg)("img",{src:"/img/shenyu/basicConfig/dataPermission/create-new-user-en.png",width:"80%",height:"50%"}),(0,r.yg)("h3",{id:"edit-date"},"Edit Date"),(0,r.yg)("h4",{id:"add-plugin-data"},"Add Plugin Data"),(0,r.yg)("p",null,"Adding data in the plugin list, this article uses ",(0,r.yg)("inlineCode",{parentName:"p"},"divide")," as an example, like:"),(0,r.yg)("img",{src:"/img/shenyu/basicConfig/dataPermission/plugin-data-en.png",width:"80%",height:"50%"}),(0,r.yg)("h4",{id:"configure-resource-permission"},"Configure Resource Permission"),(0,r.yg)("p",null,"Giving the ",(0,r.yg)("inlineCode",{parentName:"p"},"divide")," plugin permission to the ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," role."),(0,r.yg)("img",{src:"/img/shenyu/basicConfig/dataPermission/role-permission-setting-en.png",width:"80%",height:"50%"}),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," role has none permissions.The user can't login who we set ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," role to. So we must edit the permissons."),(0,r.yg)("h4",{id:"configure-data-permission"},"Configure Data Permission"),(0,r.yg)("p",null,"When we create the common users, we can edit data permissions by the ",(0,r.yg)("inlineCode",{parentName:"p"},"ConfigureDataPermission")," button."),(0,r.yg)("img",{src:"/img/shenyu/basicConfig/dataPermission/data-permission-en.png",width:"80%",height:"50%"}),(0,r.yg)("p",null,"The datas in this list are the same as the plugin list."),(0,r.yg)("h2",{id:"new-user-login"},"New User Login"),(0,r.yg)("p",null,"When the user login, he just can see the data given to him."),(0,r.yg)("img",{src:"/img/shenyu/basicConfig/dataPermission/new-user-login-en.png",width:"80%",height:"50%"}))}g.isMDXComponent=!0}}]);