---
title: Benutzeroberfläche
order: 4
nav:
  title: Anleitung
  order: 1
group:
  title: Bereitstellung
  order: 1
toc: content
---

# **PPanel Benutzeroberfläche Bereitstellungsanleitung**

Diese Anleitung beschreibt detailliert, wie die PPanel Benutzeroberfläche bereitgestellt wird, einschließlich verschiedener Bereitstellungsoptionen wie Docker, Vercel, PM2 sowie die direkte Verwendung von Node.js oder Bun.

---

## **1. Vorbereitung der Umgebung**

Stellen Sie vor der Bereitstellung sicher, dass die folgenden Tools installiert sind:

- **Node.js** (empfohlen über NVM zu installieren, Version >= 22)
- **Bun** (schnelle JavaScript-Laufzeit)
- **PM2** (Prozessmanagement-Tool zur effizienten Verwaltung von Diensten)
- **Docker** (für containerisierte Bereitstellungen)

---

## **2. Konfiguration der Umgebungsvariablen**

Vor der Bereitstellung müssen Sie die folgenden Umgebungsvariablen konfigurieren:

```env
# Anwendungs-Konfiguration
NEXT_PUBLIC_DEFAULT_LANGUAGE=de-DE
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Kontaktinformationen
NEXT_PUBLIC_EMAIL=support@example.com

# Community- und Social-Media-Links
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Standardbenutzer
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Bereitstellungsoptionen**

### **3.1 Bereitstellung mit Docker**

#### Docker installieren

Führen Sie den folgenden Befehl aus, um Docker zu installieren:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Dienst mit Docker starten

Führen Sie den folgenden Befehl aus, um den Container zu starten:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=de-DE \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Bereitstellung mit Docker Compose

Erstellen Sie eine `docker-compose.yml` Datei mit folgendem Inhalt:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: de-DE
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Starten Sie den Dienst:

```bash
docker compose up -d
```

---

### **3.2 Bereitstellung mit Vercel**

Klicken Sie auf die folgende Schaltfläche, um schnell bereitzustellen:
[![Bereitstellung mit Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20ist%20ein%20reines%2C%20professionelles%20und%20perfektes%20Open-Source-Proxy-Panel-Tool%2C%20das%20so%20gestaltet%20ist%2C%20dass%20es%20Ihre%20ideale%20Wahl%20für%20Lernen%20und%20praktische%20Nutzung%20ist&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20Benutzer-Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Schritte:**

1. Melden Sie sich bei [Vercel](https://vercel.com/) an oder registrieren Sie sich.
2. Klicken Sie auf die Bereitstellungsschaltfläche, forken Sie das Repository und wählen Sie `apps/user`.
3. Konfigurieren Sie die Umgebungsvariablen.
4. Klicken Sie auf **Deploy**, um die Bereitstellung zu starten.

---

### **3.3 Bereitstellung mit PM2, Node.js oder Bun**

#### Code herunterladen

Holen Sie sich den Code aus dem offiziellen GitHub-Repository:

```bash
# Neueste Version des Codes herunterladen
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Datei entpacken
tar -xzvf ppanel-user-web.tar.gz

# In das Codeverzeichnis wechseln
cd ppanel-user-web
```

#### Umgebungsvariablen konfigurieren

Erstellen Sie eine `apps/user/.env` Datei und fügen Sie die erforderlichen Umgebungsvariablen hinzu (siehe oben für die Konfiguration der Umgebungsvariablen).

#### PM2 konfigurieren

Erstellen Sie eine `ecosystem.config.js` Datei mit folgendem Inhalt:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // kann auf node geändert werden
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
      },
    },
  ],
};
```

#### Dienst mit PM2 starten

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Dienst mit Node.js oder Bun starten

- **Node.js starten**:
  ```bash
  node apps/user/server.js
  ```
- **Bun starten**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Bereitstellung überprüfen**

### **4.1 PM2 Dienststatus**

Führen Sie den folgenden Befehl aus, um zu überprüfen:

```bash
pm2 list
```

### **4.2 Zugriff über den Browser**

Greifen Sie auf `http://<Ihre Server-IP>:3000` zu, um den Status des Dienstes zu überprüfen.

---

## **5. Dienstverwaltung**

### **PM2 Befehle**

- Dienst stoppen:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Dienst neu starten:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Dienst löschen:
  ```bash
  pm2 delete ppanel-user-web
  ```
