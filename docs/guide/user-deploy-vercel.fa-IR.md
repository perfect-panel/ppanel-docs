---
title: کاربر-پایانه-Vercel
order: 7
group: 
  title: استقرار فرانت‌اند
  order: 3
toc: content
---

### استفاده از Vercel برای استقرار\*\*

برای استقرار سریع، روی دکمه زیر کلیک کنید:

[![استقرار در Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20یک%20ابزار%20پانل%20پروکسی%20خالص%2C%20حرفه‌ای%20و%20کامل%20منبع%20باز%20است%20که%20برای%20انتخاب%20ایده‌آل%20شما%20برای%20یادگیری%20و%20استفاده%20عملی%20طراحی%20شده%20است\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20کاربر%20وب\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**مراحل:**

1. به [Vercel](https://vercel.com/) وارد شوید یا ثبت‌نام کنید.
2. روی دکمه استقرار کلیک کنید، مخزن را fork کنید و `apps/user` را انتخاب کنید.
3. متغیرهای محیطی را پیکربندی کنید.
4. روی **Deploy** کلیک کنید تا استقرار آغاز شود.

---

### **3.3 استفاده از PM2، Node.js یا Bun برای استقرار**

#### دانلود کد

کد را از مخزن رسمی GitHub دریافت کنید:

```bash
# دانلود آخرین نسخه کد
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# استخراج فایل
tar -xzvf ppanel-user-web.tar.gz

# وارد دایرکتوری کد شوید
cd ppanel-user-web
```

#### پیکربندی متغیرهای محیطی

فایل `apps/user/.env` را ایجاد کرده و متغیرهای محیطی لازم را اضافه کنید (به پیکربندی متغیرهای محیطی در بالا مراجعه کنید).

#### پیکربندی PM2

فایل `ecosystem.config.js` را ایجاد کرده و محتوای زیر را در آن قرار دهید:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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

