---
title: Hallintapaneeli - Node
order: 3
group: 
  title: Etupään käyttöönotto
  order: 3
toc: content
---

### Käyttö PM2:n, Node.js:n tai Bunin avulla

#### Lataa koodi

Hanki koodi virallisesta GitHub-repositoriosta:

```bash
# Lataa uusin versio koodista
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Pura tiedosto
tar -xzvf ppanel-admin-web.tar.gz

# Siirry koodihakemistoon
cd ppanel-admin-web
```

#### Määritä ympäristömuuttujat

Luo tiedosto `apps/admin/.env` ja lisää tarvittavat ympäristömuuttujat (katso yllä olevat ympäristömuuttujien asetukset).

#### Määritä PM2

Luo tiedosto `ecosystem.config.js`, jonka sisältö on seuraava:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // voidaan vaihtaa nodeksi
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

#### Käynnistä palvelu PM2:n avulla

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Käynnistä palvelu Node.js:n tai Bunin avulla

- **Node.js:n käynnistys**:
  ```bash
  node apps/admin/server.js
  ```
- **Bunin käynnistys**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Vahvista käyttöönotto**

### **4.1 PM2:n palvelun tila**

Suorita seuraava komento tarkistaaksesi:

```bash
pm2 list
```

### **4.2 Selaimella pääsy**

Käy osoitteessa `http://<palvelimesi IP>:3000` varmistaaksesi palvelun toimivuus.

---

## **5. Palvelun hallinta**

### **PM2-komennot**

- Pysäytä palvelu:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Käynnistä palvelu uudelleen:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Poista palvelu:
  ```bash
  pm2 delete ppanel-admin-web
  ```

