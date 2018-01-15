---
 layout: post
 category: "技术"
 title:  "如何在github上发起pull request"
 tags: [github]
 summary: ""
 
---

1. fork
2. git clone 自己的fork后的项目
3. 本地添加上游地址 git remote add upstream 源项目地址
4. git remote -v 查看
5. git pull upstream master 从原项目master分支拉取代码
6. git checkout -b  feature/add_sth 干净的分支
7. 在add_sth分支中修改
8. git checkout master 
9. git pull upstream master  再更新源项目修改到本地master
10. git checkout feature/add_sth   //测试
11. git rebase master  本地将分支的修改放到master的最上端
12. git log 查看
13. git checkout master
14. git log 查看
15. git checkout feature/add_sth
16. git rebase master
17. git push origin feature/add_sth
18. 登录github 刷新查看 就有会compare && pull request 提示