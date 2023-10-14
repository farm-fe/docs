"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6655],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=n(1163),i=(n(9496),n(9613));const a={sidebar_position:1},l="Html",o={unversionedId:"features/html",id:"features/html",title:"Html",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/html.md",sourceDirName:"features",slug:"/features/html",permalink:"/zh/docs/features/html",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/html.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3. Build For Production",permalink:"/zh/docs/tutorials/build"},next:{title:"CSS",permalink:"/zh/docs/features/css"}},p={},m=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f - MPA",id:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f---mpa",level:2},{value:"\u7ee7\u627fhtml\u6a21\u677f",id:"\u7ee7\u627fhtml\u6a21\u677f",level:2}],s={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"html"},"Html"),(0,i.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("p",null,"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u5730\u7f16\u8bd1 Html\uff0c\u5e76\u4e14\u5728\u6784\u5efa Web \u9879\u76ee\u65f6\u5e94\u8be5\u4f7f\u7528 Html \u4f5c\u4e3a\u5165\u53e3\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"import type { UserConfig } from '@farmfe/core';\n\nexport default <UserConfig>{\n  input: {\n    index: './index.html' // using ./index.html as entry\n  }\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u672a\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"{index: './index.html'}"),"\u3002")),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"./index.html"),"\u4e2d\uff0c\u5e94\u8be5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},'<script src="./xxx">'),"\u6765\u5f15\u7528\u60a8\u7684\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"Js/Ts/Jsx/Tsx")," \u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="./index.html"',title:'"./index.html"'},'<html>\n  \x3c!-- ... --\x3e\n  <body>\n    <div id="root"></div>\n    \x3c!-- index.ts is the script entry --\x3e\n    <script src="./index.ts"><\/script> \n  </body>\n</html>\n\n')),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},'<link href="./xxx">'),"\u6765\u5f15\u7528\u4f60\u7684\u5168\u5c40CSS\u3002"),(0,i.kt)("p",null,"Farm\u5728\u7f16\u8bd1\u65f6\u4f1a\u5c06\u8fd9\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," \u8f6c\u5316\u4e3a\u6700\u7ec8\u7684\u751f\u4ea7\u53ef\u7528\u7684\u4ea7\u7269\u3002\u8bf7\u6ce8\u610f\uff0c\u5f53\u60a8\u60f3\u5f15\u7528\u672c\u5730\u6a21\u5757\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u76f8\u5bf9\u8def\u5f84"),"\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},'<script src="./index.tsx"><\/script>')," \u5c06\u5f15\u7528\u672c\u5730\u6a21\u5757\u5e76\u7f16\u8bd1\u5b83\uff0c \u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},'<script src="/index.tsx"><\/script>')," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},'<script src="https://xxx.com/index.tsx"><\/script>')," \u5219\u4e0d\u4f1a\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"script")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," \u53ef\u4ee5\u5f15\u7528 farm \u652f\u6301\u7684\u4efb\u4f55\u6a21\u5757\u7c7b\u578b\uff0c\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"jsx"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ts"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"tsx")," \u6216\u63d2\u4ef6\u652f\u6301\u7684\u5176\u4ed6\u6a21\u5757\u7c7b\u578b\u3002 \u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"link"),"\u3002")),(0,i.kt)("h2",{id:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f---mpa"},"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f - MPA"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6784\u5efa\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ea\u9700\u914d\u7f6e\u591a\u4e2a html\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"import type { UserConfig } from '@farmfe/core';\n\nexport default <UserConfig>{\n  input: {\n    home: './index.html', // Home Page\n    about: './about.html', // About Page\n    // ... more pages\n  }\n}\n")),(0,i.kt)("p",null,"Farm \u5c06\u5e76\u884c\u7f16\u8bd1\u8fd9\u4e9b\u9875\u9762\u3002"),(0,i.kt)("h2",{id:"\u7ee7\u627fhtml\u6a21\u677f"},"\u7ee7\u627fhtml\u6a21\u677f"),(0,i.kt)("p",null,"Farm \u652f\u6301\u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"html.base")," \u914d\u7f6e\u7ee7\u627f html \u6a21\u677f\uff0c\u8fd9\u5728\u6784\u5efa\u5171\u4eab html \u7684\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\u65f6\u5f88\u6709\u5e2e\u52a9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"import type { UserConfig } from '@farmfe/core';\n\nexport function defineConfig(config: UserConfig) {\n  return config;\n}\n\nexport default defineConfig({\n  // ...\n  compilation: {\n    input: {\n      home: './index.html', // Home Page\n      about: './about.html', // About Page\n      // ... more pages\n    },\n    html: {\n      base: './base.html'\n    }\n  }\n})\n")),(0,i.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"base.html"),"\uff0c\u5360\u4f4d\u7b26",(0,i.kt)("inlineCode",{parentName:"p"},"{{children}}"),"\u5c06\u88ab\u66ff\u6362\u4e3a\u5b50 html \u7684\u5185\u5bb9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="./base.html"',title:'"./base.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <div id="root"></div>\n  \x3c!-- \u5360\u4f4d\u7b26\u5c06\u4f1a\u5728\u7f16\u8bd1\u65f6\u66ff\u6362\u6210\u5bf9\u5e94\u7684\u5b50 html \u7684\u5185\u5bb9 --\x3e\n  {{children}}\n</body>\n</html>\n')),(0,i.kt)("p",null,"\u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"./base.html"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="./src/home.html"',title:'"./src/home.html"'},'\x3c!-- \u5176\u4ed6\u5b57\u6bb5\u7ee7\u627f\u81ea../base.html --\x3e\n<script src="./index.tsx"><\/script>\n')))}d.isMDXComponent=!0}}]);