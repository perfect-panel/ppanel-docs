---
title: Admin Felület
order: 3
nav:
  title: Útmutató
  order: 1
group:
  title: Telepítés
  order: 1
toc: content
---

# **PPanel Admin Felület Telepítési Útmutató**

Ez az útmutató részletesen bemutatja, hogyan telepítheti a PPanel admin felületet, beleértve a Docker, Vercel, PM2, valamint a Node.js vagy Bun közvetlen használatával történő telepítési lehetőségeket.

---

## **1. Környezet Előkészítése**

A telepítés előtt győződjön meg arról, hogy az alábbi eszközök telepítve vannak:

- **Node.js** (ajánlott NVM-en keresztül telepíteni, verzió >= 22)
- **Bun** (gyors JavaScript futtatókörnyezet)
- **PM2** (folyamatkezelő eszköz a szolgáltatások hatékony kezelésére)
- **Docker** (konténerizált telepítéshez)

---

## **2. Környezeti Változók Beállítása**

A telepítés előtt be kell állítania az alábbi környezeti változókat:

```env
# Alkalmazás konfiguráció
NEXT_PUBLIC_DEFAULT_LANGUAGE=hu-HU
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Alapértelmezett felhasználó
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Telepítési Opciók**

### **3.1 Docker Használatával Történő Telepítés**

#### Docker Telepítése

Futtassa az alábbi parancsot a Docker telepítéséhez:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Szolgáltatás Indítása Dockerrel

Futtassa az alábbi parancsot a konténer indításához:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=hu-HU \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Docker Compose Használatával Történő Telepítés

Hozzon létre egy `docker-compose.yml` fájlt az alábbi tartalommal:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: hu-HU
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Szolgáltatás indítása:

```bash
docker compose up -d
```

---

### **3.2 Vercel Használatával Történő Telepítés**

Kattintson az alábbi gombra a gyors telepítéshez:

[![Telepítés Vercel-en](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20egy%20tiszta%2C%20professzionális%20és%20tökéletes%20nyílt%20forráskódú%20proxy%20panel%20eszköz%2C%20amely%20az%20ideális%20választás%20az%20oktatáshoz%20és%20a%20gyakorlati%20használathoz&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Lépések:**

1. Jelentkezzen be vagy regisztráljon a [Vercel](https://vercel.com/) oldalon.
2. Kattintson a telepítési gombra, fork-olja a tárolót, és válassza az `apps/admin` mappát.
3. Állítsa be a környezeti változókat.
4. Kattintson a **Deploy** gombra a telepítés megkezdéséhez.

---

### **3.3 PM2, Node.js vagy Bun Használatával Történő Telepítés**

#### Kód Letöltése

Töltse le a kódot a hivatalos GitHub tárolóból:

```bash
# Legújabb verzió letöltése
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Fájl kicsomagolása
tar -xzvf ppanel-admin-web.tar.gz

# Lépjen be a kód könyvtárába
cd ppanel-admin-web
```

#### Környezeti Változók Beállítása

Hozzon létre egy `apps/admin/.env` fájlt, és adja hozzá a szükséges környezeti változókat (lásd a fenti környezeti változók beállítását).

#### PM2 Beállítása

Hozzon létre egy `ecosystem.config.js` fájlt az alábbi tartalommal:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### Szolgáltatás Indítása PM2-vel

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Szolgáltatás Indítása Node.js vagy Bun Használatával

- **Node.js indítás**:
  ```bash
  node apps/admin/server.js
  ```
- **Bun indítás**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Telepítés Ellenőrzése**

### **4.1 PM2 Szolgáltatás Állapota**

Futtassa az alábbi parancsot az ellenőrzéshez:

```bash
pm2 list
```

### **4.2 Böngésző Hozzáférés**

Látogasson el a `http://<szerver IP>:3000` címre a szolgáltatás működésének ellenőrzéséhez.

---

## **5. Szolgáltatás Kezelése**

### **PM2 Parancsok**

- Szolgáltatás leállítása:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Szolgáltatás újraindítása:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Szolgáltatás törlése:
  ```bash
  pm2 delete ppanel-admin-web
  ```
