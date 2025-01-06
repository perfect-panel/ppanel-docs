---
title: User End - Node
order: 6
group: 
  title: Frontend Deployment
  order: 3
toc: content
---

### Deploying with PM2, Node.js, or Bun

#### Download the Code

Obtain the code from the official GitHub repository:

```bash
# Download the latest version of the code
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Extract the files
tar -xzvf ppanel-user-web.tar.gz

# Navigate to the code directory
cd ppanel-user-web
```

#### Configure Environment Variables

Create the `apps/user/.env` file and add the necessary environment variables (refer to the environment variable configuration mentioned above).

#### Configure PM2

Create the `ecosystem.config.js` file with the following content:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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

- **Starting with Node.js**:

  ```bash
  node apps/user/server.js
  ```

- **Starting with Bun**:

  ```bash
  bun apps/user/server.js
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
  pm2 stop ppanel-user-web
  ```

- Restart the service:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Delete the service:

  ```bash
  pm2 delete ppanel-user-web
  ```

