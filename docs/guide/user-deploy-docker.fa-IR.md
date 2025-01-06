```markdown
---
title: کاربر-پایانه-Docker
order: 5
group: 
  title: استقرار فرانت‌اند
  order: 3
toc: content
---

### استفاده از Docker برای استقرار\*\*

#### نصب Docker

برای نصب Docker، دستور زیر را اجرا کنید:

```bash
curl -fsSL https://get.docker.com | bash
```

#### استفاده از Docker برای راه‌اندازی سرویس

برای راه‌اندازی کانتینر، دستور زیر را اجرا کنید:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### استفاده از Docker Compose برای استقرار

یک فایل `docker-compose.yml` ایجاد کنید و محتوای زیر را در آن قرار دهید:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: en-US
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

برای راه‌اندازی سرویس، دستور زیر را اجرا کنید:

```bash
docker compose up -d
```

---
```

