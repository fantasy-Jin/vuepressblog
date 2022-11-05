import{_ as a,o as e,c as t,a as n,b as s}from"./app.ca59e623.js";const p={},o=s(`<h2 id="node-js-简介" tabindex="-1"><a class="header-anchor" href="#node-js-简介" aria-hidden="true">#</a> <strong>Node.js</strong> 简介</h2><h3 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h3><ul><li>浏览器是 Javascript 的前端运行环境</li><li>Node. js 的 Javascript 的后端运行环境</li><li>Node.js中无法调用 DOM 和 BOM 等浏览器内置的API</li></ul><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>基于 Express 框架,可以快速构建 Web 应用 http://www.expressjs.com.cn/</li><li>基于 Electron 框架，可以构建跨平台的桌面应用 https://electronjs.org/</li><li>基于 restify 框架，可以快速构建 API 接口项目 http://restify.com/</li><li>读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…</li></ul><h2 id="fs-文件系统模块" tabindex="-1"><a class="header-anchor" href="#fs-文件系统模块" aria-hidden="true">#</a> <strong>fs</strong> 文件系统模块</h2><h3 id="读写文件" tabindex="-1"><a class="header-anchor" href="#读写文件" aria-hidden="true">#</a> 读写文件</h3><p>{% note success simple %}fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求 {% endnote %}</p><p>{% note info simple %} 如果要使用 fs 模块需要先导入 {% endnote %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>{% tabs 读写文件方法 %}</p>`,11),c=s(`<p>使用 <code>fs.readFile() </code>方法，可以读取指定文件中的内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>path</code> 必选参数，字符串格式，表示文件路径</li><li><code>options</code> 可选参数，表示指定编码格式来读取文件。</li><li><code>callback</code> 必选参数，读取文件后的回调函数，函数形参 <code>(err,dataStr)</code><ul><li><code>err</code> 读取失败的结果</li><li><code>dataStr</code> 读取成功的文件内容</li></ul></li></ul><p>{% folding 读取文件例子📄 %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readFlie</span><span class="token punctuation">(</span><span class="token string">&#39;./files/test.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ut8f&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>dataStr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 失败的结果</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token comment">// 读取成功的文件内容</span>
    <span class="token function">console。log</span><span class="token punctuation">(</span>dataStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endfolding %}</p>`,6),i=s(`<p>使用 <code>fs.writeFile()</code> 方法，可以向指定的文件中写入内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span>data<span class="token punctuation">[</span><span class="token punctuation">,</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>file</code> 必选参数，字符串格式，表示存放文件路径</li><li><code>data</code> 必选参数，表示写入的内容</li><li><code>options</code> 可选参数，表示指定编码格式来写入文件，默认 utf8 。</li><li><code>callback</code> 必选参数，写入文件后的回调函数，函数形参 <code>(err)</code><ul><li><code>err</code> 读取失败的结果</li></ul></li></ul><p>{% folding 写入文件的例子📄 %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./files/test2.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 可以通过判断 err 对象是否为null ，从而判断文件写入结果</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">// 失败的结果</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件写入失败&#39;</span><span class="token operator">+</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;写入成功&#39;</span><span class="token punctuation">)</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endfolding%}</p>`,6),l=s(`<p>{% endtabs %}</p><h3 id="路径动态拼接" tabindex="-1"><a class="header-anchor" href="#路径动态拼接" aria-hidden="true">#</a> 路径动态拼接</h3><p>{% note info simple %}在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，很容易出现路径动态拼接错误的问题。{% endnote %}</p><p><strong>解决方案</strong>：采用 <code>__dirname</code> 拼接</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// --dirname 表示当前文件夹所处路径</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;./files/test2.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 可以通过判断 err 对象是否为null ，从而判断文件写入结果</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">// 失败的结果</span>
        <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;文件写入失败&#39;</span><span class="token operator">+</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;写入成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="path-路径模块" tabindex="-1"><a class="header-anchor" href="#path-路径模块" aria-hidden="true">#</a> <strong>path</strong> 路径模块</h2><p>{%note success simple %}path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求{% endnote %}</p><p>{% note info simple %} 如果要使用 path 模块需要先导入 {% endnote %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="path-join-方法" tabindex="-1"><a class="header-anchor" href="#path-join-方法" aria-hidden="true">#</a> <code>path.join()</code> 方法</h3><p>{%note info simple%}作用：把多个路径片段拼接为完整的路径字符串{% endnote %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>...paths &lt;string&gt;</code> 路径片段的序列</li><li>返回值：<code>&lt;string&gt;</code></li></ul><p>{% folding 示例 %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pathStr<span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/b/c&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./d&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 输出 \\a\\b\\d\\e</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathStr<span class="token punctuation">)</span>

<span class="token keyword">const</span> pathStr2<span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./files/1.txt&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 输出 当前文件所处的文件目录\\files\\1.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{%note success simple%}凡是涉及到路径拼接的操作，推荐使用 path.join() 方法进行处理。不要直接使用 + 进行字符串的拼接{% endnote %}</p><p>{% endfolding %}</p><h3 id="path-basename-方法" tabindex="-1"><a class="header-anchor" href="#path-basename-方法" aria-hidden="true">#</a> <code>path.basename()</code> 方法</h3><p>{%note info simple%}作用：可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名{% endnote %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span>ext<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>path</code> 必选参数，表示一个路径的字符串</li><li><code>ext &lt;string&gt;</code> 可选参数，表示文件拓展名</li><li>返回值：<code>&lt;string&gt;</code> 表示路径最后一部分</li></ul><p>{% folding 示例获取路径中的文件名 %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fpath<span class="token operator">=</span><span class="token string">&#39;/a/b/c/index.html&#39;</span>
<span class="token keyword">const</span> fullName<span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span>
<span class="token comment">// 返回值就是文件名 输出index.html</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName2<span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>fpath<span class="token punctuation">,</span><span class="token string">&#39;.html&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 返回值就是文件名去掉 .html 输出index</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endfolding %}</p><h3 id="path-extname-方法" tabindex="-1"><a class="header-anchor" href="#path-extname-方法" aria-hidden="true">#</a> <code>path.extname()</code> 方法</h3><p>{%note info simple%}作用：可以获取路径中的扩展名部分{% endnote %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>path <code>&lt;string&gt;</code>必选参数，表示一个路径的字符串</li><li>返回： <code>&lt;string&gt;</code> 返回得到的扩展名字符串</li></ul><p>{% folding 示例获取路径中的文件的扩展名%}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fpath<span class="token operator">=</span>&#39;<span class="token operator">/</span>a<span class="token operator">/</span>b<span class="token operator">/</span>c<span class="token operator">/</span>index<span class="token punctuation">.</span>html
<span class="token keyword">const</span> fext <span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span>
<span class="token comment">// 输出后缀名 .html</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fext<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{% endfolding %}</p><h2 id="http-模块" tabindex="-1"><a class="header-anchor" href="#http-模块" aria-hidden="true">#</a> http 模块</h2><p>{%note success simple %}http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块{% endnote %}</p><p>{% note info simple %} 如果要使用 http 模块需要先导入 {% endnote %}</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建基本的服务器" tabindex="-1"><a class="header-anchor" href="#创建基本的服务器" aria-hidden="true">#</a> 创建基本的服务器</h3><p>{% tabs 创建服务器 %}</p>`,37),u=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入http模块</span>
<span class="token keyword">const</span> http<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//调用 http.createServer() 方法，创建一个 web 服务器实例</span>
<span class="token keyword">const</span> server<span class="token operator">=</span>http<span class="token punctuation">.</span><span class="token function">creatServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 用服务器实例的 .on 绑定为服务器 request 事件</span>
<span class="token comment">// 即可监听客户端发送过来的网络请求</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 只要有客户端请求我们的服务器，就触发 requset 事件</span>
    <span class="token comment">// 就会执行这个回调函数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// req 是请求对象，包含客户端的数据和属性</span>
    <span class="token comment">// 例如 req.url 是客户端的请求 url 地址</span>
    <span class="token comment">// req.mothod 是客户端的请求类型</span>
    
    <span class="token comment">// res 是响应对象 ，包含服务器的数据和属性</span>
    <span class="token comment">// res.send() 给客户端发送指定内容 结束请求</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span> 
    <span class="token comment">// 给客户端发送 hello.. 并且结束请求</span>
    
    <span class="token comment">//  res.end() 方法，向客户端发送中文时，</span>
    <span class="token comment">// 会出现乱码问题，设置内容的编码格式</span>
    <span class="token comment">// 设置响应头 Content——Type 的值为</span>
    <span class="token comment">//  text/html; charset=utf-8</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content——Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;text/html; charset=utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 调用服务器实例的 .listen(端口号，回调函数) 方法，启动当前的服务器实例</span>
