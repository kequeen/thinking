import{_ as e,r as p,o,c as i,a as n,b as a,d as t,e as l}from"./app-47e324c0.js";const c={},r=l(`<h1 id="贪心算法" tabindex="-1"><a class="header-anchor" href="#贪心算法" aria-hidden="true">#</a> 贪心算法</h1><p>贪心算法与动态规划算法的不同在于，他对每个子问题的解决方案都做出选择，不能回退。<br> 动态规划会保存以前的计算结果，有回退功能.<br> 贪心的话，一般会在时间复杂度上更优于标准的动态规划，因为其不做回溯。<br> 我们也可以理解，贪心其实是动态规划的特殊情况。</p><h2 id="标准流程" tabindex="-1"><a class="header-anchor" href="#标准流程" aria-hidden="true">#</a> 标准流程</h2><ol><li>创建数学模型来描述问题。</li><li>把求解的问题分成若干个子问题。</li><li>对每一子问题求解，得到子问题的局部最优解。</li><li>把子问题的解局部最优解合成原来解问题的一个解。</li></ol><h2 id="常见算法" tabindex="-1"><a class="header-anchor" href="#常见算法" aria-hidden="true">#</a> 常见算法</h2><h3 id="乘最多水的容器" tabindex="-1"><a class="header-anchor" href="#乘最多水的容器" aria-hidden="true">#</a> 乘最多水的容器</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//https://leetcode.cn/problems/container-with-most-water/description/</span>
<span class="token keyword">func</span> <span class="token function">maxArea</span><span class="token punctuation">(</span>height <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	area <span class="token operator">:=</span> <span class="token number">0</span>
	left <span class="token operator">:=</span> <span class="token number">0</span>
	right <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
	<span class="token keyword">for</span> left <span class="token operator">&lt;</span> right <span class="token punctuation">{</span>
		currentArae <span class="token operator">:=</span> <span class="token function">min</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span>
		<span class="token keyword">if</span> currentArae <span class="token operator">&gt;</span> area <span class="token punctuation">{</span>
			area <span class="token operator">=</span> currentArae
		<span class="token punctuation">}</span>
		<span class="token comment">//判断指针向左还是向右移动</span>
		<span class="token keyword">if</span> height<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> height<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right<span class="token operator">--</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> area
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> a <span class="token operator">&lt;</span> b <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳跃游戏" tabindex="-1"><a class="header-anchor" href="#跳跃游戏" aria-hidden="true">#</a> 跳跃游戏</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//https://leetcode.cn/problems/jump-game/description/</span>
<span class="token keyword">func</span> <span class="token function">canJump</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    maxJump <span class="token operator">:=</span> <span class="token number">0</span>
    numsLen <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numsLen<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">&lt;=</span> maxJump <span class="token punctuation">{</span>
            maxJump <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>maxJump<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> maxJump <span class="token operator">&gt;=</span> numsLen<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渡河问题" tabindex="-1"><a class="header-anchor" href="#渡河问题" aria-hidden="true">#</a> 渡河问题</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token comment">//有一条河流长度为N，其中某些位置上有可以停留的石子格，假设人上一次跨过的距离为X，则当次可以选择的步长为X-1，X，X+1，第一次人的步长默认为1</span>
<span class="token comment">//给你一个格子的列表，第一个数默认为0，最后一个数代表对岸的种点，判断能否过河</span>

<span class="token keyword">func</span> <span class="token function">canCrossRiver</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//采用贪心算法，每一步，都应该去走它所能到达的下一步的最大值。当前位置 -&gt; 下一步可能的最大值之间，如果有其他的步数，都可以忽略</span>

	<span class="token comment">//记录当前位置</span>
	current <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token comment">//记录当前最大步数</span>
	maxStep <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token comment">//记录上次的值</span>
	lastValue <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token comment">//判断是否结束</span>
	end <span class="token operator">:=</span> <span class="token boolean">true</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
		end <span class="token operator">=</span> <span class="token boolean">true</span>
		<span class="token comment">//如果下一步不满足条件</span>
		<span class="token keyword">if</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>current <span class="token operator">&gt;</span> maxStep<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//小于的maxStep - 1 的话，直接往前走</span>
		<span class="token keyword">if</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>current <span class="token operator">&lt;</span> maxStep<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span>
			end <span class="token operator">=</span> <span class="token boolean">false</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//判断是否需要更新current 和 maxStep</span>
		<span class="token keyword">for</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>current <span class="token operator">&lt;=</span> maxStep<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">{</span>
			lastValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
			i<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		maxStep <span class="token operator">=</span> lastValue <span class="token operator">-</span> current
		current <span class="token operator">=</span> lastValue
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> end
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,12),u={href:"https://zh.wikipedia.org/wiki/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},d={href:"https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=p("ExternalLinkIcon");return o(),i("div",null,[r,n("ol",null,[n("li",null,[n("a",u,[a("https://zh.wikipedia.org/wiki/贪心算法"),t(s)])]),n("li",null,[n("a",d,[a("https://zh.wikipedia.org/wiki/最小生成树"),t(s)])])])])}const h=e(c,[["render",k],["__file","greedy.html.vue"]]);export{h as default};
