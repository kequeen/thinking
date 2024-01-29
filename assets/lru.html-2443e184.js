import{_ as n,o as s,c as a,e as t}from"./app-097a6a1b.js";const p={},e=t(`<h1 id="lru" tabindex="-1"><a class="header-anchor" href="#lru" aria-hidden="true">#</a> LRU</h1><p>LRU算法也算是最经典的面试算法之一了,其实本身就是一个双向链表。 链表本身分为单向链表、双向链表、循环链表，之前是把双向链表 + 循环链表 搞混了，这两个本质上还是不一样的</p><h2 id="经典lru" tabindex="-1"><a class="header-anchor" href="#经典lru" aria-hidden="true">#</a> 经典lru</h2><p>其实核心还是一个双向链表 + map 核心就是一个双向链表的节点 + 一个map快速判断是否存在 还有一些删除和新增的操作</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 定义一个双向链表的结构</span>
<span class="token comment">// 这个双向链表中的值有key,value</span>
<span class="token keyword">type</span> DLinkedNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	key<span class="token punctuation">,</span> value <span class="token builtin">int</span>
	prev       <span class="token operator">*</span>DLinkedNode
	next       <span class="token operator">*</span>DLinkedNode
<span class="token punctuation">}</span>

<span class="token keyword">type</span> LRUCache <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	head <span class="token operator">*</span>DLinkedNode
	tail <span class="token operator">*</span>DLinkedNode
	<span class="token comment">//根据值获取节点</span>
	cacheMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>DLinkedNode
	capacity <span class="token builtin">int</span> <span class="token comment">//上限容量</span>
	size     <span class="token builtin">int</span> <span class="token comment">//当前存储容量</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initNode</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>DLinkedNode <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>DLinkedNode<span class="token punctuation">{</span>
		key<span class="token punctuation">:</span>   k<span class="token punctuation">,</span>
		value<span class="token punctuation">:</span> v<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Constructor</span><span class="token punctuation">(</span>capacity <span class="token builtin">int</span><span class="token punctuation">)</span> LRUCache <span class="token punctuation">{</span>
	l <span class="token operator">:=</span> LRUCache<span class="token punctuation">{</span>
		head<span class="token punctuation">:</span>     <span class="token function">initNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		tail<span class="token punctuation">:</span>     <span class="token function">initNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		capacity<span class="token punctuation">:</span> capacity<span class="token punctuation">,</span>
		cacheMap<span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token operator">*</span>DLinkedNode<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//定义好双向链表</span>
	l<span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> l<span class="token punctuation">.</span>tail
	l<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev <span class="token operator">=</span> l<span class="token punctuation">.</span>head
	<span class="token keyword">return</span> l
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	node<span class="token punctuation">,</span> ok <span class="token operator">:=</span> this<span class="token punctuation">.</span>cacheMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	this<span class="token punctuation">.</span><span class="token function">removeToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
	<span class="token keyword">return</span> node<span class="token punctuation">.</span>value
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">Put</span><span class="token punctuation">(</span>key <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	node<span class="token punctuation">,</span> ok <span class="token operator">:=</span> this<span class="token punctuation">.</span>cacheMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
	<span class="token comment">//注意下历史node的复用</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		newNode <span class="token operator">:=</span> <span class="token function">initNode</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
		<span class="token comment">//如果不存在，则直接插入首位</span>
		this<span class="token punctuation">.</span><span class="token function">addToHead</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span>
		this<span class="token punctuation">.</span>size<span class="token operator">++</span>
		this<span class="token punctuation">.</span>cacheMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newNode
		<span class="token keyword">if</span> this<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> this<span class="token punctuation">.</span>capacity <span class="token punctuation">{</span>
			<span class="token comment">//如果容量超了</span>
			deleteNode <span class="token operator">:=</span> this<span class="token punctuation">.</span><span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token function">delete</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>cacheMap<span class="token punctuation">,</span> deleteNode<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
			this<span class="token punctuation">.</span>size<span class="token operator">--</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		node<span class="token punctuation">.</span>value <span class="token operator">=</span> value
		this<span class="token punctuation">.</span><span class="token function">removeToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
		this<span class="token punctuation">.</span>cacheMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> node
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//其实一些细节也挺有意思的</span>

<span class="token comment">// 记录双向链表的一些操作，是否需要删除由业务层去决定</span>
<span class="token comment">// 需要定义一些双向链表的操作，比如头部插入数据，尾部删除数据</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">addToHead</span><span class="token punctuation">(</span>node <span class="token operator">*</span>DLinkedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//新插入的节点的指针的指向</span>
	node<span class="token punctuation">.</span>next <span class="token operator">=</span> this<span class="token punctuation">.</span>head<span class="token punctuation">.</span>next
	node<span class="token punctuation">.</span>prev <span class="token operator">=</span> this<span class="token punctuation">.</span>head

	<span class="token comment">//头部节点的指针走向</span>
	this<span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> node
	this<span class="token punctuation">.</span>head<span class="token punctuation">.</span>next <span class="token operator">=</span> node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">removeFromTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	this<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> this<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next
	this<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> this<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev
<span class="token punctuation">}</span>

<span class="token comment">// 需要返回相关的节点</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>DLinkedNode <span class="token punctuation">{</span>
	node <span class="token operator">:=</span> this<span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev
	this<span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
	<span class="token keyword">return</span> node
<span class="token punctuation">}</span>

<span class="token comment">// 删除节点</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>DLinkedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	node<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next
	node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> node<span class="token punctuation">.</span>prev
<span class="token punctuation">}</span>

<span class="token comment">// 要删除里面的节点</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>LRUCache<span class="token punctuation">)</span> <span class="token function">removeToHead</span><span class="token punctuation">(</span>node <span class="token operator">*</span>DLinkedNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	this<span class="token punctuation">.</span><span class="token function">removeNode</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
	this<span class="token punctuation">.</span><span class="token function">addToHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变种1" tabindex="-1"><a class="header-anchor" href="#变种1" aria-hidden="true">#</a> 变种1</h2><p>带过期时间的LRU</p>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","lru.html.vue"]]);export{d as default};
