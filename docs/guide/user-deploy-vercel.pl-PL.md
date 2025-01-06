---
title: Klient - Vercel
order: 7
group: 
  title: Wdrażanie front-endu
  order: 3
toc: content
---

### Wdrażanie za pomocą Vercel\*\*

Kliknij przycisk poniżej, aby szybko wdrożyć:

[![Wdróż na Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20to%20czysty%2C%20profesjonalny%2C%20i%20doskonały%20otwarty%20panel%20proxy%2C%20zaprojektowany%20jako%20idealny%20wybór%20do%20nauki%20i%20praktycznego%20użytku\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20użytkownika%20Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**Kroki:**

1. Zaloguj się lub zarejestruj na [Vercel](https://vercel.com/) .
2. Kliknij przycisk wdrożenia, sklonuj repozytorium i wybierz `apps/user`.
3. Skonfiguruj zmienne środowiskowe.
4. Kliknij **Wdróż**, aby rozpocząć wdrażanie.

---

### **3.3 Wdrażanie za pomocą PM2, Node.js lub Bun**

#### Pobierz kod

Pobierz kod z oficjalnego repozytorium GitHub:

```bash
# Pobierz najnowszą wersję kodu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Rozpakuj plik
tar -xzvf ppanel-user-web.tar.gz

# Wejdź do katalogu z kodem
cd ppanel-user-web
```

#### Skonfiguruj zmienne środowiskowe

Utwórz plik `apps/user/.env` i dodaj niezbędne zmienne środowiskowe (zobacz powyższą konfigurację zmiennych środowiskowych).

#### Skonfiguruj PM2

Utwórz plik `ecosystem.config.js` z następującą zawartością:

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

#### Uruchom usługę za pomocą PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

