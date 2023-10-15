
# Script
Farm支持开箱即用地编译`Js/Jsx/Ts/Tsx`，并默认将`Jsx/Tsx`编译为React。

```tsx title="./button.tsx"
import Button from './Button';

function ButtonGroup(props: ButtonProps) {
  return <div>{props.buttons.map(b => <Button>{b}</Button>)}</div>
}
```

Farm使用SWC来编译脚本，Farm为脚本编译设置了合理的默认配置。 另外，您可以使用`compilation.script`来配置如何编译脚本文件。 有关详细信息，请参阅 [compilation.script](/docs/config/farm-config#compilation-options)。

## 配置 Swc 解析器
您可以通过`compilation.script.parser`配置SWC解析器。 请参阅 https://swc.rs/docs/configuration/compilation#jscparser。

例如，如果你想启用装饰器，你可以设置`compilation.script.parser.esConfig.decorators`（如果模块是TS，则设置tsConfig.decorators）：

```ts title="farm.config.ts"
export default {
   compilation: {
     script: {
      // for .js/.jsx files
       esConfig: {
        decorators: true
       },
       // for .ts/.tsx files
       tsConfig: {
        decorators: true
       }
     }
   },
};
```

默认情况下，Farm 为`.jsx|.tsx`文件设置`jsx: true`。 其他字段默认为SWC的默认值。

## 配置目标执行环境
运行项目时使用`compilation.script.target`配置目标环境，Farm 将其默认设置为`ESNext`。

此选项可以与`compilation.presetEnv`一起使用，以针对旧浏览器优雅地降级您的项目。 例如，您可以将 target 设置为 `ES5` 并启用 `presetEnv`，那么您的项目将完全降级到 ES5。

```ts title="farm.config.ts"
export default {
   compilation: {
     script: {
      target: 'ES5'
     },
     presetEnv: true,
   },
};
```

有关`presetEnv`的更多信息，请参阅 [Polyfill](/docs/features/polyfill)。

## 使用 SWC 插件
SWC Plugins可以直接在Farm中使用，例如我们在Farm中使用swc-plugin-vue-jsx来编译vue jsx：

```ts title="farm.config.ts"
import jsPluginVue from '@farmfe/js-plugin-vue';

/**
  * @type {import('@farmfe/core').UserConfig}
  */
export default {
   compilation: {
     script: {
       plugins: [{
         name: 'swc-plugin-vue-jsx',
         options: {
           "transformOn": true,
           "optimize": true
         },
         filters: {
           // resolvedPaths: [".+"]
           moduleTypes: ['tsx', 'jsx'],
         }
       }]
     }
   },
   plugins: [jsPluginVue()],
};
```

有关更多详细信息，请参阅[使用插件](/docs/using-plugins#using-swc-plugins)。