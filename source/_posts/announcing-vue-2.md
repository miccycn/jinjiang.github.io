---
title: 'Vue 2.0 发布啦！'
date: 2016/04/27 08:19:02
updated: 2017/08/01 03:02:51
---

原文：[https://medium.com/the-vue-point/announcing-vue-js-2-0-8af1bde7ab9#.cyoou0ivk](https://medium.com/the-vue-point/announcing-vue-js-2-0-8af1bde7ab9#.cyoou0ivk)

![](http://ww1.sinaimg.cn/mw1024/660d0cdfgw1f3bs1115fsj20ug0jiq6m.jpg)

今天我们非常激动的首发 Vue 2.0 preview 版本，这个版本带来了很多激动人心的改进和新特性。我们来看看这里面都有些什么！

<!--more-->

### 更轻，更快

Vue.js 始终聚焦在轻量和快速上面，而 2.0 把它做得更好。现在的渲染层基于一个轻量级的 virtual-DOM 实现，在大多数场景下初试化渲染速度和内存消耗都提升了 2~4 倍 (详见这里的 [benchmarks](https://github.com/vuejs/vue/tree/next/benchmarks))。从模板到 virtuel-DOM 的编译器和运行时是可以独立开来的，所以你可以将模板预编译并只通过 Vue 的运行时让你的应用工作起来，而这份运行时的代码 min+gzip 之后只有不到 12kb (提一下，React 15 在 min+gzip 之后的大小是 44kb)。编译器同样可以在浏览器中工作，也就是说你也可以写一段 script 标签然后开始你的工作，就像以前一样。而即便你把编译器加进去，build 出来的文件 min+gzip 之后也仅有 17kb，仍然小于目前的 1.0 版本。

### 不是普通的 Virtual-DOM

现在 virtual-DOM 有点让人听腻了，因为社区里有太多种实现，但是 Vue 2.0 的实现有与众不同的地方。和 Vue 的响应式系统结合在一起之后，它可以让你不必做任何事就获得完全优化的重渲染。由于每个组件都会在渲染时追踪其响应依赖，所以系统精确地知道应该何时重渲染、应该重渲染哪些组件。不需要 `shouldComponentUpdate`，也不需要 immutable 数据 - **it just works**.

除此之外，Vue 2.0 从模板到 virtuel-DOM 的编译阶段使用了一些高阶优化：

1. 它会检测出静态的 class 名和 attributes 这样它们在初始化渲染之后就永远都不会再被比对。

2. 它会检测出最大静态子树 (就是不需要动态性的子树) 并且从渲染函数中萃取出来。这样在每次重渲染的时候，它就会直接重用完全相同的 virtual nodes 同时跳过比对。

这些高阶优化通常只会在使用 JSX 时通过 Babel plugin 来做，但是 Vue 2.0 即使在使用浏览器内的编译器时也能做到。

新的渲染系统同时允许你通过简单的冻结数据来禁用响应式转换，配以手动的强制更新，这意味着你对于重渲染的流程实际上有着完全的控制权。

以上这些技术组合在一起，确保了 Vue 2.0 在每一个场景下都能够拥有高性能的表现，同时把开发者的负担和成本降到了最低。

### Templates, JSX, or Hyperscript?

开发者对于用模板还是 JSX 有很多的争执。一方面，模板更接近 HTML - 它能更好地反映你的 app 的语义结构，并且易于思考视觉上的设计、布局和样式。另一方面，模板作为一个 DSL 也有它的局限性 - 相比之下 JSX/hyperscript 的程序本质使得它们具有图灵完备的表达能力。

作为一个兼顾设计和开发的人，我喜欢用模板来写大部分的界面，但在某些情况下我也希望能拥有 JSX/hyperscript 的灵活性。举例来说，当你想在一个组件中程序化的处理其子元素时，基于模板的 slot 机制会显得比较有局限性。

那么，为什么不能同时拥有它们呢？在 Vue 2.0 中，你可以继续使用熟悉的模板语法，但当你觉得受限制的时候，你也可以直接写底层的 virtual-DOM 代码，只需用一个 `render` 函数替换掉 `template` 选项。你甚至可以直接在你的模板里使用一个特殊的 `<render>` 标签来嵌入渲染函数！一个框架，两全其美。

### 流式服务端渲染

既然迁移到了 virtual-DOM，Vue 2.0 自然支持服务端渲染和客户端的 hydration（直接使用服务端渲染的 DOM 元素）。当前服务端渲染的实现有一个痛点，比如在 React 里，渲染是同步的，所以如果这个 app 比较复杂的话它会阻塞服务器的 event loop。同步的服务端渲染在优化不当的情况下甚至会对客户端获得内容的速度带来负面影响。Vue 2.0 提供了内建的流式服务端渲染 - 在渲染组件时返回一个可读的 stream，然后直接 pipe 到 HTTP response。流式渲染能够确保服务端的响应度，也能让用户更快地获得渲染内容。

### 解锁更多可能性

基于新的架构，我们还有更多的可能性有待开发 - 比如在手机端渲染到 native 界面。目前我们正在探索一个 Vue.js 2.0 的端，它会用 [weex](http://alibaba.github.io/weex/)：一个由中国最大科技公司之一的阿里巴巴的工程师们维护的项目，作为一个 native 的渲染层。同时从技术角度 Vue 2.0 运行在 ReactNative 上也是可行的。让我们拭目以待！

### 兼容性以及接下来的计划

Vue.js 2.0 仍然处在 pre-alpha 阶段，但是你可以来[这里](https://github.com/vuejs/vue/tree/next/) 查看源代码。尽管 2.0 是一个完全重写的项目，但是除了一些有意废弃掉的功能，API 和 1.0 是大部分兼容的。看看 [2.0 中一模一样的官方例子](https://github.com/vuejs/vue/tree/next/examples) - 你会发现几乎没有什么变化！

对于部分功能的废弃，本质上是为了提供更简洁的 API 从而提高开发者的效率。你可以移步[这里](https://github.com/vuejs/vue/wiki/2.0-features) 查看 1.0 和 2.0 的特性比对。如果你在现有的项目中大量地使用着一些被废弃的特性，这意味着会有一定的迁移成本，不过我们在未来会提供更详实的升级指导。

现在我们还有很多工作没有完成。一旦我们达到了令人满意的测试覆盖率，我们将会推出 alpha 版本，同时我们希望能在五月底六月初推出 beta 版。除了更多的测试之外，我们也需要更新相关库（如 vue-router, Vuex, vue-loader, vueify...）的支持。目前只有 Vuex 在 2.0 下可以直接使用，但是我们会确保在 2.0 正式发布时所有东西都会顺畅地工作。

我们不会因此而忘记 1.x 哦！1.1 将会和 2.0 beta 独立发布，提供六个月 critical bug fixes 和九个月安全升级的长效服务 (LTS)。同时 1.1 还会包含可选的废弃特性警告，让你为升级到 2.0 做好充足的准备。尽请期待！