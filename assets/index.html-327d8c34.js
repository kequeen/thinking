import{_ as s,r as l,o as i,c as h,a as e,b as r,d as a,e as n}from"./app-47e324c0.js";const c={},o=e("h1",{id:"es",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es","aria-hidden":"true"},"#"),r(" ES")],-1),d=e("p",null,[r("ES是当今最为流行的开源搜索解决方案，对于大部分通用的场景，ES应该都是可以满足的。"),e("br"),r(" 并且ES本身架构上就非常优秀，基本上分布式架构的大多数场景，其本身都有涉及，非常值得我们去学习。")],-1),u=e("h2",{id:"关于通用搜索流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于通用搜索流程","aria-hidden":"true"},"#"),r(" 关于通用搜索流程")],-1),_={href:"http://www.kequeen.work/search/principle.html",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),f=e("p",null,[r("在线部分的话，一般我们需要关注的，一般是召回部分（改写、纠错与分词），因为默认的中文分词在很多情况下无法符合预期，以及因为一些异常情况下的干预，一般在召回部分做干预的成本较低。"),e("br"),r(" 检索的话，除了默认的计算相关性的方式之外，也支持我们自定义脚本计算相关性")],-1),b=e("h2",{id:"es的正排与倒排的存储",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es的正排与倒排的存储","aria-hidden":"true"},"#"),r(" ES的正排与倒排的存储")],-1),m=e("p",null,"数据的分片一般是根据doc_id来进行分片的，正常我们在容量规划的时候就需要进行确认. 而检索的时候都是通过term去检索的，所以一般会全扇出",-1),w=e("h2",{id:"关于es的数据更新及平衡过程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于es的数据更新及平衡过程","aria-hidden":"true"},"#"),r(" 关于ES的数据更新及平衡过程")],-1),g=e("br",null,null,-1),x={href:"https://zh.wikipedia.org/wiki/%E4%B8%80%E8%87%B4%E5%93%88%E5%B8%8C",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.4/indices-split-index.html",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),v=e("h3",{id:"关于集群扩容",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于集群扩容","aria-hidden":"true"},"#"),r(" 关于集群扩容")],-1),S={href:"https://cloud.tencent.com/document/product/845/43615",target:"_blank",rel:"noopener noreferrer"},q=n('<h3 id="海量分片的代价" tabindex="-1"><a class="header-anchor" href="#海量分片的代价" aria-hidden="true">#</a> 海量分片的代价</h3><ol><li>一个分片的底层就是一个Lucene索引，会消耗一定文件句柄、内存、CPU资源</li><li>数据热点问题</li><li>计算相关度的词频统计信息是基于分片的<br> 第三点这个代价其实我们一直容易忽略的</li></ol><h2 id="关于es的高可用" tabindex="-1"><a class="header-anchor" href="#关于es的高可用" aria-hidden="true">#</a> 关于ES的高可用</h2><p>大型工业项目不可避免的高可用问题。</p><h2 id="数据一致性的问题" tabindex="-1"><a class="header-anchor" href="#数据一致性的问题" aria-hidden="true">#</a> 数据一致性的问题</h2><p>单机房不同实例的数据一致性的问题解决 多机房的数据一致性问题解决</p><h2 id="es对sql的支持" tabindex="-1"><a class="header-anchor" href="#es对sql的支持" aria-hidden="true">#</a> ES对sql的支持</h2>',7),y={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-getting-started.html",target:"_blank",rel:"noopener noreferrer"},B=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /_sql?format=txt
{
  &quot;query&quot;: &quot;SELECT * FROM library WHERE release_date &lt; &#39;2000-01-01&#39;&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于es配置的一些最佳实践" tabindex="-1"><a class="header-anchor" href="#关于es配置的一些最佳实践" aria-hidden="true">#</a> 关于ES配置的一些最佳实践</h2><h2 id="其它优化" tabindex="-1"><a class="header-anchor" href="#其它优化" aria-hidden="true">#</a> 其它优化</h2><p>关于一些其他方面的优化</p>`,4),C={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/preload-data-to-file-system-cache.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/data-tiers.html#warm-tier",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),r(" 参考文档")],-1),V={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability-cluster-small-clusters.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.jianshu.com/p/4163916a2a8a",target:"_blank",rel:"noopener noreferrer"},P={href:"https://segmentfault.com/a/1190000037658997",target:"_blank",rel:"noopener noreferrer"};function R(j,F){const t=l("ExternalLinkIcon");return i(),h("div",null,[o,d,u,e("p",null,[r("基本上与"),e("a",_,[r("这篇文章"),a(t)]),r("中谈到的相符合。但很多时候我们也需要添加我们自己的业务逻辑"),p,r(" 离线部分的话，数据的入库可以自定义处理脚本。而对于大型系统来说，这种入库必然不是串行的，不然入库就成为瓶颈了，而这种并行的入库，其实就交给使用方来自己实现，怎么同步数据入库")]),f,b,m,w,e("p",null,[r("其实这个问题就是，ES的数据如何无限横向扩展。"),g,r(" 这种扩容一般都是采用"),e("a",x,[r("一致性hash"),a(t)]),r("算法来实现，ES也不例外，具体可参考"),e("a",E,[r("文档"),a(t)]),k,r(" 其实最简单的方式，就是我们在容量规划的时候，就提前规划好ES的容量，否则动态扩容再自平衡的时间成本，一般业务都是无法接受的。即使是采用了一致性 hash 这种增删节点影响面相对已经较小的方案，但在自平衡的过程中，还是会严重影响集群的读写，影响业务的正常使用。")]),v,e("p",null,[r("可参考腾讯云"),e("a",S,[r("这篇文章"),a(t)])]),q,e("p",null,[r("在官方的最新文档中，"),e("a",y,[r("sql-getting-started"),a(t)]),r(",发现已经支持sql了")]),B,e("ol",null,[e("li",null,[e("p",null,[e("a",C,[r("使用pagecache"),a(t)]),r(", 这个一般以硬盘作为主要存储介质的，都会使用这一特性")])]),e("li",null,[e("p",null,[e("a",L,[r("数据冷热分层"),a(t)])])])]),N,e("ol",null,[e("li",null,[e("a",V,[r("https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"),a(t)])]),e("li",null,[e("a",z,[r("https://github.com/elastic/elasticsearch"),a(t)])]),e("li",null,[e("a",T,[r("https://www.elastic.co/guide/en/elasticsearch/reference/current/high-availability-cluster-small-clusters.html"),a(t)])]),e("li",null,[e("a",I,[r("https://www.elastic.co/guide/en/elasticsearch/reference/current/size-your-shards.html"),a(t)])]),e("li",null,[e("a",O,[r("一致性hash与hash槽的对比"),a(t)])]),e("li",null,[e("a",P,[r("https://segmentfault.com/a/1190000037658997"),a(t)])])])])}const M=s(c,[["render",R],["__file","index.html.vue"]]);export{M as default};