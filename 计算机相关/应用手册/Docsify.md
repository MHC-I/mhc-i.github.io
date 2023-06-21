# Docsify

> docsify 可以快速帮你生成文档网站。不同于 GitBook、Hexo 的地方是它不会生成静态的 .html 文件，所有转换工作都是在运行时。如果你想要开始使用它，只需要创建一个 index.html 就可以开始编写文档并直接部署在 GitHub Pages。

## 一、安装

全局安装 `docsify-cli` 工具

```bash
npm i docsify-cli -g
```

初始化项目，在./docs文件夹下生成docsify项目

```bash
docsify init ./docs
```

项目结构
- `index.html` 入口文件
- `README.md` 会做为主页内容渲染
- `.nojekyll` 用于阻止 GitHub Pages 忽略掉下划线开头的文件

启动一个本地服务器，可以方便地实时预览效果，默认访问地址   `http://localhost:3000` 。

```bash
docsify serve docs
```

## 二、优化

### Docsify 加速

Docsify 主要引用了`docsify.min.js`、`vue.css`两个文件，包括插件也是通过引入JS文件来实现的，由于国内网络的特殊原因，Docsify打开的速度会比较慢（因为Jsdeliver被DNS污染，我测试时Mermaid插件加载完基本要8秒左右）。将JS和CSS文件放到Docsify文件夹中，直接从自己的网站中加载（现在网站基本能在1秒内加载完成）就可以解决这个问题。

> 注意：将Docsify放在本地的时候一定要放`docsify.min.js`，而不是`docsify.js`，否则会一直在Loading，当时这个问题我尝试了很久才解决。

在Docsify文件夹（就是docs文件夹）下新建`js`和`css`两个文件夹，将`docsify.min.js`和`vue.css`两个文件放入对应文件夹中，再按以下方法修改`index.html`文件（主要就是修改引入两个文件的地方）。[docsify.min.js](https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js)和[vue.css](https://cdn.jsdelivr.net/npm/docsify/themes/vue.css)可以点击链接到jsdelivr下载最新版的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
 <!-- 修改这里，引入本地CSS -->
  <link rel="stylesheet" href="./css/vue.css">
</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      name: '',
      repo: '',
      // 开启侧边栏 
      loadSidebar: true,
      sidebarDisplayLevel: 1,
    }
  
  </script>
  <!-- Docsify v4 -->
  <!-- 修改这里，引入本地JS -->
  <script src="./js/docsify.min.js"></script>
  </script>
</body>
</html>
```

如此优化之后，哪怕现在电脑完全断网，使用`docsify serve`命令你的项目也可以完成渲染预览。

### 安装插件

这里先列出一些常用的插件

| 插件 | 功能 |
|---|---|
| [docsify-sidebar-collapse](https://github.com/iPeng6/docsify-sidebar-collapse) | 侧边栏折叠 |
| [docsify-count](https://github.com/827652549/docsify-count/) | 字数统计 |
| [docsify-beian](https://github.com/HerbertHe/docsify-beian) | 备案号显示 |
| [docsify-dark-mode](https://github.com/Plugin-contrib/docsify-plugin/tree/master/packages/docsify-dark-mode) | 暗黑模式 |
| [docsify-copy-code](https://github.com/jperasmus/docsify-copy-code) | 允许复制代码到剪切板 |
| [mermaid-docsify](https://github.com/Leward/mermaid-docsify) | mermaid绘图 |
| [docsify-pagination](https://github.com/imyelo/docsify-pagination) | 显示上下章节 |
| [zoom-image](https://cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js) | 图片缩放 |
| [prism](https://cdn.jsdelivr.net/npm/prismjs@1/components/) | 拓展代码高亮 |

安装插件我也是先将插件JS文件按上面的方法放入Docsify文件夹，然后再引入`index.html`来实现的，下面是我的`index.html`文件，注释很清晰，应该比较容易理解。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Digital Garden</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="./css/vue.css">
</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      // 设置文档名称
      name: 'Digital Garden',
      repo: '',
      //浏览器缓存时间
      requestHeaders: {
      'cache-control': 'max-age=600',
      },
      // 开启侧边栏 
      loadSidebar: true,
      sidebarDisplayLevel: 1,
      // 避免侧边栏不必要的回退
      alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
      }, 
      // 搜索
      search: {
        paths: 'auto',
        placeholder: '搜索🔍',
        noData: '什么都没有找到噢!',
        depth: 6
      },
      // 文档目录
      subMaxLevel:6,
      // 字数统计
      count:{
        countable:true,
        fontsize:'0.9em',
        color:'rgb(90,90,90)',
        language:'chinese'
      },
      //mermaid绘图
      mermaidConfig: {
        querySelector: ".mermaid"
      },
      //mermaid bug修复
      plugins: [
        function (hook) {
          hook.doneEach(function () {
            let mermaidConfig = {
              querySelector: ".mermaid",
            };
            mermaid.run(mermaidConfig);
          });
        },
      ],
      //备案信息
      beian: {
        ICP: "ICP备案号",
      },
      
    }
  
  </script>
  <!-- Docsify v4 -->
  <script src="./js/docsify.min.js"></script>
  <!-- 搜索 -->
  <script src="./js/search.min.js"></script>
  <!-- 代码复制按钮 -->
  <script src="./js/docsify-copy-code.min.js"></script>
  <!-- 字数统计 -->
  <script src="./js/countable.min.js"></script>
  <!-- 侧边栏折叠 -->
  <script src="./js/docsify-sidebar-collapse.min.js"></script>
  <!-- mermaid绘图 -->
  <script type="module">
    import mermaid from "./js/mermaid/mermaid.esm.min.mjs";
    mermaid.initialize({ startOnLoad: true });
    window.mermaid = mermaid;
  </script>
  <script src="./js/docsify-mermaid.js"></script>
  <!-- PWA -->
  <script>
    if (typeof navigator.serviceWorker !== 'undefined') {
      navigator.serviceWorker.register('./js/sw.js')
    }
  </script>
  <!-- 备案信息 -->
  <script src="./js/beian.min.js"></script>
  <!-- 图片缩放 -->
  <script src="./js/zoom-image.min.js"></script> 
  <!-- 上下章节 -->
  <script src="./js/docsify-pagination.min.js"></script>
  <!-- 代码高亮支持 -->
  <script src="./js/prism-bash.min.js"></script>
  <script src="./js/prism-python.min.js"></script>
</body>
</html>
```

