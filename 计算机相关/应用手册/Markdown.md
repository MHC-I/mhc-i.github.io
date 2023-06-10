# Markdown

## mark
```html
<mark style="background: #BBFABBA6;">蓝色</mark>
```
```html
<mark style="background: #BBFABBA6;">橙色</mark>
```
```html
<mark style="background: #BBFABBA6;">红色</mark>
```
```html
<mark style="background: #BBFABBA6;">绿色</mark>
```

## 上下标
```html
<sup>上标</sup>
```
```html
<sub>下标</sub>
```

## 图片缩放并居中
```
<div align="center"> <img src="图片路径" style="zoom : 40%" /> </div>
```
Markdown和html的路径有所区别，为了兼容 Mweb 和 Docsify ，先将图片上传至图床再用`<div>`标签修改图片大小

## Mermaid
饼图
```
pie
title 数据比例图
"选项1" : 25
"选项2" : 50
"选项3" : 25 
```
流程图
```
graph LR
A-->B
A["节点A（1）"]
```