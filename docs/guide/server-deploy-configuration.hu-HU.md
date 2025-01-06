---
title: Konfigurációs útmutató
order: 0
group: 
  title: Szolgáltató telepítése
  order: 2
toc: content
---

## Futási környezet követelményei

| Komponens       | Követelmények                          |
| -------------- | ------------------------------------- |
| Szerver konfiguráció | Minimum: 1 mag CPU, 2GB memória; Ajánlott: 2 mag CPU, 4GB memória |
| MySQL          | 5.7 vagy újabb (ajánlott MySQL 8)    |
| Redis          | 6 vagy újabb                          |
| NGINX/Apache   | Bármilyen verzió                      |

### Konfigurációs fájl leírása

#### 1. Konfigurációs fájl elérési útja

A konfigurációs fájl alapértelmezett elérési útja: `./etc/ppanel.yaml`, amelyet a `--config` indítási paraméterrel lehet megadni.

#### 2. Konfigurációs fájl formátuma

- A konfigurációs fájl yaml formátumú, támogatja a megjegyzéseket, neve: xxx.yaml.

```yaml
# Konfigurációs fájl példa
Host:               # Szolgáltatás figyelési címe, alapértelmezett: 0.0.0.0
Port:               # Szolgáltatás figyelési portja, alapértelmezett: 8080
Debug:              # Hibakeresési mód engedélyezése, engedélyezés után a háttér naplózási funkció nem használható, alapértelmezett: false
JwtAuth:            # JWT hitelesítési konfiguráció
  AccessSecret:     # Hozzáférési token titkos kulcs, alapértelmezett: véletlenszerűen generált
  AccessExpire:     # Hozzáférési token lejárati ideje, másodpercben, alapértelmezett: 604800
Logger:             # Naplózási konfiguráció
  FilePath:         # Naplófájl elérési útja, alapértelmezett: ./ppanel.log
  MaxSize:          # Naplófájl maximális mérete, MB-ban, alapértelmezett: 50
  MaxBackup:        # Naplófájl maximális mentési száma, alapértelmezett: 3
  MaxAge:           # Naplófájl maximális megőrzési ideje, napokban, alapértelmezett: 30
  Compress:         # Naplófájl tömörítése, alapértelmezett: true
  Level:            # Naplózási szint, alapértelmezett: info, választható: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL cím, kötelező
  Username:         # MySQL felhasználónév, kötelező
  Password:         # MySQL jelszó, kötelező
  Dbname:           # MySQL adatbázis név, kötelező
  Config:           # Mysql alapértelmezett konfiguráció charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maximális inaktív kapcsolatok száma, alapértelmezett: 10
  MaxOpenConns:     # Maximális nyitott kapcsolatok száma, alapértelmezett: 100
  LogMode:          # Naplózási szint, alapértelmezett: info, választható: debug, error, warn, info
  LogZap:           # Zap naplózás használata SQL-hez, alapértelmezett: true
  SlowThreshold:    # Lassú lekérdezési küszöb, milliszekundumban, alapértelmezett: 1000
Redis:
  Host:             # Redis cím, alapértelmezett: localhost:6379
  Pass:             # Redis jelszó, alapértelmezett: ""
  DB:               # Redis adatbázis, alapértelmezett: 0

Administer:
  Email:            # Háttérbe való bejelentkezés e-mail címe, alapértelmezett: admin@ppanel.dev
  Password:         # Háttérbe való bejelentkezés jelszava, alapértelmezett: password

```

#### 3. Konfigurációs fájl leírása

- `Host`: Szolgáltatás figyelési címe, alapértelmezett: **0.0.0.0**
- `Port`: Szolgáltatás figyelési portja, alapértelmezett: **8080**
- `Debug`: Hibakeresési mód engedélyezése, engedélyezés után a háttér naplózási funkció nem használható, alapértelmezett: **false**
- `JwtAuth`: JWT hitelesítési konfiguráció
  - `AccessSecret`: Hozzáférési token titkos kulcs, alapértelmezett: **véletlenszerűen generált**
  - `AccessExpire`: Hozzáférési token lejárati ideje, másodpercben, alapértelmezett: **604800**
- `Logger`: Naplózási konfiguráció
- `FilePath`: Naplófájl elérési útja, alapértelmezett: **./ppanel.log**
- `MaxSize`: Naplófájl maximális mérete, MB-ban, alapértelmezett: **50**
- `MaxBackup`: Naplófájl maximális mentési száma, alapértelmezett: **3**
- `MaxAge`: Naplófájl maximális megőrzési ideje, napokban, alapértelmezett: **30**
- `Compress`: Naplófájl tömörítése, alapértelmezett: **true**
- `Level`: Naplózási szint, alapértelmezett: **info**, választható: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL konfiguráció
  - `Addr`: MySQL cím, kötelező
  - `Username`: MySQL felhasználónév, kötelező
  - `Password`: MySQL jelszó, kötelező
  - `Dbname`: MySQL adatbázis név, kötelező
  - `Config`: Mysql alapértelmezett konfiguráció charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maximális inaktív kapcsolatok száma, alapértelmezett: **10**
  - `MaxOpenConns`: Maximális nyitott kapcsolatok száma, alapértelmezett: **100**
  - `LogMode`: Naplózási szint, alapértelmezett: **info**, választható: **debug, error, warn, info**
  - `LogZap`: Zap naplózás használata SQL-hez, alapértelmezett: **true**
  - `SlowThreshold`: Lassú lekérdezési küszöb, milliszekundumban, alapértelmezett: **1000**
- `Redis`: Redis konfiguráció
- `Host`: Redis cím, alapértelmezett: **localhost:6379**
- `Pass`: Redis jelszó, alapértelmezett: **""**
- `DB`: Redis adatbázis, alapértelmezett: **0**
- `Administer`: Háttérbe való bejelentkezés konfiguráció
  - `Email`: Háttérbe való bejelentkezés e-mail címe, alapértelmezett: **<admin@ppanel.dev>**
  - `Password`: Háttérbe való bejelentkezés jelszava, alapértelmezett: **password**

#### 4. Környezeti változók

A támogatott környezeti változók a következők:

| Környezeti változó | Konfigurációs elem | Példa                                          |
| ----------------- | ------------------ | :-------------------------------------------- |
| PPANEL\_DB       | MySQL konfiguráció  | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS    | Redis konfiguráció  | redis\://localhost:6379                       |

