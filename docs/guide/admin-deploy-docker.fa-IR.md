---
title: مدیریت-داکر
order: 2
group: 
  title: استقرار فرانت‌اند
  order: 3
toc: content
---

### استفاده از داکر برای استقرار

#### نصب داکر

برای نصب داکر، دستور زیر را اجرا کنید:

```bash
curl -fsSL https://get.docker.com | bash
```

#### استفاده از داکر برای راه‌اندازی سرویس

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

#### استفاده از داکر کامپوز برای استقرار

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

برای راه‌اندازی سرویس، دستور زیر را اجرا کنید:

```bash
docker compose up -d
```

---

