```markdown
---
title: Docker
order: 1
group: 
  title: Wdrażanie serwera
  order: 2
toc: content
---

## Instalacja Dockera

Uruchom poniższe polecenie, aby szybko zainstalować Dockera:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Szybki start

### Inicjalizacja przez interfejs webowy

PPanel obsługuje inicjalizację opartą na interfejsie webowym, co upraszcza proces ręcznej konfiguracji.

### Kroki inicjalizacji

1. **Utwórz niezbędny plik konfiguracyjny**: Najpierw ręcznie utwórz i skonfiguruj plik `/app/etc/ppanel.yaml`, aby przygotować się do dalszej konfiguracji.

2. **Uruchom kontener Dockera**:

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **Uzyskaj dostęp do strony inicjalizacji**: W przeglądarce przejdź do `http://adres_IP_serwera:8080/init`.

4. **Zakończ konfigurację**: Postępuj zgodnie z instrukcjami, aby ustawić konto administratora, skonfigurować bazę danych MySQL i serwer Redis.

5. **Kliknij przycisk inicjalizacji**: Po zakończeniu konfiguracji kliknij przycisk „Inicjalizuj”, a aplikacja automatycznie zapisze konfigurację i zrestartuje się.

   > **Uwaga**: PPanel domyślnie używa portu **8080**, upewnij się, że port ten jest dostępny, a w razie potrzeby dostosuj ustawienia zapory.

## Wdrażanie za pomocą Dockera

PPanel domyślnie używa portu **8080**, upewnij się, że port ten jest dostępny, a w razie potrzeby dostosuj ustawienia zapory.

Jeśli nie korzystasz z inicjalizacji webowej, możesz zalogować się za pomocą domyślnego konta administratora:

- **Nazwa użytkownika**: `admin@ppanel.dev`
- **Hasło**: `password`

> **Uwaga**: Po pierwszym logowaniu zmień domyślne hasło, aby zapewnić bezpieczeństwo.

### Utwórz niezbędny plik konfiguracyjny

Przed rozpoczęciem wdrażania Dockera najpierw ręcznie utwórz i skonfiguruj plik `/app/etc/ppanel.yaml`, aby zapewnić prawidłowe działanie systemu. Szczegółowe przykłady opcji konfiguracyjnych znajdziesz w sekcji [Przykłady opcji konfiguracyjnych](#przykłady-opcji-konfiguracyjnych).

### Uruchom kontener Dockera

Uruchom poniższe polecenie, aby uruchomić kontener:

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## Wdrażanie za pomocą Docker Compose

PPanel domyślnie używa portu **8080**, upewnij się, że port ten jest dostępny, a w razie potrzeby dostosuj ustawienia zapory.

### Utwórz niezbędny plik konfiguracyjny

Przed rozpoczęciem wdrażania za pomocą Docker Compose najpierw ręcznie utwórz i skonfiguruj plik `/app/etc/ppanel.yaml`, aby zapewnić prawidłowe działanie systemu. Szczegółowe przykłady opcji konfiguracyjnych znajdziesz w sekcji [Przykłady opcji konfiguracyjnych](#przykłady-opcji-konfiguracyjnych).

### Utwórz plik konfiguracyjny Docker Compose

Utwórz plik `docker-compose.yml`:

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### Uruchom usługę

Uruchom poniższe polecenie, aby uruchomić usługę:

```sh
docker compose up -d
```

## Ważne uwagi

- **Bezpieczeństwo**: Zmiana domyślnego hasła i kluczy jest niezbędna dla bezpieczeństwa aplikacji.
- **Konfiguracja portów**: Upewnij się, że niezbędne porty są otwarte, aby uniknąć problemów z dostępem do sieci.
- **Trwałość danych**: Zaleca się montowanie wolumenów danych podczas uruchamiania kontenerów, aby zapewnić trwałość danych.

## Przykłady opcji konfiguracyjnych

Poniżej znajduje się przykład opcji konfiguracyjnych dla `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # IP do nasłuchu
Port: 8080 # Port działania
Debug: true # Czy włączyć tryb debugowania
JwtAuth:
  AccessSecret: your-secret-key # Klucz tokena (proszę zmienić)
  AccessExpire: 604800 # Czas ważności tokena (sekundy)
Logger:
  FilePath: ./ppanel.log # Ścieżka do pliku logów
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Poziom logowania: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Adres bazy danych
  Dbname: vpnboard # Nazwa bazy danych
  Username: root # Nazwa użytkownika bazy danych
  Password: your-password # Hasło do bazy danych (proszę zmienić)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Hasło Redis (jeśli jest)
  DB: 0

Administer:
  Password: password # Hasło administratora (powinno być zmienione)
  Email: admin@ppanel.dev # Adres e-mail administratora
```

> **Uwaga**: Po dokonaniu zmian w pliku konfiguracyjnym, zrestartuj kontener Dockera, aby zastosować zmiany.

## Uzyskiwanie wsparcia

W przypadku problemów, prosimy o zapoznanie się z dokumentacją lub skontaktowanie się z zespołem wsparcia w celu uzyskania pomocy.
```

