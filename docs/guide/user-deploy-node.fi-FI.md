---
title: Käyttäjäpuoli - Node
order: 6
group: 
  title: Etupään käyttöönotto
  order: 3
toc: content
---

### Käyttö PM2:n, Node.js:n tai Bunin avulla

#### Koodin lataaminen

Hanki koodi virallisesta GitHub-repositoriosta:

```bash
# Lataa uusin versio koodista
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Pura tiedosto
tar -xzvf ppanel-user-web.tar.gz

# Siirry koodihakemistoon
cd ppanel-user-web
```

#### Ympäristömuuttujien määrittäminen

Luo `apps/user/.env` -tiedosto ja lisää tarvittavat ympäristömuuttujat (katso yllä olevat ympäristömuuttujien asetukset).

#### PM2:n konfigurointi

Luo `ecosystem.config.js` -tiedosto, jonka sisältö on seuraava:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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

#### Palvelun käynnistäminen PM2:n avulla

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Palvelun käynnistäminen Node.js:n tai Bunin avulla

- **Node.js:n käynnistys**:

  ```bash
  node apps/user/server.js
  ```

- **Bunin käynnistys**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. Varmista käyttöönotto**

### **4.1 PM2:n palvelun tila**

Suorita seuraava komento tarkistaaksesi:

```bash
pm2 list
```

### **4.2 Selaimella pääsy**

Siirry osoitteeseen `http://<palvelimesi IP>:3000` varmistaaksesi, että palvelu toimii.

---

## **5. Palvelun hallinta**

### **PM2-komennot**

- Palvelun pysäyttäminen:

  ```bash
  pm2 stop ppanel-user-web
  ```

- Palvelun uudelleenkäynnistys:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Palvelun poistaminen:

  ```bash
  pm2 delete ppanel-user-web
  ```

