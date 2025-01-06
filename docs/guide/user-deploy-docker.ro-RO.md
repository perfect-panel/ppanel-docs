---
title: Utilizator - Docker
order: 5
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
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Implementarea cu Docker Compose

Creați un fișier `docker-compose.yml` cu următorul conținut:

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

Porniți serviciul:

```bash
docker compose up -d
```

---

