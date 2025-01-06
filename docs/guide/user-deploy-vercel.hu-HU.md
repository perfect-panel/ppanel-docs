---
title: Felhasználói felület - Vercel
order: 7
group: 
  title: Frontend telepítés
  order: 3
toc: content
---

### Vercel használata a telepítéshez\*\*

Kattints az alábbi gombra a gyors telepítéshez:

[![Telepítés a Vercel-en](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20egy%20tiszta%2C%20professzionális%2C%20és%20tökéletes%20nyílt%20forráskódú%20proxy%20panel%20eszköz%2C%20amelyet%20azt%20célja%20hogy%20ideális%20választás%20legyen%20a%20tanulásra%20és%20a%20gyakorlati%20használatra\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20felhasználói%20Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**Lépések:**

1. Jelentkezz be vagy regisztrálj a [Vercel](https://vercel.com/) oldalon.
2. Kattints a telepítési gombra, forkold a tárolót és válaszd az `apps/user`-t.
3. Állítsd be a környezeti változókat.
4. Kattints a **Telepítés** gombra a telepítés megkezdéséhez.

---

### **3.3 Telepítés PM2, Node.js vagy Bun használatával**

#### Kód letöltése

Szerezd meg a kódot a hivatalos GitHub tárolóból:

```bash
# Legújabb verzió letöltése
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Fájl kicsomagolása
tar -xzvf ppanel-user-web.tar.gz

# Lépj be a kód könyvtárába
cd ppanel-user-web
```

#### Környezeti változók beállítása

Hozz létre egy `apps/user/.env` fájlt, és add hozzá a szükséges környezeti változókat (lásd a fenti környezeti változók beállítását).

#### PM2 konfigurálása

Hozz létre egy `ecosystem.config.js` fájlt a következő tartalommal:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // átkonvertálható node-ra
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

#### Szolgáltatás indítása PM2-vel

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

