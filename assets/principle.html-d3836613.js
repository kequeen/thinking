import{_ as a,r as o,o as l,c as s,a as e,b as r,d as t,e as h}from"./app-097a6a1b.js";const i={},c=e("h1",{id:"基本原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基本原理","aria-hidden":"true"},"#"),r(" 基本原理")],-1),d={href:"https://baike.baidu.com/item/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/5699111",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"在线主要流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线主要流程","aria-hidden":"true"},"#"),r(" 在线主要流程")],-1),u=e("h3",{id:"语义理解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#语义理解","aria-hidden":"true"},"#"),r(" 语义理解")],-1),p=e("br",null,null,-1),b={href:"https://zh.m.wikipedia.org/zh-hans/%E7%B7%A8%E8%BC%AF%E8%B7%9D%E9%9B%A2",target:"_blank",rel:"noopener noreferrer"},f=h('<h3 id="召回" tabindex="-1"><a class="header-anchor" href="#召回" aria-hidden="true">#</a> 召回</h3><p>确认哪些结果可以被召回，还是以query = 北京天气 举例，我们如何理解这个词，是将“北京天气”作为一个整体去理解，还是将“北京”、“天气”作为不同的整体去理解，甚至是理解成“北”、“京”、“天”、“气”这四个词，英文的分词在某些方面，其实会比中文要容易一些，因为英文每个单词中间是有空格去隔开的，但语言的二义性在很多语言中都是存在的，比如 query = Apple，用户的意图是想去寻找苹果公司的官网呢，还是苹果本身呢，两个类型的结果都召回的话，我们在排序方面，还需要考虑相关的权重的问题。</p><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3><p>一般会分为粗排和精排，一般粗排的结果会比较多，数据还可能来自不同的来源，粗排一般比较粗糙地计算相关性，计算的维度较少，或者是根本不计算，在精排的时候，再从多个维度去计算相关性，并且排序本身也还会受用户点击等行为的影响。</p><h2 id="模块划分" tabindex="-1"><a class="header-anchor" href="#模块划分" aria-hidden="true">#</a> 模块划分</h2><p>其实主要也就分为三个模块：</p><h3 id="信息采集" tabindex="-1"><a class="header-anchor" href="#信息采集" aria-hidden="true">#</a> 信息采集</h3><p>一般这一步就是我们所熟知的爬虫的工作过程，如何爬取互联网上所有的信息，这其实也是一个很复杂的事情，其复杂度主要在以下几个方面：</p>',8),m=e("br",null,null,-1),E={href:"https://developers.google.com/search/docs/advanced/robots/intro",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[e("p",null,[r("海量数据如何存储"),e("br"),r(" 其实这块就涉及到了google的三驾马车中的GFS和BigTable")])],-1),x=e("li",null,[e("p",null,[r("如何判定网页已经抓取过"),e("br"),r(" 这块我想到的方案其实布隆过滤器，比较低成本地去做这个事情,但还是要用分布式存储去存网页本身的hash,作为兜底的查询。")])],-1),k=e("li",null,[e("p",null,[r("如何确定每个网站的更新频率问题"),e("br"),r(" 不同网站的更新时效如何确定，这个各家的策略应该都不太一样。比如股票、天气等高时效要求的内容，与一般的博客那种低失效内容，其抓取频率肯定是有diff的。这个应该与网站的权重、更新频次、内容类型等多方面因素有关。")])],-1),B=e("h3",{id:"离线建库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#离线建库","aria-hidden":"true"},"#"),r(" 离线建库")],-1),w=e("p",null,"爬虫抓取到的信息，大多数是非结构化的，如何将这非结构化的数据转换为结构化的信息，因为最终搜索呈现给用户的，肯定是结构化的数据，并且本身我们要做各种粗排+精排的话，也是需要结构化的数据才能一起排。",-1),y=e("p",null,"离线建库本身又会获取很多内容信息，作为在线检索排序的依据，比如网站的权重会影响在线检索的排序，而在线检索本身",-1),q=e("h3",{id:"在线检索",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线检索","aria-hidden":"true"},"#"),r(" 在线检索")],-1),A=e("br",null,null,-1),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"商业搜索引擎的技术难点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#商业搜索引擎的技术难点","aria-hidden":"true"},"#"),r(" 商业搜索引擎的技术难点")],-1),j=e("ol",null,[e("li",null,"内容理解，非结构化数据转为结构化数据"),e("li",null,"离线建库过程的可观测性"),e("li",null,"相关性计算"),e("li",null,"存储引擎如何在性能与成本的衡量")],-1),z=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),r(" 参考文档")],-1),F={href:"https://yuerblog.cc/2018/01/09/elasticsearch-custom/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://book.douban.com/subject/7006719/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://res1.zcmu.edu.cn/vpn/2/https/www.mamioo.com/seojishu/section-4",target:"_blank",rel:"noopener noreferrer"},S={href:"https://book.douban.com/subject/26681675/",target:"_blank",rel:"noopener noreferrer"};function D(I,L){const n=o("ExternalLinkIcon");return l(),s("div",null,[c,e("p",null,[e("a",d,[r("百度百科"),t(n)]),r("上有简单的介绍，但实际商业化的搜索引擎要比这复杂得多，就像原子弹爆炸的理论大家都知道，但真正能造出原子弹的公司也屈指可数。")]),_,u,e("p",null,[r("如何理解用户的搜索 query，比如用户搜索，query = 北京天气怎么样,我们如何理解到用户的意图是要查询北京的天气"),p,r(" 这其中可能还包括query的改写和纠错，比如用户输入 query = 刘得华，我们是否可以认为用户是想搜索 query = 刘德华，我们如何判断两个词的相似度或者关联性，这其中可能会用到"),e("a",b,[r("编辑距离"),t(n)]),r("的知识，也可以应用机器学习或者人工干预标注的手段")]),f,e("ol",null,[e("li",null,[e("p",null,[r("互联网全量数据抓取"),m,r(" 互联网的网页这么多，每天还在不停地新增，我们如何去遍历这些网页，这个其实可以抽象成图论的遍历 网站如果本身希望有更好地抓取方式，搜索公司也给出了自己的"),e("a",E,[r("解决方案"),t(n)]),r("，用户希望爬虫如何抓取自己的网页，可以按照搜索公司给的格式自行定义")])]),g,x,k]),B,w,y,q,e("p",null,[r("对用户搜索的 query 进行语义识别，改写、纠错、切词"),A,e("a",v,[r("ES中关于改写"),t(n)])]),C,j,z,e("ol",null,[e("li",null,[e("a",F,[r("https://yuerblog.cc/2018/01/09/elasticsearch-custom/"),t(n)])]),e("li",null,[e("a",N,[r("这就是搜索引擎"),t(n)])]),e("li",null,[e("a",V,[r("https://res1.zcmu.edu.cn/vpn/2/https/www.mamioo.com/seojishu/section-4"),t(n)])]),e("li",null,[e("a",S,[r("自制搜索引擎"),t(n)])])])])}const G=a(i,[["render",D],["__file","principle.html.vue"]]);export{G as default};