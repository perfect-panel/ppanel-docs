```markdown
---
title: Konfigurační pokyny
order: 0
group: 
  title: Nasazení serveru
  order: 2
toc: content
---

## Požadavky na běhové prostředí

| Komponenta      | Požadavek                               |
| --------------- | --------------------------------------- |
| Konfigurace serveru | Minimálně: 1 jádro CPU, 2 GB RAM; Doporučeno: 2 jádra CPU, 4 GB RAM |
| MySQL           | 5.7 a vyšší (doporučeno MySQL 8)      |
| Redis           | 6 a vyšší                               |
| NGINX/Apache    | Libovolná verze                        |

### Popis konfiguračního souboru

#### 1. Cesta k konfiguračnímu souboru

Výchozí cesta k konfiguračnímu souboru je: `./etc/ppanel.yaml`, lze ji specifikovat pomocí spouštěcího parametru `--config`.

#### 2. Formát konfiguračního souboru

- Konfigurační soubor je ve formátu YAML, podporuje komentáře, pojmenován jako xxx.yaml.

```yaml
# Příklad konfiguračního souboru
Host:               # Adresa pro naslouchání služby, výchozí: 0.0.0.0
Port:               # Port pro naslouchání služby, výchozí: 8080
Debug:              # Zda povolit režim ladění, po povolení nelze používat funkci protokolování na pozadí, výchozí: false
JwtAuth:            # Konfigurace JWT ověřování
  AccessSecret:     # Klíč pro přístupový token, výchozí: generováno náhodně
  AccessExpire:     # Doba platnosti přístupového tokenu, v sekundách, výchozí: 604800
Logger:             # Konfigurace protokolování
  FilePath:         # Cesta k protokolovacímu souboru, výchozí: ./ppanel.log
  MaxSize:          # Maximální velikost protokolovacího souboru, v MB, výchozí: 50
  MaxBackup:        # Maximální počet záloh protokolovacího souboru, výchozí: 3
  MaxAge:           # Maximální doba uchovávání protokolovacího souboru, v dnech, výchozí: 30
  Compress:         # Zda komprimovat protokolovací soubor, výchozí: true
  Level:            # Úroveň protokolování, výchozí: info, volitelné: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Adresa MySQL, povinné
  Username:         # Uživatelské jméno MySQL, povinné
  Password:         # Heslo MySQL, povinné
  Dbname:           # Název databáze MySQL, povinné
  Config:           # Výchozí hodnoty konfigurace MySQL charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maximální počet nečinných připojení, výchozí: 10
  MaxOpenConns:     # Maximální počet otevřených připojení, výchozí: 100
  LogMode:          # Úroveň protokolování, výchozí: info, volitelné: debug, error, warn, info
  LogZap:           # Zda používat zap pro protokolování SQL, výchozí: true
  SlowThreshold:    # Prah pro pomalé dotazy, v milisekundách, výchozí: 1000
Redis:
  Host:             # Adresa Redis, výchozí: localhost:6379
  Pass:             # Heslo Redis, výchozí: ""
  DB:               # Databáze Redis, výchozí: 0

Administer:
  Email:            # E-mail pro přihlášení do administrace, výchozí: admin@ppanel.dev
  Password:         # Heslo pro přihlášení do administrace, výchozí: password

```

#### 3. Popis konfiguračního souboru

- `Host`: Adresa pro naslouchání služby, výchozí: **0.0.0.0**
- `Port`: Port pro naslouchání služby, výchozí: **8080**
- `Debug`: Zda povolit režim ladění, po povolení nelze používat funkci protokolování na pozadí, výchozí: **false**
- `JwtAuth`: Konfigurace JWT ověřování
  - `AccessSecret`: Klíč pro přístupový token, výchozí: **náhodně generováno**
  - `AccessExpire`: Doba platnosti přístupového tokenu, v sekundách, výchozí: **604800**
- `Logger`: Konfigurace protokolování
- `FilePath`: Cesta k protokolovacímu souboru, výchozí: **./ppanel.log**
- `MaxSize`: Maximální velikost protokolovacího souboru, v MB, výchozí: **50**
- `MaxBackup`: Maximální počet záloh protokolovacího souboru, výchozí: **3**
- `MaxAge`: Maximální doba uchovávání protokolovacího souboru, v dnech, výchozí: **30**
- `Compress`: Zda komprimovat protokolovací soubor, výchozí: **true**
- `Level`: Úroveň protokolování, výchozí: **info**, volitelné: **debug, info, warn, error, panic, fatal**
- `MySQL`: Konfigurace MySQL
  - `Addr`: Adresa MySQL, povinné
  - `Username`: Uživatelské jméno MySQL, povinné
  - `Password`: Heslo MySQL, povinné
  - `Dbname`: Název databáze MySQL, povinné
  - `Config`: Výchozí hodnoty konfigurace MySQL charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maximální počet nečinných připojení, výchozí: **10**
  - `MaxOpenConns`: Maximální počet otevřených připojení, výchozí: **100**
  - `LogMode`: Úroveň protokolování, výchozí: **info**, volitelné: **debug, error, warn, info**
  - `LogZap`: Zda používat zap pro protokolování SQL, výchozí: **true**
  - `SlowThreshold`: Prah pro pomalé dotazy, v milisekundách, výchozí: **1000**
- `Redis`: Konfigurace Redis
- `Host`: Adresa Redis, výchozí: **localhost:6379**
- `Pass`: Heslo Redis, výchozí: **""**
- `DB`: Databáze Redis, výchozí: **0**
- `Administer`: Konfigurace pro přihlášení do administrace
  - `Email`: E-mail pro přihlášení do administrace, výchozí: **<admin@ppanel.dev>**
  - `Password`: Heslo pro přihlášení do administrace, výchozí: **password**

#### 4. Proměnné prostředí

Podporované proměnné prostředí jsou následující:

| Proměnná prostředí | Konfigurační položka | Příklad                                      |
| ----------------- | -------------------- | :------------------------------------------ |
| PPANEL\_DB        | Konfigurace MySQL    | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS     | Konfigurace Redis     | redis\://localhost:6379                     |
```

