import{_ as n,o as s,c as a,e as t}from"./app-097a6a1b.js";const p={},e=t(`<h1 id="对go的一些意见" tabindex="-1"><a class="header-anchor" href="#对go的一些意见" aria-hidden="true">#</a> 对go的一些意见</h1><ol><li>关于多维数组的初始化不优雅 目前关于多维数组的初始化比较丑陋</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	arr <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

	<span class="token comment">//output</span>
	<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
	<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>关于string类型的遍历</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	<span class="token comment">//关于字符串的遍历问题</span>
	str <span class="token operator">:=</span> <span class="token string">&quot;al&quot;</span>
	strLen <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strLen<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strLen<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//输出</span>
	<span class="token number">2</span>
	<span class="token number">97</span>
	<span class="token number">108</span>
	<span class="token number">97</span>
	<span class="token number">108</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","complaint.html.vue"]]);export{r as default};