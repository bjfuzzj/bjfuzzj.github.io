---
layout: post
category: "感想"
title:  "sql 执行顺序"
tags: [mysql]
summary: "可以补充学习"
---

在学习mysql 索引之前，很有必要知道sql的执行顺序，对分析和使用索引有很大的帮助

```
(7)     SELECT 
(8)     DISTINCT <select_list>
(1)     FROM <left_table>
(3)     <join_type> JOIN <right_table>
(2)     ON <join_condition>
(4)     WHERE <where_condition>
(5)     GROUP BY <group_by_list>
(6)     HAVING <having_condition>
(9)     ORDER BY <order_by_condition>
(10)    LIMIT <limit_number>
```
执行from语句   
在这些SQL语句的执行过程中，都会产生一个虚拟表，用来保存SQL语句的执行结果（这是重点），我现在就来跟踪这个虚拟表的变化，得到最终的查询结果的过程，来分析整个SQL逻辑查询的执行顺序和过程。
第一步，执行FROM语句。我们首先需要知道最开始从哪个表开始的，这就是FROM告诉我们的。现在有了<left_table>和<right_table>两个表，我们到底从哪个表开始，还是从两个表进行某种联系以后再开始呢？它们之间如何产生联系呢？——笛卡尔积

执行ON过滤
执行完笛卡尔积以后，接着就进行ON a.customer_id = b.customer_id条件过滤，根据ON中指定的条件，去掉那些不符合条件的数据，得到VT2表(我才知道先执行连表，然后进行on条件过滤，擦,万一第一个表很大，直接连死了，这里还有一个问题，是大表放在前面还是小表放在前面。在mysql高性能书中又看到过讨论这个点有点忘了。)

执行WHERE过滤
对添加外部行得到的VT3进行WHERE过滤，只有符合<where_condition>的记录才会输出到虚拟表VT4中。当我们执行WHERE a.city = 'hangzhou'的时候，就会得到以下内容，并存在虚拟表VT4中;(这里涉及到一个疑问，如果没有使用where语句，但是，有order by 语句的时候 会走索引么？主键索引会走，其他索引不会。)
	由于数据还没有分组，因此现在还不能在WHERE过滤器中使用where_condition=MIN(col)这类对分组统计的过滤；
	由于还没有进行列的选取操作，因此在SELECT中使用列的别名也是不被允许的，如：SELECT city as c FROM t WHERE c='shanghai';是不允许出现的。

执行GROUP BY分组
GROU BY子句主要是对使用WHERE子句得到的虚拟表进行分组操作,得到的内容会存入虚拟表VT5中，此时，我们就得到了一个VT5虚拟表，接下来的操作都会在该表上完成。

执行HAVING过滤
HAVING子句主要和GROUP BY子句配合使用，对分组得到的VT5虚拟表进行条件过滤

SELECT列表
现在才会执行到SELECT子句，不要以为SELECT子句被写在第一行，就是第一个被执行的(select 的列会涉及到回表查询，如果select 的列是索引列会直接使用覆盖索引)。

执行DISTINCT子句
如果在查询中指定了DISTINCT子句，则会创建一张内存临时表（如果内存放不下，就需要存放在硬盘了）。这张临时表的表结构和上一步产生的虚拟表VT7是一样的，不同的是对进行DISTINCT操作的列增加了一个唯一索引，以此来除重复数据。
由于我的测试SQL语句中并没有使用DISTINCT，所以，在该查询中，这一步不会生成一个虚拟表。

=======后续继续补充=====

http://www.jellythink.com/archives/924

执行ORDER BY子句
对虚拟表中的内容按照指定的列进行排序，然后返回一个新的虚拟表，我们执行测试SQL语句中的ORDER BY total_orders DESC
执行LIMIT子句

1. 如果书籍中是有敏感书籍的，需要先在getSensitiveBookId方法中遍历几次,然后再在getBooksWithOutSens方法中 全量遍历N次，总计N+M次(M为敏感书籍的位置)。
2. 如果书籍中是没有敏感书籍的，需要先在getSensitiveBookId方法中遍历遍历N次，然后在getBooksWithOutSens方法中，遍历0次，总计N次。
3. 整体看来最少要遍历N次，那么为何不直接遍历呢。
4. 判断是否存在的目的是减少遍历次数，以后自己使用也要注意。


 


