---
title: Admin Panel - Node
order: 3
group: 
  title: Frontend Deployment
  order: 3
toc: content
---

### Telepítés PM2, Node.js vagy Bun segítségével

#### Kód letöltése

Töltse le a kódot a hivatalos GitHub tárolóból:

```bash
# Legújabb verzió letöltése
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Fájl kicsomagolása
tar -xzvf ppanel-admin-web.tar.gz

# Lépjen be a kód könyvtárába
cd ppanel-admin-web
```

#### Környezeti változók konfigurálása

Hozzon létre egy `apps/admin/.env` fájlt, és adja hozzá a szükséges környezeti változókat (lásd a fenti környezeti változók konfigurálását).

#### PM2 konfigurálása

Hozzon létre egy `ecosystem.config.js` fájlt, a következő tartalommal:

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

#### Szolgáltatás indítása PM2-vel

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Szolgáltatás indítása Node.js vagy Bun segítségével

- **Node.js indítás**:
  ```bash
  node apps/admin/server.js
  ```
- **Bun indítás**:
  ```bash
  bun apps/admin/server.js
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

