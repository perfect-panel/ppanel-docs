---
title: Configuration
group:
  title: AdminDeploy
  order: 1
toc: content
---
# **PPanel Management Panel Deployment Guide**

This guide provides detailed instructions on how to deploy the PPanel management panel, including various deployment methods using Docker, Vercel, PM2, and directly using Node.js or Bun.

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

## **3. Deployment Options**

### **3.1 Deploying with Docker**

#### Install Docker

Run the following command to install Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Start Service with Docker

Run the following command to start the container:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Deploying with Docker Compose

Create a `docker-compose.yml` file with the following content:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: en-US
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Start the service:

```bash
docker compose up -d
```

---

### **3.2 Deploying with Vercel**

Click the button below for a quick deployment:

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Steps:**

1. Log in or sign up for [Vercel](https://vercel.com/).
2. Click the deploy button, fork the repository, and select `apps/admin`.
3. Configure the environment variables.
4. Click **Deploy** to start the deployment.

---

### **3.3 Deploying with PM2, Node.js, or Bun**

#### Download the Code

Get the code from the official GitHub repository:

```bash
# Download the latest version of the code
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Extract the files
tar -xzvf ppanel-admin-web.tar.gz

# Navigate to the code directory
cd ppanel-admin-web
```

#### Configure Environment Variables

Create a `apps/admin/.env` file and add the necessary environment variables (refer to the environment variable configuration above).

#### Configure PM2

Create an `ecosystem.config.js` file with the following content:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // can be changed to node
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

#### Start the Service with PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Start the Service with Node.js or Bun

- **Start with Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Start with Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verify Deployment**

### **4.1 PM2 Service Status**

Run the following command to check:

```bash
pm2 list
```

### **4.2 Browser Access**

Visit `http://<Your Server IP>:3000` to verify the service is running.

---

## **5. Service Management**

### **PM2 Commands**

- Stop the service:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Restart the service:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Delete the service:
  ```bash
  pm2 delete ppanel-admin-web
  ```
