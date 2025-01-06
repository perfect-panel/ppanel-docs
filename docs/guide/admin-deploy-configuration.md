---
title: Management Console - Configuration Guide
order: 0
group: 
  title: Frontend Deployment
  order: 3
toc: content
---

# **PPanel Management Console Deployment Guide**

This guide provides detailed instructions on how to deploy the PPanel Management Console, including various deployment methods using Docker, Vercel, PM2, and directly with Node.js or Bun.

---

## **1. Environment Preparation**

Before deployment, please ensure the following tools are installed:

- **Node.js** (recommended to install via NVM, version >= 22)
- **Bun** (a fast JavaScript runtime)
- **PM2** (a process management tool for efficient service management)
- **Docker** (for containerized deployment)

---

## **2. Environment Variable Configuration**

Before deployment, you need to configure the following environment variables:

```env
# Application Configuration
NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Default User
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

