---
title: Panel zarządzania - Node
order: 3
group: 
  title: Wdrażanie front-endu
  order: 3
toc: content
---

### Wdrażanie za pomocą PM2, Node.js lub Bun

#### Pobierz kod

Pobierz kod z oficjalnego repozytorium GitHub:

```bash
# Pobierz najnowszą wersję kodu
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Rozpakuj plik
tar -xzvf ppanel-admin-web.tar.gz

# Wejdź do katalogu z kodem
cd ppanel-admin-web
```

#### Skonfiguruj zmienne środowiskowe

Utwórz plik `apps/admin/.env` i dodaj niezbędne zmienne środowiskowe (zobacz powyższe informacje o konfiguracji zmiennych środowiskowych).

#### Skonfiguruj PM2

Utwórz plik `ecosystem.config.js` z następującą zawartością:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### Uruchom usługę za pomocą Node.js lub Bun

- **Uruchomienie za pomocą Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Uruchomienie za pomocą Bun**:
  ```bash
  bun apps/admin/server.js
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
  pm2 stop ppanel-admin-web
  ```
- Uruchom ponownie usługę:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Usuń usługę:
  ```bash
  pm2 delete ppanel-admin-web
  ```

