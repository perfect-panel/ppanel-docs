---
title: 用户端-Node
order: 6
group: 
  title: 前端部署
  order: 3
toc: content
---
### 使用 PM2、Node.js 或 Bun 部署

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
