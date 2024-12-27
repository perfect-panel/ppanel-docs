---
title: Szolgáltató
order: 2
nav:
  title: Útmutató
  order: 1
group:
  title: Telepítés
  order: 1
toc: content
---

## Futtatási környezet követelményei

| Komponens       | Követelmények                          |
| -------------- | ------------------------------------- |
| Szerver konfiguráció | Minimum: 1 mag CPU, 2GB memória; Ajánlott: 2 mag CPU, 4GB memória |
| MySQL          | 5.7 és újabb (ajánlott MySQL 8)     |
| Redis          | 6 és újabb                            |
| NGINX/Apache   | Bármilyen verzió                      |

## Docker telepítése

Futtassa az alábbi parancsot a Docker gyors telepítéséhez:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Gyors kezdés

### Webes felületen történő inicializálás

A PPanel támogatja a webalapú inicializálást, amely leegyszerűsíti a manuális konfigurációs folyamatot.

### Inicializálási lépések

1. **Kötelező konfigurációs fájl létrehozása**: Először manuálisan hozza létre és konfigurálja a `/app/etc/ppanel.yaml` fájlt a további konfigurációhoz.

2. **Docker konténer futtatása**:

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

3. **Inicializáló oldal elérése**: A böngészőben látogasson el a `http://szerverIP:8080/init` címre.

4. **Konfiguráció befejezése**: A megadott útmutató szerint állítsa be az adminisztrátori fiókot, a MySQL adatbázist és a Redis szervert.

5. **Inicializáló gomb megnyomása**: A konfiguráció befejezése után kattintson az "Inicializálás" gombra, az alkalmazás automatikusan elmenti a konfigurációt és újraindul.

   > **Megjegyzés**: A PPanel alapértelmezés szerint a **8080** portot használja, kérjük, győződjön meg arról, hogy ez a port elérhető, szükség esetén módosítsa a tűzfal beállításait.

## Docker használata a telepítéshez

A PPanel alapértelmezés szerint a **8080** portot használja, kérjük, győződjön meg arról, hogy ez a port elérhető, szükség esetén módosítsa a tűzfal beállításait.

Ha nem használja a webes inicializálást, bejelentkezhet az alapértelmezett adminisztrátori fiókkal:

- **Felhasználónév**: `admin@ppanel.dev`
- **Jelszó**: `password`

> **Megjegyzés**: Az első bejelentkezés után kérjük, azonnal változtassa meg az alapértelmezett jelszót a biztonság érdekében.

### Kötelező konfigurációs fájl létrehozása

A Docker telepítése előtt először manuálisan hozza létre és konfigurálja a `/app/etc/ppanel.yaml` fájlt, hogy a rendszer megfelelően működjön. A részletes konfigurációs példákért kérjük, nézze meg a dokumentáció [konfigurációs példák](#konfigurációs-példák) szakaszát.

### Docker konténer futtatása

Futtassa az alábbi parancsot a konténer indításához:

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

## Docker Compose használata a telepítéshez

A PPanel alapértelmezés szerint a **8080** portot használja, kérjük, győződjön meg arról, hogy ez a port elérhető, szükség esetén módosítsa a tűzfal beállításait.

### Kötelező konfigurációs fájl létrehozása

A Docker Compose telepítése előtt először manuálisan hozza létre és konfigurálja a `/app/etc/ppanel.yaml` fájlt, hogy a rendszer megfelelően működjön. A részletes konfigurációs példákért kérjük, nézze meg a dokumentáció [konfigurációs példák](#konfigurációs-példák) szakaszát.

### Docker Compose konfigurációs fájl létrehozása

Hozza létre a `docker-compose.yml` fájlt:

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

### Szolgáltatás indítása

Futtassa az alábbi parancsot a szolgáltatás indításához:

```sh
docker compose up -d
```

## Fontos megjegyzések

- **Biztonság**: Kérjük, feltétlenül változtassa meg az alapértelmezett jelszót és kulcsokat a biztonság érdekében.
- **Port konfiguráció**: Győződjön meg arról, hogy a szükséges portok nyitva vannak, hogy elkerülje a hálózati hozzáférési problémákat.
- **Adatmegőrzés**: Javasoljuk, hogy a konténer futtatása során csatolja az adatkötegeket az adatok megőrzése érdekében.

## Konfigurációs példák

Az alábbiakban bemutatjuk a `ppanel.yaml` konfigurációs példáit:

```yaml
Host: 0.0.0.0 # Figyelési IP
Port: 8080 # Futtatási port
Debug: true # Hibakeresési mód engedélyezése
JwtAuth:
  AccessSecret: your-secret-key # Token kulcs (kérjük, módosítsa)
  AccessExpire: 604800 # Token érvényességi idő (másodperc)
Logger:
  FilePath: ./ppanel.log # Naplófájl elérési útja
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Napló szint: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Adatbázis címe
  Dbname: vpnboard # Adatbázis neve
  Username: root # Adatbázis felhasználónév
  Password: your-password # Adatbázis jelszó (kérjük, módosítsa)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis jelszó (ha van)
  DB: 0

Administer:
  Password: password # Adminisztrátori jelszó (kérjük, módosítsa)
  Email: admin@ppanel.dev # Adminisztrátori e-mail cím
```

> **Megjegyzés**: A konfigurációs fájl módosítása után kérjük, indítsa újra a Docker konténert a változtatások alkalmazásához.

## Támogatás kérése

Ha problémába ütközik, kérjük, nézze meg a hivatalos dokumentációt, vagy lépjen kapcsolatba a támogatási csapattal segítségért.

