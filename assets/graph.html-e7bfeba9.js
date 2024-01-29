import{_ as p,r as e,o,c,a as n,b as a,d as t,e as i}from"./app-097a6a1b.js";const l={},u=i(`<h1 id="关于图论" tabindex="-1"><a class="header-anchor" href="#关于图论" aria-hidden="true">#</a> 关于图论</h1><blockquote><p>图是图论的主要研究对象。图是由若干给定的顶点及连接两顶点的边所构成的图形，这种图形通常用来描述某些事物之间的某种特定关系。顶点用于代表事物，连接两顶点的边则用于表示两个事物间具有这种关系。</p></blockquote><p>图论比较核心的一个问题是，我们是用邻接链表，还是邻接矩阵去存储相关的数据。 对于那种边比较多的图，采用邻接矩阵更为合适 对于那种边比较少的图，采用邻接链表更为合适</p><h2 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序" aria-hidden="true">#</a> 拓扑排序</h2><p>图论中比较经典的题目就是拓扑排序了</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//https://leetcode.cn/problems/course-schedule/description/</span>
<span class="token comment">//课程表</span>
<span class="token comment">//标准的拓扑排序</span>

<span class="token keyword">func</span> <span class="token function">canFinish</span><span class="token punctuation">(</span>numCourses <span class="token builtin">int</span><span class="token punctuation">,</span> prerequisites <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token comment">//采用dfs的方式</span>
	valid <span class="token operator">:=</span> <span class="token boolean">true</span>
	<span class="token comment">//存储每个节点是否访问过，0表示没有访问过，1表示访问过，2表示已经访问过</span>
	visited <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> numCourses<span class="token punctuation">)</span>
	<span class="token comment">//采用邻接链表的方式存储</span>
	edges <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> numCourses<span class="token punctuation">)</span>
	<span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span>u <span class="token builtin">int</span><span class="token punctuation">)</span>
	dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>u <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		visited<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> edges<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				<span class="token function">dfs</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token operator">!</span>valid <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
				valid <span class="token operator">=</span> <span class="token boolean">false</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		visited<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//构造邻接链表</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> prerequisites <span class="token punctuation">{</span>
		edges<span class="token punctuation">[</span>v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>edges<span class="token punctuation">[</span>v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCourses <span class="token operator">&amp;&amp;</span> valid<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> valid
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="岛屿遍历" tabindex="-1"><a class="header-anchor" href="#岛屿遍历" aria-hidden="true">#</a> 岛屿遍历</h2><p>https://leetcode.cn/problems/number-of-islands/ 给你一个由 &#39;1&#39;（陆地）和 &#39;0&#39;（水）组成的的二维网格，请你计算网格中岛屿的数量。 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。 此外，你可以假设该网格的四条边均被水包围。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">numIslands</span><span class="token punctuation">(</span>grid <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> grid <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
	nums <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token comment">//开始遍历，每次都是BFS遍历</span>
	row <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span>
	column <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span>
	dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;0&#39;</span> <span class="token punctuation">{</span>
			<span class="token comment">//如果已经是水，则结束</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span>
		<span class="token comment">//遍历上下左右</span>
		<span class="token keyword">if</span> i<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> i<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&lt;</span> row <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> j<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> j<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&lt;</span> column <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> column<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token punctuation">{</span>
				nums<span class="token operator">++</span>
				<span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小镇法官" tabindex="-1"><a class="header-anchor" href="#小镇法官" aria-hidden="true">#</a> 小镇法官</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//https://leetcode.cn/problems/find-the-town-judge/description/</span>
<span class="token comment">//找到小镇的法官</span>

<span class="token keyword">func</span> <span class="token function">findJudge</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> trust <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">//其实只需要考虑入度和出度，不需要考虑邻接链表或者矩阵的存储</span>
	<span class="token comment">//最终满足条件的应该是入度为N-1，出度为0</span>
	indegree <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	outdegree <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> trust <span class="token punctuation">{</span>
		indegree<span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
		outdegree<span class="token punctuation">[</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> indegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> n<span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> outdegree<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,12),r={href:"https://zh.m.wikipedia.org/zh/%E5%9B%BE%E8%AE%BA",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zh.wikipedia.org/wiki/%E6%8B%93%E6%92%B2%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"},d={href:"https://zhuanlan.zhihu.com/p/25498681",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[a("https://zh.m.wikipedia.org/zh/图论"),t(s)])]),n("li",null,[n("a",k,[a("https://zh.wikipedia.org/wiki/拓撲排序"),t(s)])]),n("li",null,[n("a",d,[a("https://zhuanlan.zhihu.com/p/25498681"),t(s)])])])])}const h=p(l,[["render",v],["__file","graph.html.vue"]]);export{h as default};
