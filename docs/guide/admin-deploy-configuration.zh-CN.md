---
title: 管理端-配置说明
order: 0
group: 
  title: 前端部署
  order: 3
toc: content
---
# **PPanel 管理端部署指南**

本指南详细介绍如何部署 PPanel 管理端，包括 Docker、Vercel、PM2，以及直接使用 Node.js 或 Bun 的多种部署方式。

---

## **1. 环境准备**

在部署前，请确保以下工具已安装：

- **Node.js**（推荐通过 NVM 安装，版本 >= 22）
- **Bun**（快速 JavaScript 运行时）
- **PM2**（进程管理工具，用于高效管理服务）
- **Docker**（用于容器化部署）

---

## **2. 环境变量配置**

在部署前，您需要配置以下环境变量：

```env
# 应用配置
NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 默认用户
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

