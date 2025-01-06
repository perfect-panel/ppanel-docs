---
title: Docker
order: 0
group:
  title: 快速部署
  order: 1
toc: content
---

# 快速部署指南

> **部署前注意事項**
>
> - **管理端默認端口為 8080**：請提前配置好域名解析或確保有可用的 IP 地址，以便順利完成管理端和用戶端的安裝。
> - 服務端：更多信息請參考 [服務端](/guide/server)。
> - 管理端：更多信息請參考 [管理端](/guide/admin)。
> - 用戶端：更多信息請參考 [用戶端](/guide/user)。

## 一鍵部署

使用以下任意命令即可一鍵部署 PPanel，包括服務端、管理端和用戶端：

### 選項 1：使用 `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### 選項 2：使用 `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

