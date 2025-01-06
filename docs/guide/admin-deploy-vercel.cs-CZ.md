---
title: Správa - Vercel
order: 1
group: 
  title: Nasazení frontendu
  order: 3
toc: content
---

### Nasazení pomocí Vercel\*\*

Klikněte na následující tlačítko pro rychlé nasazení:

[![Nasadit na Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20je%20čistý%2C%20profesionální%2C%20a%20dokonalý%20nástroj%20pro%20otevřený%20proxy%20panel%2C%20navržený%20tak%2C%20aby%20byl%20vaší%20ideální%20volbou%20pro%20učení%20a%20praktické%20použití\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Kroky:**

1. Přihlaste se nebo se zaregistrujte na [Vercel](https://vercel.com/) .
2. Klikněte na tlačítko nasazení, forkněte repozitář a vyberte `apps/admin`.
3. Nakonfigurujte proměnné prostředí.
4. Klikněte na **Nasadit** pro zahájení nasazení.

---

### **3.3 Nasazení pomocí PM2, Node.js nebo Bun**

#### Stáhněte kód

Získejte kód z oficiálního GitHub repozitáře:

```bash
# Stáhnout nejnovější verzi kódu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Rozbalit soubor
tar -xzvf ppanel-admin-web.tar.gz

# Přejděte do adresáře s kódem
cd ppanel-admin-web
```

#### Nakonfigurujte proměnné prostředí

Vytvořte soubor `apps/admin/.env` a přidejte potřebné proměnné prostředí (viz výše uvedená konfigurace proměnných prostředí).

#### Nakonfigurujte PM2

Vytvořte soubor `ecosystem.config.js` s následujícím obsahem:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### Spusťte službu pomocí PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

