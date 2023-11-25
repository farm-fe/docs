"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[53],{1109:i=>{i.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/zh/docs/quick-start","docId":"quick-start"},{"type":"link","label":"\u4e3a\u4ec0\u4e48\u9700\u8981 Farm\uff1f","href":"/zh/docs/why-farm","docId":"why-farm"},{"type":"link","label":"\u4f7f\u7528\u63d2\u4ef6","href":"/zh/docs/using-plugins","docId":"using-plugins"},{"type":"category","label":"\u6559\u7a0b","collapsed":false,"items":[{"type":"link","label":"\u6982\u8ff0","href":"/zh/docs/tutorials/overview","docId":"tutorials/overview"},{"type":"link","label":"1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee","href":"/zh/docs/tutorials/create","docId":"tutorials/create"},{"type":"link","label":"2. \u4f7f\u7528 Farm \u5f00\u53d1\u9879\u76ee","href":"/zh/docs/tutorials/start","docId":"tutorials/start"},{"type":"link","label":"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee","href":"/zh/docs/tutorials/build","docId":"tutorials/build"}],"collapsible":true},{"type":"category","label":"\u7f16\u8bd1\u80fd\u529b","collapsed":false,"items":[{"type":"link","label":"Html","href":"/zh/docs/features/html","docId":"features/html"},{"type":"link","label":"CSS","href":"/zh/docs/features/css","docId":"features/css"},{"type":"link","label":"Script","href":"/zh/docs/features/script","docId":"features/script"},{"type":"link","label":"\u9759\u6001\u8d44\u6e90","href":"/zh/docs/features/static","docId":"features/static"},{"type":"link","label":"\u61d2\u7f16\u8bd1","href":"/zh/docs/features/lazy-compilation","docId":"features/lazy-compilation"},{"type":"link","label":"Partial Bundling","href":"/zh/docs/features/partial-bundling","docId":"features/partial-bundling"},{"type":"link","label":"Source Map","href":"/zh/docs/features/sourcemap","docId":"features/sourcemap"},{"type":"link","label":"Tree Shake","href":"/zh/docs/features/tree-shake","docId":"features/tree-shake"},{"type":"link","label":"\u538b\u7f29","href":"/zh/docs/features/minification","docId":"features/minification"},{"type":"link","label":"\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill","href":"/zh/docs/features/polyfill","docId":"features/polyfill"},{"type":"link","label":"Persistent Cache","href":"/zh/docs/features/persistent-cache","docId":"features/persistent-cache"}],"collapsible":true},{"type":"link","label":"Benchmarks","href":"/zh/docs/benchmark","docId":"benchmark"}],"configSidebar":[{"type":"link","label":"\u914d\u7f6e\u53c2\u8003","href":"/zh/docs/config/farm-config","docId":"config/farm-config"},{"type":"link","label":"CLI \u9009\u9879","href":"/zh/docs/config/cli","docId":"config/cli"}],"pluginSidebar":[{"type":"category","label":"\u5b98\u65b9\u63d2\u4ef6","items":[{"type":"link","label":"\u63d2\u4ef6\u6982\u89c8","href":"/zh/docs/plugins/official-plugins/overview","docId":"plugins/official-plugins/overview"},{"type":"category","label":"Rust \u63d2\u4ef6","collapsed":false,"items":[{"type":"link","label":"@farmfe/plugin-react","href":"/zh/docs/plugins/official-plugins/react","docId":"plugins/official-plugins/react"},{"type":"link","label":"@farmfe/plugin-sass","href":"/zh/docs/plugins/official-plugins/sass","docId":"plugins/official-plugins/sass"}],"collapsible":true},{"type":"category","label":"Js \u63d2\u4ef6","collapsed":false,"items":[{"type":"link","label":"@farmfe/js-plugin-postcss","href":"/zh/docs/plugins/official-plugins/js-postcss","docId":"plugins/official-plugins/js-postcss"},{"type":"link","label":"@farmfe/js-plugin-less","href":"/zh/docs/plugins/official-plugins/js-less","docId":"plugins/official-plugins/js-less"},{"type":"link","label":"@farmfe/js-plugin-sass","href":"/zh/docs/plugins/official-plugins/js-sass","docId":"plugins/official-plugins/js-sass"},{"type":"link","label":"@farmfe/js-plugin-svgr","href":"/zh/docs/plugins/official-plugins/js-svgr","docId":"plugins/official-plugins/js-svgr"},{"type":"link","label":"@farmfe/js-plugin-dts","href":"/zh/docs/plugins/official-plugins/js-dts","docId":"plugins/official-plugins/js-dts"}],"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"link","label":"\u793e\u533a\u63d2\u4ef6","href":"/zh/docs/plugins/community-plugins","docId":"plugins/community-plugins"},{"type":"category","label":"\u7f16\u5199\u63d2\u4ef6","collapsed":false,"items":[{"type":"link","label":"\u6982\u89c8","href":"/zh/docs/plugins/writing-plugins/overview","docId":"plugins/writing-plugins/overview"},{"type":"link","label":"Rust Plugins","href":"/zh/docs/plugins/writing-plugins/rust-plugin","docId":"plugins/writing-plugins/rust-plugin"},{"type":"link","label":"Js Plugins","href":"/zh/docs/plugins/writing-plugins/js-plugin","docId":"plugins/writing-plugins/js-plugin"}],"collapsible":true}]},"docs":{"benchmark":{"id":"benchmark","title":"Benchmarks","description":"Using Turbopack\'s bench cases (1000 React components), see https://turbo.build/pack/docs/benchmarks.","sidebar":"tutorialSidebar"},"concepts":{"id":"concepts","title":"Concepts","description":"Farm is a build tool to transform and bundle your input to deployable resources. Farm will search modules start from the input, then construct a module graph and bundle these modules into several resources"},"config/cli":{"id":"config/cli","title":"CLI \u9009\u9879","description":"create","sidebar":"configSidebar"},"config/farm-config":{"id":"config/farm-config","title":"\u914d\u7f6e\u53c2\u8003","description":"Farm \u9ed8\u8ba4\u4ece\u9879\u76ee\u6839\u76ee\u5f55\u7684 farm.config.ts|js|mjs \u6587\u4ef6\u4e2d\u8bfb\u53d6\u914d\u7f6e\uff0c\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b:","sidebar":"configSidebar"},"features/css":{"id":"features/css","title":"CSS","description":"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684 CSS \u7f16\u8bd1\uff0c\u4f8b\u5982\uff1a","sidebar":"tutorialSidebar"},"features/html":{"id":"features/html","title":"Html","description":"\u57fa\u672c\u7528\u6cd5","sidebar":"tutorialSidebar"},"features/lazy-compilation":{"id":"features/lazy-compilation","title":"\u61d2\u7f16\u8bd1","description":"\u5f53\u6d89\u53ca\u5230\u4e00\u4e2a\u5927\u9879\u76ee\u65f6\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06\u5b83\u4eec\u5206\u6210\u5c0f\u5757\u5e76\u6309\u9700\u52a0\u8f7d\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u5bfc\u5165\u6765\u5b9e\u73b0\u3002","sidebar":"tutorialSidebar"},"features/minification":{"id":"features/minification","title":"\u538b\u7f29","description":"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u751f\u4ea7\u73af\u5883\u538b\u7f29\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u5728production\u6a21\u5f0f\u4e0b\u542f\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7compilation.minify\u9009\u9879\u542f\u7528\u6216\u7981\u7528\u3002","sidebar":"tutorialSidebar"},"features/partial-bundling":{"id":"features/partial-bundling","title":"Partial Bundling","description":"Partial Bundling \u662f Farm \u7528\u4e8e\u6253\u5305\u6a21\u5757\u7684\u7b56\u7565\uff0c\u4e0e\u5176\u4ed6 bundler\u7684\u505a\u6cd5\u7c7b\u4f3c\uff0c\u4f46 Farm \u7684 Partial Bundling \u7684\u76ee\u6807\u4e0d\u540c\u3002","sidebar":"tutorialSidebar"},"features/persistent-cache":{"id":"features/persistent-cache","title":"Persistent Cache","description":"Farm supports persistent cache since v0.14.0","sidebar":"tutorialSidebar"},"features/polyfill":{"id":"features/polyfill","title":"\u8bed\u6cd5\u964d\u7ea7\u548c Polyfill","description":"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5c06\u964d\u7ea7\u5230ES5\u5e76\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u81ea\u52a8\u6ce8\u5165polyfills\u3002","sidebar":"tutorialSidebar"},"features/script":{"id":"features/script","title":"Script","description":"Farm\u652f\u6301\u5f00\u7bb1\u5373\u7528\u5730\u7f16\u8bd1Js/Jsx/Ts/Tsx\uff0c\u5e76\u9ed8\u8ba4\u5c06Jsx/Tsx\u7f16\u8bd1\u4e3aReact\u3002","sidebar":"tutorialSidebar"},"features/sourcemap":{"id":"features/sourcemap","title":"Source Map","description":"Farm \u652f\u6301 Source Map\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u81ea\u52a8\u542f\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u542f\u7528\u6216\u7981\u7528 sourcemap\u3002","sidebar":"tutorialSidebar"},"features/static":{"id":"features/static","title":"\u9759\u6001\u8d44\u6e90","description":"v0.4 \u53ca\u4ee5\u4e0a\u652f\u6301","sidebar":"tutorialSidebar"},"features/tree-shake":{"id":"features/tree-shake","title":"Tree Shake","description":"Farm \u652f\u6301 Tree Shake\uff0c\u5728\u9ed8\u8ba4 Production \u73af\u5883\u4e0b\u81ea\u52a8\u5f00\u542f\u3002\u901a\u8fc7 compilation.treeShake \u9009\u9879\u53ef\u63a7\u5236\u5f00\u542f\u6216\u8005\u5173\u95ed\u3002","sidebar":"tutorialSidebar"},"plugins/community-plugins":{"id":"plugins/community-plugins","title":"\u793e\u533a\u63d2\u4ef6","description":"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u201cVite/Rollup\u201d\u63d2\u4ef6\u3002 \u6240\u4ee5 Vite/Rollup \u6216\u8005 unplugin \u63d2\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5728 Farm \u4e2d\u4f7f\u7528\u3002","sidebar":"pluginSidebar"},"plugins/official-plugins/js-dts":{"id":"plugins/official-plugins/js-dts","title":"@farmfe/js-plugin-dts","description":"\u652f\u6301 .d.ts \u6587\u4ef6\u3002 \u8be5\u63d2\u4ef6\u7528\u4e8e\u6784\u5efa\u7684\u5de5\u5177\u5e93\uff0c\u4e3a\u60a8\u7684 ts \u4ee3\u7801\u751f\u6210\u201c.d.ts\u201d","sidebar":"pluginSidebar"},"plugins/official-plugins/js-less":{"id":"plugins/official-plugins/js-less","title":"@farmfe/js-plugin-less","description":"\u652f\u6301 Less \u7f16\u8bd1","sidebar":"pluginSidebar"},"plugins/official-plugins/js-postcss":{"id":"plugins/official-plugins/js-postcss","title":"@farmfe/js-plugin-postcss","description":"\u652f\u6301 postcss \u7684\u524d\u7f6e\u7f16\u8bd1\u5de5\u4f5c","sidebar":"pluginSidebar"},"plugins/official-plugins/js-sass":{"id":"plugins/official-plugins/js-sass","title":"@farmfe/js-plugin-sass","description":"\u652f\u6301 sass \u7f16\u8bd1","sidebar":"pluginSidebar"},"plugins/official-plugins/js-svgr":{"id":"plugins/official-plugins/js-svgr","title":"@farmfe/js-plugin-svgr","description":"\u652f\u6301\u5c06 SVG \u7f16\u8bd1\u6210 React \u7ec4\u5efa","sidebar":"pluginSidebar"},"plugins/official-plugins/overview":{"id":"plugins/official-plugins/overview","title":"\u63d2\u4ef6\u6982\u89c8","description":"Farm\u5b98\u65b9\u63d0\u4f9b\u4e86\u5f88\u591a\u6709\u7528\u7684\u63d2\u4ef6\uff0c\u5305\u62ecRust\u63d2\u4ef6\u548cJS\u63d2\u4ef6\u3002 Rust \u63d2\u4ef6\u6bd4 Js \u63d2\u4ef6\u5feb\u5f97\u591a\uff0c\u6211\u4eec\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528 Rust \u63d2\u4ef6\u3002","sidebar":"pluginSidebar"},"plugins/official-plugins/react":{"id":"plugins/official-plugins/react","title":"@farmfe/plugin-react","description":"\u652f\u6301 React Jsx \u548c React Refresh","sidebar":"pluginSidebar"},"plugins/official-plugins/sass":{"id":"plugins/official-plugins/sass","title":"@farmfe/plugin-sass","description":"\u652f\u6301 sass \u7f16\u8bd1","sidebar":"pluginSidebar"},"plugins/writing-plugins/js-plugin":{"id":"plugins/writing-plugins/js-plugin","title":"Js Plugins","description":"JS \u63d2\u4ef6\u5c31\u662f\u4e00\u4e2a\u7eaf\u7cb9\u7684 Javascript \u5bf9\u8c61.","sidebar":"pluginSidebar"},"plugins/writing-plugins/overview":{"id":"plugins/writing-plugins/overview","title":"\u6982\u89c8","description":"Farm \u91c7\u7528\u5b8c\u5168\u63d2\u4ef6\u5316\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u6765\u5e72\u9884 Farm \u7684\u51e0\u4e4e\u6240\u6709\u884c\u4e3a\uff0cFarm \u652f\u6301\u7684\u4e3b\u8981\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u4e00\u4e0b\u51e0\u7c7b\uff1a","sidebar":"pluginSidebar"},"plugins/writing-plugins/runtime-plugin":{"id":"plugins/writing-plugins/runtime-plugin","title":"Runtime Plugin","description":"Working in progress."},"plugins/writing-plugins/rust-plugin":{"id":"plugins/writing-plugins/rust-plugin","title":"Rust Plugins","description":"Rust Plugins are not stable for now...","sidebar":"pluginSidebar"},"quick-start":{"id":"quick-start","title":"\u5feb\u901f\u5f00\u59cb","description":"Farm \u9700\u8981 Node 16 \u53ca\u4ee5\u4e0a\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Linux\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u4e3a ubuntu 22 \u53ca\u66f4\u9ad8\u7248\u672c\uff08\u6216 GLIBC >= 2.32\uff09\u3002","sidebar":"tutorialSidebar"},"tutorials/build":{"id":"tutorials/build","title":"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee","description":"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5df2\u7ecf\u4e3a\u751f\u4ea7\u6784\u5efa\u5f00\u542f\u4e86\u4ee5\u4e0b\u529f\u80fd\u7684\u652f\u6301\uff1a","sidebar":"tutorialSidebar"},"tutorials/create":{"id":"tutorials/create","title":"1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee","description":"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Farm React \u9879\u76ee\uff0c\u5e76\u4ee5\u5f00\u53d1\u6a21\u5f0f\u542f\u52a8\u5b83\u3002","sidebar":"tutorialSidebar"},"tutorials/overview":{"id":"tutorials/overview","title":"\u6982\u8ff0","description":"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a Farm React \u9879\u76ee\uff0c\u5e76\u4ecb\u7ecd\u5982\u4f55\u6dfb\u52a0\u6709\u7528\u7684\u7ec4\u4ef6\u5e93\u548c Farm \u63d2\u4ef6\u3002","sidebar":"tutorialSidebar"},"tutorials/start":{"id":"tutorials/start","title":"2. \u4f7f\u7528 Farm \u5f00\u53d1\u9879\u76ee","description":"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5e38\u7528\u7684\u914d\u7f6e\u548c\u63d2\u4ef6\u6765\u5e2e\u52a9\u60a8\u4f7f\u7528 Farm \u6784\u5efa\u590d\u6742\u7684\u751f\u4ea7\u5c31\u7eea\u7684 Web \u9879\u76ee\u3002","sidebar":"tutorialSidebar"},"using-plugins":{"id":"using-plugins","title":"\u4f7f\u7528\u63d2\u4ef6","description":"Farm\u652f\u63014\u79cd\u63d2\u4ef6\uff1a","sidebar":"tutorialSidebar"},"why-farm":{"id":"why-farm","title":"\u4e3a\u4ec0\u4e48\u9700\u8981 Farm\uff1f","description":"\u968f\u7740 web \u9879\u76ee\u89c4\u6a21\u7684\u6269\u5927\uff0c\u6784\u5efa\u6027\u80fd\u5df2\u7ecf\u6210\u4e3a\u4e3b\u8981\u74f6\u9888\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5e9e\u5927\u7684\u9879\u76ee\uff0c\u4f7f\u7528 webpack \u7f16\u8bd1\u53ef\u80fd\u9700\u8981 10min \u751a\u81f3\u66f4\u591a\uff0c\u4e00\u6b21 hmr \u66f4\u65b0\u53ef\u80fd\u9700\u8981 10s \u751a\u81f3\u66f4\u591a\uff0c\u4e25\u91cd\u964d\u4f4e\u4e86\u7814\u53d1\u6548\u7387\u3002","sidebar":"tutorialSidebar"}}}')}}]);