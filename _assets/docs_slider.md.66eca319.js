import{f as t,g as a,B as n}from"./common-94d3934c.js";const s='{"title":"Slider 滑动条","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"传入当前值","slug":"传入当前值"},{"level":2,"title":"设置步长","slug":"设置步长"},{"level":2,"title":"设置取值范围","slug":"设置取值范围"},{"level":2,"title":"自定义样式","slug":"自定义样式"},{"level":2,"title":"禁用状态","slug":"禁用状态"},{"level":2,"title":"AtSlider 参数","slug":"atslider-参数"},{"level":2,"title":"AtSlider 事件","slug":"atslider-事件"}],"relativePath":"docs/slider.md","lastUpdated":1604061630023.4514}';var e={};const p=n('<h1 id="slider-滑动条"><a class="header-anchor" href="#slider-滑动条" aria-hidden="true">#</a> Slider 滑动条</h1><hr><p>允许用户在一个区间中选择特定值</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtSlider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/slider.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSlider</span> <span class="token punctuation">/&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="传入当前值"><a class="header-anchor" href="#传入当前值" aria-hidden="true">#</a> 传入当前值</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSlider</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="设置步长"><a class="header-anchor" href="#设置步长" aria-hidden="true">#</a> 设置步长</h2><p>取值必须大于 0，并且可被(max - min)整除</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSlider</span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="设置取值范围"><a class="header-anchor" href="#设置取值范围" aria-hidden="true">#</a> 设置取值范围</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSlider</span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="自定义样式"><a class="header-anchor" href="#自定义样式" aria-hidden="true">#</a> 自定义样式</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  &lt;AtSlider :step=&quot;1&quot; :value=&quot;50&quot; :blockSize=&quot;24 activeColor=&#39;#4285F4&#39; backgroundColor=&#39;#BDBDBD&#39; blockColor=&#39;#4285F4&#39;/&gt;\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="禁用状态"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n  &lt;AtSlider :step=&quot;1&quot; :value=&quot;50&quot; :blockSize=&quot;24 showValue disabled/&gt;\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="atslider-参数"><a class="header-anchor" href="#atslider-参数" aria-hidden="true">#</a> AtSlider 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>min</td><td>最小值</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>max</td><td>最大值</td><td>Number</td><td>-</td><td>100</td></tr><tr><td>step</td><td>步长，取值必须大于0，并且可被 <code>max - min</code> 整除</td><td>Number</td><td>-</td><td>1</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>value</td><td>当前取值</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>activeColor</td><td>已选择的颜色</td><td>Color</td><td>-</td><td>#6190e8</td></tr><tr><td>backgroundColor</td><td>背景条的颜色</td><td>Color</td><td>-</td><td>#e9e9e9</td></tr><tr><td>blockSize</td><td>滑块的大小，取值范围为 12-28</td><td>Number</td><td>-</td><td>28</td></tr><tr><td>blockColor</td><td>滑块的颜色</td><td>Color</td><td>-</td><td>#ffffff</td></tr><tr><td>showValue</td><td>是否显示当前的 Value</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="atslider-事件"><a class="header-anchor" href="#atslider-事件" aria-hidden="true">#</a> AtSlider 事件</h2><table><thead><tr><th style="text-align:left;">事件名称</th><th style="text-align:left;">说明</th><th style="text-align:left;">返回参数</th></tr></thead><tbody><tr><td style="text-align:left;">onChange</td><td style="text-align:left;">完成一次拖动后触发的事件，event.detail = {&#39;{ value: value }&#39;}</td><td style="text-align:left;">value</td></tr><tr><td style="text-align:left;">onChanging</td><td style="text-align:left;">拖动过程中触发的事件，event.detail = {&#39;{ value: value }&#39;}</td><td style="text-align:left;">value</td></tr></tbody></table>',25);e.render=function(n,s,e,l,o,c){return t(),a("div",null,[p])};export default e;export{s as __pageData};
