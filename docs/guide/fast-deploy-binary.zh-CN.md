---
title: 二进制
order: 3
group: 快速部署
toc: content
---
# 快速部署指南

> **部署前注意事项**
>
> - **管理端默认端口为 8080**：请提前配置好域名解析或确保有可用的 IP 地址，以便顺利完成管理端和用户端的安装。
> - 服务端：更多信息请参考 [服务端](/guide/server)。
> - 管理端：更多信息请参考 [管理端](/guide/admin)。
> - 用户端：更多信息请参考 [用户端](/guide/user)。

## 一键部署

使用以下任意命令即可一键部署 PPanel，包括服务端、管理端和用户端：

### 选项 1：使用 `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### 选项 2：使用 `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```
