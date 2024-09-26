"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[18401],{57052:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(96540),l=a(20053),s=a(70727),i=a(19312),r=a(74676),o=a(14798);const c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(r.A,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(r.A,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=a(44586),m=a(55988);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.A,{to:a,onClick:l},n.createElement(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,d.A)(),{pluginId:l}=(0,s.useActivePlugin)({failfast:!0}),{savePreferredVersionName:i}=(0,m.g1)(l),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,s.useDocVersionSuggestions)(l),c=r??(u=o).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:o.label,to:c.path,onClick:()=>i(o.name)})))}const E=function(e){let{versionMetadata:t}=e;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(p,{versionMetadata:t})};var b=a(8139);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(o.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement(n.Fragment,null,n.createElement(o.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(61461);const N="tocCollapsible_aw-L",L="tocCollapsibleButton_zr6a",T="tocCollapsibleContent_0dom",k="tocCollapsibleExpanded_FSiv";function y(e){let{toc:t,className:a}=e;const{collapsed:s,toggleCollapsed:i}=(0,m.uW)({initialState:!0});return n.createElement("div",{className:(0,l.A)(N,{[k]:!s},a)},n.createElement("button",{type:"button",className:(0,l.A)("clean-btn",L),onClick:i},n.createElement(o.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.Nt,{lazy:!0,className:T,collapsed:s},n.createElement(_.m,{toc:t})))}var C=a(6458),U=a(96287);const w="docItemContainer_oiyr",x="lastUpdated_wj+Z",B="docItemCol_zHA2",S="tocMobile_Tx6Y";const M=function(e){const{content:t,versionMetadata:a}=e,{metadata:r,frontMatter:o}=t,{image:d,keywords:m,hide_title:u,hide_table_of_contents:v}=o,{description:h,title:p,editUrl:g,lastUpdatedAt:f,formattedLastUpdatedAt:N,lastUpdatedBy:L}=r,{pluginId:T}=(0,s.useActivePlugin)({failfast:!0}),k=(0,s.useVersions)(T).length>1,M=!u&&void 0===t.contentTitle,V=(0,i.A)(),I=!v&&t.toc&&t.toc.length>0,D=I&&("desktop"===V||"ssr"===V);return n.createElement(n.Fragment,null,n.createElement(b.A,{title:p,description:h,keywords:m,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.A)("col",{[B]:!v})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:w},n.createElement("article",null,k&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),I&&n.createElement(y,{toc:t.toc,className:S}),n.createElement("div",{className:"markdown"},M&&n.createElement(U.e,null,p),n.createElement(t,null)),(g||f||L)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},g&&n.createElement(C.A,{editUrl:g})),n.createElement("div",{className:(0,l.A)("col",x)},(f||L)&&n.createElement(A,{lastUpdatedAt:f,formattedLastUpdatedAt:N,lastUpdatedBy:L})))),n.createElement(c,{metadata:r}))),D&&n.createElement("div",{className:"col col--3"},n.createElement(_.A,{toc:t.toc}))))}},6458:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),l=a(14798),s=a(58168),i=a(20053);const r="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,s.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(r,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},96287:(e,t,a)=>{a.d(t,{e:()=>d,A:()=>m});var n=a(58168),l=a(96540),s=a(20053),i=a(14798),r=a(55988);const o="enhancedAnchor_WiXH",c="h1Heading_dC7a",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.A)({},t,{id:void 0,className:c}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:c}}=(0,r.pN)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,s.A)("anchor",{[o]:!c}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},61461:(e,t,a)=>{a.d(t,{m:()=>o,A:()=>c});var n=a(96540),l=a(20053);const s=function(e,t,a){const[l,s]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const r=document.getElementsByClassName(e);for(;a<r.length&&!i;){const e=r[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),s(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_vrFS",r="table-of-contents__link";function o(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:r,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return s(r,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.A)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);