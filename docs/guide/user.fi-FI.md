---
title: Käyttäjäpääte
order: 4
nav:
  title: Opas
  order: 1
group:
  title: Asennus
  order: 1
toc: content
---

# **PPanel Käyttäjäpään Asennusopas**

Tässä oppaassa käsitellään yksityiskohtaisesti, kuinka asentaa PPanel käyttäjäpääte, mukaan lukien Docker, Vercel, PM2 sekä useita suoria asennusmenetelmiä Node.js:llä tai Bunilla.

---

## **1. Ympäristön valmistelu**

Ennen asennusta varmista, että seuraavat työkalut on asennettu:

- **Node.js** (suositellaan asennettavaksi NVM:n kautta, versio >= 22)
- **Bun** (nopea JavaScript-suoritin)
- **PM2** (prosessi- ja palvelunhallintatyökalu)
- **Docker** (konttivetoista asennusta varten)

---

## **2. Ympäristömuuttujien määrittäminen**

Ennen asennusta sinun on määritettävä seuraavat ympäristömuuttujat:

```env
# Sovelluksen asetukset
NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Yhteystiedot
NEXT_PUBLIC_EMAIL=tuki@example.com

# Yhteisö- ja sosiaalisen median linkit
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Oletuskäyttäjä
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Asennusvaihtoehdot**

### **3.1 Asennus Dockerilla**

#### Asenna Docker

Suorita seuraava komento asentaaksesi Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Käynnistä palvelu Dockerilla

Suorita seuraava komento käynnistääksesi kontin:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=tuki@example.com \
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

#### Asennus Docker Compose -työkalulla

Luo `docker-compose.yml` -tiedosto, jonka sisältö on seuraava:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: fi-FI
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: tuki@example.com
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

Käynnistä palvelu:

```bash
docker compose up -d
```

---

### **3.2 Asennus Vercelilla**

Napsauta alla olevaa painiketta nopeaa asennusta varten:
[![Asenna Vercelilla](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20on%20puhdas%2C%20ammattimainen%2C%20ja%20täydellinen%20avoin%20lähdekoodi%20proxy%20paneeli%20työkalu%2C%20suunniteltu%20olemaan%20ihanteellinen%20valinta%20oppimiseen%20ja%20käytännön%20käyttöön&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20Käyttäjäpääte&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Vaiheet:**

1. Kirjaudu sisään tai rekisteröidy [Vercel](https://vercel.com/) -sivustolle.
2. Napsauta asennuspainiketta, forkkaa varasto ja valitse `apps/user`.
3. Määritä ympäristömuuttujat.
4. Napsauta **Deploy** aloittaaksesi asennuksen.

---

### **3.3 Asennus PM2:lla, Node.js:llä tai Bunilla**

#### Lataa koodi

Hanki koodi virallisesta GitHub-varastosta:

```bash
# Lataa uusin versio
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Pura tiedosto
tar -xzvf ppanel-user-web.tar.gz

# Siirry koodihakemistoon
cd ppanel-user-web
```

#### Määritä ympäristömuuttujat

Luo `apps/user/.env` -tiedosto ja lisää tarvittavat ympäristömuuttujat (katso yllä olevat ympäristömuuttujat).

#### Määritä PM2

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

#### Käynnistä palvelu PM2:lla

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Käynnistä palvelu Node.js:llä tai Bunilla

- **Node.js käynnistys**:
  ```bash
  node apps/user/server.js
  ```
- **Bun käynnistys**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Asennuksen vahvistaminen**

### **4.1 PM2 Palvelun tila**

Suorita seuraava komento tarkistaaksesi:

```bash
pm2 list
```

### **4.2 Selaimen käyttö**

Siirry osoitteeseen `http://<palvelimesi IP>:3000` vahvistaaksesi palvelun toimivuuden.

---

## **5. Palvelun hallinta**

### **PM2 Komennot**

- Pysäytä palvelu:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Käynnistä palvelu uudelleen:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Poista palvelu:
  ```bash
  pm2 delete ppanel-user-web
  ```
