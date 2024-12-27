---
title: 用户端
order: 4
nav:
  title: 指南
  order: 1
group:
  title: 部署
  order: 1
toc: content
---

# **PPanel 用户端部署指南**

本指南详细介绍如何部署 PPanel 用户端，包括 Docker、Vercel、PM2，以及直接使用 Node.js 或 Bun 的多种部署方式。

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
NEXT_PUBLIC_DEFAULT_LANGUAGE=zh-CN
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 联系信息
NEXT_PUBLIC_EMAIL=support@example.com

# 社区和社交媒体链接
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# 默认用户
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. 部署选项**

### **3.1 使用 Docker 部署**

#### 安装 Docker

运行以下命令安装 Docker：

```bash
curl -fsSL https://get.docker.com | bash
```

#### 使用 Docker 启动服务

运行以下命令启动容器：

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=zh-CN \
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

创建一个 `docker-compose.yml` 文件，内容如下：

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: zh-CN
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

启动服务：

```bash
docker compose up -d
```

---

### **3.2 使用 Vercel 部署**

点击以下按钮快速部署：
[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**步骤：**

1. 登录或注册 [Vercel](https://vercel.com/)。
2. 点击部署按钮，fork 仓库并选择 `apps/user`。
3. 配置环境变量
4. 点击 **Deploy** 开始部署。

---

### **3.3 使用 PM2、Node.js 或 Bun 部署**

#### 下载代码

从官方 GitHub 仓库获取代码：

```bash
# 下载最新版本代码
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# 解压文件
tar -xzvf ppanel-user-web.tar.gz

# 进入代码目录
cd ppanel-user-web
```

#### 配置环境变量

创建 `apps/user/.env` 文件并添加必要的环境变量（参考上文环境变量配置）。

#### 配置 PM2

创建 `ecosystem.config.js` 文件，内容如下：

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // 可改为 node
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

#### 使用 PM2 启动服务

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 使用 Node.js 或 Bun 启动服务

- **Node.js 启动**：
  ```bash
  node apps/user/server.js
  ```
- **Bun 启动**：
  ```bash
  bun apps/user/server.js
  ```

---

## **4. 验证部署**

### **4.1 PM2 服务状态**

运行以下命令检查：

```bash
pm2 list
```

### **4.2 浏览器访问**

访问 `http://<您的服务器 IP>:3000` 验证服务运行情况。

---

## **5. 服务管理**

### **PM2 命令**

- 停止服务：
  ```bash
  pm2 stop ppanel-user-web
  ```
- 重启服务：
  ```bash
  pm2 restart ppanel-user-web
  ```
- 删除服务：
  ```bash
  pm2 delete ppanel-user-web
  ```
