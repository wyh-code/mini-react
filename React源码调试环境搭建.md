
## vite 配置
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      react: path.posix.resolve("src/packages/react"),
      "react-dom": path.posix.resolve("src/packages/react-dom"),
      "react-dom-bindings": path.posix.resolve("src/packages/react-dom-bindings"),
      "react-reconciler": path.posix.resolve("src/packages/react-reconciler"),
      scheduler: path.posix.resolve("src/packages/scheduler"),
      shared: path.posix.resolve("src/packages/shared"),
    },
  },
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
  define: {
    __DEV__: false, // 设置为false跳过 if(__dev__)的开发逻辑 这样会报错 需要修改jsx_dev的引入
    __EXPERIMENTAL__: true,
    __PROFILE__: true,
  },
});
```

## 需要用到的包
```js
// react
// react-dom
// react-dom-bindings
// react-reconciler
// scheduler
// shared
```

## 解决问题
### flow的类型问题

```js
// 安装依赖
npm install --global flow-remove-types
// 查看帮助命令
flow-remove-types --help
// 根据提示输入命令
flow-remove-types --out-dir src/react src/react

```

### ReactFiberConfigDOM 协调包的引入
```js
// ReactFiberConfig.js 添加
export * from 'react-dom-bindings/src/client/ReactFiberConfigDOM';
```

### 共享变量
```js
// Cannot destructure property 'ReactCurrentDispatcher'
// import ReactSharedInternals from 'shared/ReactSharedInternals'; 替换
import ReactSharedInternals from "react/src/ReactSharedInternals";

```

## 配置 jsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "react/*": ["src/react/packages/react/*"],
      "react-dom/*": ["src/react/packages/react-dom/*"],
      "react-dom-bindings/*": ["src/react/packages/react-dom-bindings/*"],
      "react-reconciler/*": ["src/react/packages/react-reconciler/*"],
      "scheduler/*": ["src/react/packages/scheduler/*"],
      "shared/*": ["src/react/packages/shared/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

