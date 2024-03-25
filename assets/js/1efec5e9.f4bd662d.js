"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8802],{1558:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=t(1527),n=t(5696),l=t(2264),o=t(7123),s=t(9988);const i={},c="Solid",u={id:"frameworks/solid",title:"Solid",description:"Create a Solid project based on Farm.",source:"@site/docs/frameworks/solid.mdx",sourceDirName:"frameworks",slug:"/frameworks/solid",permalink:"/docs/frameworks/solid",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/frameworks/solid.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/docs/frameworks/vue"},next:{title:"Svelte",permalink:"/docs/frameworks/svelte"}},d={},m=[{value:"Creating a Solid Project",id:"creating-a-solid-project",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"solid",children:"Solid"}),"\n",(0,a.jsxs)(r.p,{children:["Create a ",(0,a.jsx)(r.code,{children:"Solid"})," project based on ",(0,a.jsx)(r.code,{children:"Farm"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"Farm"})," provides two approaches to support creating ",(0,a.jsx)(r.code,{children:"Solid"})," projects:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Use the ",(0,a.jsx)(r.code,{children:"create-farm"})," scaffold to create a scaffold project"]}),"\n",(0,a.jsxs)(r.li,{children:["You can manually create a ",(0,a.jsx)(r.code,{children:"Solid"})," project following the current documentation"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"creating-a-solid-project",children:"Creating a Solid Project"}),"\n",(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{value:"npm",label:"npm",children:(0,a.jsx)(l.Z,{children:"npm create farm@latest"})}),(0,a.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(l.Z,{children:"yarn create farm"})}),(0,a.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(l.Z,{children:"pnpm create farm"})})]})}),"\n",(0,a.jsxs)(r.p,{children:["Select ",(0,a.jsx)(r.code,{children:"Solid"})," template in ",(0,a.jsx)(r.code,{children:"Select Framework"})]}),"\n",(0,a.jsx)(r.admonition,{title:"Solid",type:"warning",children:(0,a.jsxs)(r.p,{children:["For ",(0,a.jsx)(r.code,{children:"Solid"})," support, ",(0,a.jsx)(r.code,{children:"Farm"})," recommends using ",(0,a.jsx)(r.code,{children:"Vite"})," plugins."]})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\nimport Solid from \"vite-plugin-solid\";\n\nexport default defineConfig({\n  plugins: [Solid()],\n});\n"})}),"\n",(0,a.jsxs)(r.p,{children:["For more example details: ",(0,a.jsx)(r.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/vite-adapter-solid",children:"Solid Example"})]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9988:(e,r,t)=>{t.d(r,{Z:()=>o});t(959);var a=t(5341);const n={tabItem:"tabItem_MFY6"};var l=t(1527);function o(e){let{children:r,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,o),hidden:t,children:r})}},7123:(e,r,t)=>{t.d(r,{Z:()=>S});var a=t(959),n=t(5341),l=t(5739),o=t(8903),s=t(6206),i=t(6404),c=t(2108),u=t(2685);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,o.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})}),[l,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[c,d]=h({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,l]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),j=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(8302);const j={tabList:"tabList_d80c",tabItem:"tabItem_jy3j"};var x=t(1527);function v(e){let{className:r,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),n=s[t].value;n!==a&&(c(r),o(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,n.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function w(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,n.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...e,...r}),(0,x.jsx)(g,{...e,...r})]})}function S(e){const r=(0,b.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}}}]);