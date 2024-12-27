---
title: مدیریت پنل
order: 3
nav:
  title: راهنما
  order: 1
group:
  title: استقرار
  order: 1
toc: content
---

# **راهنمای استقرار مدیریت پنل PPanel**

این راهنما به تفصیل نحوه استقرار مدیریت پنل PPanel را شامل Docker، Vercel، PM2 و همچنین چندین روش استقرار مستقیم با استفاده از Node.js یا Bun توضیح می‌دهد.

---

## **1. آماده‌سازی محیط**

قبل از استقرار، لطفاً اطمینان حاصل کنید که ابزارهای زیر نصب شده‌اند:

- **Node.js** (توصیه می‌شود از طریق NVM نصب شود، نسخه >= 22)
- **Bun** (زمان‌سنج سریع JavaScript)
- **PM2** (ابزار مدیریت فرآیند برای مدیریت کارآمد خدمات)
- **Docker** (برای استقرار کانتینری)

---

## **2. پیکربندی متغیرهای محیطی**

قبل از استقرار، شما نیاز به پیکربندی متغیرهای محیطی زیر دارید:

```env
# پیکربندی برنامه
NEXT_PUBLIC_DEFAULT_LANGUAGE=fa-IR
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# کاربر پیش‌فرض
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. گزینه‌های استقرار**

### **3.1 استقرار با استفاده از Docker**

#### نصب Docker

برای نصب Docker، دستور زیر را اجرا کنید:

```bash
curl -fsSL https://get.docker.com | bash
```

#### راه‌اندازی خدمات با Docker

برای راه‌اندازی کانتینر، دستور زیر را اجرا کنید:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=fa-IR \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### استقرار با استفاده از Docker Compose

یک فایل `docker-compose.yml` ایجاد کنید که محتوای آن به صورت زیر باشد:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: fa-IR
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

خدمات را راه‌اندازی کنید:

```bash
docker compose up -d
```

---

### **3.2 استقرار با استفاده از Vercel**

برای استقرار سریع، روی دکمه زیر کلیک کنید:

[![استقرار در Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20یک%20ابزار%20پنل%20پروکسی%20خالص%2C%20حرفه‌ای%20و%20کامل%20منبع%20باز%20است%2C%20که%20برای%20انتخاب%20ایده‌آل%20شما%20برای%20آموزش%20و%20استفاده%20عملی%20طراحی%20شده%20است&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**مراحل:**

1. به [Vercel](https://vercel.com/) وارد شوید یا ثبت‌نام کنید.
2. روی دکمه استقرار کلیک کنید، مخزن را fork کنید و `apps/admin` را انتخاب کنید.
3. متغیرهای محیطی را پیکربندی کنید.
4. روی **Deploy** کلیک کنید تا استقرار آغاز شود.

---

### **3.3 استقرار با استفاده از PM2، Node.js یا Bun**

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

یک فایل `apps/admin/.env` ایجاد کنید و متغیرهای محیطی لازم را اضافه کنید (به پیکربندی متغیرهای محیطی بالا مراجعه کنید).

#### پیکربندی PM2

یک فایل `ecosystem.config.js` ایجاد کنید که محتوای آن به صورت زیر باشد:

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

#### راه‌اندازی خدمات با PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### راه‌اندازی خدمات با Node.js یا Bun

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

### **4.1 وضعیت خدمات PM2**

برای بررسی، دستور زیر را اجرا کنید:

```bash
pm2 list
```

### **4.2 دسترسی از طریق مرورگر**

به `http://<آدرس IP سرور شما>:3000` مراجعه کنید تا وضعیت اجرای خدمات را تأیید کنید.

---

## **5. مدیریت خدمات**

### **دستورات PM2**

- توقف خدمات:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- راه‌اندازی مجدد خدمات:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- حذف خدمات:
  ```bash
  pm2 delete ppanel-admin-web
  ```
