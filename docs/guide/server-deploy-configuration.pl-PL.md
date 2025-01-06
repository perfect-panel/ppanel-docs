```markdown
---
title: Opis konfiguracji
order: 0
group: 
  title: Wdrożenie serwera
  order: 2
toc: content
---

## Wymagania dotyczące środowiska uruchomieniowego

| Komponent       | Wymagania                                |
| -------------- | ---------------------------------------- |
| Konfiguracja serwera | Minimalne: 1 rdzeń CPU, 2 GB pamięci; Zalecane: 2 rdzenie CPU, 4 GB pamięci |
| MySQL          | 5.7 i wyższe (zalecane MySQL 8)        |
| Redis          | 6 i wyższe                               |
| NGINX/Apache   | Dowolna wersja                          |

### Opis pliku konfiguracyjnego

#### 1. Ścieżka do pliku konfiguracyjnego

Domyślna ścieżka do pliku konfiguracyjnego to: `./etc/ppanel.yaml`, można ją określić za pomocą parametru uruchamiania `--config`.

#### 2. Format pliku konfiguracyjnego

- Plik konfiguracyjny jest w formacie YAML, obsługuje komentarze, nazywa się xxx.yaml.

```yaml
# Przykład pliku konfiguracyjnego
Host:               # Adres nasłuchujący serwisu, domyślnie: 0.0.0.0
Port:               # Port nasłuchujący serwisu, domyślnie: 8080
Debug:              # Czy włączyć tryb debugowania, po włączeniu nie można korzystać z funkcji logowania w tle, domyślnie: false
JwtAuth:            # Konfiguracja uwierzytelniania JWT
  AccessSecret:     # Klucz tokena dostępu, domyślnie: generowany losowo
  AccessExpire:     # Czas wygaśnięcia tokena dostępu, jednostka sekundy, domyślnie: 604800
Logger:             # Konfiguracja logowania
  FilePath:         # Ścieżka do pliku logów, domyślnie: ./ppanel.log
  MaxSize:          # Maksymalny rozmiar pliku logów, jednostka MB, domyślnie: 50
  MaxBackup:        # Maksymalna liczba kopii zapasowych pliku logów, domyślnie: 3
  MaxAge:           # Maksymalny czas przechowywania pliku logów, jednostka dni, domyślnie: 30
  Compress:         # Czy kompresować pliki logów, domyślnie: true
  Level:            # Poziom logowania, domyślnie: info, opcjonalne: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Adres MySQL, wymagane
  Username:         # Nazwa użytkownika MySQL, wymagane
  Password:         # Hasło MySQL, wymagane
  Dbname:           # Nazwa bazy danych MySQL, wymagane
  Config:           # Domyślne wartości konfiguracji MySQL charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maksymalna liczba połączeń bezczynnych, domyślnie: 10
  MaxOpenConns:     # Maksymalna liczba otwartych połączeń, domyślnie: 100
  LogMode:          # Poziom logowania, domyślnie: info, opcjonalne: debug, error, warn, info
  LogZap:           # Czy używać zap do rejestrowania SQL, domyślnie: true
  SlowThreshold:    # Próg wolnych zapytań, jednostka milisekundy, domyślnie: 1000
Redis:
  Host:             # Adres Redis, domyślnie: localhost:6379
  Pass:             # Hasło Redis, domyślnie: ""
  DB:               # Baza danych Redis, domyślnie: 0

Administer:
  Email:            # E-mail do logowania w panelu administracyjnym, domyślnie: admin@ppanel.dev
  Password:         # Hasło do logowania w panelu administracyjnym, domyślnie: password

```

#### 3. Opis pliku konfiguracyjnego

- `Host`: Adres nasłuchujący serwisu, domyślnie: **0.0.0.0**
- `Port`: Port nasłuchujący serwisu, domyślnie: **8080**
- `Debug`: Czy włączyć tryb debugowania, po włączeniu nie można korzystać z funkcji logowania w tle, domyślnie: **false**
- `JwtAuth`: Konfiguracja uwierzytelniania JWT
  - `AccessSecret`: Klucz tokena dostępu, domyślnie: **generowany losowo**
  - `AccessExpire`: Czas wygaśnięcia tokena dostępu, jednostka sekundy, domyślnie: **604800**
- `Logger`: Konfiguracja logowania
- `FilePath`: Ścieżka do pliku logów, domyślnie: **./ppanel.log**
- `MaxSize`: Maksymalny rozmiar pliku logów, jednostka MB, domyślnie: **50**
- `MaxBackup`: Maksymalna liczba kopii zapasowych pliku logów, domyślnie: **3**
- `MaxAge`: Maksymalny czas przechowywania pliku logów, jednostka dni, domyślnie: **30**
- `Compress`: Czy kompresować pliki logów, domyślnie: **true**
- `Level`: Poziom logowania, domyślnie: **info**, opcjonalne: **debug, info, warn, error, panic, fatal**
- `MySQL`: Konfiguracja MySQL
  - `Addr`: Adres MySQL, wymagane
  - `Username`: Nazwa użytkownika MySQL, wymagane
  - `Password`: Hasło MySQL, wymagane
  - `Dbname`: Nazwa bazy danych MySQL, wymagane
  - `Config`: Domyślne wartości konfiguracji MySQL charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maksymalna liczba połączeń bezczynnych, domyślnie: **10**
  - `MaxOpenConns`: Maksymalna liczba otwartych połączeń, domyślnie: **100**
  - `LogMode`: Poziom logowania, domyślnie: **info**, opcjonalne: **debug, error, warn, info**
  - `LogZap`: Czy używać zap do rejestrowania SQL, domyślnie: **true**
  - `SlowThreshold`: Próg wolnych zapytań, jednostka milisekundy, domyślnie: **1000**
- `Redis`: Konfiguracja Redis
- `Host`: Adres Redis, domyślnie: **localhost:6379**
- `Pass`: Hasło Redis, domyślnie: **""**
- `DB`: Baza danych Redis, domyślnie: **0**
- `Administer`: Konfiguracja logowania w panelu administracyjnym
  - `Email`: E-mail do logowania w panelu administracyjnym, domyślnie: **<admin@ppanel.dev>**
  - `Password`: Hasło do logowania w panelu administracyjnym, domyślnie: **password**

#### 4. Zmienne środowiskowe

Obsługiwane zmienne środowiskowe są następujące:

| Zmienna środowiskowa | Element konfiguracji | Przykład                                      |
| ------------------- | ------------------- | :------------------------------------------- |
| PPANEL\_DB          | Konfiguracja MySQL  | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS       | Konfiguracja Redis   | redis://localhost:6379                       |
```

