"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5022],{469:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(1527),i=n(5696);const r={sidebar_position:2},o="Why Farm?",a={id:"why-farm",title:"Why Farm?",description:"What is Farm?",source:"@site/docs/why-farm.md",sourceDirName:".",slug:"/why-farm",permalink:"/docs/why-farm",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/why-farm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},l={},d=[{value:"What is Farm?",id:"what-is-farm",level:2},{value:"Why Farm?",id:"why-farm-1",level:2},{value:"Farm Design Philosophy",id:"farm-design-philosophy",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"why-farm",children:"Why Farm?"}),"\n",(0,t.jsx)(s.h2,{id:"what-is-farm",children:"What is Farm?"}),"\n",(0,t.jsxs)(s.p,{children:["Farm is an extremely fast Rust-based web build tool, like ",(0,t.jsx)(s.code,{children:"webpack"})," and ",(0,t.jsx)(s.code,{children:"vite"}),", but ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"much faster"})}),". Farm resolves, loads, and transforms all of your ",(0,t.jsx)(s.code,{children:"assets(js/jsx/ts/tsx, css/sass/less, html, static assets, json, etc)"}),", and bundle them into a set of ",(0,t.jsx)(s.code,{children:"deployable files"}),". Farm is an extremely fast build tool that helps you build faster ",(0,t.jsx)(s.code,{children:"web/nodejs"})," apps."]}),"\n",(0,t.jsx)(s.h2,{id:"why-farm-1",children:"Why Farm?"}),"\n",(0,t.jsx)(s.p,{children:"As web projects scale, build performance has been their major bottleneck. For a huge project compiling with webpack may cost 10 or more minutes and an HMR update may cost 10s or more, heavily reducing development efficiency."}),"\n",(0,t.jsx)(s.p,{children:"Then, tools like Vite came out. It uses native ESM and is unbundled for source files in dev mode, pre-bundles dependencies using esbuild, which makes the dev server launch and the HMR very fast."}),"\n",(0,t.jsx)(s.p,{children:"But Unbundled is not perfect, there are still big problems when comes to a large project:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"The huge number of module requests"}),": For a large project, there may be thousands of modules that need to be loaded. Using the native module system to load thousands of modules will make the browser get stuck or even cause it to crash."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Inconsistency between Dev and Production"}),": Native modules cannot be used in production for most situations, due to compatibility and request number issues. So Unbundled tools choose to bundle in production. This brings inconsistency, when there are production bugs caused by this inconsistency, it's really hard to debug and really painful. Vite uses esbuild in dev and using rollup in production, which makes the inconsistency worse."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Inflexible Chunk Splitting"}),": Configuration for Chunk Splitting is not flexible enough."]}),"\n",(0,t.jsx)(s.li,{children:"Vite is so fast in dev because of esbuild, which is written in go. Go takes advantage of the native platform and is much faster than JS."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"So I think we just need a fast, powerful, consistent web bundler, which can solve the problems above and fast, then I designed and implemented Farm."}),"\n",(0,t.jsx)(s.p,{children:"And Farm is not just a normal bundler re-written in Rust, it has a lot of powerful and progressive designs:"}),"\n",(0,t.jsx)(s.h2,{id:"farm-design-philosophy",children:"Farm Design Philosophy"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Performance first"}),": Everything will be written in Rust for as long as we can; only several parts which are not the performance bottleneck will be written in JS."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Consistency first"}),": Make sure that development and production are exactly the same by default. What you see in development will be the same as what you get in production."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Partial Bundling"}),": The bundling goal of Farm is not to bundle everything together, but to limit the request numbers of resources. Farm will bundle your project into 20-30 small resources according to the dependency relation and resource size, to get the best resource loading performance without losing caching granularity."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"First class citizen support of all web assets"}),": Farm won't need to transform everything to Javascript any more, it treats anything as first class citizen, assets like ",(0,t.jsx)(s.code,{children:"html"}),", ",(0,t.jsx)(s.code,{children:"js/jsx/ts/tsx"}),", ",(0,t.jsx)(s.code,{children:"css/scss"}),", ",(0,t.jsx)(s.code,{children:"png/svg/..."})," are all basic modules supported by Farm, more assets can be supported by plugins."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Compatibility"}),": Farm will work with both legacy (ES5) and modern browsers."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Rollup style plugin system and vite/rollup compatible js-plugins"}),": Easy to create your own plugins and easy to migrate your plugins/projects from rollup/vite. Support both Rust and JS plugins."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Farm's goal is to be the real next generation build tool, inherit all advantages from existing tools, and to be fast, powerful, consistent, and provide the best development experience for web developers."})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5696:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(959);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);