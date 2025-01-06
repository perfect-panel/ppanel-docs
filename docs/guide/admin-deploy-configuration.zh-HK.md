---
title: 管理端-配置說明
order: 0
group: 
  title: 前端部署
  order: 3
toc: content
---

# **PPanel 管理端部署指南**

本指南詳細介紹如何部署 PPanel 管理端，包括 Docker、Vercel、PM2，以及直接使用 Node.js 或 Bun 的多種部署方式。

---

## **1. 環境準備**

在部署前，請確保以下工具已安裝：

- **Node.js**（建議通過 NVM 安裝，版本 >= 22）
- **Bun**（快速 JavaScript 運行時）
- **PM2**（進程管理工具，用於高效管理服務）
- **Docker**（用於容器化部署）

---

## **2. 環境變量配置**

在部署前，您需要配置以下環境變量：

```env
# 應用配置
NEXT_PUBLIC_DEFAULT_LANGUAGE=zh-HK
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 默認用戶
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

