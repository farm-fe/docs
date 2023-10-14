"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7552],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(1163),o=(r(9496),r(9613));const a={},i="Overview",l={unversionedId:"tutorials/overview",id:"tutorials/overview",title:"Overview",description:"In this tutorial, we will create a Farm react project from scratch, and introducing how to add useful component libraries and Farm plugins.",source:"@site/docs/tutorials/0-overview.md",sourceDirName:"tutorials",slug:"/tutorials/overview",permalink:"/zh/docs/tutorials/overview",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/0-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981 Farm\uff1f",permalink:"/zh/docs/why-farm"},next:{title:"1. Create A Project",permalink:"/zh/docs/tutorials/create"}},u={},p=[],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this tutorial, we will create a Farm react project from scratch, and introducing how to add useful component libraries and Farm plugins."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Vue project is also fully supported by Farm. You can directly use ",(0,o.kt)("inlineCode",{parentName:"p"},"Vite"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"@vitejs/plugin-vue")," in Farm. Farm is compatible with most vite plugins and can use them out of box.")),(0,o.kt)("p",null,"you will learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to build a production ready Farm React project from scratch. We will introduce how to add popular component"),(0,o.kt)("li",{parentName:"ul"},"The basic concept of Farm, like ",(0,o.kt)("inlineCode",{parentName:"li"},"input"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"output"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dev-server"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HMR")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins")),(0,o.kt)("li",{parentName:"ul"},"Farm's daily configurations and commonly used plugins.")),(0,o.kt)("p",null,"We aim to simplify your development experience with the Farm ecosystem through this tutorial. And it can also be helpful if you want to migrate from other tools to Farm. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial is ",(0,o.kt)("inlineCode",{parentName:"p"},"build a Farm react project from scratch"),", If you are trying to init a new Farm Project rapidly, use our official template with command ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm create farm"),".")),(0,o.kt)("p",null,"Following our tutorial, and open your super-fast Farm develop journey!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/overview"},"1. Create A Farm React Project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/overview"},"2. Develop Project With Farm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/overview"},"3. Build For Production"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The source code of this tutorial is in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-fe/tutorials"},"farm tutorials"))))}s.isMDXComponent=!0}}]);