---
order: 1
title: Stack 1.0.0 发布
---

**Stack**基于**Go-Micro 1.18**版本修改。除原本**Go-Micro**已有功能外本次发布的主要特性有：

- 增强配置组件
  - 重构 Config 模块，并升级为服务组件，服务启动生命周期第一顺位加载
  - 定义规范服务配置层级
  - 框架原生支持配置落地缓存，配置中心时读出本地配置
  - 支持 Apollo 配置中心（插件）
- 增加日志持久化
  - 增加日志持久化配置属性
  - 增强 Logrus 插件
  - 支持按时间、大小压缩日志（Rolling）
  - 支持自定义输出目录
  - 支持按级别输出到不同文件
- 重命名 Micro
  - 修改原 Micro 命名空间为 Stack
  - 修改原 Micro 配置为 Stack 等

仓库目录：*https://github.com/stack-labs/stack*

插件仓库：*https://github.com/stack-labs/stack/tree/master/plugin*

## 创建 Stack 初衷

由于**M3O**商业化调整，**Go-Micro**作为微服务开发框架的使命已经走到尽头。**MicroHQ**作为**M3O**在中国的布道社区，过去一年因主站商业、未来规划定界的不确定性，走得比较被动。**Go-Micro**在中国有不少的用户，为了继续能为大多数用户提供服务与交流的平台。中国站收集多位开发者意见后，决定由我们社区发起，群策群力维护我们的版本。

在规划中，我们将社区由**Micro-in-CN**更名为**Stack-Labs**，长期的目标是提供开源的社区服务，目前以微服务的技术分享、交流为主。

同时，在大家讨论，交流意见后，决定基于 Go-Micro 1.18 版本修改，开发我们社区自己主导的，用户导向的微服务开发框架，并重命名为**Stack**，经过大约两个月的迁移调整，基本能力覆盖测试后，我们很高兴为大家推第一个版本。

社区以开发者为主导，不受制于任何商业群体约束，一切特性以实际需求出发，广泛收集广大开发者的意见与需求，持续迭代，积极探索、维护大家认可的微服务开发框架。

## 为什么不基于 2.x 修改？

2.x 在 M3O 公司的迭代计划中并不考虑向下兼容，相近版本中差异大，所以它的破坏性更新比较多，所有改动都是为了 3.0 的出生，也即是说是跨版本间是不稳定的。同时，3.0 是 PAAS 化的重要一步，从开发框架角度上来说，3.0 已不再是微服务开发框架，而是一个服务操作系统的雏形，它并不适合中小团队的私有部署，并且，M3O 的出发点是让用户在她的平台上部署应用，像小程序一样，同一套语言或框架编写，运行的事由微信承担，M3O Platform 就是这个小程序平台。

## 下个版本主要工作

1.0 版本我们的目标是增强基本组件的能力，并完善缺失已久的文档。

- 收集大家的意见，持续开发需要的功能
- 完善 Config 模块，完成自动化配置加载与渲染框架参数，并支持业务自定义配置注入
- 完善日志模块，支持 Zap 等常见日志框架
- 持续开发覆盖整个框架功能的单元测试
- 完善官方站点与文档手册

## Stack 未来方向

社区的愿景是，在 Golang 体系中，提供一个平台，汇集广大开发者的力量，为 Golang 的开源生态输出大家的贡献。社区以开发者为主导，不受制于任何商业群体约束，一切特性以实际需求出发，广泛收集广大开发者的意见与需求，持续迭代，积极探索、维护大家认可的微服务开发框架。
