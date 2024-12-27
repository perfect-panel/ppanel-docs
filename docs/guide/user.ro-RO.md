---
title: Interfața utilizatorului PPanel
order: 4
nav:
  title: Ghid
  order: 1
group:
  title: Implementare
  order: 1
toc: content
---

# **Ghid de implementare a interfeței utilizatorului PPanel**

Acest ghid detaliază modul de implementare a interfeței utilizatorului PPanel, incluzând diverse metode de implementare cu Docker, Vercel, PM2, precum și utilizarea directă a Node.js sau Bun.

---

## **1. Pregătirea mediului**

Înainte de a începe implementarea, asigurați-vă că următoarele instrumente sunt instalate:

- **Node.js** (se recomandă instalarea prin NVM, versiune >= 22)
- **Bun** (un runtime rapid pentru JavaScript)
- **PM2** (un instrument de gestionare a proceselor, utilizat pentru gestionarea eficientă a serviciilor)
- **Docker** (pentru implementarea în containere)

---

## **2. Configurarea variabilelor de mediu**

Înainte de implementare, trebuie să configurați următoarele variabile de mediu:

```env
# Configurarea aplicației
NEXT_PUBLIC_DEFAULT_LANGUAGE=ro-RO
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Informații de contact
NEXT_PUBLIC_EMAIL=support@example.com

# Linkuri pentru comunitate și rețele sociale
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Utilizator implicit
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Opțiuni de implementare**

### **3.1 Implementare cu Docker**

#### Instalarea Docker

Rulați următoarea comandă pentru a instala Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Pornirea serviciului cu Docker

Rulați următoarea comandă pentru a porni containerul:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=ro-RO \
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

#### Implementare cu Docker Compose

Creați un fișier `docker-compose.yml` cu următorul conținut:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ro-RO
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

Porniți serviciul:

```bash
docker compose up -d
```

---

### **3.2 Implementare cu Vercel**

Faceți clic pe butonul de mai jos pentru a implementa rapid:
[![Implementare cu Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20este%20un%20instrument%20proxy%20open-source%20pur%2C%20profesional%20și%20perfect%2C%20proiectat%20pentru%20a%20fi%20alegerea%20ideală%20pentru%20învățare%20și%20utilizare%20practică&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=Interfața%20utilizatorului%20PPanel&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Pași:**

1. Conectați-vă sau înregistrați pe [Vercel](https://vercel.com/) .
2. Faceți clic pe butonul de implementare, fork-uiți depozitul și selectați `apps/user`.
3. Configurați variabilele de mediu.
4. Faceți clic pe **Deploy** pentru a începe implementarea.

---

### **3.3 Implementare cu PM2, Node.js sau Bun**

#### Descărcarea codului

Obțineți codul din depozitul oficial GitHub:

```bash
# Descărcați cea mai recentă versiune a codului
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Dezarhivați fișierul
tar -xzvf ppanel-user-web.tar.gz

# Intrați în directorul codului
cd ppanel-user-web
```

#### Configurarea variabilelor de mediu

Creați un fișier `apps/user/.env` și adăugați variabilele de mediu necesare (consultați configurația variabilelor de mediu de mai sus).

#### Configurarea PM2

Creați un fișier `ecosystem.config.js` cu următorul conținut:

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

#### Pornirea serviciului cu PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Pornirea serviciului cu Node.js sau Bun

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

### **4.2 Accesarea prin browser**

Accesați `http://<IP-ul serverului dvs.>:3000` pentru a verifica starea serviciului.

---

## **5. Gestionarea serviciului**

### **Comenzi PM2**

- Opriți serviciul:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Repornirea serviciului:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Ștergerea serviciului:
  ```bash
  pm2 delete ppanel-user-web
  ```
