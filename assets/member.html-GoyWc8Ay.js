import{_ as s,c as n,o as a,e as t}from"./app-ZP_PHHWl.js";const p={},e=t(`<h1 id="全员推送" tabindex="-1"><a class="header-anchor" href="#全员推送"><span>全员推送</span></a></h1><h2 id="全员推送-1" tabindex="-1"><a class="header-anchor" href="#全员推送-1"><span>全员推送</span></a></h2><p>全员推送，用户运营利器，不仅支持全员发送特定内容，还可根据标签、属性，针对特定用户群体发送个性化内容，如会员活动、区域通知等，助力拉新、转化、促活等各个阶段运营工作的有效进行。</p><ul><li>支持全员推送。</li><li>支持按用户属性推送。</li><li>支持按用户标签推送。</li><li>管理员推送消息，接收方看到消息发送者是管理员。</li><li>管理员指定某一账号向其他账号推送消息，接收方看到发送者不是管理员，而是管理员指定的账号。</li><li>支持消息离线存储，不支持漫游。</li><li>由于全员推送需要下发的账号数量巨大，下发完全部账号需要一定时间（根据账号总数而定，一般在一分钟内）。</li><li>支持只推在线用户，需要将 MsgLifeTime 参数设置为 0。</li></ul><div class="custom-container tip"><p class="custom-container-title">说明</p><p>“全员推送”为 IM 旗舰版功能，<a href="https://buy.cloud.tencent.com/avc?from=17489" target="_blank" rel="noopener noreferrer">购买旗舰版套餐包</a> 后可使用，详见 <a href="https://cloud.tencent.com/document/product/269/11673?from=17225#.E5.9F.BA.E7.A1.80.E6.9C.8D.E5.8A.A1.E8.AF.A6.E6.83.85" target="_blank" rel="noopener noreferrer">价格说明</a>。</p></div><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">TIMTextMsgElement</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TIMTextMsgElement</span><span class="token punctuation">(</span><span class="token string">&quot;hi, beauty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TIMMsgElement</span><span class="token punctuation">&gt;</span></span> msgBody <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImPushRequest</span> request <span class="token operator">=</span> <span class="token class-name">ImPushRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">msgRandom</span><span class="token punctuation">(</span><span class="token number">9312457L</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">msgBody</span><span class="token punctuation">(</span>msgBody<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">msgLifeTime</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImPushResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imPush</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置应用属性名称" tabindex="-1"><a class="header-anchor" href="#设置应用属性名称"><span>设置应用属性名称</span></a></h2><p>每个应用可以设置自定义的用户属性，最多可以有 10 个。通过本接口可以设置每个属性的名称，设置完成后，即可用于按用户属性推送等。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> attrNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrNames<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrNames<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrNames<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;country&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImSetAttrNameRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImSetAttrNameRequest</span><span class="token punctuation">(</span>attrNames<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImSetAttrNameResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imSetAttrName</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取应用属性名称" tabindex="-1"><a class="header-anchor" href="#获取应用属性名称"><span>获取应用属性名称</span></a></h2><p>管理员获取应用属性名称。使用前请先 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">设置应用属性名称</a> 。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">ImGetAttrNameRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImGetAttrNameRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImGetAttrNameResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imGetAttrName</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取用户属性" tabindex="-1"><a class="header-anchor" href="#获取用户属性"><span>获取用户属性</span></a></h2><p>获取用户属性（必须以管理员账号调用）；每次最多只能获取 100 个用户的属性。使用前请先 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">设置应用属性名称</a> 。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImGetAttrRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImGetAttrRequest</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImGetAttrResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imGetAttr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置用户属性" tabindex="-1"><a class="header-anchor" href="#设置用户属性"><span>设置用户属性</span></a></h2><p>管理员给用户设置属性。每次最多只能给 100 个用户设置属性。使用前请先 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">设置应用属性名称</a> 。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> attrs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">UserAttrItem</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserAttrItem</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserAttrItem</span><span class="token punctuation">&gt;</span></span> userAttrs <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImSetAttrRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImSetAttrRequest</span><span class="token punctuation">(</span>userAttrs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImSetAttrResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imSetAttr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除用户属性" tabindex="-1"><a class="header-anchor" href="#删除用户属性"><span>删除用户属性</span></a></h2><p>管理员给用户删除属性。注意每次最多只能给 100 个用户删除属性。使用前请先 <a href="#%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E5%B1%9E%E6%80%A7%E5%90%8D%E7%A7%B0">设置应用属性名称</a> 。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> attrs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">attrs<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">UserAttrItem</span> item <span class="token operator">=</span> <span class="token class-name">UserAttrItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserAttrItem</span><span class="token punctuation">&gt;</span></span> userAttrs <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImRemoveAttrRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImRemoveAttrRequest</span><span class="token punctuation">(</span>userAttrs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImRemoveAttrResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imRemoveAttr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取用户标签" tabindex="-1"><a class="header-anchor" href="#获取用户标签"><span>获取用户标签</span></a></h2><p>获取用户标签（必须以管理员账号调用）。每次最多只能获取 100 个用户的标签。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImGetTagRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImGetTagRequest</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImGetTagResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imGetTag</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加用户标签" tabindex="-1"><a class="header-anchor" href="#添加用户标签"><span>添加用户标签</span></a></h2><p>管理员给用户添加标签。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>每次请求最多只能给 100 个用户添加标签，请求体中单个用户添加标签数最多为 10 个。</li><li>单个用户可设置最大标签数为 100 个，若用户当前标签超过 100，则添加新标签之前请先删除旧标签。</li><li>单个标签最大长度为 50 字节。</li></ul></div><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tags <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">UserTagItem</span> item <span class="token operator">=</span> <span class="token class-name">UserTagItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">tags</span><span class="token punctuation">(</span>tags<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserTagItem</span><span class="token punctuation">&gt;</span></span> userTags <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImAddTagRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImAddTagRequest</span><span class="token punctuation">(</span>userTags<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImAddTagResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imAddTag</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除用户标签" tabindex="-1"><a class="header-anchor" href="#删除用户标签"><span>删除用户标签</span></a></h2><p>管理员给用户删除标签。注意每次最多只能给 100 个用户删除标签。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tags <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">UserTagItem</span> item <span class="token operator">=</span> <span class="token class-name">UserTagItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">tags</span><span class="token punctuation">(</span>tags<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserTagItem</span><span class="token punctuation">&gt;</span></span> userTags <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImRemoveTagRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImRemoveTagRequest</span><span class="token punctuation">(</span>userTags<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImRemoveTagResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imRemoveTag</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除所有用户标签" tabindex="-1"><a class="header-anchor" href="#删除所有用户标签"><span>删除所有用户标签</span></a></h2><p>管理员给用户删除所有标签。注意每次最多只能给 100 个用户删除所有标签。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ImRemoveAllTagsRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImRemoveAllTagsRequest</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ImRemoveAllTagsResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>member<span class="token punctuation">.</span><span class="token function">imRemoveAllTags</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),c=[e];function l(o,i){return a(),n("div",null,c)}const r=s(p,[["render",l],["__file","member.html.vue"]]),k=JSON.parse('{"path":"/guide/member.html","title":"全员推送","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"全员推送","slug":"全员推送-1","link":"#全员推送-1","children":[]},{"level":2,"title":"设置应用属性名称","slug":"设置应用属性名称","link":"#设置应用属性名称","children":[]},{"level":2,"title":"获取应用属性名称","slug":"获取应用属性名称","link":"#获取应用属性名称","children":[]},{"level":2,"title":"获取用户属性","slug":"获取用户属性","link":"#获取用户属性","children":[]},{"level":2,"title":"设置用户属性","slug":"设置用户属性","link":"#设置用户属性","children":[]},{"level":2,"title":"删除用户属性","slug":"删除用户属性","link":"#删除用户属性","children":[]},{"level":2,"title":"获取用户标签","slug":"获取用户标签","link":"#获取用户标签","children":[]},{"level":2,"title":"添加用户标签","slug":"添加用户标签","link":"#添加用户标签","children":[]},{"level":2,"title":"删除用户标签","slug":"删除用户标签","link":"#删除用户标签","children":[]},{"level":2,"title":"删除所有用户标签","slug":"删除所有用户标签","link":"#删除所有用户标签","children":[]}],"git":{"updatedTime":1696847753000,"contributors":[{"name":"Yang Libin","email":"szuyanglb@outlook.com","commits":4},{"name":"acbin","email":"44314231+acbin@users.noreply.github.com","commits":1},{"name":"yanglbme","email":"szuyanglb@outlook.com","commits":1},{"name":"怡蘅","email":"hongyihengg@gmail.com","commits":1}]},"filePathRelative":"guide/member.md"}');export{r as comp,k as data};