sever<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sever running at http://127.0.0.1:80&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=s(`<p>{% note success simple %}根据不同的 url 响应不同的 html 内容{% endnote %}</p><p>实现步骤</p><ol><li>获取请求的 url 地址</li><li>设置默认的响应内容为 404 Not found</li><li>判断用户请求的是否为 / 或 /index.html 首页</li><li>判断用户请求的是否为 /about.html 关于页面</li><li>设置 Content-Type 响应头，防止中文乱码</li><li>使用 res.end() 把内容响应给客户端</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入http模块</span>
<span class="token keyword">const</span> http<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//调用 http.createServer() 方法，创建一个 web 服务器实例</span>
<span class="token keyword">const</span> server<span class="token operator">=</span>http<span class="token punctuation">.</span><span class="token function">creatServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 用服务器实例的 .on 绑定为服务器 request 事件</span>
<span class="token comment">// 即可监听客户端发送过来的网络请求</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 获取请求的 url 地址</span>
	<span class="token keyword">const</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url
    <span class="token comment">// 设置默认的响应内容为 404 Not found</span>
    <span class="token keyword">let</span> content<span class="token operator">=</span><span class="token string">&#39;404 not found!&#39;</span>
    <span class="token comment">// 判断</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">||</span> url <span class="token operator">===</span><span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 用户请求是首页</span>
        content <span class="token operator">=</span> <span class="token string">&#39;首页&#39;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">&#39;/about.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 用户请求是关于页</span>
        content <span class="token operator">=</span> <span class="token string">&#39;关于页面&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 设置响应头防止中文乱码</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content——Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;text/html; charset=utf-8&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 发送内容给客户端</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 调用服务器实例的 .listen(端口号，回调函数) 方法，启动当前的服务器实例</span>
