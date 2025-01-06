---
title: Brukergrensesnitt - Docker
order: 5
group: 
  title: Frontend distribusjon
  order: 3
toc: content
---

### Bruke Docker for distribusjon

#### Installere Docker

Kjør følgende kommando for å installere Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Starte tjenesten med Docker

Kjør følgende kommando for å starte containeren:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=no-NO \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Distribuere med Docker Compose

Opprett en `docker-compose.yml` fil med følgende innhold:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: no-NO
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Start tjenesten:

```bash
docker compose up -d
```

---

