---
title: Hallintapaneeli
order: 3
nav:
  title: Opas
  order: 1
group:
  title: Asennus
  order: 1
toc: content
---

# **PPanel Hallintapaneelin Asennusopas**

Tässä oppaassa käsitellään PPanel hallintapaneelin asentamista, mukaan lukien Docker, Vercel, PM2 sekä suora käyttö Node.js:llä tai Bunilla.

---

## **1. Ympäristön valmistelu**

Ennen asennusta varmista, että seuraavat työkalut on asennettu:

- **Node.js** (suositellaan asennettavaksi NVM:n kautta, versio >= 22)
- **Bun** (nopea JavaScript-suoritin)
- **PM2** (prosessi- ja palvelunhallintatyökalu)
- **Docker** (konttien hallintaan)

---

## **2. Ympäristömuuttujien määrittäminen**

Ennen asennusta sinun on määritettävä seuraavat ympäristömuuttujat:

```env
# Sovelluksen asetukset
NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI
NEXT_PUBLIC_SITE_URL=https://admin.esimerkki.com
NEXT_PUBLIC_API_URL=https://api.esimerkki.com

# Oletuskäyttäjä
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@esimerkki.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=salasana123
```

---

## **3. Asennusvaihtoehdot**

### **3.1 Asennus Dockerilla**

#### Asenna Docker

Suorita seuraava komento asentaaksesi Dockerin:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Käynnistä palvelu Dockerilla

Suorita seuraava komento käynnistääksesi säilön:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI \
  -e NEXT_PUBLIC_SITE_URL=https://admin.esimerkki.com \
  -e NEXT_PUBLIC_API_URL=https://api.esimerkki.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@esimerkki.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=salasana123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Asennus Docker Compose -työkalulla

Luo `docker-compose.yml` -tiedosto, jonka sisältö on seuraava:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: fi-FI
      NEXT_PUBLIC_SITE_URL: https://admin.esimerkki.com
      NEXT_PUBLIC_API_URL: https://api.esimerkki.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@esimerkki.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: salasana123
```

Käynnistä palvelu:

```bash
docker compose up -d
```

---

### **3.2 Asennus Vercelilla**

Napsauta alla olevaa painiketta nopeaa asennusta varten:

[![Asenna Vercelilla](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20on%20puhdas%2C%20ammattimainen%2C%20ja%20täydellinen%20avoin%20lähdekoodi%20proxy%20paneeli%20työkalu%2C%20suunniteltu%20olemaan%20ihanteellinen%20valinta%20oppimiseen%20ja%20käytännön%20käyttöön&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Hallintapaneeli&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Vaiheet:**

1. Kirjaudu sisään tai rekisteröidy [Vercel](https://vercel.com/) -sivustolla.
2. Napsauta asennuspainiketta, forkkaa varasto ja valitse `apps/admin`.
3. Määritä ympäristömuuttujat.
4. Napsauta **Deploy** aloittaaksesi asennuksen.

---

### **3.3 Asennus PM2:lla, Node.js:llä tai Bunilla**

#### Lataa koodi

Hanki koodi virallisesta GitHub-varastosta:

```bash
# Lataa uusin versio
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Pura tiedosto
tar -xzvf ppanel-admin-web.tar.gz

# Siirry koodihakemistoon
cd ppanel-admin-web
```

#### Määritä ympäristömuuttujat

Luo `apps/admin/.env` -tiedosto ja lisää tarvittavat ympäristömuuttujat (katso yllä olevat ympäristömuuttujat).

#### Määritä PM2

Luo `ecosystem.config.js` -tiedosto, jonka sisältö on seuraava:

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

#### Käynnistä palvelu PM2:lla

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Käynnistä palvelu Node.js:llä tai Bunilla

- **Node.js käynnistys**:
  ```bash
  node apps/admin/server.js
  ```
- **Bun käynnistys**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Asennuksen vahvistaminen**

### **4.1 PM2 Palvelun tila**

Suorita seuraava komento tarkistaaksesi:

```bash
pm2 list
```

### **4.2 Selaimen käyttö**

Siirry osoitteeseen `http://<palvelimesi IP>:3000` vahvistaaksesi palvelun toimivuus.

---

## **5. Palvelun hallinta**

### **PM2 Komennot**

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
