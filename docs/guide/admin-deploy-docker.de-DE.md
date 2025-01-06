---
title: Verwaltungsoberfläche - Docker
order: 2
group: 
  title: Frontend-Bereitstellung
  order: 3
toc: content
---

### Bereitstellung mit Docker

#### Docker installieren

Führen Sie den folgenden Befehl aus, um Docker zu installieren:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Dienste mit Docker starten

Führen Sie den folgenden Befehl aus, um den Container zu starten:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=de-DE \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Bereitstellung mit Docker Compose

Erstellen Sie eine `docker-compose.yml`-Datei mit folgendem Inhalt:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: de-DE
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Starten Sie den Dienst:

```bash
docker compose up -d
```

---

