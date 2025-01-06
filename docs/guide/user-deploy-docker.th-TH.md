```markdown
---
title: ผู้ใช้-Docker
order: 5
group: 
  title: การติดตั้งด้านหน้า
  order: 3
toc: content
---

### การติดตั้งด้วย Docker\*\*

#### ติดตั้ง Docker

รันคำสั่งต่อไปนี้เพื่อติดตั้ง Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### เริ่มบริการด้วย Docker

รันคำสั่งต่อไปนี้เพื่อเริ่มคอนเทนเนอร์:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=th-TH \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### ติดตั้งด้วย Docker Compose

สร้างไฟล์ `docker-compose.yml` โดยมีเนื้อหาดังนี้:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: th-TH
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

เริ่มบริการ:

```bash
docker compose up -d
```

---
```

