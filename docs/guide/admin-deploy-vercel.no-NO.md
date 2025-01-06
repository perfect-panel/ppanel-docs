---
title: Administrasjonsgrensesnitt - Vercel
order: 1
group: 
  title: Frontend distribusjon
  order: 3
toc: content
---

### Bruke Vercel for distribusjon\*\*

Klikk på knappen nedenfor for rask distribusjon:

[![Distribuer på Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20er%20et%20rent%2C%20profesjonelt%2C%20og%20perfekt%20åpen-kilde%20proxy%20panel%20verktøy%2C%20designet%20for%20å%20være%20ditt%20ideelle%20valg%20for%20læring%20og%20praktisk%20bruk\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Trinn:**

1. Logg inn eller registrer deg på [Vercel](https://vercel.com/) .
2. Klikk på distribusjonsknappen, fork repoet og velg `apps/admin` .
3. Konfigurer miljøvariabler.
4. Klikk **Deploy** for å starte distribusjonen.

---

### **3.3 Bruke PM2, Node.js eller Bun for distribusjon**

#### Last ned koden

Få koden fra det offisielle GitHub-repoet:

```bash
# Last ned den nyeste versjonen av koden
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Pakk ut filen
tar -xzvf ppanel-admin-web.tar.gz

# Gå inn i kodekatalogen
cd ppanel-admin-web
```

#### Konfigurer miljøvariabler

Opprett `apps/admin/.env`-filen og legg til nødvendige miljøvariabler (se ovenfor for konfigurasjon av miljøvariabler).

#### Konfigurer PM2

Opprett `ecosystem.config.js`-filen med følgende innhold:

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

