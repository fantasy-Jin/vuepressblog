import{_ as s,o as a,c as t,b as p,d as n}from"./app.ca59e623.js";const e={},o=p(`<h2 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由" aria-hidden="true">#</a> 前端路由</h2><p>{%note info simple%}</p><p>前端路由，指的是 Hash 地址与组件之间的对应关系</p><p>{%endnote%}</p><p><img src="https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/image-20220822222710055.png" alt=""></p><p>工作方式：</p><ol><li>用户点击了页面的路由链接</li><li>导致了 URL 地址栏的 Hash 值方式变化</li><li>前端路由监听到 Hash 地址的变化</li><li>前端路由把当前 Hash 值地址对应的组件渲染到浏览器页面</li></ol><h3 id="简单路由的实现" tabindex="-1"><a class="header-anchor" href="#简单路由的实现" aria-hidden="true">#</a> 简单路由的实现</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- a 链接添加对应的 hash 值 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/movie<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Movie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 动态渲染结点 --&gt;</span>
<span class="token comment">&lt;!-- 通过 is 属性 指定要展示的组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comnponent</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comnponent</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      <span class="token literal-property property">comName</span><span class="token operator">:</span><span class="token string">&#39;Home&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 在 created 生命周期函数中，监听浏览器地址栏中hash 地址的变化</span>
	<span class="token comment">//动态切换要展示的组件的名称</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">switch</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span><span class="token operator">:</span> <span class="token string">&#39;#/home&#39;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>comName <span class="token operator">=</span> <span class="token string">&#39;Home&#39;</span>
          <span class="token keyword">break</span>
 				<span class="token keyword">case</span><span class="token operator">:</span> <span class="token string">&#39;#/movie&#39;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>comName <span class="token operator">=</span> <span class="token string">&#39;Movie&#39;</span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span><span class="token operator">:</span> <span class="token string">&#39;#/about&#39;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>comName <span class="token operator">=</span> <span class="token string">&#39;About&#39;</span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h2><p>{%note success simple%}</p><p>vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目中组件的切换 vue-router 的官方文档地址：https://router.vuejs.org/zh/</p><p>{%endnote%}</p><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p>1.安装：在 vue2 的项目中，安装 vue-router@3.5.2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vue-router@3.5.2 <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.在项目 <code>src </code>目录下 新建 <code>router/index.js</code> 路由模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入 vue 和 vue-router</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">// 调用 Vue.app() 安装 VueRouter</span>
Vue<span class="token punctuation">.</span><span class="token function">app</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token comment">// 创建路由实例对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 导出共享</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.导入挂载，在 <code>src/main.js</code> 入口文件导入挂载路由模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">// 1.导入</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/index.js&#39;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 2.挂载</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.声明路由链接和占位符 在 <code>App.vue</code> 里使用 vue-router 提供的 <code>&lt;router-link&gt;</code> 和 <code>router-view</code> 声明路由链接和占位符</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> App组件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token comment">&lt;!-- 定义路由链接 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/movie<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>电影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>关于<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token comment">&lt;!-- 定义路由占位符  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.声明路由规则，在路由模块 <code>src/router/index.js</code>，通过 routers 数组声明匹配规则</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入 需要使用路由切换的组件</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;@/component/Home.vue&#39;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;@/component/About.vue&#39;</span>
<span class="token keyword">import</span> Movie <span class="token keyword">from</span> <span class="token string">&#39;@/component/Movie.vue&#39;</span>

<span class="token comment">// 创建路由实例对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 路由匹配规则</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// pash 表示匹配的 hash 地址</span>
  <span class="token comment">// component 表示要展示的组件</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由重定向" tabindex="-1"><a class="header-anchor" href="#路由重定向" aria-hidden="true">#</a> 路由重定向</h3><p>{%note success simple%}</p><p>路由重定向指定的是，用户在访问 A 地址，强制用户跳转到 B 地址</p><p>{%endnote%}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 路由匹配规则</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 通过 redirect 属性，设置重定向</span>
  <span class="token comment">// 当用户访问 / 时 跳转到 /home 对应的路由规则</span>
  <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">redirect</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Movie <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3><p>通过路由实现组件的嵌套展示，叫做嵌套路由。</p><p>{%folding 图例%}</p><img src="https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/image-20220823111819842.png" style="zoom:200%;"><p>{% endfolding %}</p><p>在 About.vue 组件中，声明 tab1 和 tab2 的子路由链接以及子路由占位符</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 要把父路由写上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about/tab1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>tab1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about/tab2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>tab2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 src/router/index.js 路由模块中，导入需要的组件，并使用 children 属性声明子路由规则</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 注意不要写成 /tab1</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab1 <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;tab2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Tab2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态路由匹配" tabindex="-1"><a class="header-anchor" href="#动态路由匹配" aria-hidden="true">#</a> 动态路由匹配</h3><p>动态路由指的是：把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。 在 vue-router 中使用英文的冒号（:）来定义路由的参数项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 动态参数以 : 进行声明。冒号后面的是动态参数名称</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Moive <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// 动态路由将下面的规则合成一个提高复用性</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Moive <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Moive <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Moive <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>动态路由渲染出来的组件中，可以使用 <code>this.$route.params</code> 对象访问到动态匹配的参数值。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- this.$route 是参数对象 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Movie 组件：接收的参数是{{ this.$route.params }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了简化路由参数的获取形式，vue-router 允许在路由规则中开启props 传参</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义路由规则时 声明 props:true 选项</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/movie/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Moive <span class="token punctuation">,</span><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 使用 props 中接收的参数 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Movie 组件：接收的参数是{{ id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token comment">// 接收路由规则中匹配的参数项 id</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h2><p>声明式导航：</p><ul><li>通过点击链接实现导航</li><li>如普通网页点击 <code>a</code> 链接，<code>vue</code> 点击 <code>&lt;router-link&gt;</code></li></ul><p>编程式导航：</p><ul><li>通过调用 API 实现导航</li><li>普通网页通过 <code>location.href</code> 的方式跳转页面也是编程式导航</li></ul><p><code>vue-router</code> 中实现编程式导航的 API ：</p><ul><li><code>this.$router.push(&#39;hash地址&#39;)</code> ：跳转到指定页面，并增加一条历史记录</li><li><code>this.$router.replace(&#39;hash地址&#39;)</code> ：跳转页面，但不会新增历史记录，而是替换当前的历史记录</li><li><code>this.$router.go(数值)</code> ：历史记录前进或后退，相当于点击浏览器前进后退箭头</li><li><code>this.$router.forward()</code> ：前进一步</li><li><code>this.$router.back()</code> ：后退一步</li></ul><h2 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a> 导航守卫</h2><p><img src="https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/image-20220823115536117.png" alt="导航守卫可以控制路由的访问权限"></p><h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h3><p>每次发生路由的导航跳转时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js路由模块文件</span>

<span class="token comment">// 全局前置守卫</span>
router<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">{</span>to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next<span class="token punctuation">}</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// to 将要访问的路由</span>
  <span class="token comment">// from 将要离开的路由</span>
  <span class="token comment">// next 是一个函数表示放行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>next 函数的 3 种调用方式</p><p><img src="https://picgo-fantasy06.oss-cn-guangzhou.aliyuncs.com/img/image-20220823121657066.png" alt=""></p><p>当前用户拥有后台主页的访问权限，直接放行：next() 当前用户没有后台主页的访问权限，强制其跳转到登录页面：next(&#39;/login&#39;) 当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)</p>`,62),c=n("p",null,[n("a",{href:"javascript:;",onclick:"randomPost()",title:"随机访问一篇文章"},"随机")],-1),l=[o,c];function i(u,r){return a(),t("div",null,l)}const d=s(e,[["render",i],["__file","vue-router.html.vue"]]);export{d as default};
