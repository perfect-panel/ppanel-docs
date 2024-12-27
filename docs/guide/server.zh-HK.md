---
title: 伺服器端
order: 2
nav:
  title: 指南
  order: 1
group:
  title: 部署
  order: 1
toc: content
---

## 運行環境要求

| 组件         | 要求                                               |
| ------------ | -------------------------------------------------- |
| 伺服器配置   | 最低：1 核 CPU，2GB 內存；推薦：2 核 CPU，4GB 內存 |
| MySQL        | 5.7 及以上（推薦 MySQL 8）                         |
| Redis        | 6 及以上                                           |
| NGINX/Apache | 任何版本                                           |

## 安裝 Docker

運行以下命令快速安裝 Docker：

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## 快速開始

### 通過 Web 界面初始化

PPanel 支持基於 Web 的初始化，簡化了手動配置過程。

### 初始化步驟

1. **創建必須的配置文件**：首先手動創建並配置 `/app/etc/ppanel.yaml` 文件，以便進行後續配置。

2. **運行 Docker 容器**：

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **訪問初始化頁面**：在瀏覽器中訪問 `http://伺服器IP:8080/init`。

4. **完成配置**：按照指引設置管理員賬戶、配置 MySQL 數據庫和 Redis 伺服器。

5. **點擊初始化按鈕**：完成配置後，點擊“初始化”按鈕，應用將自動保存配置並重啟。

   > **注意**：PPanel 默認使用端口 **8080**，請確保此端口可訪問，必要時調整防火牆設置。

## 使用 Docker 部署

PPanel 默認使用端口 **8080**，請確保此端口可訪問，必要時調整防火牆設置。

如果不使用 Web 初始化，可以使用默認的管理員賬戶登錄：

- **用戶名**：`admin@ppanel.dev`
- **密碼**：`password`

> **注意**：首次登錄後請及時更改默認密碼以確保安全。

### 創建必須的配置文件

在開始 Docker 部署之前，首先手動創建並配置 `/app/etc/ppanel.yaml`，以確保系統正常運行。詳細的配置項示例，請參閱文檔的 [配置項示例](#配置項示例) 部分。

### 運行 Docker 容器

運行以下命令啟動容器：

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## 使用 Docker Compose 部署

PPanel 默認使用端口 **8080**，請確保此端口可訪問，必要時調整防火牆設置。

### 創建必須的配置文件

在開始 Docker Compose 部署之前，首先手動創建並配置 `/app/etc/ppanel.yaml`，以確保系統正常運行。詳細的配置項示例，請參閱文檔的 [配置項示例](#配置項示例) 部分。

### 創建 Docker Compose 配置文件

創建 `docker-compose.yml` 文件：

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### 啟動服務

運行以下命令啟動服務：

```sh
docker compose up -d
```

## 重要提示

- **安全性**：請務必更改默認密碼和密鑰，以確保應用安全。
- **端口配置**：確保必要的端口已開放，避免網絡訪問問題。
- **數據持久化**：建議在運行容器時掛載數據卷以實現數據持久化。

## 配置項示例

下面是 `ppanel.yaml` 的配置項示例：

```yaml
Host: 0.0.0.0 # 監聽 IP
Port: 8080 # 運行端口
Debug: true # 是否開啟調試模式
JwtAuth:
  AccessSecret: your-secret-key # Token 密鑰（請修改）
  AccessExpire: 604800 # Token 有效期（秒）
Logger:
  FilePath: ./ppanel.log # 日誌文件路徑
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # 日誌級別：info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # 數據庫地址
  Dbname: vpnboard # 數據庫名稱
  Username: root # 數據庫用戶名
  Password: your-password # 數據庫密碼（請修改）
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FHong_Kong
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis 密碼（如果有）
  DB: 0

Administer:
  Password: password # 管理員密碼（應更改）
  Email: admin@ppanel.dev # 管理員郵箱地址
```

> **注意**：修改配置文件後，請重啟 Docker 容器以應用更改。

## 獲取支持

如遇到問題，請參考官方文檔或聯繫支持團隊獲取幫助。
