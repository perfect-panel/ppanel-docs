---
title: Felhasználói felület - Node
order: 6
group: 
  title: Frontend telepítés
  order: 3
toc: content
---

### PM2, Node.js vagy Bun használata a telepítéshez

#### Kód letöltése

A hivatalos GitHub tárolóból szerezze be a kódot:

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

Hozzon létre egy `ecosystem.config.js` fájlt, a következő tartalommal:

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

#### Szolgáltatás indítása Node.js vagy Bun segítségével

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

