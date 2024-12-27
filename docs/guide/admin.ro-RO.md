---
title: Panoul de administrare
order: 3
nav:
  title: Ghid
  order: 1
group:
  title: Implementare
  order: 1
toc: content
---

# **Ghid de implementare a Panoul de administrare PPanel**

Acest ghid detaliază modul de implementare a Panoului de administrare PPanel, incluzând Docker, Vercel, PM2, precum și diverse metode de implementare folosind direct Node.js sau Bun.

---

## **1. Pregătirea mediului**

Înainte de implementare, asigurați-vă că următoarele instrumente sunt instalate:

- **Node.js** (recomandat să fie instalat prin NVM, versiune >= 22)
- **Bun** (runtime rapid pentru JavaScript)
- **PM2** (instrument de gestionare a proceselor, utilizat pentru gestionarea eficientă a serviciilor)
- **Docker** (pentru implementare containerizată)

---

## **2. Configurarea variabilelor de mediu**

Înainte de implementare, trebuie să configurați următoarele variabile de mediu:

```env
# Configurarea aplicației
NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Utilizator implicit
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Opțiuni de implementare**

### **3.1 Implementare folosind Docker**

#### Instalarea Docker

Rulați următoarea comandă pentru a instala Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Pornirea serviciului folosind Docker

Rulați următoarea comandă pentru a porni containerul:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Implementare folosind Docker Compose

Creați un fișier `docker-compose.yml` cu următorul conținut:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: en-US
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Porniți serviciul:

```bash
docker compose up -d
```

---

### **3.2 Implementare folosind Vercel**

Faceți clic pe butonul de mai jos pentru a implementa rapid:

[![Implementare pe Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20este%20un%20instrument%20de%20panou%20proxy%20deschis%20profesional%20și%20perfect%20proiectat%20pentru%20a%20fi%20alegerea%20ideală%20pentru%20învățare%20și%20utilizare%20practică&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=Panoul%20de%20administrare%20PPanel&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Pași:**

1. Conectați-vă sau înregistrați pe [Vercel](https://vercel.com/) .
2. Faceți clic pe butonul de implementare, fork-uiți depozitul și selectați `apps/admin`.
3. Configurați variabilele de mediu.
4. Faceți clic pe **Deploy** pentru a începe implementarea.

---

### **3.3 Implementare folosind PM2, Node.js sau Bun**

#### Descărcarea codului

Obțineți codul din depozitul oficial GitHub:

```bash
# Descărcați codul celei mai recente versiuni
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Dezarhivați fișierul
tar -xzvf ppanel-admin-web.tar.gz

# Intrați în directorul codului
cd ppanel-admin-web
```

#### Configurarea variabilelor de mediu

Creați un fișier `apps/admin/.env` și adăugați variabilele de mediu necesare (consultați configurația variabilelor de mediu de mai sus).

#### Configurarea PM2

Creați un fișier `ecosystem.config.js` cu următorul conținut:

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

#### Pornirea serviciului folosind PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Pornirea serviciului folosind Node.js sau Bun

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

### **4.2 Accesarea în browser**

Accesați `http://<IP-ul serverului dvs.>:3000` pentru a verifica starea serviciului.

---

## **5. Gestionarea serviciului**

### **Comenzi PM2**

- Opriți serviciul:
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
