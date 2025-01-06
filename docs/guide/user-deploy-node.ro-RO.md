---
title: Client - Node
order: 6
group: 
  title: Implementare Frontend
  order: 3
toc: content
---

### Implementare folosind PM2, Node.js sau Bun

#### Descărcați codul

Obțineți codul din depozitul oficial GitHub:

```bash
# Descărcați cea mai recentă versiune a codului
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Dezarhivați fișierul
tar -xzvf ppanel-user-web.tar.gz

# Intrați în directorul codului
cd ppanel-user-web
```

#### Configurați variabilele de mediu

Creați fișierul `apps/user/.env` și adăugați variabilele de mediu necesare (consultați configurația variabilelor de mediu de mai sus).

#### Configurați PM2

Creați fișierul `ecosystem.config.js`, cu următorul conținut:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // poate fi schimbat în node
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

#### Porniți serviciul folosind PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Porniți serviciul folosind Node.js sau Bun

- **Pornire cu Node.js**:

  ```bash
  node apps/user/server.js
  ```

- **Pornire cu Bun**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. Verificarea implementării**

### **4.1 Starea serviciului PM2**

Rulați următoarea comandă pentru a verifica:

```bash
pm2 list
```

### **4.2 Accesare prin browser**

Accesați `http://<IP-ul serverului dvs.>:3000` pentru a verifica starea serviciului.

---

## **5. Managementul serviciului**

### **Comenzi PM2**

- Opriți serviciul:

  ```bash
  pm2 stop ppanel-user-web
  ```

- Repornire serviciu:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Ștergeți serviciul:

  ```bash
  pm2 delete ppanel-user-web
  ```

