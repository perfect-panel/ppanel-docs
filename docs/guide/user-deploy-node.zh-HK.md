---
title: 用戶端-Node
order: 6
group: 
  title: 前端部署
  order: 3
toc: content
---

### 使用 PM2、Node.js 或 Bun 部署

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

