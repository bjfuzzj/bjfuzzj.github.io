---
layout: post
category: "感想"
title:  "什么时候应该判断是否存在"
tags: [php]
summary: ""
---

今天碰到这样的函数功能，本意是是想过滤掉有敏感信息的书籍。先调用一个方法判断是否有敏感书籍的存在，如果存在就重新过滤，如果不存在就直接返回书籍数组，具体代码如下:

```
     public function getSensitiveBookId($bookList)
     {
         $id = 0;
         foreach ($bookList as $book)
         {
             if ($book instanceof Book && $book->status = 1)
             {
                 $id = $book->id;
                 break;
             }
         }
         return $id;
     }
    
     
     public function getBooksWithOutSens($bookList)
     {
         $res = array();
         $sensId = $this->getSensitiveBookId($bookList);
         if($sensId)
         {
             foreach($bookList as $book)
             {
                    if ($book instanceof Book && $book->status = 1)
                 {
                     continue;
                 }
                 $res[] = $flow;
             }
         }
         else
         {
             $res = $bookList;
         }

         return $res;
     }
```
    
看完发现问题在哪里呢？分析下各种情况的循环次数来看，假设总图书量为N
1. 如果书籍中是有敏感书籍的，需要先在getSensitiveBookId方法中遍历几次,然后再在getBooksWithOutSens方法中 全量遍历N次，总计N+M次(M为敏感书籍的位置)。
2. 如果书籍中是没有敏感书籍的，需要先在getSensitiveBookId方法中遍历遍历N次，然后在getBooksWithOutSens方法中，遍历0次，总计N次。
3. 整体看来最少要遍历N次，那么为何不直接遍历呢。
4. 判断是否存在的目的是减少遍历次数，以后自己使用也要注意。


 


