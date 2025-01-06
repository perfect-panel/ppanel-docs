```markdown
---
title: Konfigurasjonsbeskrivelse
order: 0
group: 
  title: Serverdistribusjon
  order: 2
toc: content
---

## Krav til kjøreomgivelser

| Komponent       | Krav                                   |
| -------------- | -------------------------------------- |
| Serverkonfigurasjon | Minimum: 1 kjerne CPU, 2GB minne; Anbefalt: 2 kjerner CPU, 4GB minne |
| MySQL          | 5.7 eller høyere (Anbefalt MySQL 8)   |
| Redis          | 6 eller høyere                          |
| NGINX/Apache   | Valgfri versjon                        |

### Beskrivelse av konfigurasjonsfil

#### 1. Sti til konfigurasjonsfil

Standardsti for konfigurasjonsfilen er: `./etc/ppanel.yaml`, og kan spesifiseres med oppstartparameteren `--config`.

#### 2. Format på konfigurasjonsfil

- Konfigurasjonsfilen er i yaml-format, støtter kommentarer, og navngis som xxx.yaml.

```yaml
# Eksempel på konfigurasjonsfil
Host:               # Tjenestelyttadresse, standard: 0.0.0.0
Port:               # Tjenestelytteport, standard: 8080
Debug:              # Om debug-modus skal aktiveres, kan ikke bruke bakgrunnsloggfunksjonen når aktivert, standard: false
JwtAuth:            # JWT-autentiseringskonfigurasjon
  AccessSecret:     # Tilgangstoken-nøkkel, standard: tilfeldig generert
  AccessExpire:     # Utløpstid for tilgangstoken, i sekunder, standard: 604800
Logger:             # Loggkonfigurasjon
  FilePath:         # Sti til loggfil, standard: ./ppanel.log
  MaxSize:          # Maksimal størrelse på loggfil, i MB, standard: 50
  MaxBackup:        # Maksimalt antall sikkerhetskopier av loggfil, standard: 3
  MaxAge:           # Maksimal lagringstid for loggfil, i dager, standard: 30
  Compress:         # Om loggfilene skal komprimeres, standard: true
  Level:            # Loggnivå, standard: info, valgfrie: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL-adresse, påkrevd
  Username:         # MySQL-brukernavn, påkrevd
  Password:         # MySQL-passord, påkrevd
  Dbname:           # MySQL-databasenavn, påkrevd
  Config:           # Mysql konfigurasjonsstandarder charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maksimalt antall inaktive forbindelser, standard: 10
  MaxOpenConns:     # Maksimalt antall åpne forbindelser, standard: 100
  LogMode:          # Loggnivå, standard: info, valgfrie: debug, error, warn, info
  LogZap:           # Om zap-logg skal brukes for å registrere SQL, standard: true
  SlowThreshold:    # Terskel for langsomme spørringer, i millisekunder, standard: 1000
Redis:
  Host:             # Redis-adresse, standard: localhost:6379
  Pass:             # Redis-passord, standard: ""
  DB:               # Redis-database, standard: 0

Administer:
  Email:            # E-post for innlogging til administrasjon, standard: admin@ppanel.dev
  Password:         # Passord for innlogging til administrasjon, standard: password

```

#### 3. Beskrivelse av konfigurasjonsfil

- `Host`: Tjenestelyttadresse, standard: **0.0.0.0**
- `Port`: Tjenestelytteport, standard: **8080**
- `Debug`: Om debug-modus skal aktiveres, kan ikke bruke bakgrunnsloggfunksjonen når aktivert, standard: **false**
- `JwtAuth`: JWT-autentiseringskonfigurasjon
  - `AccessSecret`: Tilgangstoken-nøkkel, standard: **tilfeldig generert**
  - `AccessExpire`: Utløpstid for tilgangstoken, i sekunder, standard: **604800**
- `Logger`: Loggkonfigurasjon
- `FilePath`: Sti til loggfil, standard: **./ppanel.log**
- `MaxSize`: Maksimal størrelse på loggfil, i MB, standard: **50**
- `MaxBackup`: Maksimalt antall sikkerhetskopier av loggfil, standard: **3**
- `MaxAge`: Maksimal lagringstid for loggfil, i dager, standard: **30**
- `Compress`: Om loggfilene skal komprimeres, standard: **true**
- `Level`: Loggnivå, standard: **info**, valgfrie: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL-konfigurasjon
  - `Addr`: MySQL-adresse, påkrevd
  - `Username`: MySQL-brukernavn, påkrevd
  - `Password`: MySQL-passord, påkrevd
  - `Dbname`: MySQL-databasenavn, påkrevd
  - `Config`: Mysql konfigurasjonsstandarder charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maksimalt antall inaktive forbindelser, standard: **10**
  - `MaxOpenConns`: Maksimalt antall åpne forbindelser, standard: **100**
  - `LogMode`: Loggnivå, standard: **info**, valgfrie: **debug, error, warn, info**
  - `LogZap`: Om zap-logg skal brukes for å registrere SQL, standard: **true**
  - `SlowThreshold`: Terskel for langsomme spørringer, i millisekunder, standard: **1000**
- `Redis`: Redis-konfigurasjon
- `Host`: Redis-adresse, standard: **localhost:6379**
- `Pass`: Redis-passord, standard: **""**
- `DB`: Redis-database, standard: **0**
- `Administer`: Konfigurasjon for innlogging til administrasjon
  - `Email`: E-post for innlogging til administrasjon, standard: **<admin@ppanel.dev>**
  - `Password`: Passord for innlogging til administrasjon, standard: **password**

#### 4. Miljøvariabler

Støttede miljøvariabler er som følger:

| Miljøvariabel     | Konfigurasjonsalternativ | Eksempel                                      |
| ----------------- | ------------------------ | :------------------------------------------- |
| PPANEL\_DB       | MySQL-konfigurasjon      | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS    | Redis-konfigurasjon      | redis\://localhost:6379                      |
```

