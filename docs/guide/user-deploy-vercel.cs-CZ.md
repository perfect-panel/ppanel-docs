---
title: Uživatelský rozhraní - Vercel
order: 7
group: 
  title: Nasazení na front-end
  order: 3
toc: content
---

### Nasazení pomocí Vercel\*\*

Klikněte na následující tlačítko pro rychlé nasazení:

[![Nasadit na Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20je%20čistý%2C%20profesionální%2C%20a%20dokonalý%20nástroj%20pro%20otevřený%20proxy%20panel%2C%20navržený%20tak%2C%20aby%20byl%20vaší%20ideální%20volbou%20pro%20učení%20a%20praktické%20použití\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20uživatelské%20rozhraní\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**Kroky:**

1. Přihlaste se nebo se zaregistrujte na [Vercel](https://vercel.com/) .
2. Klikněte na tlačítko pro nasazení, forkněte repozitář a vyberte `apps/user`.
3. Nakonfigurujte proměnné prostředí.
4. Klikněte na **Deploy** pro zahájení nasazení.

---

### **3.3 Nasazení pomocí PM2, Node.js nebo Bun**

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

#### Nakonfigurujte proměnné prostředí

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

