import{_ as e,r as p,o,c,a as n,b as a,d as t,e as i}from"./app-47e324c0.js";const l={},u=i(`<h1 id="回溯法" tabindex="-1"><a class="header-anchor" href="#回溯法" aria-hidden="true">#</a> 回溯法</h1><p>平时工作中感觉回溯法相关的思想倒是用的不多，但是在leetcode中，其实回溯相关的还是用的挺多的，尤其是那种要获取所有分类的题目，基本都是采用回溯法去解决的。 回溯其实很多时候会依赖于深度优先搜索，并且需要自己在代码中处理各种分支情况.</p><p>最典型的就是八皇后问题</p><h2 id="相关伪代码" tabindex="-1"><a class="header-anchor" href="#相关伪代码" aria-hidden="true">#</a> 相关伪代码</h2><p>一般流程的伪代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>procedure backtrack(P, c) is
    if reject(P, c) then return
    if accept(P, c) then output(P, c)
    s ← first(P, c)
    while s ≠ NULL do
        backtrack(P, s)
        s ← next(P, s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时空复杂度" tabindex="-1"><a class="header-anchor" href="#时空复杂度" aria-hidden="true">#</a> 时空复杂度</h2><p>最坏情况下，回溯法的时间复杂度为指数级</p><h2 id="常见的一些面试题" tabindex="-1"><a class="header-anchor" href="#常见的一些面试题" aria-hidden="true">#</a> 常见的一些面试题</h2><h3 id="括号生成" tabindex="-1"><a class="header-anchor" href="#括号生成" aria-hidden="true">#</a> 括号生成</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//https://leetcode.cn/problems/generate-parentheses/description/%3Ffavorite=2cktkvj</span>
<span class="token keyword">func</span> <span class="token function">generateParenthesis</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token builtin">string</span>
	ans <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> backtrace <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	backtrace <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> open <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">close</span> <span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> n<span class="token operator">*</span><span class="token number">2</span> <span class="token punctuation">{</span>
			ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> open <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
			s <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token string">&quot;(&quot;</span>
			<span class="token function">backtrace</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> open<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">close</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
			s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> open <span class="token operator">&gt;</span> <span class="token builtin">close</span> <span class="token punctuation">{</span>
			s <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span>
			<span class="token function">backtrace</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> open<span class="token punctuation">,</span> <span class="token builtin">close</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">backtrace</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token keyword">return</span> ans
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="八皇后问题" tabindex="-1"><a class="header-anchor" href="#八皇后问题" aria-hidden="true">#</a> 八皇后问题</h3><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,13),r={href:"https://en.wikipedia.org/wiki/Backtracking",target:"_blank",rel:"noopener noreferrer"},d={href:"https://leetcode.cn/problems/combination-sum/solutions/406516/zu-he-zong-he-by-leetcode-solution/",target:"_blank",rel:"noopener noreferrer"};function k(b,v){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[a("https://en.wikipedia.org/wiki/Backtracking"),t(s)])]),n("li",null,[n("a",d,[a("https://leetcode.cn/problems/combination-sum/solutions/406516/zu-he-zong-he-by-leetcode-solution/"),t(s)])])])])}const m=e(l,[["render",k],["__file","backtrace.html.vue"]]);export{m as default};
