---
title: 用戶端
order: 4
nav:
  title: 指南
  order: 1
group:
  title: 部署
  order: 1
toc: content
---

# **PPanel 用戶端部署指南**

本指南詳細介紹如何部署 PPanel 用戶端，包括 Docker、Vercel、PM2，以及直接使用 Node.js 或 Bun 的多種部署方式。

---

## **1. 環境準備**

在部署前，請確保以下工具已安裝：

- **Node.js**（推薦通過 NVM 安裝，版本 >= 22）
- **Bun**（快速 JavaScript 運行時）
- **PM2**（進程管理工具，用於高效管理服務）
- **Docker**（用於容器化部署）

---

## **2. 環境變量配置**

在部署前，您需要配置以下環境變量：

```env
# 應用配置
NEXT_PUBLIC_DEFAULT_LANGUAGE=zh-HK
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 聯絡信息
NEXT_PUBLIC_EMAIL=support@example.com

# 社區和社交媒體鏈接
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# 默認用戶
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. 部署選項**

### **3.1 使用 Docker 部署**

#### 安裝 Docker

運行以下命令安裝 Docker：

```bash
curl -fsSL https://get.docker.com | bash
```

#### 使用 Docker 啟動服務

運行以下命令啟動容器：

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=zh-HK \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### 使用 Docker Compose 部署

創建一個 `docker-compose.yml` 文件，內容如下：

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: zh-HK
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

啟動服務：

```bash
docker compose up -d
```

---

### **3.2 使用 Vercel 部署**

點擊以下按鈕快速部署：
[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**步驟：**

1. 登錄或註冊 [Vercel](https://vercel.com/)。
2. 點擊部署按鈕，fork 倉庫並選擇 `apps/user`。
3. 配置環境變量
4. 點擊 **Deploy** 開始部署。

---

### **3.3 使用 PM2、Node.js 或 Bun 部署**

#### 下載代碼

從官方 GitHub 倉庫獲取代碼：

```bash
# 下載最新版本代碼
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# 解壓文件
tar -xzvf ppanel-user-web.tar.gz

# 進入代碼目錄
cd ppanel-user-web
```

#### 配置環境變量

創建 `apps/user/.env` 文件並添加必要的環境變量（參考上文環境變量配置）。

#### 配置 PM2

創建 `ecosystem.config.js` 文件，內容如下：

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // 可改為 node
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
      },
    },
  ],
};
```

#### 使用 PM2 啟動服務

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 使用 Node.js 或 Bun 啟動服務

- **Node.js 啟動**：
  ```bash
  node apps/user/server.js
  ```
- **Bun 啟動**：
  ```bash
  bun apps/user/server.js
  ```

---

## **4. 驗證部署**

### **4.1 PM2 服務狀態**

運行以下命令檢查：

```bash
pm2 list
```

### **4.2 瀏覽器訪問**

訪問 `http://<您的伺服器 IP>:3000` 驗證服務運行情況。

---

## **5. 服務管理**

### **PM2 命令**

- 停止服務：
  ```bash
  pm2 stop ppanel-user-web
  ```
- 重啟服務：
  ```bash
  pm2 restart ppanel-user-web
  ```
- 刪除服務：
  ```bash
  pm2 delete ppanel-user-web
  ```
