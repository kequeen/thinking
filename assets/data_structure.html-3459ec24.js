import{_ as p,r as o,o as c,c as l,a as n,b as a,d as e,e as t}from"./app-47e324c0.js";const i={},u=t('<h1 id="关于常用的数据结构" tabindex="-1"><a class="header-anchor" href="#关于常用的数据结构" aria-hidden="true">#</a> 关于常用的数据结构</h1><p>数据结构与算法，这两个词经常会放在一起。因为依赖于合适的数据结构，很多问题的解决其实是事半功倍的。</p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>不同语言中数组会有一些差别，比如是否定长，以及数据类型上是否一致。<br> 一般而言，我们对数组的期待是存储同一类型的数据，虽然像php这类弱类型语言，其实也只能在编程规范上去进行约束<br> 并且数组的话，强类型语言，我们一般认为其存储地址是连续的。这个读的效率会比较高，而写的效率则不一样</p><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2><p>一般是与数组做对比，对比于数组而言，其主要的优势在于修改的成本低，并且可以动态扩展。</p><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h2>',7),r=n("br",null,null,-1),d=n("br",null,null,-1),k={href:"https://www.cainiaojc.com/java/java-list.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<ol><li>使用切片</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 队列</span>
queue <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
queue <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>        <span class="token comment">// 入队</span>
element <span class="token operator">:=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>             <span class="token comment">// 获取队首元素</span>
queue <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>               <span class="token comment">// 出队</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>可以通过container中的list（本身是一个双向链表）来实现，可以只从一端插入，另外一端去取</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 队列</span>
queue <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>                 <span class="token comment">// 入队</span>
element <span class="token operator">:=</span> queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value    <span class="token comment">// 获取队首元素</span>
queue<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">Front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment">// 出队</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h2>`,5),m={href:"https://www.runoob.com/java/java-stack-class.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Object</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Object</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token class-name">Object</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">)</span>
<span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token class-name">Object</span> element<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>golang中也有两种方式去实现</p><ol><li>使用切片</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>stack <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
stack <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>stack<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>        <span class="token comment">// 入栈</span>
element <span class="token operator">:=</span> stack<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment">// 获取栈顶元素</span>
stack <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>    <span class="token comment">// 出栈</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用list</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>stack <span class="token operator">:=</span> list<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stack<span class="token punctuation">.</span><span class="token function">PushBack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>                 <span class="token comment">// 入栈</span>
element <span class="token operator">:=</span> stack<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value     <span class="token comment">// 获取栈顶元素</span>
stack<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">Back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        <span class="token comment">// 出栈</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h2>`,7),b={href:"https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),g=n("br",null,null,-1),f={href:"https://zh.m.wikipedia.org/zh-hans/Trie",target:"_blank",rel:"noopener noreferrer"},j=t('<h2 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h2><p>表示的方式有邻接链表和邻接矩阵两种，类似于我们日常生活中的场景，从A-&gt;B的最短路径，就可以将地图抽象成图，各个点的距离抽象成图的边，就可以将生活中的类似问题抽象成图的问题，然后就可以按照关于图的各种理论来进行计算</p><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>基本上所有的语言都认为这是一个必需的数据结构，php中的关联数组，java中的hashmap，golang中的map。</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>',5),w={href:"https://book.douban.com/subject/19952400/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zh.wikipedia.org/zh-sg/%E4%BA%8C%E5%8F%89%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},B={href:"https://zh.m.wikipedia.org/zh-hans/%E5%9B%BE_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)",target:"_blank",rel:"noopener noreferrer"};function E(q,z){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[a("先进先出的数据结构，常用于BFS等场景。"),r,a(" 在php中，可以用数组去实现。"),d,a(" 在java中，有单独的[List类]"),n("a",k,[a("https://www.cainiaojc.com/java/java-list.html"),e(s)]),a(",实现上有LinkedList、ArrayList等多种实现方案 在golang中，实现队列有两种方式：")]),h,n("p",null,[a("先进后出的数据结构，常用于DFS等场景 在php中，本身是没有这个数据结构的，但是可以用数组去实现，因为php数组本身就是变长的,并且php原生支持array_pop() 和 array_push()之类的函数 在java中，专门又一个 [Stack类]"),n("a",m,[a("https://www.runoob.com/java/java-stack-class.html"),e(s)]),a(",其本身实现了下面的一些方法")]),v,n("p",null,[a("一般我们常见的是二叉树或者N叉树。像基础的搜索二叉树，其实是缺乏实际的落地场景的，因为树高难以控制，所以一般工程上使用的是"),n("a",b,[a("红黑树"),e(s)]),a(",是一种特殊的平衡二叉树，可以在数据增长的情况下，让二叉树保持高度上的平衡。一般用户类似于hashmap或者关联数组中，发生hash冲突之后，如果冲突的key比较少，一般是8，则用链表表示，多于这个数，则一般会转换成红黑树"),_,a(" 而N叉树的一个应用就是B树和B+树，这种一般用于数据库存储上。"),g,n("a",f,[a("Trie树"),e(s)]),a("，一般搜索的场景会使用比较多，主要优势在于做前缀匹配效率确实高")]),j,n("ol",null,[n("li",null,[n("a",w,[a("https://book.douban.com/subject/19952400/"),e(s)])]),n("li",null,[n("a",x,[a("https://zh.wikipedia.org/zh-sg/二叉树"),e(s)])]),n("li",null,[n("a",B,[a("https://zh.m.wikipedia.org/zh-hans/图_(数据结构)"),e(s)])])])])}const N=p(i,[["render",E],["__file","data_structure.html.vue"]]);export{N as default};
