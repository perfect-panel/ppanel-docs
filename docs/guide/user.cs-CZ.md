---
title: Uživatelský panel
order: 4
nav:
  title: Příručka
  order: 1
group:
  title: Nasazení
  order: 1
toc: content
---

# **Příručka pro nasazení uživatelského panelu PPanel**

Tato příručka podrobně popisuje, jak nasadit uživatelský panel PPanel, včetně různých metod nasazení pomocí Dockeru, Vercelu, PM2 a přímého použití Node.js nebo Bunu.

---

## **1. Příprava prostředí**

Před nasazením se ujistěte, že máte nainstalovány následující nástroje:

- **Node.js** (doporučeno instalovat pomocí NVM, verze >= 22)
- **Bun** (rychlý JavaScript runtime)
- **PM2** (nástroj pro správu procesů, určený pro efektivní správu služeb)
- **Docker** (pro nasazení v kontejnerech)

---

## **2. Konfigurace proměnných prostředí**

Před nasazením je třeba nakonfigurovat následující proměnné prostředí:

```env
# Konfigurace aplikace
NEXT_PUBLIC_DEFAULT_LANGUAGE=cs-CZ
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Kontaktní informace
NEXT_PUBLIC_EMAIL=support@example.com

# Odkazy na komunitu a sociální média
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Výchozí uživatel
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Možnosti nasazení**

### **3.1 Nasazení pomocí Dockeru**

#### Instalace Dockeru

Spusťte následující příkaz pro instalaci Dockeru:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Spuštění služby pomocí Dockeru

Spusťte následující příkaz pro spuštění kontejneru:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=cs-CZ \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Nasazení pomocí Docker Compose

Vytvořte soubor `docker-compose.yml` s následujícím obsahem:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: cs-CZ
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Spusťte službu:

```bash
docker compose up -d
```

---

### **3.2 Nasazení pomocí Vercelu**

Klikněte na následující tlačítko pro rychlé nasazení:
[![Nasazení pomocí Vercelu](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Kroky:**

1. Přihlaste se nebo se zaregistrujte na [Vercel](https://vercel.com/) .
2. Klikněte na tlačítko pro nasazení, forknete repozitář a vyberte `apps/user`.
3. Nakonfigurujte proměnné prostředí.
4. Klikněte na **Deploy** pro zahájení nasazení.

---

### **3.3 Nasazení pomocí PM2, Node.js nebo Bunu**

#### Stáhněte kód

Získejte kód z oficiálního GitHub repozitáře:

```bash
# Stáhněte nejnovější verzi kódu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Rozbalte soubor
tar -xzvf ppanel-user-web.tar.gz

# Přejděte do adresáře s kódem
cd ppanel-user-web
```

#### Konfigurace proměnných prostředí

Vytvořte soubor `apps/user/.env` a přidejte potřebné proměnné prostředí (viz výše konfigurace proměnných prostředí).

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

#### Spuštění služby pomocí Node.js nebo Bunu

- **Spuštění pomocí Node.js**:
  ```bash
  node apps/user/server.js
  ```
- **Spuštění pomocí Bunu**:
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
