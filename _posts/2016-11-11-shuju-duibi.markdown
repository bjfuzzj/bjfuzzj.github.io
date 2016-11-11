---
layout: post
category: "感想"
title:  "怎么做数据的对比"
tags: [php]
summary: ""
---
 
今天要写文档，比较优化后和优化前的对比情况，当然是要拿数据说话，想到的方案是通过highcharts的方式，往demo里填数据然后随时render出图像，链接[在这里](http://code.hcharts.cn/demos/hhhhD8) 。最后的结果如下：
 ![对比结果](http://ww3.sinaimg.cn/large/006y8mN6gw1f9oa2umyz3j30xc0m8dhm.jpg)
 
 当然，这样手动的一条一条的整理只能适合比较小的功能场景，最好将内存的使用情况写入到专门的日志处理系统，然后用统一的处理方式去处理查看，最终的方式可以使用公司的kibana开查看日志，一劳永逸。
 
	
 
