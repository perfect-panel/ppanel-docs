---
title: Správa
order: 3
nav:
  title: Příručka
  order: 1
group:
  title: Nasazení
  order: 1
toc: content
---

# **PPanel Příručka pro nasazení správy**

Tato příručka podrobně popisuje, jak nasadit PPanel správu, včetně různých metod nasazení pomocí Dockeru, Vercelu, PM2 a přímého použití Node.js nebo Bunu.

---

## **1. Příprava prostředí**

Před nasazením se ujistěte, že máte nainstalovány následující nástroje:

- **Node.js** (doporučeno instalovat pomocí NVM, verze >= 22)
- **Bun** (rychlý JavaScript runtime)
- **PM2** (nástroj pro správu procesů pro efektivní správu služeb)
- **Docker** (pro kontejnerové nasazení)

---

## **2. Konfigurace proměnných prostředí**

Před nasazením je třeba nakonfigurovat následující proměnné prostředí:

```env
# Konfigurace aplikace
NEXT_PUBLIC_DEFAULT_LANGUAGE=cs-CZ
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

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
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Nasazení pomocí Docker Compose

Vytvořte soubor `docker-compose.yml` s následujícím obsahem:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: cs-CZ
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
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

[![Nasadit na Vercelu](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20je%20čistý%2C%20profesionální%20a%20dokonalý%20nástroj%20pro%20proxy%20panel%2C%20navržený%20tak%2C%20aby%20byl%20vaší%20ideální%20volbou%20pro%20učení%20a%20praktické%20použití&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Kroky:**

1. Přihlaste se nebo se zaregistrujte na [Vercelu](https://vercel.com/) .
2. Klikněte na tlačítko pro nasazení, forknete repozitář a vyberte `apps/admin`.
3. Nakonfigurujte proměnné prostředí.
4. Klikněte na **Nasadit** pro zahájení nasazení.

---

### **3.3 Nasazení pomocí PM2, Node.js nebo Bunu**

#### Stáhněte kód

Získejte kód z oficiálního GitHub repozitáře:

```bash
# Stáhněte nejnovější verzi kódu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Rozbalte soubor
tar -xzvf ppanel-admin-web.tar.gz

# Přejděte do adresáře s kódem
cd ppanel-admin-web
```

#### Konfigurace proměnných prostředí

Vytvořte soubor `apps/admin/.env` a přidejte potřebné proměnné prostředí (viz výše konfigurace proměnných prostředí).

#### Konfigurace PM2

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

#### Spuštění služby pomocí PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Spuštění služby pomocí Node.js nebo Bunu

- **Spuštění pomocí Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Spuštění pomocí Bunu**:
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

Navštivte `http://<IP vaší serveru>:3000` pro ověření stavu služby.

---

## **5. Správa služby**

### **Příkazy PM2**

- Zastavení služby:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Restartování služby:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Smazání služby:
  ```bash
  pm2 delete ppanel-admin-web
  ```
