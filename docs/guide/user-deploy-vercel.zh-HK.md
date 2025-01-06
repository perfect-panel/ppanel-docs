---
title: 用戶端-Vercel
order: 7
group: 
  title: 前端部署
  order: 3
toc: content
---

### 使用 Vercel 部署\*\*

點擊以下按鈕快速部署：

[![在 Vercel 上部署](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20user%20Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**步驟：**

1. 登錄或註冊 [Vercel](https://vercel.com/)。
2. 點擊部署按鈕，fork 倉庫並選擇 `apps/user`。
3. 配置環境變量。
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

