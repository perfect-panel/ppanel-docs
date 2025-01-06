---
title: Správa - Docker
order: 2
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
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Nasazení pomocí Docker Compose

Vytvořte soubor `docker-compose.yml` s následujícím obsahem:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: cs-CZ
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Spusťte službu:

```bash
docker compose up -d
```

---

