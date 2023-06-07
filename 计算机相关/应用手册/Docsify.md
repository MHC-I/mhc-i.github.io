# Docsify

> docsify 可以快速帮你生成文档网站。不同于 GitBook、Hexo 的地方是它不会生成静态的 .html 文件，所有转换工作都是在运行时。如果你想要开始使用它，只需要创建一个 index.html 就可以开始编写文档并直接部署在 GitHub Pages。

## 一、准备

### 安装
全局安装 `docsify-cli` 工具

```bash
npm i docsify-cli -g
```

### 初始化
初始化项目，在./docs文件夹下生成docsify项目

```bash
docsify init ./docs
```

项目结构
- `index.html` 入口文件
- `README.md` 会做为主页内容渲染
- `.nojekyll` 用于阻止 GitHub Pages 忽略掉下划线开头的文件

### 本地预览

启动一个本地服务器，可以方便地实时预览效果，默认访问地址   `http://localhost:3000` 。

```bash
docsify serve docs
```

## 二、优化

优化主要通过直接修改index.html来实现，例如引入插件、CSS文件，全程不需要通过npm安装插件，所以整个过程操作起来非常简单明了。

这里先列出一些常用的插件

| 插件 | 功能 |
|---|---|
| [docsify-sidebar-collapse](https://github.com/iPeng6/docsify-sidebar-collapse) | 侧边栏折叠 |
| [docsify-count](https://github.com/827652549/docsify-count/) | 字数统计 |
| [docsify-beian](https://github.com/HerbertHe/docsify-beian) | 备案号显示 |
| [docsify-dark-mode](https://github.com/Plugin-contrib/docsify-plugin/tree/master/packages/docsify-dark-mode) | 暗黑模式 |
| [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code) | 允许复制代码到剪切板 |
| [mermaid-docsify](https://github.com/Leward/mermaid-docsify) | mermaid绘图 |

## 三、部署