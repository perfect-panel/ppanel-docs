---
title: Benutzerseite - Node
order: 6
group: 
  title: Frontend-Bereitstellung
  order: 3
toc: content
---

### Bereitstellung mit PM2, Node.js oder Bun

#### Code herunterladen

Laden Sie den Code aus dem offiziellen GitHub-Repository herunter:

```bash
# Neueste Version des Codes herunterladen
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Datei entpacken
tar -xzvf ppanel-user-web.tar.gz

# In das Codeverzeichnis wechseln
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

#### Dienst mit Node.js oder Bun starten

- **Start mit Node.js**:

  ```bash
  node apps/user/server.js
  ```

- **Start mit Bun**:

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

Besuchen Sie `http://<Ihre Server-IP>:3000`, um den Status des Dienstes zu überprüfen.

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

