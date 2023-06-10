# Git

## 一、基本操作

创建新的 Git 仓库，该命令执行完后会在当前目录生成一个 .git 目录
```bash
git init 
```

将文件夹内所有文件添加到Git中
```bash
git add .
```

提交Git修改
```bash
git commit -m '提交说明'
```

## 二、远程操作

### remote

查看远程仓库
```bash
git remote -v
```

显示某个远程仓库的信息
```bash
git remote show [remote地址]
```

添加远程仓库
```bash
git remote add [shortname] [url]

# shortname 为本地的版本库，例如提交到 Github这样写
$ git remote add origin https://github.com/MHC-I/mhc-i.github.io.git
$ git push -u origin main
```

删除远程仓库
```bash
git remote rm name
```

修改仓库名
```bash
git remote rename old_name new_name 
```

### pull

用于从远程获取代码并合并本地的版本
```bash
git pull <远程主机名> <远程分支名>:<本地分支名>
```

实例
```bash
# 合并默认分支
git pull
git pull origin
# 将远程主机 origin 的 main 分支拉取过来，与本地的 master 分支合并
git pull origin main:master
# 如果远程分支是与当前分支合并，则冒号后面的部分可以省略
git pull origin master
```

> 如果远程仓库在上一次push后被修改，直接push会报错  `Updates were rejected because the remote contains work that you do not have locally.` 。此时应该先 `pull` 后再 `push` 。
 
### push
用于从将本地的分支版本上传到远程并合并
```bash
git push <远程主机名> <本地分支名>:<远程分支名>
```

## 三、取消本地修改

```bash
git checkout . && git clean -nxfd # 组合使用

git checkout . #本地所有修改没有的提交的，都返回到原来的状态

git clean -n #查看clean会删除掉哪些文件
git clean -f # 删除 untracked files
git clean -fd #连 untrack 的目录也一起删掉
git clean -xfd #连 .gitignore 的 untrack 文件/目录也一起删掉
```