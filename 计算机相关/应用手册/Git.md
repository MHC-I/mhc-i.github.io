# Git

## 取消本地修改

```bash
git checkout . && git clean -nxfd # 组合使用

git checkout . #本地所有修改没有的提交的，都返回到原来的状态

git clean -n #查看clean会删除掉哪些文件
git clean -f # 删除 untracked files
git clean -fd #连 untrack 的目录也一起删掉
git clean -xfd #连 .gitignore 的 untrack 文件/目录也一起删掉
```