# README

## ✨ 关于我

> 一个热爱计算机的Surgeon.

这是我的数字花园（Digital Garden），主要以MarkDown形式储存，通过Docsify在浏览器端渲染生成。

## 🏗 知识结构
- 医学知识：医学相关知识系统化整理
- 医学科研：医学科研学习笔记及流程记录
- 计算机相关：关于计算机我所知道的一切
- 生活记录：做一个热爱生活的Surgeon

## 🚀 发布流程

```mermaid
graph LR
A["Mweb(文章编辑)"]-->B[Git发布到Github]-->C["生成GitHub Pages"]
B-->D["GitHub Action同步到阿里云OSS"]-->E[阿里云CDN]
C & E-->F[浏览器请求]--docsify-->呈现
 ```
 
 具体搭建过程请查看[Docsify笔记](/计算机相关/应用手册/Docsify.md)