---
title: Management Console - Vercel
order: 1
group: 
  title: Frontend Deployment
  order: 3
toc: content
---

### Deploying with Vercel

Click the button below for a quick deployment:

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

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

Create the `apps/admin/.env` file and add the necessary environment variables (refer to the environment variable configuration above).

#### Configure PM2

Create the `ecosystem.config.js` file with the following content:

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

