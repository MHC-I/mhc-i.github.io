# Python

## 一、安装

直接从[官网](https://www.python.org/downloads/)下载安装包，安装后会自动配置好链接文件。

## 二、pip

### 常用命令

显示版本和路径
```bash
pip --version
```

获取帮助
```bash
pip --help
```

升级pip
```bash
pip install -U pip
```

安装包
```bash
pip install SomePackage              # 最新版本
pip install SomePackage==1.0.4       # 指定版本
pip install 'SomePackage>=1.0.4'     # 最小版本
```

升级包
```bash
pip install --upgrade SomePackage
```

卸载包
```bash
pip uninstall SomePackage
```

列出已安装的包
```bash
pip list
```

### pip加速

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```