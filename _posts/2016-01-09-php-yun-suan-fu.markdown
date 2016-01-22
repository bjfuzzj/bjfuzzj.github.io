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
$a='wxw';//变量的赋值其实就是把变量跟一个地址绑定，绑定后值跟地址就是对应的关系。
$c=$a;//此时c与a的地址并不同，只是c复制了a的值 并重新开辟了一个新地址存放这个值
$b=&$a;//此时b与a都指向同一个地址，他们是同一个地址，存放的肯定是同样的值
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
