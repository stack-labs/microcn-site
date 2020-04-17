(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{3266:function(e,t,l){e.exports={content:["article",{},["h2","设计资源"],["p","我们提供完善的设计指引、最佳实践、设计资源和设计工具，来帮助设计者快速产出高质量产品原型。"],["ul",["li",["p",["a",{title:null,href:"/docs/spec/values"},"设计价值观"]]],["li",["p",["a",{title:null,href:"/docs/spec/overview"},"设计模式"]]],["li",["p",["a",{title:null,href:"/docs/spec/visual"},"可视化"]]],["li",["p",["a",{title:null,href:"/docs/spec/illustration"},"插画"]]],["li",["p",["a",{title:null,href:"/docs/resources"},"设计资源"]]],["li",["p",["a",{title:null,href:"http://kitchen.alipay.com/"},"Sketch 工具集"]]],["li",["p",["a",{title:null,href:"/docs/spec/article"},"文章"]]]],["h2","前端实现"],["p","我们采用 ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," 封装了一套 Ant Design 的组件库，也欢迎社区其他框架的实现版本。"],function(){var e=l(0),t=(l(13),l(36)),n=function(){return e.createElement(t.ExportOutlined,{className:"outside-link-icon"})},i=function(){return e.createElement("ul",null,e.createElement("li",null,e.createElement("a",{href:"/docs/react/introduce",target:"_blank"},"Ant Design of React"),"（官方实现）"),e.createElement("li",null,e.createElement("a",{href:"http://ng.ant.design",target:"_blank"},"NG-ZORRO - Ant Design of Angular",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"http://ng.mobile.ant.design",target:"_blank"},"NG-ZORRO-MOBILE - Ant Design Mobile of Angular",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"http://vue.ant.design",target:"_blank"},"Ant Design of Vue",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"https://ecomfe.github.io/santd",target:"_blank"},"San UI Toolkit for Ant Design",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"https://github.com/FE-Driver/vue-beauty",target:"_blank"},"vue-beauty (vue)",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"https://github.com/priornix/antizer",target:"_blank"},"antizer (ClojureScript)",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"https://github.com/idcos/antd-ember",target:"_blank"},"antd-ember",e.createElement(n,null))),e.createElement("li",null,e.createElement("a",{href:"https://github.com/zzuu666/antue",target:"_blank"},"antue (vue)",e.createElement(n,null))))};return e.createElement(i,null)},["h2","谁在使用"],["ul",["li",["p",["a",{title:null,href:"http://www.antgroup.com/"},"蚂蚁金服"]]],["li",["p",["a",{title:null,href:"http://www.alibaba.com/"},"阿里巴巴"]]],["li",["p",["a",{title:null,href:"http://www.tencent.com"},"腾讯"]]],["li",["p",["a",{title:null,href:"http://www.baidu.com"},"百度"]]],["li",["p",["a",{title:null,href:"http://www.koubei.com/"},"口碑"]]],["li",["p",["a",{title:null,href:"http://www.meituan.com"},"美团"]]],["li",["p",["a",{title:null,href:"http://www.xiaojukeji.com/"},"滴滴"]]],["li",["p",["a",{title:null,href:"https://www.ele.me/"},"饿了么"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/477"},"其他用户"]]]],["blockquote",["p","如果你的公司和产品使用了 Ant Design，欢迎到 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/477"},"这里"]," 留言。"]],["h2","社区评价"],["ul",["li",["p","知乎：",["a",{title:null,href:"https://www.zhihu.com/question/33629737"},"如何评价 Ant Design 这个项目？"]]],["li",["p","Hacknews: ",["a",{title:null,href:"https://news.ycombinator.com/item?id=13053137"},"Show HN: Antd – A set of high-quality React components"]]],["li",["p","Alligator: ",["a",{title:null,href:"https://alligator.io/react/beautiful-uis-ant-design/"},"Crafting Beautiful UIs in React Using Ant Design"]]],["li",["p","Hackernoon: ",["a",{title:null,href:"https://hackernoon.com/interesting-javascript-libraries-born-in-china-d50d1bb81355"},"Interesting JavaScript Libraries born in China"]]],["li",["p",["a",{title:null,href:"http://dwbbb.com/blog/MaterialDesignAntDesign/"},"漫谈 Material Design & Ant Design"]]]],["h2","如何贡献"],["p","我们欢迎任何形式的贡献，有任何建议或意见，请给我们 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues"},"提问"],"。"]],meta:{category:"Ant Design",order:0,title:"介绍",filename:"docs/spec/introduce.zh-CN.md"},description:["section",["div",{style:"text-align: center; margin: 40px 0px;"},["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ"}]],["p","蚂蚁的企业级产品是一个庞大且复杂的系统，数量多且功能复杂，而且变动和并发频繁，常常需要设计者与开发者能快速做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。"],["p","随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 —— Ant Design。基于「自然」、「确定性」、「意义感」、「生长性」四大",["a",{title:null,href:"/docs/spec/values"},"设计价值观"],"，通过模块化解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#设计资源",title:"设计资源"},"设计资源"]],["li",["a",{className:"bisheng-toc-h2",href:"#前端实现",title:"前端实现"},"前端实现"]],["li",["a",{className:"bisheng-toc-h2",href:"#谁在使用",title:"谁在使用"},"谁在使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#社区评价",title:"社区评价"},"社区评价"]],["li",["a",{className:"bisheng-toc-h2",href:"#如何贡献",title:"如何贡献"},"如何贡献"]]]}}}]);