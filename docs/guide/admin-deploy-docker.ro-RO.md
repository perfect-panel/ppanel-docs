---
title: Management - Docker
order: 2
group: 
  title: Implementare Frontend
  order: 3
toc: content
---

### Implementarea cu Docker

#### Instalarea Docker

Rulați următoarea comandă pentru a instala Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Pornirea serviciului cu Docker

Rulați următoarea comandă pentru a porni containerul:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=ro-RO \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Implementarea cu Docker Compose

Creați un fișier `docker-compose.yml` cu următorul conținut:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ro-RO
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Porniți serviciul:

```bash
docker compose up -d
```

---

