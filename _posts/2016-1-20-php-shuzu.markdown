---
layout: post
category: "PHP"
title:  "PHP数组基础知识"
tags: [数组,php]
summary: "php数组"
---
###基本定义
基本数组由下标(key)与对应的值(value)组成，如果数组中有值的话，默认的下标从0开始


一维数组
测试一下输出的内容是什么

```
$shuzu=array();
$shuzi1=array('one','two','three');
$shuzi2=array(0=>'one',1=>'two',2=>'three');
$shuzi3=array(
'first'=>'one',
'second'=>'two',
'third'=>'three'
);
var_dump($shuzu);
var_dump($shuzu1);
var_dump($shuzu2);
var_dump($shuzu3);
```
