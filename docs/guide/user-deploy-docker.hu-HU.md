---
title: Felhasználói felület - Docker
order: 5
group: 
  title: Frontend telepítés
  order: 3
toc: content
---

### Docker használata a telepítéshez

#### Docker telepítése

Futtassa az alábbi parancsot a Docker telepítéséhez:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Szolgáltatás indítása Docker segítségével

Futtassa az alábbi parancsot a konténer indításához:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=hu-HU \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Docker Compose használata a telepítéshez

Hozzon létre egy `docker-compose.yml` fájlt az alábbi tartalommal:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: hu-HU
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Szolgáltatás indítása:

```bash
docker compose up -d
```

---

