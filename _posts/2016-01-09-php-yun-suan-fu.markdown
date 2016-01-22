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

1. 在变量中就指变量的引用，请查看下面代码

```
$a='wxw';
$b=&$a;
ehco $b;//输出wxw
echo "<br/>";
echo $a;//输出wxw
$b='zzj';
echo $a;//输出zzj b的值改变 其实就是改变了a的值 因为他们指向同一个地址
```


2. 在函数中使用 是传址调用，请比较下面代码的执行情况

```
function xw(&$arr){
	$arr=$arr+100;
	echo '执行函数的值为--->'.$arr;
}

$value=2;
xw($value);//此时$value的值发生了变化
echo '执行函数后的值为--->'.$value;

function zzj($arr){
	$arr=$arr+100;
	echo '执行函数的值为--->'.$arr;
}
$value=2;
zzj($value);//此时$value的值并没有变化
echo '执行函数后的值为--->'.$value;


```
