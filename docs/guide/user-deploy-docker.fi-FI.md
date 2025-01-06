---
title: Käyttäjäpuoli - Docker
order: 5
group: 
  title: Etupään käyttöönotto
  order: 3
toc: content
---

### Dockerin käyttö käyttöönotossa

#### Dockerin asentaminen

Suorita seuraava komento asentaaksesi Dockerin:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Palvelun käynnistäminen Dockerilla

Suorita seuraava komento käynnistääksesi säilön:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Docker Compose -käyttöönotto

Luo `docker-compose.yml` -tiedosto, jonka sisältö on seuraava:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: fi-FI
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Käynnistä palvelu:

```bash
docker compose up -d
```

---