sever<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sever running at http://127.0.0.1:80&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=s('<p>{% endtabs %}</p><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><ul><li>模块化是指解决一个复杂问题时，自顶向下逐层把系统划分为若干模块的过程，模块是可组合、分解和更换的单元。</li><li>模块化可提高代码的复用性和可维护性，实现按需加载。</li><li>模块化规范是对代码进行模块化拆分和组合时需要遵守的规则，如使用何种语法格式引用模块和向外暴露成员。</li></ul><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3><p>Node.js 中模块的分类</p><ul><li>内置模块</li><li>自定义模块</li><li>第三方模块</li></ul><h3 id="模块作用域" tabindex="-1"><a class="header-anchor" href="#模块作用域" aria-hidden="true">#</a> 模块作用域</h3><ul><li>和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域</li><li>防止全局变量污染</li></ul><h3 id="模块作用域的成员" tabindex="-1"><a class="header-anchor" href="#模块作用域的成员" aria-hidden="true">#</a> 模块作用域的成员</h3><ul><li>自定义模块中都有一个 <code>module</code> 对象，存储了和当前模块有关的信息</li><li>在自定义模块中，可以使用 <code>module.exports</code> 对象，将模块内的成员共享出去，供外界使用。导入自定义模块时，得到的就是 <code>module.exports</code> 指向的对象。</li><li>默认情况下，<code>exports</code> 和 <code>module.exports</code> 指向同一个对象。最终共享的结果，以 <code>module.exports</code> 指向的对象为准</li></ul><h3 id="commonjs-模块化规范" tabindex="-1"><a class="header-anchor" href="#commonjs-模块化规范" aria-hidden="true">#</a> CommonJS 模块化规范</h3><ul><li>每个模块内部，module 变量代表当前模块。</li><li>module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。</li><li>加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载模块。</li></ul><h3 id="模块加载机制" tabindex="-1"><a class="header-anchor" href="#模块加载机制" aria-hidden="true">#</a> 模块加载机制</h3><p>模块第一次加载后会被缓存，即多次调用 <code>require()</code> 不会导致模块的代码被执行多次，提高模块加载效率。</p><h4 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块" aria-hidden="true">#</a> <strong>内置模块</strong></h4><p>加载优先级最高</p><h4 id="自定义模块" tabindex="-1"><a class="header-anchor" href="#自定义模块" aria-hidden="true">#</a> <strong>自定义模块</strong></h4><p>加载自定义模块时，路径以 <code>./</code> 或 <code>../ </code> 开头，否则会作为内置模块或第三方模块加载。</p><p>导入自定义模块时，可以省略文件拓展名，Node.js 会按顺序加载文件</p><ol><li>按确切的文件名加载</li><li>补全 <code>.js</code> 加载</li><li>补全 <code>.json</code> 加载</li><li>补全 <code>.node</code> 加载</li><li>报错</li></ol><h4 id="第三方模块" tabindex="-1"><a class="header-anchor" href="#第三方模块" aria-hidden="true">#</a> <strong>第三方模块</strong></h4><ul><li>若导入第三方模块， Node.js 会从<strong>当前模块的父目录</strong>开始，尝试从 <code>/node_modules</code> 文件夹中加载第三方模块。</li><li>如果没有找到对应的第三方模块，则移动到再<strong>上一层父目录</strong>中，进行加载，直到<strong>文件系统的根目录</strong></li></ul><p>例如，假设在 <code>C:\\Users\\fantasy\\project\\foo.js</code> 文件里调用了 <code>require(&#39;tools&#39;)</code>，则 Node.js 会按以下顺序查找：</p><ul><li><code>C:\\Users\\fantasy\\project\\node_modules\\tools</code></li><li><code>C:\\Users\\fantasy\\node_modules\\tools</code></li><li><code>C:\\Users\\node_modules\\tools</code></li><li><code>C:\\node_modules\\tools</code></li></ul><p>​ <strong>目录作为模块加载</strong></p><p>​ 当把目录作为模块标识符进行加载的时候，有三种加载方式：</p><ul><li>在被加载的目录下查找 <code>package.json</code> 的文件，并寻找 <code>main</code> 属性，作为 <code>require()</code> 加载的入口</li><li>如果没有 <code>package.json</code> 文件，或者 <code>main</code> 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 <code>index.js</code> 文件。</li><li>若失败则报错</li></ul>',28);function k(v,m){return e(),t("div",null,[o,n(" tab 读取指定文件 "),c,n(" endtab "),n(" tab 向指定文件写入内容 "),i,n(" endtab "),l,n(" tab 基本服务器 "),u,n(" endtab "),n(" tab 简陋路由功能的服务器 "),d,n(" endtab "),r])}const b=a(p,[["render",k],["__file","node.html.vue"]]);export{b as default};
