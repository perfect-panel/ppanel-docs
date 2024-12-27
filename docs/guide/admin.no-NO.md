---
title: Administrasjonsgrensesnitt
order: 3
nav:
  title: Veiledning
  order: 1
group:
  title: Distribusjon
  order: 1
toc: content
---

# **PPanel Administrasjonsgrensesnitt Distribusjonsveiledning**

Denne veiledningen gir en detaljert oversikt over hvordan du distribuerer PPanel administrasjonsgrensesnittet, inkludert flere distribusjonsmetoder som Docker, Vercel, PM2, samt direkte bruk av Node.js eller Bun.

---

## **1. Forberedelse av miljø**

Før distribusjon, vennligst sørg for at følgende verktøy er installert:

- **Node.js** (anbefales å installere via NVM, versjon >= 22)
- **Bun** (rask JavaScript-runtime)
- **PM2** (prosesshåndteringsverktøy for effektiv tjenestestyring)
- **Docker** (for containerbasert distribusjon)

---

## **2. Konfigurasjon av miljøvariabler**

Før distribusjon må du konfigurere følgende miljøvariabler:

```env
# Applikasjonskonfigurasjon
NEXT_PUBLIC_DEFAULT_LANGUAGE=no-NO
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

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
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Distribusjon med Docker Compose

Opprett en `docker-compose.yml`-fil med følgende innhold:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: no-NO
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
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

[![Distribuer på Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20er%20et%20rent%2C%20profesjonelt%2C%20og%20perfekt%20åpen-kildekode%20proxy%20panel%20verktøy%2C%20designet%20for%20å%20være%20ditt%20ideelle%20valg%20for%20læring%20og%20praktisk%20bruk&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Trinn:**

1. Logg inn eller registrer deg på [Vercel](https://vercel.com/) .
2. Klikk på distribusjonsknappen, fork repoet og velg `apps/admin`.
3. Konfigurer miljøvariabler.
4. Klikk på **Deploy** for å starte distribusjonen.

---

### **3.3 Distribusjon med PM2, Node.js eller Bun**

#### Last ned koden

Hent koden fra det offisielle GitHub-repoet:

```bash
# Last ned den nyeste versjonen av koden
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Pakk ut filene
tar -xzvf ppanel-admin-web.tar.gz

# Gå inn i kodekatalogen
cd ppanel-admin-web
```

#### Konfigurer miljøvariabler

Opprett en `apps/admin/.env`-fil og legg til nødvendige miljøvariabler (se ovenfor for konfigurasjon av miljøvariabler).

#### Konfigurer PM2

Opprett en `ecosystem.config.js`-fil med følgende innhold:

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

## **4. Verifisering av distribusjon**

### **4.1 PM2 Tjenestestatus**

Kjør følgende kommando for å sjekke:

```bash
pm2 list
```

### **4.2 Nettleser tilgang**

Gå til `http://<din server IP>:3000` for å verifisere at tjenesten kjører.

---

## **5. Tjenestestyring**

### **PM2 Kommandoer**

- Stoppe tjenesten:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Starte tjenesten på nytt:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Slette tjenesten:
  ```bash
  pm2 delete ppanel-admin-web
  ```
