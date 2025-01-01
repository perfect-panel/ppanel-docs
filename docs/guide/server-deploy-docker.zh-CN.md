---
title: Docker
order: 6
group: 服务端部署
toc: content
---


## 安装 Docker

运行以下命令快速安装 Docker：

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## 快速开始

### 通过 Web 界面初始化

PPanel 支持基于 Web 的初始化，简化了手动配置过程。

### 初始化步骤

1. **创建必须的配置文件**：首先手动创建并配置 `/app/etc/ppanel.yaml` 文件，以便进行后续配置。

2. **运行 Docker 容器**：

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

3. **访问初始化页面**：在浏览器中访问 `http://服务器IP:8080/init`。

4. **完成配置**：按照指引设置管理员账户、配置 MySQL 数据库和 Redis 服务器。

5. **点击初始化按钮**：完成配置后，点击“初始化”按钮，应用将自动保存配置并重启。

   > **注意**：PPanel 默认使用端口 **8080**，请确保此端口可访问，必要时调整防火墙设置。

## 使用 Docker 部署

PPanel 默认使用端口 **8080**，请确保此端口可访问，必要时调整防火墙设置。

如果不使用 Web 初始化，可以使用默认的管理员账户登录：

- **用户名**：`admin@ppanel.dev`
- **密码**：`password`

> **注意**：首次登录后请及时更改默认密码以确保安全。

### 创建必须的配置文件

在开始 Docker 部署之前，首先手动创建并配置 `/app/etc/ppanel.yaml`，以确保系统正常运行。详细的配置项示例，请参阅文档的 [配置项示例](#配置项示例) 部分。

### 运行 Docker 容器

运行以下命令启动容器：

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

PPanel 默认使用端口 **8080**，请确保此端口可访问，必要时调整防火墙设置。

### 创建必须的配置文件

在开始 Docker Compose 部署之前，首先手动创建并配置 `/app/etc/ppanel.yaml`，以确保系统正常运行。详细的配置项示例，请参阅文档的 [配置项示例](#配置项示例) 部分。

### 创建 Docker Compose 配置文件

创建 `docker-compose.yml` 文件：

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

### 启动服务

运行以下命令启动服务：

```sh
docker compose up -d
```

## 重要提示

- **安全性**：请务必更改默认密码和密钥，以确保应用安全。
- **端口配置**：确保必要的端口已开放，避免网络访问问题。
- **数据持久化**：建议在运行容器时挂载数据卷以实现数据持久化。

## 配置项示例

下面是 `ppanel.yaml` 的配置项示例：

```yaml
Host: 0.0.0.0 # 监听 IP
Port: 8080 # 运行端口
Debug: true # 是否开启调试模式
JwtAuth:
  AccessSecret: your-secret-key # Token 密钥（请修改）
  AccessExpire: 604800 # Token 有效期（秒）
Logger:
  FilePath: ./ppanel.log # 日志文件路径
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # 日志级别：info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # 数据库地址
  Dbname: vpnboard # 数据库名称
  Username: root # 数据库用户名
  Password: your-password # 数据库密码（请修改）
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis 密码（如果有）
  DB: 0

Administer:
  Password: password # 管理员密码（应更改）
  Email: admin@ppanel.dev # 管理员邮箱地址
```

> **注意**：修改配置文件后，请重启 Docker 容器以应用更改。

## 获取支持

如遇到问题，请参考官方文档或联系支持团队获取帮助。
