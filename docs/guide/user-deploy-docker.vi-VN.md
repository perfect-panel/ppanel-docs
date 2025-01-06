```markdown
---
title: Người dùng - Docker
order: 5
group: 
  title: Triển khai Frontend
  order: 3
toc: content
---

### Sử dụng Docker để triển khai **

#### Cài đặt Docker

Chạy lệnh sau để cài đặt Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Khởi động dịch vụ bằng Docker

Chạy lệnh sau để khởi động container:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=vi-VN \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Triển khai bằng Docker Compose

Tạo một tệp `docker-compose.yml` với nội dung như sau:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: vi-VN
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Khởi động dịch vụ:

```bash
docker compose up -d
```

---
```

