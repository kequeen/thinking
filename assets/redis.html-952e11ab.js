import{_ as s,r as h,o as n,c as d,a as e,b as r,d as t,e as i}from"./app-097a6a1b.js";const o={},l=i('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h1><p>redis其实也是一种存储，虽然大家很多时候认为其是缓存，但缓存与存储的界限，很多时候并没有我们想的这般泾渭分明。</p><h2 id="关于redis的高可用架构" tabindex="-1"><a class="header-anchor" href="#关于redis的高可用架构" aria-hidden="true">#</a> 关于redis的高可用架构</h2><p>我们知道，单机的redis，无论你如何去保证其可用性，比如AOF和RDB，但物理机终究有损坏的可能性，宕机会造成服务端不可用，机器物理损坏则会造成数据的丢失。所以我们必须去关心其高可用</p><h3 id="主从方案" tabindex="-1"><a class="header-anchor" href="#主从方案" aria-hidden="true">#</a> 主从方案</h3><p>主要问题有以下几点：</p><ol><li>无法横向扩容与自动恢复</li><li>在线纵向扩容困难，需要停机</li><li>主机宕机可能会导致数据不同步的问题</li><li>宕机重启后会影响master的IO</li></ol><h3 id="sentinel方案" tabindex="-1"><a class="header-anchor" href="#sentinel方案" aria-hidden="true">#</a> Sentinel方案</h3><p>可以自动恢复，但始终没办法解决扩容的问题</p><h4 id="故障转移过程" tabindex="-1"><a class="header-anchor" href="#故障转移过程" aria-hidden="true">#</a> 故障转移过程</h4><p>注意：哨兵节点与存储节点是分离的</p><ol><li>发现主节点已经处于客观下线状态</li><li>通过类似raft协议，选取出哨兵的领导节点</li><li>选取一个服务器，将它升级为主服务器</li><li>向被选中的服务器发送SLAVEOF NO ONE命令，让它变成主服务器</li><li>通过发布订阅功能，将更新后的配置传播给其他哨兵</li><li>向已下线主服务器的从服务器发送 SLAVEOF host port 命令，让它们去复制新的主服务器</li><li>当所有从服务器都已经开始复制新的主服务器时，领导的哨兵终止此次故障迁移操作</li></ol><h2 id="关于redis的扩容" tabindex="-1"><a class="header-anchor" href="#关于redis的扩容" aria-hidden="true">#</a> 关于redis的扩容</h2><p>单机的物理容量有限，无论你硬盘和内存再怎么扩，单个物理机也还是有上限的，并且纵向扩容的成本一般较高，并且也会有单机宕机的风险。所以我们所说的扩容，一般都是指横向扩容。</p><h3 id="集群方案" tabindex="-1"><a class="header-anchor" href="#集群方案" aria-hidden="true">#</a> 集群方案</h3>',15),c={href:"https://github.com/redis/redis/issues/2576",target:"_blank",rel:"noopener noreferrer"},p=i('<p>服务端各个节点之间，通过gossip协议，通知对方自己存储了哪些槽的信息。然后下线的信息，也是通过gossip协议去传播。 哨兵集群和redis实例通信时，会采用这个Pub/Sub,一般采用redis做消息队列的场景并不多。</p><p>服务端的过程：</p><ol><li>初始化，确认每个节点的槽</li><li>如果发生节点新增，那就需要迁移数据 1）其实就是新节点，怎么把原来的槽给接过去。其实完全可以利用redis的RDB文件和AOF去同步，只不过执行的时候，RDB文件这个要只加载属于对应槽的数据，AOF也只执行对应槽的数据。等到同步完成之后，迁移命令之前</li></ol><p>客户端写入的过程可以分为：</p><ol><li>客户端通过proxy请求redis，由proxy计算在哪个分片上，其实客户端不应该去消化这个逻辑，不然一旦发生迁移的话，逻辑会更为复杂</li><li>proxy接收到请求之后，计算分片，然后其应该有slot对应的节点信息，直接去请求相关的节点</li><li>如果请求到结果，那就正常请求。如果未请求到结果，则服务节点应该要告诉它在哪个分片上，然后再重新发请求。</li></ol><h3 id="一致性hash" tabindex="-1"><a class="header-anchor" href="#一致性hash" aria-hidden="true">#</a> 一致性hash</h3><p>我们为什么要采用一致性hash，其中有什么问题</p><h2 id="redis的分布式一致性" tabindex="-1"><a class="header-anchor" href="#redis的分布式一致性" aria-hidden="true">#</a> redis的分布式一致性</h2>',8),_={href:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%AE%9E%E8%B7%B5%E4%B9%8B%E8%B7%AF%EF%BC%88%E5%AE%8C%EF%BC%89/04%20%E5%88%86%E5%B8%83%E5%BC%8F%E4%B8%80%E8%87%B4%E6%80%A7%E5%8D%8F%E8%AE%AE%20Gossip%20%E5%92%8C%20Redis%20%E9%9B%86%E7%BE%A4%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90.md",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"redis的数据结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis的数据结构","aria-hidden":"true"},"#"),r(" redis的数据结构")],-1),f={href:"https://redis.io/docs/data-types/",target:"_blank",rel:"noopener noreferrer"},u=i('<h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h3><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><h3 id="zset" tabindex="-1"><a class="header-anchor" href="#zset" aria-hidden="true">#</a> zset</h3><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h3><h3 id="streams" tabindex="-1"><a class="header-anchor" href="#streams" aria-hidden="true">#</a> streams</h3>',7),b={href:"https://redis.io/docs/data-types/streams/",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"geospatial",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#geospatial","aria-hidden":"true"},"#"),r(" Geospatial")],-1),B={href:"https://redis.io/docs/data-types/geospatial/",target:"_blank",rel:"noopener noreferrer"},x=i('<h3 id="bitmaps" tabindex="-1"><a class="header-anchor" href="#bitmaps" aria-hidden="true">#</a> bitmaps</h3><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><h3 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h3>',3),A={href:"http://www.redis.cn/topics/distlock.html",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"redis的未来发展趋势",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis的未来发展趋势","aria-hidden":"true"},"#"),r(" redis的未来发展趋势")],-1),g=e("p",null,"存储与缓存本身并没有明确的边界。redis本身其实也支持落盘，并不仅仅是内存。",-1),k=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),r(" 参考文档")],-1),F={href:"http://www.redis.cn/topics/sentinel.html",target:"_blank",rel:"noopener noreferrer"},C={href:"http://www.redis.cn/topics/cluster-tutorial.html",target:"_blank",rel:"noopener noreferrer"},O={href:"http://redisdoc.com/topic/sentinel.html#:~:text=Redis%20Sentinel%20%E6%98%AF%E4%B8%80%E4%B8%AA%E5%88%86%E5%B8%83,%E4%BB%A5%E5%8F%8A%E9%80%89%E6%8B%A9%E5%93%AA%E4%B8%AA%E4%BB%8E%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.redis.com.cn/topics/cluster-tutorial.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.51cto.com/article/613829.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://redisbook.readthedocs.io/en/latest/internal/aof.html",target:"_blank",rel:"noopener noreferrer"};function N(R,V){const a=h("ExternalLinkIcon");return n(),d("div",null,[l,e("p",null,[r("没有采用一致性hash的方案，这是比较让我觉得意外的。 redis一致性hash一般是客户端方案，redis的hash槽是服务端方案。 一个redis集群包含16384个hash slot（因为是2^14），为什么是16384个， 可见"),e("a",c,[r("作者的回答"),t(a)])]),p,e("ol",null,[e("li",null,[r("可参考"),e("a",_,[r("这篇文档"),t(a)])])]),E,e("p",null,[r("传统意义上认为redis有五种数据结构，string、list、hash、set、zset，但实际上，按照其[官方文档]"),e("a",f,[r("https://redis.io/docs/data-types/"),t(a)]),r("的表述，其应该有10种数据结构")]),u,e("p",null,[e("a",b,[r("参考链接"),t(a)])]),m,e("p",null,[r("主要是用于地理定位的 "),e("a",B,[r("参考链接"),t(a)])]),x,e("p",null,[r("具体可参考"),e("a",A,[r("这篇文档"),t(a)])]),w,g,k,e("ol",null,[e("li",null,[e("a",F,[r("http://www.redis.cn/topics/sentinel.html"),t(a)])]),e("li",null,[e("a",C,[r("http://www.redis.cn/topics/cluster-tutorial.html"),t(a)])]),e("li",null,[e("a",O,[r("http://redisdoc.com/topic/sentinel.html#:~:text=Redis Sentinel 是一个分布,以及选择哪个从服务器"),t(a)])]),e("li",null,[e("a",y,[r("https://www.redis.com.cn/topics/cluster-tutorial.html"),t(a)])]),e("li",null,[e("a",S,[r("https://www.51cto.com/article/613829.html"),t(a)])]),e("li",null,[e("a",D,[r("https://redisbook.readthedocs.io/en/latest/internal/aof.html"),t(a)])])])])}const L=s(o,[["render",N],["__file","redis.html.vue"]]);export{L as default};
