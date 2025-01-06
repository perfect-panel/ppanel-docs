```markdown
---
title: مدیریت - Vercel
order: 1
group: 
  title: استقرار فرانت‌اند
  order: 3
toc: content
---

### استفاده از Vercel برای استقرار **

برای استقرار سریع، روی دکمه زیر کلیک کنید:

[![استقرار در Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**مراحل:**

1. به [Vercel](https://vercel.com/) وارد شوید یا ثبت‌نام کنید.
2. روی دکمه استقرار کلیک کنید، مخزن را fork کنید و `apps/admin` را انتخاب کنید.
3. متغیرهای محیطی را پیکربندی کنید.
4. روی **Deploy** کلیک کنید تا استقرار آغاز شود.

---

### **3.3 استفاده از PM2، Node.js یا Bun برای استقرار**

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

فایل `apps/admin/.env` را ایجاد کرده و متغیرهای محیطی لازم را اضافه کنید (به پیکربندی متغیرهای محیطی در بالا مراجعه کنید).

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
```

