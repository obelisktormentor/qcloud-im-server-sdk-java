import{_ as s,c as n,o as a,e as t}from"./app-ZP_PHHWl.js";const e={},p=t(`<h1 id="公众号管理" tabindex="-1"><a class="header-anchor" href="#公众号管理"><span>公众号管理</span></a></h1><h2 id="创建公众号" tabindex="-1"><a class="header-anchor" href="#创建公众号"><span>创建公众号</span></a></h2><p>App 管理员可以通过该接口创建公众号。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">CreateOfficialAccountRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateOfficialAccountRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOwnerAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">CreateOfficialAccountResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">createOfficialAccount</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="销毁公众号" tabindex="-1"><a class="header-anchor" href="#销毁公众号"><span>销毁公众号</span></a></h2><p>App 管理员可以通过该接口销毁公众号。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">DestroyOfficialAccountRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DestroyOfficialAccountRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">DestroyOfficialAccountResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">destroyOfficialAccount</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改公众号资料" tabindex="-1"><a class="header-anchor" href="#修改公众号资料"><span>修改公众号资料</span></a></h2><p>App 管理员可以通过该接口修改公众号的相关信息，如公众号的名称、头像、简介等</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">ModifyOfficialAccountBaseInfoRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModifyOfficialAccountBaseInfoRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ModifyOfficialAccountBaseInfoResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">modifyOfficialAccountBaseInfo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取公众号详细资料" tabindex="-1"><a class="header-anchor" href="#获取公众号详细资料"><span>获取公众号详细资料</span></a></h2><p>App 管理员可以通过该接口获取公众号的相关资料信息。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">GetOfficialAccountInfoRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetOfficialAccountInfoRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccountIdList</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OfficialAccountItem</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">GetOfficialAccountInfoResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">getOfficialAccountInfo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取公众号的订阅成员资料" tabindex="-1"><a class="header-anchor" href="#获取公众号的订阅成员资料"><span>获取公众号的订阅成员资料</span></a></h2><p>App 管理员可以通过该接口获取订阅某个公众号的所有用户信息.</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">GetSubscriberInfoRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetSubscriberInfoRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setLimit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">GetSubscriberInfoResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">getSubscriberInfo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加订阅者" tabindex="-1"><a class="header-anchor" href="#添加订阅者"><span>添加订阅者</span></a></h2><p>App 管理员可以通过该接口使用户订阅某个公众号，成为公众号的订阅成员。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">AddSubscriberRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AddSubscriberRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setSubscriberList</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OfficialAccountItem</span><span class="token punctuation">(</span><span class="token string">&quot;test_subscriber_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">AddSubscriberResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">addSubscriber</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除订阅者" tabindex="-1"><a class="header-anchor" href="#删除订阅者"><span>删除订阅者</span></a></h2><p>App 管理员可以通过该接口使用户取消订阅某个公众号，从公众号的订阅成员中移除。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">DeleteSubscriberRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteSubscriberRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setSubscriberToDelAccount</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token string">&quot;test_subscriber_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">DeleteSubscriberResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">deleteSubscriber</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改订阅者资料" tabindex="-1"><a class="header-anchor" href="#修改订阅者资料"><span>修改订阅者资料</span></a></h2><p>App 管理员可以通过该接口修改订阅者的相关资料信息。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">ModifySubscriberInfoRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModifySubscriberInfoRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setSubscriberAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_subscriber_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setCustomString</span><span class="token punctuation">(</span><span class="token string">&quot;test_custom_string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">ModifySubscriberInfoResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">modifySubscriberInfo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取订阅的公众号列表" tabindex="-1"><a class="header-anchor" href="#获取订阅的公众号列表"><span>获取订阅的公众号列表</span></a></h2><p>App 管理员可以通过该接口获取用户订阅的所有公众号列表信息。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">GetSubscribedOfficialAccountListRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetSubscribedOfficialAccountListRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setSubscriberAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_subscriber_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">GetSubscribedOfficialAccountListResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">getSubscribedOfficialAccountList</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公众号用户发送广播消息" tabindex="-1"><a class="header-anchor" href="#公众号用户发送广播消息"><span>公众号用户发送广播消息</span></a></h2><ul><li>App 管理员可以通过该接口向关注公众号的所有订阅者发送普通消息。</li><li>单个公众号的发送频率上限为1条/秒，每小时最多可发布2条广播消息。</li><li>如果5分钟内两条消息的内容相同，后面的消息将被当做重复消息而丢弃。</li></ul><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">TIMTextMsgElement</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TIMTextMsgElement</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TIMMsgElement</span><span class="token punctuation">&gt;</span></span> msgBody <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">SendOfficialAccountMsgRequest</span> request <span class="token operator">=</span> <span class="token class-name">SendOfficialAccountMsgRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">msgBody</span><span class="token punctuation">(</span>msgBody<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">SendOfficialAccountMsgResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">sendOfficialAccountMsg</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拉取公众号用户历史消息" tabindex="-1"><a class="header-anchor" href="#拉取公众号用户历史消息"><span>拉取公众号用户历史消息</span></a></h2><ul><li>即时通信 IM 的公众号消息是按 Seq 排序的，按照 server 收到公众号消息的顺序分配 Seq，先发的公众号消息 Seq 小，后发的 Seq 大。</li><li>即时通信 IM 会给每条公众号消息生成一个 MsgKey，格式为 &quot;Seq_1_ServerTime&quot;。</li><li>如果用户想拉取一个公众号的全量消息，需要填写消息的 LastMsgKey，首次拉取时不用填拉取 LastMsgKey，Server 会自动返回最新的消息，以后拉取时拉取 LastMsgKey 填上次请求返回 LastMsgKey。</li><li>如果返回消息的 IsPlaceMsg 为1，表示这个 Seq 的消息或者过期、或者存储失败、或者被删除了。</li></ul><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">OfficialAccountMsgGetSimpleRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OfficialAccountMsgGetSimpleRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setLastMsgKey</span><span class="token punctuation">(</span><span class="token string">&quot;msg_key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setReqMsgNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setWithRecalledMsg</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">OfficialAccountMsgGetSimpleResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">msgGetSimple</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤回公众号消息" tabindex="-1"><a class="header-anchor" href="#撤回公众号消息"><span>撤回公众号消息</span></a></h2><ul><li>管理员撤回公众号消息。</li><li>该接口可以撤回所有漫游有效期内的公众号消息，包括客户端发出的公众号消息，由 REST API 接口发出的公众号消息。</li><li>若需要撤回由客户端发出的公众号消息，您可以开通 发公众号消息之后回调 ，通过该回调接口记录每条公众号消息的 MsgKey，然后填在本接口的 MsgKeyList 参数里进行撤回。您也可以通过 拉取公众号用户历史消息 查询出待撤回的公众号消息的相关信息后，使用本接口进行撤回。</li><li>若需要撤回由 REST API 公众号用户发送广播消息 接口发出的公众号消息，需要记录这些接口回包里的 MsgKey 字段以进行撤回。</li><li>调用该接口撤回消息后，该条消息的接收方的客户端的本地缓存都会被撤回。</li><li>该接口可撤回的公众号消息没有时间限制，即可以撤回任何时间的公众号消息，但是公众号消息的漫游时间需要在有效期内。</li></ul><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">OfficialAccountMsgRecallRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OfficialAccountMsgRecallRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setOfficialAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test_official_account_user_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setMsgKeyList</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token string">&quot;msg_key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">OfficialAccountMsgRecallResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>officialAccount<span class="token punctuation">.</span><span class="token function">msgRecall</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),c=[p];function l(i,o){return a(),n("div",null,c)}const r=s(e,[["render",l],["__file","official_account.html.vue"]]),k=JSON.parse('{"path":"/guide/official_account.html","title":"公众号管理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"创建公众号","slug":"创建公众号","link":"#创建公众号","children":[]},{"level":2,"title":"销毁公众号","slug":"销毁公众号","link":"#销毁公众号","children":[]},{"level":2,"title":"修改公众号资料","slug":"修改公众号资料","link":"#修改公众号资料","children":[]},{"level":2,"title":"获取公众号详细资料","slug":"获取公众号详细资料","link":"#获取公众号详细资料","children":[]},{"level":2,"title":"获取公众号的订阅成员资料","slug":"获取公众号的订阅成员资料","link":"#获取公众号的订阅成员资料","children":[]},{"level":2,"title":"添加订阅者","slug":"添加订阅者","link":"#添加订阅者","children":[]},{"level":2,"title":"删除订阅者","slug":"删除订阅者","link":"#删除订阅者","children":[]},{"level":2,"title":"修改订阅者资料","slug":"修改订阅者资料","link":"#修改订阅者资料","children":[]},{"level":2,"title":"获取订阅的公众号列表","slug":"获取订阅的公众号列表","link":"#获取订阅的公众号列表","children":[]},{"level":2,"title":"公众号用户发送广播消息","slug":"公众号用户发送广播消息","link":"#公众号用户发送广播消息","children":[]},{"level":2,"title":"拉取公众号用户历史消息","slug":"拉取公众号用户历史消息","link":"#拉取公众号用户历史消息","children":[]},{"level":2,"title":"撤回公众号消息","slug":"撤回公众号消息","link":"#撤回公众号消息","children":[]}],"git":{"updatedTime":1704879157000,"contributors":[{"name":"Libin YANG","email":"szuyanglb@outlook.com","commits":1}]},"filePathRelative":"guide/official_account.md"}');export{r as comp,k as data};
