---
title: Docker
order: 0
group:
  title: Quick Deployment
  order: 1
toc: content
---

# Quick Deployment Guide

> **Important Notes Before Deployment**
>
> - **The default port for the management interface is 8080**: Please configure your domain resolution in advance or ensure that you have a usable IP address to successfully complete the installation of the management and user interfaces.
> - Server: For more information, please refer to the [Server](/guide/server).
> - Management Interface: For more information, please refer to the [Management Interface](/guide/admin).
> - User Interface: For more information, please refer to the [User Interface](/guide/user).

## One-Click Deployment

You can deploy PPanel with a single command, which includes the server, management interface, and user interface:

### Option 1: Using `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Option 2: Using `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