### 套CDN后网站长时间不更新

GitHub Pages是能在很短时间内更新的，但是OSS套用CDN这一端1天多还是不能更新。折腾好久后发现问题应该出在浏览器缓存，因为在开发者模式下禁用缓存后网站是能在很短时间下更新的。对比GitHub Pages，发现问题应该出在标头的 `Cache-Control` 参数，CDN的这一参数`max-age=259200`（3天）,而是Github Pages 的这一参数是`max-age=600`（10）分钟。

Docsify 有 requestHeaders 的设置参数，但是设置 `Cache-Control` 为 `max-age=600` 之后，浏览器还是显示`max-age=259200`，这个方法好像不起效

后来终于在CDN控制台找到了方法，点开网站对应CDN的管理页面，配置如图

![截屏2023-06-10 12.39.56](http://img.wbc.icu/2023/06/10/jie-ping20230610-123956.png)

<div align="center"> <img src="http://img.wbc.icu/2023/06/10/jie-ping20230610-124416.png" style="zoom : 40%" /> </div>

## 三、部署

我选择的整个部署路径是这样的

```mermaid
graph LR
A["Mweb(文章编辑)"]-->B[Git发布到Github]-->C["生成GitHub Pages"]
B-->D["GitHub Action同步到阿里云OSS"]-->E[阿里云CDN]
C & E-->F[浏览器请求]--docsify-->呈现
 ```
 
### Mweb设置
 
首先在通用设置中勾选 `启动时默认打开外部文件夹模式`，这样就不用每次打开都`Crtl`+`E`切换外部文件夹模式

配置Mweb图床（我使用阿里云OSS），遇到竖向的图片时使用html标签适当调整图片大小，使页面看起来更舒服

```
<div align="center"> <img src="图片地址" style="zoom : 40%" /> </div>
```

如果不使用在线图床，可以像我这样设置附件文件夹（右键引入文件夹），附件文件夹会被隐藏起来，整个目录树看起来会更加整洁

<div align="center"> <img src="http://img.wbc.icu/2023/06/09/jie-ping20230609-171339.png" style="zoom : 40%" /> </div>

### GitHub Action同步到阿里云OSS
GitHub Action同步到阿里云OSS的yml文件如下
 
```yml
name: upload files to OSS

on:
  push:
    branches:
      - main
jobs:
  build: 
    
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: upload files to OSS
      uses: fangbinwei/aliyun-oss-website-action@v1
      with:
          accessKeyId: ${{ secrets.ACCESS_KEY_ID }}
          accessKeySecret: ${{ secrets.ACCESS_KEY_SECRET }}
          bucket: #你的burket名称
          endpoint: #你的burket节点
          # 全目录上传
          folder: .
          # 不上传的文件
          exclude: |
            .github/
            .gitattributes
            .git/
            .MWebMetaData/
            .DS_Store
```
到存放仓库下设置`ACCESS_KEY_ID`和`ACCESS_KEY_SECRET`两个Secret，设置路径为：`Settings`→`Codesecurity and analysis`→`Secrets and variables`→`Actions`

![截屏2023-06-10 12.45.04](http://img.wbc.icu/2023/06/10/jie-ping20230608-230826.png)

两个Secret对应的值到如下图位置获取

![截屏2023-06-10 12.45.04](http://img.wbc.icu/2023/06/10/jieping202306082316381.jpeg)



