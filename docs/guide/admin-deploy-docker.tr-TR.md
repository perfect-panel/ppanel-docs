---
title: Yönetim Paneli - Docker
order: 2
group: 
  title: Ön Uç Dağıtımı
  order: 3
toc: content
---

### Docker Kullanarak Dağıtım

#### Docker'ı Kurma

Docker'ı kurmak için aşağıdaki komutu çalıştırın:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker ile Servisi Başlatma

Konteyneri başlatmak için aşağıdaki komutu çalıştırın:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=tr-TR \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Docker Compose ile Dağıtım

Bir `docker-compose.yml` dosyası oluşturun, içeriği aşağıdaki gibi olsun:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: tr-TR
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Servisi başlatın:

```bash
docker compose up -d
```

---

