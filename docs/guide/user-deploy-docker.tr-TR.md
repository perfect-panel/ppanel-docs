---
title: Kullanıcı Tarafı - Docker
order: 5
group: 
  title: Ön Uç Dağıtımı
  order: 3
toc: content
---

### Docker ile Dağıtım

#### Docker'ı Kurma

Docker'ı kurmak için aşağıdaki komutu çalıştırın:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker ile Servisi Başlatma

Konteyneri başlatmak için aşağıdaki komutu çalıştırın:

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

#### Docker Compose ile Dağıtım

Bir `docker-compose.yml` dosyası oluşturun, içeriği aşağıdaki gibi olsun:

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

Servisi başlatın:

```bash
docker compose up -d
```

---

