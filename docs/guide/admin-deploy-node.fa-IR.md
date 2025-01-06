```markdown
---
title: مدیریت-Node
order: 3
group: 
  title: استقرار فرانت‌اند
  order: 3
toc: content
---

### استفاده از PM2، Node.js یا Bun برای استقرار

#### دانلود کد

کد را از مخزن رسمی GitHub دریافت کنید:

```bash
# دانلود آخرین نسخه کد
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# استخراج فایل
tar -xzvf ppanel-admin-web.tar.gz

# وارد دایرکتوری کد شوید
cd ppanel-admin-web
```

#### پیکربندی متغیرهای محیطی

فایل `apps/admin/.env` را ایجاد کرده و متغیرهای محیطی لازم را اضافه کنید (به پیکربندی متغیرهای محیطی در متن بالا مراجعه کنید).

#### پیکربندی PM2

فایل `ecosystem.config.js` را ایجاد کنید و محتوای زیر را در آن قرار دهید:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // می‌توانید به node تغییر دهید
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

#### استفاده از PM2 برای راه‌اندازی سرویس

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### استفاده از Node.js یا Bun برای راه‌اندازی سرویس

- **راه‌اندازی با Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **راه‌اندازی با Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. تأیید استقرار**

### **4.1 وضعیت سرویس PM2**

برای بررسی وضعیت، دستور زیر را اجرا کنید:

```bash
pm2 list
```

### **4.2 دسترسی از طریق مرورگر**

به آدرس `http://<آی‌پی سرور شما>:3000` مراجعه کنید تا وضعیت اجرای سرویس را تأیید کنید.

---

## **5. مدیریت سرویس**

### **دستورات PM2**

- توقف سرویس:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- راه‌اندازی مجدد سرویس:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- حذف سرویس:
  ```bash
  pm2 delete ppanel-admin-web
  ```
```

