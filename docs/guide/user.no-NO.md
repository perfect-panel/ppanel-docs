---
title: Brukergrensesnitt
order: 4
nav:
  title: Veiledning
  order: 1
group:
  title: Distribusjon
  order: 1
toc: content
---

# **PPanel Brukergrensesnitt Distribusjonsveiledning**

Denne veiledningen beskriver i detalj hvordan du distribuerer PPanel brukergrensesnittet, inkludert Docker, Vercel, PM2, samt flere distribusjonsmetoder ved å bruke Node.js eller Bun direkte.

---

## **1. Forberedelse av miljø**

Før distribusjon, vennligst sørg for at følgende verktøy er installert:

- **Node.js** (anbefales å installere via NVM, versjon >= 22)
- **Bun** (rask JavaScript-runtime)
- **PM2** (prosesshåndteringsverktøy for effektiv tjenesteforvaltning)
- **Docker** (for containerbasert distribusjon)

---

## **2. Konfigurasjon av miljøvariabler**

Før distribusjon må du konfigurere følgende miljøvariabler:

```env
# Applikasjonskonfigurasjon
NEXT_PUBLIC_DEFAULT_LANGUAGE=no-NO
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Kontaktinformasjon
NEXT_PUBLIC_EMAIL=support@example.com

# Fellesskaps- og sosiale medier-lenker
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Standardbruker
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Distribusjonsalternativer**

### **3.1 Distribusjon med Docker**

#### Installer Docker

Kjør følgende kommando for å installere Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Start tjenesten med Docker

Kjør følgende kommando for å starte containeren:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=no-NO \
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

#### Distribusjon med Docker Compose

Opprett en `docker-compose.yml`-fil med følgende innhold:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: no-NO
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

Start tjenesten:

```bash
docker compose up -d
```

---

### **3.2 Distribusjon med Vercel**

Klikk på knappen nedenfor for rask distribusjon:
[![Distribuer med Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20er%20et%20rent%2C%20profesjonelt%2C%20og%20perfekt%20åpen-kildekode%20proxy%20panel%20verktøy%2C%20designet%20for%20å%20være%20ditt%20ideelle%20valg%20for%20læring%20og%20praktisk%20bruk&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20Bruker%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Trinn:**

1. Logg inn eller registrer deg på [Vercel](https://vercel.com/) .
2. Klikk på distribusjonsknappen, fork repoet og velg `apps/user`.
3. Konfigurer miljøvariabler.
4. Klikk på **Deploy** for å starte distribusjonen.

---

### **3.3 Distribusjon med PM2, Node.js eller Bun**

#### Last ned koden

Hent koden fra det offisielle GitHub-repoet:

```bash
# Last ned den nyeste versjonen av koden
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Pakk ut filene
tar -xzvf ppanel-user-web.tar.gz

# Gå inn i kodekatalogen
cd ppanel-user-web
```

#### Konfigurer miljøvariabler

Opprett en `apps/user/.env`-fil og legg til nødvendige miljøvariabler (referer til miljøvariabelkonfigurasjonen ovenfor).

#### Konfigurer PM2

Opprett en `ecosystem.config.js`-fil med følgende innhold:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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
  node apps/user/server.js
  ```
- **Start med Bun**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Verifisering av distribusjon**

### **4.1 PM2 Tjenestestatus**

Kjør følgende kommando for å sjekke:

```bash
pm2 list
```

### **4.2 Tilgang via nettleser**

Besøk `http://<din server IP>:3000` for å verifisere at tjenesten kjører.

---

## **5. Tjenesteforvaltning**

### **PM2 Kommandoer**

- Stopp tjenesten:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Start tjenesten på nytt:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Slett tjenesten:
  ```bash
  pm2 delete ppanel-user-web
  ```
