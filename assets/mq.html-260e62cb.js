import{_ as r,r as i,o as h,c as d,a,b as t,d as n,e as s}from"./app-47e324c0.js";const c={},o=s('<h1 id="消息队列设计" tabindex="-1"><a class="header-anchor" href="#消息队列设计" aria-hidden="true">#</a> 消息队列设计</h1><p>这个也是面试中常被问到的系统设计之一，毕竟在分布式系统中，消息队列已经成为各个业务系统中沟通的桥梁。</p><h2 id="一些问题" tabindex="-1"><a class="header-anchor" href="#一些问题" aria-hidden="true">#</a> 一些问题</h2><h3 id="rabbitmq和kafka作为消息队列的差异" tabindex="-1"><a class="header-anchor" href="#rabbitmq和kafka作为消息队列的差异" aria-hidden="true">#</a> rabbitMQ和kafka作为消息队列的差异？</h3><ol><li>之前我们使用rabbitmq的场景会更为简单，就是说业务侧不需要记录消费到哪了，依赖于服务端的推送。</li><li>rabbitmq官方就有管理平台，能够一站式管理，看到当前所有的绑定关系，待消费的消息数量，能够监控消息的消费</li><li>内置监控</li><li>金融领域本身就有很多使用rabbitmq的案例</li></ol><h3 id="以及使用redis作为消息队列有什么问题" tabindex="-1"><a class="header-anchor" href="#以及使用redis作为消息队列有什么问题" aria-hidden="true">#</a> 以及使用redis作为消息队列有什么问题？</h3><p>用redis的一个问题是没办法支持多对多的模式，就是发布/订阅的模式，就是一个消息本身没办法被多个业务去消费。其只支持点对点模式。 这个问题在redis的高版本中已经升级支持，目前redis也支持发布订阅，但主流上使用redis作为消息队列还是较少，可靠性未得到充分验证</p><h2 id="是否支持消息重复消费" tabindex="-1"><a class="header-anchor" href="#是否支持消息重复消费" aria-hidden="true">#</a> 是否支持消息重复消费？</h2><p>这个一般应该由消费者去保证这个最终一致性。</p><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h2><p>目前其实一般都是采用多副本的方式，但是这个多副本之间如何进行切换，是由客户端来感知，还是服务端这边有proxy，这种也要看具体的场景</p><h2 id="如何做横向扩展" tabindex="-1"><a class="header-anchor" href="#如何做横向扩展" aria-hidden="true">#</a> 如何做横向扩展</h2><p>一般来说是采用类似于一致性hash或者hash槽的方案</p><h2 id="关于数据持久化的问题" tabindex="-1"><a class="header-anchor" href="#关于数据持久化的问题" aria-hidden="true">#</a> 关于数据持久化的问题</h2><p>kafka本身就是数据持久化的，毕竟数据是最终落盘的，并且pagecache本身的性能并没有比缓存低多少，具体也可以看测试数据，并且本身可以支持批量写入 rabbitmq也可以支持数据持久化，但这个会严重影响吞吐</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>',16),l={href:"https://www.jianshu.com/p/63642a48b9ec",target:"_blank",rel:"noopener noreferrer"};function b(p,f){const e=i("ExternalLinkIcon");return h(),d("div",null,[o,a("ol",null,[a("li",null,[a("a",l,[t("https://www.jianshu.com/p/63642a48b9ec"),n(e)])])])])}const m=r(c,[["render",b],["__file","mq.html.vue"]]);export{m as default};
