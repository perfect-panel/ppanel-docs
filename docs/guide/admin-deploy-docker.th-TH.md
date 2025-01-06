---
title: การจัดการ-Docker
order: 2
group: 
  title: การปรับใช้ด้านหน้า
  order: 3
toc: content
---

### การปรับใช้ด้วย Docker\*\*

#### การติดตั้ง Docker

รันคำสั่งต่อไปนี้เพื่อติดตั้ง Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### การเริ่มบริการด้วย Docker

รันคำสั่งต่อไปนี้เพื่อเริ่มคอนเทนเนอร์:

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

#### การปรับใช้ด้วย Docker Compose

สร้างไฟล์ `docker-compose.yml` โดยมีเนื้อหาดังนี้:

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

เริ่มบริการ:

```bash
docker compose up -d
```

---

