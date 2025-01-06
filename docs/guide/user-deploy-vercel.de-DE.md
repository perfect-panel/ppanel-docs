---
title: Benutzeroberfläche - Vercel
order: 7
group: 
  title: Frontend-Bereitstellung
  order: 3
toc: content
---

### Bereitstellung mit Vercel\*\*

Klicken Sie auf die folgende Schaltfläche für eine schnelle Bereitstellung:

[![Auf Vercel bereitstellen](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20ist%20ein%20reines%2C%20professionelles%2C%20und%20perfektes%20Open-Source-Proxy-Panel-Tool%2C%20das%20als%20ideale%20Wahl%20für%20Lernen%20und%20praktische%20Anwendungen%20entworfen%20wurde\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20Benutzer-Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

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
# Laden Sie die neueste Version des Codes herunter
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Entpacken Sie die Datei
tar -xzvf ppanel-user-web.tar.gz

# Wechseln Sie in das Codeverzeichnis
cd ppanel-user-web
```

#### Umgebungsvariablen konfigurieren

Erstellen Sie die Datei `apps/user/.env` und fügen Sie die erforderlichen Umgebungsvariablen hinzu (siehe oben für die Konfiguration der Umgebungsvariablen).

#### PM2 konfigurieren

Erstellen Sie die Datei `ecosystem.config.js` mit folgendem Inhalt:

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

