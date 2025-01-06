---
title: Uživatelský klient - Node
order: 6
group: 
  title: Nasazení na front-endu
  order: 3
toc: content
---

### Nasazení pomocí PM2, Node.js nebo Bun

#### Stáhnout kód

Získejte kód z oficiálního GitHub repozitáře:

```bash
# Stáhnout nejnovější verzi kódu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Rozbalit soubor
tar -xzvf ppanel-user-web.tar.gz

# Přejít do adresáře s kódem
cd ppanel-user-web
```

#### Konfigurace proměnných prostředí

Vytvořte soubor `apps/user/.env` a přidejte potřebné proměnné prostředí (viz výše uvedená konfigurace proměnných prostředí).

#### Konfigurace PM2

Vytvořte soubor `ecosystem.config.js` s následujícím obsahem:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // může být změněno na node
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
  node apps/user/server.js
  ```

- **Spuštění pomocí Bun**:

  ```bash
  bun apps/user/server.js
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

- Zastavení služby:

  ```bash
  pm2 stop ppanel-user-web
  ```

- Restartování služby:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Smazání služby:

  ```bash
  pm2 delete ppanel-user-web
  ```

