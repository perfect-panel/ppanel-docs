---
title: Klient - Node
order: 6
group: 
  title: Wdrażanie front-endu
  order: 3
toc: content
---

### Wdrażanie za pomocą PM2, Node.js lub Bun

#### Pobieranie kodu

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

Utwórz plik `apps/user/.env` i dodaj niezbędne zmienne środowiskowe (zobacz powyższą sekcję o konfiguracji zmiennych środowiskowych).

#### Konfiguracja PM2

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

#### Uruchamianie usługi za pomocą PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Uruchamianie usługi za pomocą Node.js lub Bun

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

Uruchom poniższe polecenie, aby sprawdzić:

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

