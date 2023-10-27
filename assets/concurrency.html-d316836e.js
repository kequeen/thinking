import{_ as o,r as t,o as l,c,a as n,b as e,d as s,e as r}from"./app-47e324c0.js";const i={},p=r(`<h1 id="go中的并发" tabindex="-1"><a class="header-anchor" href="#go中的并发" aria-hidden="true">#</a> go中的并发</h1><p>并发其实最复杂的是变量共享的问题，golang中的解决方案说的是，不要通过共享内存去通信，而是通过通信去共享内存，这就是著名的CSP模型</p><p>并且其实就算协程的代价很低，有协程池还是更优的,并且更重要的是控制系统的负载。 比如有的场景，可能只能承受几十并发，而如果你请求端不做限制，其实很容易把下游冲垮，做这种限流，线程池其实就是一种很合适的方式。</p><p>goroutine和channel是golang并发的基石，也是golang目前与其他语言的一个核心区别，毕竟golang本身设计之初就是为了更好的并发存在的</p><h2 id="关于channel" tabindex="-1"><a class="header-anchor" href="#关于channel" aria-hidden="true">#</a> 关于channel</h2><p>channel本身使用上也比较复杂，其实可以理解为语言层面的消息队列，会关注几个问题：</p><h3 id="发送消息到一个不带缓冲区的channel会怎么样" tabindex="-1"><a class="header-anchor" href="#发送消息到一个不带缓冲区的channel会怎么样" aria-hidden="true">#</a> 发送消息到一个不带缓冲区的channel会怎么样</h3><h3 id="如何优雅关闭channel" tabindex="-1"><a class="header-anchor" href="#如何优雅关闭channel" aria-hidden="true">#</a> 如何优雅关闭channel</h3><p>因为比较难以检测channel中的数据是否都已经消费完，这其实会是一个问题.并且像一个已经被close的channel发送消息的话，会导致panic 一般来说是由发送方去关闭channel 主要分为三种情况</p><ol><li>M个接收者，1个发送者 这种情况下发送者直接关闭就可以</li><li>1个接收者，M个发送者 这种情况下可以由接收者通过关闭一个信号通道，去通知发送者停止发送数据</li><li>M个接收者，N个发送者 这种情况需要一个主持人</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>    <span class="token comment">// 主持人</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stoppedBy <span class="token operator">=</span> <span class="token operator">&lt;-</span>toStop
        <span class="token function">close</span><span class="token punctuation">(</span>stopCh<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>满足条件由接受者或者发送者去调用主持人进行更新</p><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3>`,13),h={href:"https://keepmoving.ren/golang/waitgroup/",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),e(" 参考链接")],-1),u={href:"https://github.com/panjf2000/ants/blob/master/README_ZH.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://learnku.com/go/t/23459/how-to-close-the-channel-gracefully",target:"_blank",rel:"noopener noreferrer"};function _(m,k){const a=t("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[e("具体可参考"),n("a",h,[e("链接"),s(a)])]),d,n("ol",null,[n("li",null,[n("a",u,[e("https://github.com/panjf2000/ants/blob/master/README_ZH.md"),s(a)])]),n("li",null,[n("a",g,[e("https://learnku.com/go/t/23459/how-to-close-the-channel-gracefully"),s(a)])])])])}const b=o(i,[["render",_],["__file","concurrency.html.vue"]]);export{b as default};
