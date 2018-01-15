---
 layout: post
 category: "技术"
 title:  "分布式锁"
 tags: [技术]
 summary: ""
 
---
### 文件锁
**class FileLock**

通过flock函数和实现

lock 参数可以是以下值之一：

- 要取得共享锁定（读取的程序），将 lock 设为 LOCK_SH
- 要取得独占锁定（写入的程序），将 lock 设为 LOCK_EX
- 要释放锁定（无论共享或独占），将 lock 设为 LOCK_UN
- 如果不希望 flock() 在锁定时堵塞，则给 lock 加上 LOCK_NB

###memcached锁
**class MemcacheLock**

通过memcached的add()方法，比较add()与set()的区别

###数据库锁 (IDGenterService在用)
**class SQLLock**

SELECT GET_LOCK(key,timeout)

SELECT RELEASE_LOCK(key)

###还有redis锁
通过
**setnx() get(）getset()**实现

相比memcached 其支持的数据类型更多

具体的使用步骤如下：

1. setnx(lockkey, 当前时间+过期超时时间) ，如果返回1，则获取锁成功；如果返回0则没有获取到锁，转向2。

2. get(lockkey)获取值oldExpireTime ，并将这个value值与当前的系统时间进行比较，如果小于当前系统时间，则认为这个锁已经超时，可以允许别的请求重新获取，转向3。

3. 计算newExpireTime=当前时间+过期超时时间，然后getset(lockkey, newExpireTime) 会返回当前lockkey的值currentExpireTime。

4. 判断currentExpireTime与oldExpireTime 是否相等，如果相等，说明当前getset设置成功，获取到了锁。如果不相等，说明这个锁又被别的请求获取走了，那么当前请求可以直接返回失败，或者继续重试。

5. 在获取到锁之后，当前线程可以开始自己的业务处理，当处理完毕后，比较自己的处理时间和对于锁设置的超时时间，如果小于锁设置的超时时间，则直接执行delete释放锁；如果大于锁设置的超时时间，则不需要再锁进行处理。

###另外
还有通过 redis的setnx()、expire()方法实现分布式锁的，但是有出现死锁的情况
比如，如果在第一步setnx执行成功后，在expire()命令执行成功前，发生了宕机的现象，那么就依然会出现死锁的问题








    
