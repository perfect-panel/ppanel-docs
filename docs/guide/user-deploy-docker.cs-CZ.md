---
title: Uživatelský rozhraní - Docker
order: 5
group: 
  title: Nasazení front-endu
  order: 3
toc: content
---

### Nasazení pomocí Dockeru

#### Instalace Dockeru

Spusťte následující příkaz pro instalaci Dockeru:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Spuštění služby pomocí Dockeru

Spusťte následující příkaz pro spuštění kontejneru:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=cs-CZ \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Nasazení pomocí Docker Compose

Vytvořte soubor `docker-compose.yml` s následujícím obsahem:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: cs-CZ
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Spusťte službu:

```bash
docker compose up -d
```

---

