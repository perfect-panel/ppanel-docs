```markdown
---
title: Quản lý - Docker
order: 2
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

#### Sử dụng Docker để khởi động dịch vụ

Chạy lệnh sau để khởi động container:

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

#### Sử dụng Docker Compose để triển khai

Tạo một tệp `docker-compose.yml` với nội dung như sau:

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

Khởi động dịch vụ:

```bash
docker compose up -d
```

---
```

