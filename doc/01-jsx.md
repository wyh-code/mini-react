## 什么是React
  - `React`是一个用于构建用户界面的js库
  - 可以通过组件化的方式构建，构建快速响应的大型`web`应用程序

## 什么是JSX
  - `jsx`是`js`的扩展语法，可以很好的描述`UI`应有交互的本质形式。

`jsx`需要经过`babel`编译为`js`后才可以在浏览器中运行。[babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAbzgYygUwIYzQJQheAXzgDMoIQ4AidDZGAWgBMKB6ZAG2DQDsYqA3ACghHNPDRiQveAF44ACiFw4AHgAWARgB8ylXHWSOEVQGcwGHnFMwAnmNkIkyCMagAuOAHJ0TL3EJCbQB3aA4mVVZzS10VSK1dAEohFx4bOHICOHlUTGw8AgUWZABXaT4AOgBzcQBRKRkAIVsASSYFH3wYL0TE4UyYCvQeJjQoBUk0cphkoA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.10&externalPlugins=babel-plugin-typescript-to-proptypes%402.0.0&assumptions=%7B%7D)


例如以下`JSX`代码：
```jsx
import { createRoot } from "react-dom/client";

let element = (
  <h1>
    hello<span style={{ color: 'red' }}>world</span>
  </h1>
)
const root = createRoot(document.getElementById('root'));
root.render(element)
```

在 `react17`以前，经过babel编译后的`js`为：
```js
import { createRoot } from "react-dom/client";
let element = /*#__PURE__*/React.createElement("h1", null, "hello", /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'red'
  }
}, "world"));
const root = createRoot(document.getElementById('root'));
root.render(element);
```

在`react17`以后，经过babel编译后的`js`为：
```js
import { createRoot } from "react-dom/client";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
let element = /*#__PURE__*/_jsxs("h1", {
  children: ["hello", /*#__PURE__*/_jsx("span", {
    style: {
      color: 'red'
    },
    children: "world"
  })]
});
const root = createRoot(document.getElementById('root'));
root.render(element);
```
新旧版本转换后的区别
 - 老版本编译之后转换为`React.createElement`函数，新版本转换后为`jsx`函数
 - 老版本需要手动引入`React`，新版本在编译后会自动插入`jsx`引用，不需要手动引入。
 - 老版本子节点是作为函数参数单独传入的，新版参数只有两个`type`和`props`，子节点放在了`props`中的`children`属性上

经过`babel`编译之后，我们可以看到：`react`渲染应用实际只是进行了三步操作
  - 生成虚拟DOM：17以前React.createElement，17以后jsx
  - 创建根节点：createRoot
  - 将虚拟DOM渲染到根节点：root.render



