---
title: Felhasználói felület
order: 4
nav:
  title: Útmutató
  order: 1
group:
  title: Telepítés
  order: 1
toc: content
---

# **PPanel Felhasználói Felület Telepítési Útmutató**

Ez az útmutató részletesen bemutatja, hogyan telepítheti a PPanel felhasználói felületet, beleértve a Docker, Vercel, PM2 és a Node.js vagy Bun közvetlen használatával történő telepítési lehetőségeket.

---

## **1. Környezet előkészítése**

A telepítés előtt győződjön meg arról, hogy az alábbi eszközök telepítve vannak:

- **Node.js** (ajánlott NVM-en keresztül telepíteni, verzió >= 22)
- **Bun** (gyors JavaScript futtatókörnyezet)
- **PM2** (folyamatkezelő eszköz a szolgáltatások hatékony kezelésére)
- **Docker** (konténerizált telepítéshez)

---

## **2. Környezeti változók konfigurálása**

A telepítés előtt konfigurálnia kell az alábbi környezeti változókat:

```env
# Alkalmazás konfiguráció
NEXT_PUBLIC_DEFAULT_LANGUAGE=hu-HU
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Kapcsolati információk
NEXT_PUBLIC_EMAIL=support@example.com

# Közösségi és közösségi média linkek
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Alapértelmezett felhasználó
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Telepítési lehetőségek**

### **3.1 Docker használatával történő telepítés**

#### Docker telepítése

Futtassa az alábbi parancsot a Docker telepítéséhez:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Szolgáltatás indítása Dockerrel

Futtassa az alábbi parancsot a konténer indításához:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=hu-HU \
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

#### Docker Compose használatával történő telepítés

Hozzon létre egy `docker-compose.yml` fájlt az alábbi tartalommal:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: hu-HU
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

Szolgáltatás indítása:

```bash
docker compose up -d
```

---

### **3.2 Vercel használatával történő telepítés**

Kattintson az alábbi gombra a gyors telepítéshez:
[![Telepítés Vercel segítségével](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20a%20tiszta%2C%20professzionális%2C%20és%20tökéletes%20nyílt%20forráskódú%20proxy%20panel%20eszköz%2C%20amely%20az%20ideális%20választás%20a%20tanuláshoz%20és%20a%20gyakorlati%20használathoz&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20Felhasználói%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Lépések:**

1. Jelentkezzen be vagy regisztráljon a [Vercel](https://vercel.com/) oldalon.
2. Kattintson a telepítési gombra, fork-olja a tárolót, és válassza az `apps/user` lehetőséget.
3. Konfigurálja a környezeti változókat.
4. Kattintson a **Deploy** gombra a telepítés megkezdéséhez.

---

### **3.3 PM2, Node.js vagy Bun használatával történő telepítés**

#### Kód letöltése

Töltse le a kódot a hivatalos GitHub tárolóból:

```bash
# Legújabb verzió letöltése
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Fájl kicsomagolása
tar -xzvf ppanel-user-web.tar.gz

# Lépjen be a kód könyvtárába
cd ppanel-user-web
```

#### Környezeti változók konfigurálása

Hozzon létre egy `apps/user/.env` fájlt, és adja hozzá a szükséges környezeti változókat (lásd a fenti környezeti változók konfigurálását).

#### PM2 konfigurálása

Hozzon létre egy `ecosystem.config.js` fájlt az alábbi tartalommal:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // Átállítható node-ra
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

#### Szolgáltatás indítása Node.js vagy Bun használatával

- **Node.js indítás**:
  ```bash
  node apps/user/server.js
  ```
- **Bun indítás**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Telepítés ellenőrzése**

### **4.1 PM2 szolgáltatás állapota**

Futtassa az alábbi parancsot az ellenőrzéshez:

```bash
pm2 list
```

### **4.2 Böngésző hozzáférés**

Látogasson el a `http://<szerver IP>:3000` címre a szolgáltatás működésének ellenőrzéséhez.

---

## **5. Szolgáltatás kezelése**

### **PM2 parancsok**

- Szolgáltatás leállítása:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Szolgáltatás újraindítása:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Szolgáltatás törlése:
  ```bash
  pm2 delete ppanel-user-web
  ```
