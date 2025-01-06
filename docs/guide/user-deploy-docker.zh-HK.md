---
title: 用戶端-Docker
order: 5
group: 
  title: 前端部署
  order: 3
toc: content
---

### 使用 Docker 部署\*\*

#### 安裝 Docker

運行以下命令安裝 Docker：

```bash
curl -fsSL https://get.docker.com | bash
```

#### 使用 Docker 啟動服務

運行以下命令啟動容器：

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
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
      NEXT_PUBLIC_DEFAULT_LANGUAGE: en-US
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

啟動服務：

```bash
docker compose up -d
```

---

