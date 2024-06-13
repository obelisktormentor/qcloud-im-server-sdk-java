import{_ as n,c as s,o as a,e as t}from"./app-ZP_PHHWl.js";const p={},e=t(`<h1 id="最近联系人" tabindex="-1"><a class="header-anchor" href="#最近联系人"><span>最近联系人</span></a></h1><h2 id="拉取会话列表" tabindex="-1"><a class="header-anchor" href="#拉取会话列表"><span>拉取会话列表</span></a></h2><p>支持分页拉取会话列表。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">GetRecentContactListRequest</span> request <span class="token operator">=</span> <span class="token class-name">GetRecentContactListRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;doocs&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">startIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">topTimestamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">topStartIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">assistFlags</span><span class="token punctuation">(</span><span class="token class-name">AssistFlags</span><span class="token punctuation">.</span><span class="token constant">BIT_0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">GetRecentContactListResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">recentContactList</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除单个会话" tabindex="-1"><a class="header-anchor" href="#删除单个会话"><span>删除单个会话</span></a></h2><p>删除指定会话，支持同步清理漫游消息。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">DeleteRecentContactRequest</span> request <span class="token operator">=</span> <span class="token class-name">DeleteRecentContactRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token class-name">RecentContactType</span><span class="token punctuation">.</span><span class="token constant">C2C</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">clearRamble</span><span class="token punctuation">(</span><span class="token class-name">ClearRamble</span><span class="token punctuation">.</span><span class="token constant">YES</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">DeleteRecentContactResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">deleteRecentContact</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建会话分组数据" tabindex="-1"><a class="header-anchor" href="#创建会话分组数据"><span>创建会话分组数据</span></a></h2><p>会话分组标记数据独立于最近联系人，RestAPI 支持会话分组、会话标准标记、会话自定义标记等字段增删改查。会话分组标记最多支持 1000 个会话，而一个用户最多支持 20 个会话分组。本接口支持会话分组数据的创建，仅旗舰版支持会话分组数据操作。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GroupContactItem</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">GroupContactItem</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GroupContactItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">item<span class="token punctuation">.</span><span class="token function">setGroupName</span><span class="token punctuation">(</span><span class="token string">&quot;groupName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ContactItem</span><span class="token punctuation">&gt;</span></span> contactItems <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ContactItem</span> contactItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContactItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItem<span class="token punctuation">.</span><span class="token function">setToAccount</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItem<span class="token punctuation">.</span><span class="token function">setToGroupId</span><span class="token punctuation">(</span><span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItem<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItems<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>contactItem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">item<span class="token punctuation">.</span><span class="token function">setContactItem</span><span class="token punctuation">(</span>contactItems<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">CreateContactGroupRequest</span> request <span class="token operator">=</span> <span class="token class-name">CreateContactGroupRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">groupContactItem</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">CreateContactGroupResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">createContactGroup</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新会话分组数据" tabindex="-1"><a class="header-anchor" href="#更新会话分组数据"><span>更新会话分组数据</span></a></h2><p>会话分组标记数据独立于最近联系人，RestAPI 支持会话分组、会话标准标记、会话自定义标记等字段增删改查。会话分组标记数据最多支持 1000 个会话。本接口支持会话分组数据的更新，仅旗舰版支持会话分组数据操作。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">UpdateGroup</span> updateGroup <span class="token operator">=</span> <span class="token class-name">UpdateGroup</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">updateGroupType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">newGroupName</span><span class="token punctuation">(</span><span class="token string">&quot;hh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">oldGroupName</span><span class="token punctuation">(</span><span class="token string">&quot;cc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">UpdateContactGroupRequest</span> request <span class="token operator">=</span> <span class="token class-name">UpdateContactGroupRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">updateType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">updateGroup</span><span class="token punctuation">(</span>updateGroup<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">UpdateContactGroupResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">updateContactGroup</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除会话分组数据" tabindex="-1"><a class="header-anchor" href="#删除会话分组数据"><span>删除会话分组数据</span></a></h2><p>本接口支持删除用户的会话分组数据，仅旗舰版支持会话分组数据操作。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> groupName <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">groupName<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">DelContactGroupRequest</span> request <span class="token operator">=</span> <span class="token class-name">DelContactGroupRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">groupName</span><span class="token punctuation">(</span>groupName<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">DelContactGroupResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">delContactGroup</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建或更新会话标记数据" tabindex="-1"><a class="header-anchor" href="#创建或更新会话标记数据"><span>创建或更新会话标记数据</span></a></h2><p>会话分组标记数据独立于最近联系人，RestAPI 支持会话分组、会话标准标记、会话自定义标记等字段增删改查。会话分组标记最多支持 1000 个会话。本接口支持会话标准标记以及会话自定义标记的创建或更新，仅旗舰版支持会话标准标记数据操作，自定义会话标记数据无限制。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MarkContactItem</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">MarkContactItem</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MarkContactItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">item<span class="token punctuation">.</span><span class="token function">setClearMark</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">item<span class="token punctuation">.</span><span class="token function">setSetMark</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">item<span class="token punctuation">.</span><span class="token function">setOptType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">MarkContactRequest</span> request <span class="token operator">=</span> <span class="token class-name">MarkContactRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">markItem</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">MarkContactResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">markContact</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索会话分组标记" tabindex="-1"><a class="header-anchor" href="#搜索会话分组标记"><span>搜索会话分组标记</span></a></h2><p>本接口根据指定的会话来查询对应会话分组标记数据。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">SearchContactGroupRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchContactGroupRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setFromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">ContactItem</span> contactItem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContactItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItem<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItem<span class="token punctuation">.</span><span class="token function">setToAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contactItem<span class="token punctuation">.</span><span class="token function">setToGroupId</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setContactItem</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>contactItem<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">SearchContactGroupResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">searchContactGroup</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拉取会话分组标记数据" tabindex="-1"><a class="header-anchor" href="#拉取会话分组标记数据"><span>拉取会话分组标记数据</span></a></h2><p>本接口支持批量获取用户的会话分组标记数据。</p><p>使用示例：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">GetContactGroupRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetContactGroupRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setFromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">request<span class="token punctuation">.</span><span class="token function">setStartIndex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">GetContactGroupResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>recentContact<span class="token punctuation">.</span><span class="token function">getContactGroup</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),c=[e];function o(l,u){return a(),s("div",null,c)}const k=n(p,[["render",o],["__file","recent_contact.html.vue"]]),r=JSON.parse('{"path":"/guide/recent_contact.html","title":"最近联系人","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"拉取会话列表","slug":"拉取会话列表","link":"#拉取会话列表","children":[]},{"level":2,"title":"删除单个会话","slug":"删除单个会话","link":"#删除单个会话","children":[]},{"level":2,"title":"创建会话分组数据","slug":"创建会话分组数据","link":"#创建会话分组数据","children":[]},{"level":2,"title":"更新会话分组数据","slug":"更新会话分组数据","link":"#更新会话分组数据","children":[]},{"level":2,"title":"删除会话分组数据","slug":"删除会话分组数据","link":"#删除会话分组数据","children":[]},{"level":2,"title":"创建或更新会话标记数据","slug":"创建或更新会话标记数据","link":"#创建或更新会话标记数据","children":[]},{"level":2,"title":"搜索会话分组标记","slug":"搜索会话分组标记","link":"#搜索会话分组标记","children":[]},{"level":2,"title":"拉取会话分组标记数据","slug":"拉取会话分组标记数据","link":"#拉取会话分组标记数据","children":[]}],"git":{"updatedTime":1684979652000,"contributors":[{"name":"Yang Libin","email":"szuyanglb@outlook.com","commits":3}]},"filePathRelative":"guide/recent_contact.md"}');export{k as comp,r as data};