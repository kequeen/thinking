import{_ as t,r as p,o,c,a as n,b as s,d as e,e as r}from"./app-097a6a1b.js";const l={},i=n("h1",{id:"react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react","aria-hidden":"true"},"#"),s(" react")],-1),u=n("p",null,"我是比较喜欢react中的一些思想，一切都在js中渲染",-1),d=n("h2",{id:"关于babel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于babel","aria-hidden":"true"},"#"),s(" 关于babel")],-1),k={href:"https://babeljs.io/docs/en/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生命周期","aria-hidden":"true"},"#"),s(" 生命周期")],-1),v={href:"https://zh-hans.reactjs.org/docs/react-component.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<h3 id="关于react组件" tabindex="-1"><a class="header-anchor" href="#关于react组件" aria-hidden="true">#</a> 关于react组件</h3><p>下面的这两段代码是等价的，而从个人角度而言，上面这段代码明显更为合理，也更容易理解，且更容易被复用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ShoppingList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;shopping-list&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Shopping List <span class="token keyword">for</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>Instagram<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>WhatsApp<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>Oculus<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;shopping-list&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* ... h1 children ... */</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token comment">/* ... ul children ... */</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,5),b={href:"https://reactjs.org/docs/getting-started.html#try-react",target:"_blank",rel:"noopener noreferrer"};function g(_,f){const a=p("ExternalLinkIcon");return o(),c("div",null,[i,u,d,n("p",null,[s("因为react目前采用JSX来写，而JSX需要编译之后，才能变成浏览器所需要的JS 关于babel的进一步认知，可以看"),n("a",k,[s("这个文档"),e(a)])]),h,n("p",null,[s("react的生命周期可以参考"),n("a",v,[s("这篇文档"),e(a)]),s("。 关于前端框架，其实我们很多时候都需要理解其生命周期，因为类似于vue，react这种，本身其实是对页面的二次渲染，我们正常的页面全铺开就是html，而类似于vue和react这种前端js框架，其本身就是会再执行一遍相关的代码，对页面进行重绘。")]),m,n("ol",null,[n("li",null,[n("a",b,[s("https://reactjs.org/docs/getting-started.html#try-react"),e(a)])])])])}const j=t(l,[["render",g],["__file","react.html.vue"]]);export{j as default};