import{_ as t,r as o,o as i,c,a as e,b as a,d as n,e as l}from"./app-097a6a1b.js";const s={},d=e("h1",{id:"存储与缓存技术",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#存储与缓存技术","aria-hidden":"true"},"#"),a(" 存储与缓存技术")],-1),h=e("p",null,"在我看来，缓存其实也是存储技术的一种，但各种工程系统、底层硬件中缓存都无处不在，所以也想好好思考下缓存相关的技术。",-1),_=e("h2",{id:"关于缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于缓存","aria-hidden":"true"},"#"),a(" 关于缓存")],-1),p={href:"https://martinfowler.com/bliki/TwoHardThings.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://en.wikipedia.org/wiki/Page_cache",target:"_blank",rel:"noopener noreferrer"},m=l('<ol><li>空间换时间，提升访问速度</li><li>避免所有的流量都打到底层数据库上，直接把系统打穿</li></ol><p>虽然缓存的作用看起来简单，但设计合适的缓存系统，其实也不容易，需要考虑到各种异常，比如缓存穿透、缓存雪崩、缓存击穿等各种异常</p><h2 id="关于存储" tabindex="-1"><a class="header-anchor" href="#关于存储" aria-hidden="true">#</a> 关于存储</h2><p>其实我们所说的硬盘、文件系统、关系型数据库，在我看来，其实都是存储，只是抽象的程度不一样。</p><ol><li>硬盘是对最底层硬件的抽象，我们不需要去理解底层的存储，如何用硅来存储数据。</li><li>文件系统是对硬盘读取的抽象，告诉底层硬盘该如何存储与组织数据，并且给上层暴露统一的API</li><li>而关系型数据库本身是对文件系统的抽象，如何按照现实世界软件的设计，去存储与组织数据</li></ol><p>有个著名的梗，对于计算机科学而言，没有什么问题是加一层不能解决的。</p>',6);function u(x,k){const r=o("ExternalLinkIcon");return i(),c("div",null,[d,h,_,e("p",null,[a("有个段子，计算机科学"),e("a",p,[a("唯二的难题"),n(r)]),a("，缓存失效与命名")]),e("p",null,[a("缓存本身的话其实分为多种，如CPU中的L1、L2、L3缓存，还有我们常听到的 "),e("a",f,[a("page cache"),n(r)]),a(" 和 buffer cache，以及日常使用最多的 memcache 与 redis 等,在我看来，缓存的作用主要有两种：")]),m])}const g=t(s,[["render",u],["__file","index.html.vue"]]);export{g as default};
