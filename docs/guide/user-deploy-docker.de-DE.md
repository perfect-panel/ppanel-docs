---
title: Benutzerseite - Docker
order: 5
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
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Bereitstellung mit Docker Compose

Erstellen Sie eine Datei namens `docker-compose.yml` mit folgendem Inhalt:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: de-DE
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Starten Sie den Dienst:

```bash
docker compose up -d
```

---

