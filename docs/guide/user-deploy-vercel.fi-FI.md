---
title: Käyttäjäpuoli - Vercel
order: 7
group: 
  title: Etupään käyttöönotto
  order: 3
toc: content
---

### Vercelin käyttäminen käyttöönottoon\*\*

Napsauta alla olevaa painiketta nopeaa käyttöönottoa varten:

[![Käyttöönotto Vercelissä](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20on%20puhdas%2C%20ammattimainen%2C%20ja%20täydellinen%20avoin%20lähdekoodi%20proxy%20paneeli%20työkalu%2C%20suunniteltu%20olemaan%20ihanteellinen%20valinta%20oppimiseen%20ja%20käytännön%20käyttöön\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20käyttäjä%20verkkosivusto\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**Vaiheet:**

1. Kirjaudu sisään tai rekisteröidy [Vercelissä](https://vercel.com/) .
2. Napsauta käyttöönotto-painiketta, forkkaa varasto ja valitse `apps/user`.
3. Määritä ympäristömuuttujat.
4. Napsauta **Käyttöönotto** aloittaaksesi käyttöönoton.

---

### **3.3 Käyttö PM2:n, Node.js:n tai Bunin avulla**

#### Lataa koodi

Hanki koodi virallisesta GitHub-varastosta:

```bash
# Lataa uusin versio koodista
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Pura tiedosto
tar -xzvf ppanel-user-web.tar.gz

# Siirry koodihakemistoon
cd ppanel-user-web
```

#### Määritä ympäristömuuttujat

Luo `apps/user/.env` -tiedosto ja lisää tarvittavat ympäristömuuttujat (katso yllä olevat ympäristömuuttujien asetukset).

#### Määritä PM2

Luo `ecosystem.config.js` -tiedosto, jonka sisältö on seuraava:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // voidaan muuttaa nodeksi
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

