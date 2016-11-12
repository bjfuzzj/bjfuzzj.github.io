---
layout: post
category: "感想"
title:  "本地安装jekyll踩到的坑"
tags: [Jekyll]
summary: ""
---

需要在本地安装Jekyll调试下程序，所以尝试在本地安装查看效果。
参考的页面在这里[链接](http://www.cnblogs.com/kaiye/archive/2013/04/24/3039345.html)。但是安装后，`jekyll s` 后发现N多报错，记录下各个结果：

**1. 报错**

```
Deprecation: The 'pygments' configuration option has been renamed to 'highlighter'. Please update your config file accordingly. The allowed values are 'rouge', 'pygments' or null.
```
这个是因为 jekyll升级后 ，需要在`_config.yml`中的 `pygments: true` 改成 ` highlighter: pygments`

**2. 报错**

```
Deprecation: Auto-regeneration can no longer be set from your configuration file(s). Use the –[no-]watch/-w command-line option instead.
```
这个的修改办法是 在`_config.yml`中的 `auto: true` 去掉


**3. 报错**

```
Deprecation: You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `gems: [jekyll-paginate]` in your configuration file. 
```
解决办法：在`_config.yml`中增加 `gems: [jekyll-paginate]`

**4. 内容不展示**

render后，首页的分页posts一直没有展示，paginate 和 paginate_path 也配置了，就是没有结果，很奇怪，查看资料后才意识到，pagination是jekyll的分页插件了，需要在`_config.yml`中把 `safe: true`去掉，因为启动了 safe模式后，插件就失效了。

 

 
	
 
