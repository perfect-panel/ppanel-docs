---
title: Panoul de Management - Vercel
order: 1
group: 
  title: Implementare Frontend
  order: 3
toc: content
---

### Utilizarea Vercel pentru Implementare\*\*

Faceți clic pe butonul de mai jos pentru a implementa rapid:

[![Implementați pe Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20este%20un%20instrument%20de%20panou%20proxy%20open-source%20pur%2C%20profesional%20și%20perfect%2C%20conceput%20pentru%20a%20fi%20alegerea%20ideală%20pentru%20învățare%20și%20utilizare%20practică\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Pași:**

1. Conectați-vă sau înregistrați pe [Vercel](https://vercel.com/) .
2. Faceți clic pe butonul de implementare, fork-uiți depozitul și selectați `apps/admin` .
3. Configurați variabilele de mediu.
4. Faceți clic pe **Deploy** pentru a începe implementarea.

---

### **3.3 Utilizarea PM2, Node.js sau Bun pentru Implementare**

#### Descărcați Codul

Obțineți codul din depozitul oficial GitHub:

```bash
# Descărcați cea mai recentă versiune a codului
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Dezarhivați fișierul
tar -xzvf ppanel-admin-web.tar.gz

# Intrați în directorul codului
cd ppanel-admin-web
```

#### Configurați Variabilele de Mediu

Creați fișierul `apps/admin/.env` și adăugați variabilele de mediu necesare (consultați configurația variabilelor de mediu de mai sus).

#### Configurați PM2

Creați fișierul `ecosystem.config.js` cu următorul conținut:

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

#### Utilizați PM2 pentru a Porni Serviciul

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

