"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6655],{4445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(1527),s=t(5696);const r={sidebar_position:1},c="Html",d={id:"features/html",title:"Html",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/html.md",sourceDirName:"features",slug:"/features/html",permalink:"/zh/docs/features/html",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/html.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DevServer \u548c HMR",permalink:"/zh/docs/features/dev-server"},next:{title:"Css/Sass/Less",permalink:"/zh/docs/features/css"}},l={},o=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f - MPA",id:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f---mpa",level:2},{value:"\u7ee7\u627f html \u6a21\u677f",id:"\u7ee7\u627f-html-\u6a21\u677f",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"html",children:"Html"}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u5730\u7f16\u8bd1 Html\uff0c\u5e76\u4e14\u5728\u6784\u5efa Web \u9879\u76ee\u65f6\u5e94\u8be5\u4f7f\u7528 Html \u4f5c\u4e3a\u5165\u53e3\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import type { UserConfig } from "@farmfe/core";\n\nexport default defineConfig({\n  input: {\n    index: "./index.html", // using ./index.html as entry\n  },\n});\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u5982\u679c\u672a\u6307\u5b9a ",(0,i.jsx)(n.code,{children:"input"}),"\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"{index: './index.html'}"}),"\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"./index.html"}),"\u4e2d\uff0c\u5e94\u8be5\u4f7f\u7528",(0,i.jsx)(n.code,{children:'<script src="./xxx">'}),"\u6765\u5f15\u7528\u60a8\u7684\u5165\u53e3 ",(0,i.jsx)(n.code,{children:"Js/Ts/Jsx/Tsx"})," \u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="./index.html"',children:'<html>\n  \x3c!-- ... --\x3e\n  <body>\n    <div id="root"></div>\n    \x3c!-- index.ts is the script entry --\x3e\n    <script src="./index.ts"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:'<link href="./xxx">'}),"\u6765\u5f15\u7528\u4f60\u7684\u5168\u5c40 CSS\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Farm \u5728\u7f16\u8bd1\u65f6\u4f1a\u5c06\u8fd9\u4e9b ",(0,i.jsx)(n.code,{children:"script"})," \u548c ",(0,i.jsx)(n.code,{children:"link"})," \u8f6c\u5316\u4e3a\u6700\u7ec8\u7684\u751f\u4ea7\u53ef\u7528\u7684\u4ea7\u7269\u3002\u8bf7\u6ce8\u610f\uff0c\u5f53\u60a8\u60f3\u5f15\u7528\u672c\u5730\u6a21\u5757\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"\u76f8\u5bf9\u8def\u5f84"}),"\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:'<script src="./index.tsx"><\/script>'})," \u5c06\u5f15\u7528\u672c\u5730\u6a21\u5757\u5e76\u7f16\u8bd1\u5b83\uff0c \u4f46 ",(0,i.jsx)(n.code,{children:'<script src="/index.tsx"><\/script>'})," \u6216 ",(0,i.jsx)(n.code,{children:'<script src="https://xxx.com/index.tsx"><\/script>'})," \u5219\u4e0d\u4f1a\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"script"})," \u548c ",(0,i.jsx)(n.code,{children:"link"})," \u53ef\u4ee5\u5f15\u7528 farm \u652f\u6301\u7684\u4efb\u4f55\u6a21\u5757\u7c7b\u578b\uff0c\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"js"}),"\u3001",(0,i.jsx)(n.code,{children:"jsx"}),"\u3001",(0,i.jsx)(n.code,{children:"ts"}),"\u3001",(0,i.jsx)(n.code,{children:"tsx"})," \u6216\u63d2\u4ef6\u652f\u6301\u7684\u5176\u4ed6\u6a21\u5757\u7c7b\u578b\u3002 \u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4f7f\u7528\u4efb\u610f\u6570\u91cf\u7684 ",(0,i.jsx)(n.code,{children:"script"})," \u6216 ",(0,i.jsx)(n.code,{children:"link"}),"\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f---mpa",children:"\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f - MPA"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u60a8\u6b63\u5728\u6784\u5efa\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ea\u9700\u914d\u7f6e\u591a\u4e2a html\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import type { UserConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  input: {\n    home: './index.html', // Home Page\n    about: './about.html', // About Page\n    // ... more pages\n  }\n})\n"})}),"\n",(0,i.jsx)(n.p,{children:"Farm \u5c06\u5e76\u884c\u7f16\u8bd1\u8fd9\u4e9b\u9875\u9762\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7ee7\u627f-html-\u6a21\u677f",children:"\u7ee7\u627f html \u6a21\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["Farm \u652f\u6301\u901a\u8fc7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"html.base"})," \u914d\u7f6e\u7ee7\u627f html \u6a21\u677f\uff0c\u8fd9\u5728\u6784\u5efa\u5171\u4eab html \u7684\u591a\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\u65f6\u5f88\u6709\u5e2e\u52a9\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import type { UserConfig } from "@farmfe/core";\n\nexport function defineConfig(config: UserConfig) {\n  return config;\n}\n\nexport default defineConfig({\n  // ...\n  compilation: {\n    input: {\n      home: "./index.html", // Home Page\n      about: "./about.html", // About Page\n      // ... more pages\n    },\n    html: {\n      base: "./base.html",\n    },\n  },\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"base.html"}),"\uff0c\u5360\u4f4d\u7b26",(0,i.jsx)(n.code,{children:"{{children}}"}),"\u5c06\u88ab\u66ff\u6362\u4e3a\u5b50 html \u7684\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="./base.html"',children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    \x3c!-- \u5360\u4f4d\u7b26\u5c06\u4f1a\u5728\u7f16\u8bd1\u65f6\u66ff\u6362\u6210\u5bf9\u5e94\u7684\u5b50 html \u7684\u5185\u5bb9 --\x3e\n    {{children}}\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7ee7\u627f",(0,i.jsx)(n.code,{children:"./base.html"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="./src/home.html"',children:'\x3c!-- \u5176\u4ed6\u5b57\u6bb5\u7ee7\u627f\u81ea../base.html --\x3e\n<script src="./index.tsx"><\/script>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5696:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var i=t(959);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);