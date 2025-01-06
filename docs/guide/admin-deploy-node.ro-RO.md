---
title: Panoul de management - Node
order: 3
group: 
  title: Implementare front-end
  order: 3
toc: content
---

### Utilizarea PM2, Node.js sau Bun pentru implementare

#### Descărcarea codului

Obțineți codul din depozitul oficial GitHub:

```bash
# Descarcă cea mai recentă versiune a codului
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Dezarhivează fișierul
tar -xzvf ppanel-admin-web.tar.gz

# Intră în directorul codului
cd ppanel-admin-web
```

#### Configurarea variabilelor de mediu

Creează fișierul `apps/admin/.env` și adaugă variabilele de mediu necesare (consultă configurația variabilelor de mediu de mai sus).

#### Configurarea PM2

Creează fișierul `ecosystem.config.js`, cu următorul conținut:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### Pornirea serviciului cu PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Pornirea serviciului cu Node.js sau Bun

- **Pornire cu Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Pornire cu Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verificarea implementării**

### **4.1 Starea serviciului PM2**

Rulați următoarea comandă pentru a verifica:

```bash
pm2 list
```

### **4.2 Accesarea din browser**

Accesați `http://<IP-ul serverului dvs.>:3000` pentru a verifica starea serviciului.

---

## **5. Managementul serviciului**

### **Comenzi PM2**

- Oprirea serviciului:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Repornirea serviciului:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Ștergerea serviciului:
  ```bash
  pm2 delete ppanel-admin-web
  ```

