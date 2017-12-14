# MongoDB

MongoDB 3.4

## 應用場景

* 資料庫的應用不需要事務及複雜 JOIN 支持？
* 資料庫需求可能會變動，以致資料模型無法確定？
* 資料庫需要快速迭代開發？
* 資料庫的應用需要 2000 至 3000 或以上的讀寫 QPS（每秒查詢率）？
* 資料庫的應用需要 TB 甚至 PB 級的儲存？
* 資料庫的應用發展迅速，需要能快速水平擴展？
* 資料庫的應用要求儲存的資料不丟失？
* 資料庫的應用需要 99.999% 高可用？
* 資料庫的應用需要大量的地理位置查詢、文本查詢？

## 三大核心

* High Performance
    * **靈活文檔模型** BSON (Binary JSON)
    * Support for embedded data models reduces I/O activity on database system.
    * Indexes support faster queries and can include keys from embedded documents and arrays.

* High Availability (replica set)
    * **高可用複製集**
    * A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.
        * automatic failover.
        * data redundancy.

* Automatic Scaling (sharding)
    * **可擴展分片集群**
    * Automatic sharding distributes data across a cluster of machines.
    * Replica sets can provide **eventually-consistent** reads for **low-latency high throughput** deployments.

## 參考

[MongoDB University](https://university.mongodb.com/)

[MongoDB 3.4 中文文檔](http://docs.mongoing.com/)

[MongoDB 學習筆記之一 - 從 NoSQL 談起](http://garyliutw.blogspot.tw/2014/05/mongodb-nosql.html)

[MongoDB 應用場景? - 知乎](https://www.zhihu.com/question/32071167)

[什麼場景應該用MongoDB ？ - 雲棲社區](https://yq.aliyun.com/articles/64352?spm=5176.8091938.0.0.oAHbxp)

[MongoDB面試題集錦 - CSDN博客](http://blog.csdn.net/shehun1/article/details/21240731)

[MongoDB經典面試題 - 簡書](http://www.jianshu.com/p/4521f9aa7355)

---

## Server-side JavaScript

https://docs.mongodb.com/manual/core/server-side-javascript/

Write Scripts for the mongo Shell

https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/

```
$ mongo code_name.js
```


## Node.js Driver

https://mongodb.github.io/node-mongodb-native/

```
$ npm install mongodb
$ node node_1.js
```

### 參考

https://ithelp.ithome.com.tw/articles/10186483

http://fred-zone.blogspot.tw/2012/01/nodejs-mongodb.html


## PyMongo

http://api.mongodb.com/python/current/tutorial.html

