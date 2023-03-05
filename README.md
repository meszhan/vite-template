# Vite + React + Typescript项目模板搭建

## 说明

1. 构建工具：Vite<https://cn.vitejs.dev/>
2. 包管理工具：Pnpm<https://pnpm.io/zh/>

## 通用能力

1. React
2. TypeScript：<https://jkchao.github.io/typescript-book-chinese/>

## 搭建步骤

### 初始化项目

vite内置了一套支持react和typescript的开发模板

```bash
pnpm create vite vite-template --template react-ts
```

### react有关工具库

#### 路由管理

文档：

1. <https://reactrouter.com/en/main/start/overview>
2. <https://loadable-components.com/>

```bash
pnpm add react-router-dom
# 路由懒加载
pnpm add @loadable/component
pnpm add @types/loadable__component -D
```

V6中路由支持配置

```javascript
import {RouteObject} from 'react-router-dom';
import loadable from '@loadable/component';
import {Spin} from 'antd';

const Home = loadable(() => import("../modules/Home"), {
    fallback: <Spin />
})

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <>test</>
    },
]
```

#### Antd

```bash
pnpm add antd @ant-design/icons
```

### 进阶

#### 内容搜索

Algolia<https://www.algolia.com/doc/>

## 参考资料

1. <https://juejin.cn/post/7114555646820745253>
