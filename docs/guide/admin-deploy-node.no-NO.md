---
title: Administrasjonsgrensesnitt - Node
order: 3
group: 
  title: Frontend distribusjon
  order: 3
toc: content
---

### Bruke PM2, Node.js eller Bun for distribusjon

#### Last ned koden

Hent koden fra det offisielle GitHub-repositoriet:

```bash
# Last ned den nyeste versjonen av koden
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Pakk ut filen
tar -xzvf ppanel-admin-web.tar.gz

# Gå inn i kodekatalogen
cd ppanel-admin-web
```

#### Konfigurer miljøvariabler

Opprett filen `apps/admin/.env` og legg til nødvendige miljøvariabler (se ovenfor for konfigurasjon av miljøvariabler).

#### Konfigurer PM2

Opprett filen `ecosystem.config.js` med følgende innhold:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // kan endres til node
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

#### Start tjenesten med PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Start tjenesten med Node.js eller Bun

- **Start med Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Start med Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verifiser distribusjonen**

### **4.1 PM2 tjenestestatus**

Kjør følgende kommando for å sjekke:

```bash
pm2 list
```

### **4.2 Tilgang via nettleser**

Besøk `http://<din server IP>:3000` for å verifisere at tjenesten kjører.

---

## **5. Tjenestestyring**

### **PM2 kommandoer**

- Stopp tjenesten:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Start tjenesten på nytt:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Slett tjenesten:
  ```bash
  pm2 delete ppanel-admin-web
  ```

