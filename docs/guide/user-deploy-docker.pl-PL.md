---
title: Klient - Docker
order: 5
group: 
  title: Wdrażanie front-endu
  order: 3
toc: content
---

### Wdrażanie za pomocą Dockera

#### Instalacja Dockera

Uruchom poniższe polecenie, aby zainstalować Dockera:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Uruchamianie usługi za pomocą Dockera

Uruchom poniższe polecenie, aby uruchomić kontener:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=pl-PL \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Wdrażanie za pomocą Docker Compose

Utwórz plik `docker-compose.yml` o następującej treści:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: pl-PL
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Uruchom usługę:

```bash
docker compose up -d
```

---

