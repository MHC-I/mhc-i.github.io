# MacOS

## 常用命令

M1查看硬盘使用情况

```bash
smartctl -a disk0
 ```
 
Mac保持唤醒Caffeinate命令
```bash
caffeinate -t 3600
# Mac保持唤醒1小时
 ```
 
 Mac显示树状结构
 ```bash
brew install tree
tree -L 3
参数选项
-a # 显示所有文件，包括隐藏文件（以  “.” 点开头的文件 ）
-d # 只显示目录
-f # 只显示每个文件的全路径
-i # 不显示树枝，常与-f参数配合使用
-L # level 遍历目录的最大层数，level 为大于0的正整数
-F # 在执行文件、目录、Socket符号链接、管道名称等不同类型文件的结尾，各自加上“*”、 "/"、"="、"@"、"|"号、类似ls命令的-F选项
 ```