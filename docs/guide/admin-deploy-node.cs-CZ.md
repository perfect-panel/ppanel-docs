---
title: Správa - Node
order: 3
group: 
  title: Nasazení na front-end
  order: 3
toc: content
---

### Nasazení pomocí PM2, Node.js nebo Bun

#### Stáhnout kód

Získejte kód z oficiálního GitHub repozitáře:

```bash
# Stáhnout nejnovější verzi kódu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Rozbalit soubor
tar -xzvf ppanel-admin-web.tar.gz

# Přejít do adresáře s kódem
cd ppanel-admin-web
```

#### Konfigurace proměnných prostředí

Vytvořte soubor `apps/admin/.env` a přidejte potřebné proměnné prostředí (viz výše uvedená konfigurace proměnných prostředí).

#### Konfigurace PM2

Vytvořte soubor `ecosystem.config.js` s následujícím obsahem:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // lze změnit na node
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

#### Spuštění služby pomocí PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Spuštění služby pomocí Node.js nebo Bun

- **Spuštění pomocí Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Spuštění pomocí Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Ověření nasazení**

### **4.1 Stav služby PM2**

Spusťte následující příkaz pro kontrolu:

```bash
pm2 list
```

### **4.2 Přístup přes prohlížeč**

Navštivte `http://<vaše IP serveru>:3000` pro ověření stavu služby.

---

## **5. Správa služby**

### **Příkazy PM2**

- Zastavit službu:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Restartovat službu:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Smazat službu:
  ```bash
  pm2 delete ppanel-admin-web
  ```

