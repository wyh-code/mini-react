## 什么是React
  - `React`是一个用于构建用户界面的js库
  - 可以通过组件化的方式构建，构建快速响应的大型`web`应用程序

## 什么是JSX
  - `jsx`是js的扩展语法，可以很好的描述UI应有交互的本质形式。

`jsx`需要经过babel编译为js后才可以在浏览器中运行。[babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAKAUDGAHgAsBGAPnwJmMQREIgAcBDMcgdxACcEATQgHpmbSgSFlKASiA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.10&externalPlugins=babel-plugin-typescript-to-proptypes%402.0.0&assumptions=%7B%7D)
 
```jsx
// 源码
const element = (
  <h1>
    hello<span>world</span>
  </h1>
)

// 17以前
const element = React.createElement("h1", null, "hello", React.createElement("span", null, "world"));

// 17以后
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const element = _jsxs("h1", {
  children: ["hello", _jsx("span", {
    children: "world"
  })]
});

```
新旧版本转换后的区别
 - 老版本编译之后转换为`React.createElement`函数，新版本转换后为`jsx`函数
 - 老版本需要手动引入`React`，新版本在编译后会自动插入`jsx`引用，不需要手动引入。
 - 老版本子节点是作为函数参数单独传入的，新版参数只有两个`type`和`props`，子节点放在了`props`中的`children`属性上
