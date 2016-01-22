---
layout: post
category: "PHP"
title:  "PHP数组基础知识"
tags: [php]
summary: "php数组"
---
###基本定义
基本数组由下标(key)与对应的值(value)组成，如果数组中有值的话，默认的下标从0开始
访问数组根据下标开始 $arr[$key]  
例如 : echo $shuzu[1]


一维数组
测试一下输出的内容是什么


```
$shuzu=array();
$shuzu1=array('one','two','three');
echo $shuzu1[0];//默认下标从0开始
$shuzu2=array(0=>'one',1=>'two',2=>'three');
echo $shuzu2[1];//有key值按照key值去访问
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
