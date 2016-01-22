---
layout: post
category: "PHP"
title:  "PHP运算符"
tags: [php]
summary: "php运算符"
---
###基本定义
php的基本运算符有 + - * / % 

```
echo 89+90；
echo 90-89；
echo 90*89；
echo 90/89;
echo 90%89;

```
另外还有一个  & 运算符
请比较下面代码的执行情况

```
function xw($arr){
	echo '函数里面的值为:';
	echo  $arr;
}

$value=2;
function xw($value);
echo '执行后数值-->';
echo $value;
echo "<br/>";


function xw(&$value);
echo '执行后数值-->';
echo $value;
echo "<br/>";


```
