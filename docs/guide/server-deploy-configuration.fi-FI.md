```markdown
---
title: Konfigurointiohjeet
order: 0
group: 
  title: Palvelimen käyttöönotto
  order: 2
toc: content
---

## Käyttöympäristön vaatimukset

| Komponentti     | Vaatimus                                  |
| -------------- | ----------------------------------------- |
| Palvelinkonfiguraatio | Vähintään: 1 ydin CPU, 2GB muistia; Suositus: 2 ydintä CPU, 4GB muistia |
| MySQL          | 5.7 tai uudempi (suositus MySQL 8)      |
| Redis          | 6 tai uudempi                            |
| NGINX/Apache   | Mikä tahansa versio                      |

### Konfiguraatiotiedoston selitys

#### 1. Konfiguraatiotiedoston polku

Konfiguraatiotiedoston oletuspolku on: `./etc/ppanel.yaml`, ja sen voi määrittää käynnistysparametrilla `--config`.

#### 2. Konfiguraatiotiedoston muoto

- Konfiguraatiotiedosto on yaml-muodossa, tukee kommentteja, nimetty xxx.yaml.

```yaml
# Konfiguraatiotiedoston esimerkki
Host:               # Palvelun kuunteluosoite, oletus: 0.0.0.0
Port:               # Palvelun kuuntelusäie, oletus: 8080
Debug:              # Onko virheenkorjaustila käytössä, käytössä ollessa taustalokin toiminto ei ole käytettävissä, oletus: false
JwtAuth:            # JWT-todennuskonfiguraatio
  AccessSecret:     # Käyttöoikeustunnuksen salaisuus, oletus: satunnaisesti luotu
  AccessExpire:     # Käyttöoikeustunnuksen vanhenemisaika, yksikkö sekunteina, oletus: 604800
Logger:             # Lokikonfiguraatio
  FilePath:         # Lokitiedoston polku, oletus: ./ppanel.log
  MaxSize:          # Lokitiedoston enimmäiskoko, yksikkö MB, oletus: 50
  MaxBackup:        # Lokitiedoston enimmäisvarastomäärä, oletus: 3
  MaxAge:           # Lokitiedoston enimmäissäilytysaika, yksikkö päivinä, oletus: 30
  Compress:         # Onko lokitiedosto pakattu, oletus: true
  Level:            # Lokitaso, oletus: info, valinnat: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL-osoite, pakollinen
  Username:         # MySQL-käyttäjänimi, pakollinen
  Password:         # MySQL-salasana, pakollinen
  Dbname:           # MySQL-tietokannan nimi, pakollinen
  Config:           # Mysql-konfiguraation oletusarvo charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Enimmäislepäävien yhteyksien määrä, oletus: 10
  MaxOpenConns:     # Enimmäisavattujen yhteyksien määrä, oletus: 100
  LogMode:          # Lokitaso, oletus: info, valinnat: debug, error, warn, info
  LogZap:           # Käytetäänkö zap-lokikirjausta sql:lle, oletus: true
  SlowThreshold:    # Hidas kyselyraja, yksikkö millisekunteina, oletus: 1000
Redis:
  Host:             # Redis-osoite, oletus: localhost:6379
  Pass:             # Redis-salasana, oletus: ""
  DB:               # Redis-tietokanta, oletus: 0

Administer:
  Email:            # Taustakirjautumisen sähköposti, oletus: admin@ppanel.dev
  Password:         # Taustakirjautumisen salasana, oletus: password

```

#### 3. Konfiguraatiotiedoston selitys

- `Host`: Palvelun kuunteluosoite, oletus: **0.0.0.0**
- `Port`: Palvelun kuuntelusäie, oletus: **8080**
- `Debug`: Onko virheenkorjaustila käytössä, käytössä ollessa taustalokin toiminto ei ole käytettävissä, oletus: **false**
- `JwtAuth`: JWT-todennuskonfiguraatio
  - `AccessSecret`: Käyttöoikeustunnuksen salaisuus, oletus: **satunnaisesti luotu**
  - `AccessExpire`: Käyttöoikeustunnuksen vanhenemisaika, yksikkö sekunteina, oletus: **604800**
- `Logger`: Lokikonfiguraatio
- `FilePath`: Lokitiedoston polku, oletus: **./ppanel.log**
- `MaxSize`: Lokitiedoston enimmäiskoko, yksikkö MB, oletus: **50**
- `MaxBackup`: Lokitiedoston enimmäisvarastomäärä, oletus: **3**
- `MaxAge`: Lokitiedoston enimmäissäilytysaika, yksikkö päivinä, oletus: **30**
- `Compress`: Onko lokitiedosto pakattu, oletus: **true**
- `Level`: Lokitaso, oletus: **info**, valinnat: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL-konfiguraatio
  - `Addr`: MySQL-osoite, pakollinen
  - `Username`: MySQL-käyttäjänimi, pakollinen
  - `Password`: MySQL-salasana, pakollinen
  - `Dbname`: MySQL-tietokannan nimi, pakollinen
  - `Config`: Mysql-konfiguraation oletusarvo charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Enimmäislepäävien yhteyksien määrä, oletus: **10**
  - `MaxOpenConns`: Enimmäisavattujen yhteyksien määrä, oletus: **100**
  - `LogMode`: Lokitaso, oletus: **info**, valinnat: **debug, error, warn, info**
  - `LogZap`: Käytetäänkö zap-lokikirjausta sql:lle, oletus: **true**
  - `SlowThreshold`: Hidas kyselyraja, yksikkö millisekunteina, oletus: **1000**
- `Redis`: Redis-konfiguraatio
- `Host`: Redis-osoite, oletus: **localhost:6379**
- `Pass`: Redis-salasana, oletus: **""**
- `DB`: Redis-tietokanta, oletus: **0**
- `Administer`: Taustakirjautumisen konfiguraatio
  - `Email`: Taustakirjautumisen sähköposti, oletus: **<admin@ppanel.dev>**
  - `Password`: Taustakirjautumisen salasana, oletus: **password**

#### 4. Ympäristömuuttujat

Tuetut ympäristömuuttujat ovat seuraavat:

| Ympäristömuuttuja | Konfiguraatio | Esimerkki                                      |
| ---------------- | ------------- | :--------------------------------------------- |
| PPANEL\_DB      | MySQL-konfiguraatio | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS   | Redis-konfiguraatio | redis\://localhost:6379                       |
```

