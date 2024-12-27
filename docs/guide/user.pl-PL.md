---
title: Klient PPanel
order: 4
nav:
  title: Przewodnik
  order: 1
group:
  title: Wdrożenie
  order: 1
toc: content
---

# **Przewodnik wdrożenia klienta PPanel**

Niniejszy przewodnik szczegółowo opisuje, jak wdrożyć klienta PPanel, w tym różne metody wdrożenia za pomocą Docker, Vercel, PM2 oraz bezpośrednio przy użyciu Node.js lub Bun.

---

## **1. Przygotowanie środowiska**

Przed wdrożeniem upewnij się, że następujące narzędzia są zainstalowane:

- **Node.js** (zalecana instalacja przez NVM, wersja >= 22)
- **Bun** (szybkie środowisko uruchomieniowe JavaScript)
- **PM2** (narzędzie do zarządzania procesami, służące do efektywnego zarządzania usługami)
- **Docker** (do wdrożeń w kontenerach)

---

## **2. Konfiguracja zmiennych środowiskowych**

Przed wdrożeniem musisz skonfigurować następujące zmienne środowiskowe:

```env
# Konfiguracja aplikacji
NEXT_PUBLIC_DEFAULT_LANGUAGE=pl-PL
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Informacje kontaktowe
NEXT_PUBLIC_EMAIL=support@example.com

# Linki do społeczności i mediów społecznościowych
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Domyślny użytkownik
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Opcje wdrożenia**

### **3.1 Wdrożenie za pomocą Docker**

#### Instalacja Docker

Uruchom następujące polecenie, aby zainstalować Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Uruchomienie usługi za pomocą Docker

Uruchom następujące polecenie, aby uruchomić kontener:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=pl-PL \
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

#### Wdrożenie za pomocą Docker Compose

Utwórz plik `docker-compose.yml` o następującej treści:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: pl-PL
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

Uruchom usługę:

```bash
docker compose up -d
```

---

### **3.2 Wdrożenie za pomocą Vercel**

Kliknij poniższy przycisk, aby szybko wdrożyć:
[![Wdrożenie za pomocą Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20to%20czysty%2C%20profesjonalny%2C%20i%20doskonały%20otwarty%20panel%20proxy%20narzędzie%2C%20zaprojektowane%20jako%20idealny%20wybór%20do%20nauki%20i%20praktycznego%20użytku&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Kroki:**

1. Zaloguj się lub zarejestruj na [Vercel](https://vercel.com/) .
2. Kliknij przycisk wdrożenia, aby sklonować repozytorium i wybrać `apps/user`.
3. Skonfiguruj zmienne środowiskowe.
4. Kliknij **Deploy**, aby rozpocząć wdrożenie.

---

### **3.3 Wdrożenie za pomocą PM2, Node.js lub Bun**

#### Pobranie kodu

Pobierz kod z oficjalnego repozytorium GitHub:

```bash
# Pobierz najnowszą wersję kodu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Rozpakuj plik
tar -xzvf ppanel-user-web.tar.gz

# Wejdź do katalogu z kodem
cd ppanel-user-web
```

#### Konfiguracja zmiennych środowiskowych

Utwórz plik `apps/user/.env` i dodaj niezbędne zmienne środowiskowe (zgodnie z powyższą konfiguracją zmiennych środowiskowych).

#### Konfiguracja PM2

Utwórz plik `ecosystem.config.js` o następującej treści:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // można zmienić na node
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

#### Uruchomienie usługi za pomocą PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Uruchomienie usługi za pomocą Node.js lub Bun

- **Uruchomienie za pomocą Node.js**:
  ```bash
  node apps/user/server.js
  ```
- **Uruchomienie za pomocą Bun**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Weryfikacja wdrożenia**

### **4.1 Stan usługi PM2**

Uruchom następujące polecenie, aby sprawdzić:

```bash
pm2 list
```

### **4.2 Dostęp przez przeglądarkę**

Odwiedź `http://<Twój adres IP serwera>:3000`, aby zweryfikować działanie usługi.

---

## **5. Zarządzanie usługą**

### **Polecenia PM2**

- Zatrzymaj usługę:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Uruchom ponownie usługę:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Usuń usługę:
  ```bash
  pm2 delete ppanel-user-web
  ```
