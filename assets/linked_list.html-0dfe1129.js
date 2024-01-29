import{_ as p,r as o,o as l,c as i,a as n,b as s,d as t,e as a}from"./app-097a6a1b.js";const c={},u=a(`<h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1><p>链表其实是日常工作中与面试都常会接触的数据结构，因为数组是固定大小，扩容成本较高，而链表的扩容成本较低，所以链表在很多场景下使用也比较广泛</p><h2 id="常见考察问题" tabindex="-1"><a class="header-anchor" href="#常见考察问题" aria-hidden="true">#</a> 常见考察问题</h2><h3 id="链表反转" tabindex="-1"><a class="header-anchor" href="#链表反转" aria-hidden="true">#</a> 链表反转</h3><p>关于链表反转，其实就是增加一个临时节点存储存储下当前节点的信息。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token comment">//最最经典的反转链表</span>
    <span class="token keyword">var</span> prev <span class="token operator">*</span>ListNode
    cur <span class="token operator">:=</span> head
    <span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        temp <span class="token operator">:=</span> cur<span class="token punctuation">.</span>Next
        cur<span class="token punctuation">.</span>Next <span class="token operator">=</span> prev
        prev <span class="token operator">=</span> cur
        cur <span class="token operator">=</span> temp
    <span class="token punctuation">}</span> 
    <span class="token keyword">return</span> prev
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并链表" tabindex="-1"><a class="header-anchor" href="#合并链表" aria-hidden="true">#</a> 合并链表</h3><p>如果只是关于两个链表的合并，其实比较简单。一般可能会考察更为复杂的情况，比如K个链表的合并</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span>list1 <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> list2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
	h <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
	l <span class="token operator">:=</span> h
	<span class="token keyword">for</span> list1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> list1<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
			l<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> list1<span class="token punctuation">.</span>Val<span class="token punctuation">}</span>
			list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			l<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>Val<span class="token punctuation">:</span> list2<span class="token punctuation">.</span>Val<span class="token punctuation">}</span>
			list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span>
		l <span class="token operator">=</span> l<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> list1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		l<span class="token punctuation">.</span>Next <span class="token operator">=</span> list1
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> list2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		l<span class="token punctuation">.</span>Next <span class="token operator">=</span> list2
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> h<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表排序" tabindex="-1"><a class="header-anchor" href="#链表排序" aria-hidden="true">#</a> 链表排序</h3><p>可以采用归并排序的方式</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> ListNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Val  <span class="token builtin">int</span>
	Next <span class="token operator">*</span>ListNode
<span class="token punctuation">}</span>

<span class="token comment">//https://leetcode.cn/leetbook/read/top-interview-questions/xa262d/</span>
<span class="token comment">//链表排序</span>
<span class="token comment">// 用快慢指针寻找中间节点，然后再去merge两个链表的数据</span>
<span class="token keyword">func</span> <span class="token function">sortList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
	<span class="token comment">//最合适的方式是使用归并排序,其实这道题目还是考察挺全面的，考察了如何找到链表的中间节点，以归并排序</span>
	<span class="token keyword">return</span> <span class="token function">sort</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//标准的归并排序</span>
<span class="token keyword">func</span> <span class="token function">sort</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> tail <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
	<span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> head
	<span class="token punctuation">}</span>
	<span class="token comment">//如果只剩一个节点</span>
	<span class="token keyword">if</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> tail <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token keyword">return</span> head
	<span class="token punctuation">}</span>

	<span class="token comment">//快慢指针寻找中间点</span>
	slow<span class="token punctuation">,</span> fast <span class="token operator">:=</span> head<span class="token punctuation">,</span> head
	<span class="token keyword">for</span> fast <span class="token operator">!=</span> tail <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
		<span class="token keyword">if</span> fast <span class="token operator">!=</span> tail <span class="token punctuation">{</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	mid <span class="token operator">:=</span> slow
	<span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">sort</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sort</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//merge链表</span>
<span class="token comment">//因为传进来的是指针，不能改变原来链表中的数据</span>
<span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>list1 <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> list2 <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
	resListNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span><span class="token punctuation">}</span>
	temp<span class="token punctuation">,</span> temp1<span class="token punctuation">,</span> temp2 <span class="token operator">:=</span> resListNode<span class="token punctuation">,</span> list1<span class="token punctuation">,</span> list2
	<span class="token keyword">for</span> temp1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> temp2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> temp1<span class="token punctuation">.</span>Val <span class="token operator">&lt;</span> temp2<span class="token punctuation">.</span>Val <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>Next <span class="token operator">=</span> temp1
			temp1 <span class="token operator">=</span> temp1<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span>Next <span class="token operator">=</span> temp2
			temp2 <span class="token operator">=</span> temp2<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> temp1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span>Next <span class="token operator">=</span> temp2
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> temp2 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span>Next <span class="token operator">=</span> temp1
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> resListNode<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制链表" tabindex="-1"><a class="header-anchor" href="#复制链表" aria-hidden="true">#</a> 复制链表</h3>`,13),r={href:"https://leetcode.cn/leetbook/read/top-interview-questions/xam1wr/",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> nodeMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token operator">*</span>Node<span class="token punctuation">]</span><span class="token operator">*</span>Node

<span class="token keyword">func</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
	nodeMap <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token operator">*</span>Node<span class="token punctuation">]</span><span class="token operator">*</span>Node<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>node <span class="token operator">*</span>Node<span class="token punctuation">)</span> <span class="token operator">*</span>Node <span class="token punctuation">{</span>
	<span class="token keyword">if</span> node <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//如果已经创建过，那就返回</span>
	n<span class="token punctuation">,</span> ok <span class="token operator">:=</span> nodeMap<span class="token punctuation">[</span>node<span class="token punctuation">]</span>
	<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> n
	<span class="token punctuation">}</span>

	<span class="token comment">//否则就进行节点的创建</span>
	newNode <span class="token operator">:=</span> <span class="token operator">&amp;</span>Node<span class="token punctuation">{</span>
		Val<span class="token punctuation">:</span> node<span class="token punctuation">.</span>Val<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	nodeMap<span class="token punctuation">[</span>node<span class="token punctuation">]</span> <span class="token operator">=</span> newNode
	<span class="token comment">//将问题不断递归</span>
	newNode<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Next<span class="token punctuation">)</span>
	newNode<span class="token punctuation">.</span>Random <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Random<span class="token punctuation">)</span>
	<span class="token keyword">return</span> newNode
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两个链表相交" tabindex="-1"><a class="header-anchor" href="#两个链表相交" aria-hidden="true">#</a> 两个链表相交</h3>`,2),k={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/solutions/",target:"_blank",rel:"noopener noreferrer"},v=a(`<ol><li>不相交 A、B互换之后，大家的遍历都是 len(A) + len(B) == len(B) + len(A)，最终遍历完一遍之后也会终止</li><li>相交 那大家就会在第二次遍历的时候相遇</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span>headA<span class="token punctuation">,</span> headB <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>

	<span class="token keyword">if</span> headA <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> headB <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	pa <span class="token operator">:=</span> headA
	pb <span class="token operator">:=</span> headB
	<span class="token keyword">for</span> pa <span class="token operator">!=</span> pb <span class="token punctuation">{</span>
		<span class="token keyword">if</span> pa <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			pa <span class="token operator">=</span> pa<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			pa <span class="token operator">=</span> headB
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> pb <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			pb <span class="token operator">=</span> pb<span class="token punctuation">.</span>Next
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			pb <span class="token operator">=</span> headA
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> pa
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种其实就是最典型的双指针的问题，一般涉及两个点之前的比较或者计算，常用就是双指针</p><h3 id="奇偶链表" tabindex="-1"><a class="header-anchor" href="#奇偶链表" aria-hidden="true">#</a> 奇偶链表</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">oddEvenList</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
    <span class="token keyword">if</span> head <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> head
    <span class="token punctuation">}</span>
    slow <span class="token operator">:=</span> head
    quick <span class="token operator">:=</span> head<span class="token punctuation">.</span>Next
    headQuick <span class="token operator">:=</span> head<span class="token punctuation">.</span>Next
    <span class="token keyword">for</span> quick <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> quick<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
        slow<span class="token punctuation">.</span>Next <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
        quick<span class="token punctuation">.</span>Next <span class="token operator">=</span> quick<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>Next
        quick <span class="token operator">=</span> quick<span class="token punctuation">.</span>Next
    <span class="token punctuation">}</span>
    <span class="token comment">//遍历结束之后</span>
    slow<span class="token punctuation">.</span>Next <span class="token operator">=</span> headQuick
    <span class="token keyword">return</span> head
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除链表中的节点" tabindex="-1"><a class="header-anchor" href="#删除链表中的节点" aria-hidden="true">#</a> 删除链表中的节点</h3><p>这个题目有两种形式的变种</p>`,7),m={href:"https://leetcode.cn/leetbook/read/top-interview-questions/xadve1/",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>node <span class="token operator">*</span>ListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> node<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		node <span class="token operator">=</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	node<span class="token punctuation">.</span>Val <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val
	node<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={start:"2"},N={href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
	<span class="token keyword">if</span> head<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
		<span class="token keyword">return</span> head<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	prev <span class="token operator">:=</span> head
	cur <span class="token operator">:=</span> head<span class="token punctuation">.</span>Next
	<span class="token keyword">for</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>Val <span class="token operator">!=</span> val <span class="token punctuation">{</span>
		prev <span class="token operator">=</span> cur
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token comment">//就算是最后一位也不例外</span>
	<span class="token keyword">if</span> cur <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		prev<span class="token punctuation">.</span>Next <span class="token operator">=</span> cur<span class="token punctuation">.</span>Next
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> head
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种比较妙的解法,增加了一个头结点，然后就把所有的问题都归一化了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>head <span class="token operator">*</span>ListNode<span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>ListNode <span class="token punctuation">{</span>
	newHead <span class="token operator">:=</span> <span class="token operator">&amp;</span>ListNode<span class="token punctuation">{</span>
		Val<span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">,</span>
		Next<span class="token punctuation">:</span> head<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> p <span class="token operator">:=</span> newHead<span class="token punctuation">;</span> p<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token boolean">nil</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>Next <span class="token punctuation">{</span>
		<span class="token keyword">if</span> p<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Val <span class="token operator">==</span> val <span class="token punctuation">{</span>
			<span class="token comment">//删除节点</span>
			p<span class="token punctuation">.</span>Next <span class="token operator">=</span> p<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> newHead<span class="token punctuation">.</span>Next
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>其实关于链表的题目，都可以多往双指针方面去思考，很多难题说不定就迎刃而解了。</p><h3 id="一些技巧" tabindex="-1"><a class="header-anchor" href="#一些技巧" aria-hidden="true">#</a> 一些技巧</h3><h4 id="增加头结点" tabindex="-1"><a class="header-anchor" href="#增加头结点" aria-hidden="true">#</a> 增加头结点</h4><p>在链表题目中，经常会添加一个额外的头结点，这是为了简化链表的操作和处理。以下是一些常见的原因：</p><p>方便处理空链表：在链表操作中，处理空链表和非空链表通常需要进行不同的逻辑判断。为了避免在每个操作中都进行额外的判断，可以添加一个虚拟的头结点作为链表的起始点。这样，即使链表为空，也有一个头结点作为起点，可以避免在每个操作中处理空链表的情况。</p><p>统一操作逻辑：添加一个头结点后，链表中的所有节点都有了一个共同的结构，包括头结点和普通节点。这样可以使得操作逻辑更加统一，不需要对头结点和普通节点进行分别处理，简化了代码的编写和理解。</p><p>方便插入和删除操作：添加头结点后，可以避免在链表的开头进行特殊处理。插入和删除节点时，可以将新节点插入到头结点之后，或者将要删除的节点直接跳过。这样可以简化插入和删除操作的逻辑。</p><p>需要注意的是，添加头结点并不是所有链表问题都需要的，具体是否使用头结点取决于具体的问题和算法的要求。在解决链表问题时，根据实际情况选择是否添加头结点以及如何处理链表操作，是根据问题的特点和解决方案的需要进行判断和决策的。</p>`,12);function w(x,y){const e=o("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[s("关于单纯的复制链表比较简单，就是遍历链表，然后不停地新建节点，按这个顺序去建立并串联起来，所以一般也不会考察这种最简单的情况，而是会做一些变种，比如 "),n("a",r,[s("复制带随机指针的链表"),t(e)])]),d,n("p",null,[s("这道题目其实很巧妙，"),n("a",k,[s("https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/solutions/"),t(e)]),s(" 其实一般就分为2种情况")]),v,n("ol",null,[n("li",null,[s("给定删除的节点,"),n("a",m,[s("题目链接"),t(e)])])]),b,n("ol",h,[n("li",null,[s("给定头结点，以及要删除的节点的值。这个就需要用到双指针去进行处理 "),n("a",N,[s("题目链接"),t(e)])])]),f])}const L=p(c,[["render",w],["__file","linked_list.html.vue"]]);export{L as default};
