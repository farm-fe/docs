"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1052],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(1163),r=(n(9496),n(9613));const i={},o="1. Create A Project",l={unversionedId:"tutorials/create",id:"tutorials/create",title:"1. Create A Project",description:"In this chapter, we will create a new Farm React project from scratch, and launch it in development mode.",source:"@site/docs/tutorials/1-create.md",sourceDirName:"tutorials",slug:"/tutorials/create",permalink:"/zh/docs/tutorials/create",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/1-create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/zh/docs/tutorials/overview"},next:{title:"2. Develop With Farm",permalink:"/zh/docs/tutorials/start"}},p={},c=[{value:"Create A Package",id:"create-a-package",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Create Farm Config File",id:"create-farm-config-file",level:2},{value:"Create A Entry Html and Js",id:"create-a-entry-html-and-js",level:2},{value:"Start Your Farm Project!",id:"start-your-farm-project",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-create-a-project"},"1. Create A Project"),(0,r.kt)("p",null,"In this chapter, we will create a new Farm React project from scratch, and launch it in development mode."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this tutorial, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," as default package manager. This chapter is ",(0,r.kt)("inlineCode",{parentName:"p"},"build a Farm react project from scratch"),", If you are trying to init a new Farm Project rapidly, use our official template with command ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm create farm"),".")),(0,r.kt)("h2",{id:"create-a-package"},"Create A Package"),(0,r.kt)("p",null,"First we execute ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm init")," to create a new package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir farm-react && cd farm-react && pnpm init\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file will be autogenerated."),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Install necessary dependencies:"),(0,r.kt)("p",null,"react and react-dom:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react react-dom && pnpm add react-refresh @types/react @types/react-dom -D\n")),(0,r.kt)("p",null,"farm related dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @farmfe/cli @farmfe/core @farmfe/plugin-react\n")),(0,r.kt)("p",null,"There are 3 packages that are necessary for a react project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@farmfe/cli")),": This package provides commands like ",(0,r.kt)("inlineCode",{parentName:"li"},"farm start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"farm build"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"farm preview"),", it must be used with ",(0,r.kt)("inlineCode",{parentName:"li"},"@farmfe/core")," and can not be used separately."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@farmfe/core")),": This package provides ",(0,r.kt)("inlineCode",{parentName:"li"},"Compilation")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Dev Server")," abilities, provides all necessary component for local development and product build. It exports ",(0,r.kt)("inlineCode",{parentName:"li"},"Compiler"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DevServer")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Watcher"),", which is used for ",(0,r.kt)("inlineCode",{parentName:"li"},"compile the project"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"serve the project in development mode")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"watch the project for Hot Module Replacement"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@farmfe/plugin-react")),": This package provides abilities for React Jsx compilation, and react-refresh support.")),(0,r.kt)("h2",{id:"create-farm-config-file"},"Create Farm Config File"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"farm.config.ts")," file under project root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:"{2}","{2}":!0},".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 pnpm-lock.yaml\n")),(0,r.kt)("p",null,"and add following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig): UserConfig {\n  return config;\n}\n\nexport default defineConfig({\n  compilation: {\n    input: {\n      index: './src/index.html'\n    },\n    output: {\n      path: 'build',\n      publicPath: '/',\n      targetEnv: 'browser'\n    }\n  },\n  plugins: [\n    '@farmfe/plugin-react',\n  ]\n});\n")),(0,r.kt)("p",null,"For configuration file above, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),", which is the most basic configuration in Farm."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"input")),": Configure the entry point. Farm will compile and build a module graph from the entries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"output")),": Confiture the output dir, file name and so on. For full options, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/config/farm-config#output"},"compilation.output"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"plugins")),": Configure farm plugins, all extended abilities like React, Vue SFC are supported by plugins. Here we use a Rust Plugin(",(0,r.kt)("inlineCode",{parentName:"li"},"@farmfe/plugin-react"),") to support compiling React jsx.")),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/farm-config"},"config reference")," for more options."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In above example, we config input as ",(0,r.kt)("inlineCode",{parentName:"p"},"index: './src/index.html'"),", if we do not configure ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", it's default to ",(0,r.kt)("inlineCode",{parentName:"p"},"index: './index.html'"),". And we can configure multiple entries in ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/html#multi-page-app"},"Multi Page App")," for details")),(0,r.kt)("h2",{id:"create-a-entry-html-and-js"},"Create A Entry Html and Js"),(0,r.kt)("p",null,"Create 2 files ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.html")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.tsx")," under project root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:"{5-7}","{5-7}":!0},".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("p",null,"Content of ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.html")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <div id="root"></div>\n  \x3c!-- we must use script to make ./index.tsx as a dependency --\x3e\n  <script src="./index.tsx"><\/script>\n</body>\n</html>\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that we must add at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," to refer to a script module.")),(0,r.kt)("p",null,"Content of ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.tsx")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(<div>A React Page compiled by Farm</div>);\n")),(0,r.kt)("h2",{id:"start-your-farm-project"},"Start Your Farm Project!"),(0,r.kt)("p",null,"Now every thing is ready, add a start script to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" {6}',title:'"package.json"',"{6}":!0},'{\n  "name": "1-create-a-project",\n  "version": "1.0.0",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "farm start"\n  },\n  // ... ignore other fields \n}\n')),(0,r.kt)("p",null,"then run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start"),", if farm output following messages, means your project are launched successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ npm start\n\n> 1-create-a-project@1.0.0 start\n> farm start\n\n[ Farm ] Using config file at /home/tutorials/1-create-a-project/farm.config.ts\n\n   \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n   \u2502                                                  \u2502\n   \u2502              _____ _    ____  __  __             \u2502\n   \u2502             |  ___/ \\  |  _ \\|  \\/  |            \u2502\n   \u2502             | |_ / _ \\ | |_) | |\\/| |            \u2502\n   \u2502             |  _/ ___ \\|  _ <| |  | |            \u2502\n   \u2502             |_|/_/   \\_\\_| \\_\\_|  |_|            \u2502\n   \u2502                                                  \u2502\n   \u2502                   Version 0.11.0                 \u2502\n   \u2502                                                  \u2502\n   \u2502     \ud83d\udd25 Ready on http://localhost:9000 in 61ms.   \u2502\n   \u2502                                                  \u2502\n   \u2502                                                  \u2502\n   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n\n[ Farm ] HMR enabled, watching for file changes under /home/tutorials/1-create-a-project\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9000")," in browser."))}d.isMDXComponent=!0}}]);