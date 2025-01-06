```markdown
---
title: Instrucțiuni de configurare
order: 0
group: 
  title: Implementare server
  order: 2
toc: content
---

## Cerințe de mediu

| Componentă       | Cerințe                                  |
| ---------------- | ---------------------------------------- |
| Configurare server| Minim: 1 nucleu CPU, 2GB RAM; Recomandat: 2 nuclee CPU, 4GB RAM |
| MySQL            | 5.7 și versiuni ulterioare (recomandat MySQL 8) |
| Redis            | 6 și versiuni ulterioare                 |
| NGINX/Apache     | Orice versiune                           |

### Descrierea fișierului de configurare

#### 1. Calea fișierului de configurare

Calea implicită a fișierului de configurare este: `./etc/ppanel.yaml`, care poate fi specificată prin parametrul de pornire `--config`.

#### 2. Formatul fișierului de configurare

- Fișierul de configurare este în format yaml, suportă comentarii, numit xxx.yaml.

```yaml
# Exemplu de fișier de configurare
Host:               # Adresa de ascultare a serviciului, implicit: 0.0.0.0
Port:               # Portul de ascultare a serviciului, implicit: 8080
Debug:              # Dacă se activează modul de depanare, nu se poate folosi funcția de jurnalizare din backend, implicit: false
JwtAuth:            # Configurarea autentificării JWT
  AccessSecret:     # Cheia token-ului de acces, implicit: generată aleator
  AccessExpire:     # Timpul de expirare al token-ului de acces, în secunde, implicit: 604800
Logger:             # Configurarea jurnalului
  FilePath:         # Calea fișierului de jurnal, implicit: ./ppanel.log
  MaxSize:          # Dimensiunea maximă a fișierului de jurnal, în MB, implicit: 50
  MaxBackup:        # Numărul maxim de copii de rezervă ale fișierului de jurnal, implicit: 3
  MaxAge:           # Timpul maxim de păstrare a fișierului de jurnal, în zile, implicit: 30
  Compress:         # Dacă se comprimă fișierul de jurnal, implicit: true
  Level:            # Nivelul jurnalului, implicit: info, opțiuni: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Adresa MySQL, obligatorie
  Username:         # Numele de utilizator MySQL, obligatorie
  Password:         # Parola MySQL, obligatorie
  Dbname:           # Numele bazei de date MySQL, obligatorie
  Config:           # Valori implicite pentru configurarea MySQL charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Numărul maxim de conexiuni inactiv, implicit: 10
  MaxOpenConns:     # Numărul maxim de conexiuni deschise, implicit: 100
  LogMode:          # Nivelul jurnalului, implicit: info, opțiuni: debug, error, warn, info
  LogZap:           # Dacă se folosește jurnalizarea SQL cu zap, implicit: true
  SlowThreshold:    # Pragul pentru interogările lente, în milisecunde, implicit: 1000
Redis:
  Host:             # Adresa Redis, implicit: localhost:6379
  Pass:             # Parola Redis, implicit: ""
  DB:               # Baza de date Redis, implicit: 0

Administer:
  Email:            # Email pentru autentificarea în backend, implicit: admin@ppanel.dev
  Password:         # Parola pentru autentificarea în backend, implicit: password

```

#### 3. Descrierea fișierului de configurare

- `Host`: Adresa de ascultare a serviciului, implicit: **0.0.0.0**
- `Port`: Portul de ascultare a serviciului, implicit: **8080**
- `Debug`: Dacă se activează modul de depanare, nu se poate folosi funcția de jurnalizare din backend, implicit: **false**
- `JwtAuth`: Configurarea autentificării JWT
  - `AccessSecret`: Cheia token-ului de acces, implicit: **generată aleator**
  - `AccessExpire`: Timpul de expirare al token-ului de acces, în secunde, implicit: **604800**
- `Logger`: Configurarea jurnalului
- `FilePath`: Calea fișierului de jurnal, implicit: **./ppanel.log**
- `MaxSize`: Dimensiunea maximă a fișierului de jurnal, în MB, implicit: **50**
- `MaxBackup`: Numărul maxim de copii de rezervă ale fișierului de jurnal, implicit: **3**
- `MaxAge`: Timpul maxim de păstrare a fișierului de jurnal, în zile, implicit: **30**
- `Compress`: Dacă se comprimă fișierul de jurnal, implicit: **true**
- `Level`: Nivelul jurnalului, implicit: **info**, opțiuni: **debug, info, warn, error, panic, fatal**
- `MySQL`: Configurarea MySQL
  - `Addr`: Adresa MySQL, obligatorie
  - `Username`: Numele de utilizator MySQL, obligatorie
  - `Password`: Parola MySQL, obligatorie
  - `Dbname`: Numele bazei de date MySQL, obligatorie
  - `Config`: Valori implicite pentru configurarea MySQL charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Numărul maxim de conexiuni inactiv, implicit: **10**
  - `MaxOpenConns`: Numărul maxim de conexiuni deschise, implicit: **100**
  - `LogMode`: Nivelul jurnalului, implicit: **info**, opțiuni: **debug, error, warn, info**
  - `LogZap`: Dacă se folosește jurnalizarea SQL cu zap, implicit: **true**
  - `SlowThreshold`: Pragul pentru interogările lente, în milisecunde, implicit: **1000**
- `Redis`: Configurarea Redis
- `Host`: Adresa Redis, implicit: **localhost:6379**
- `Pass`: Parola Redis, implicit: **""**
- `DB`: Baza de date Redis, implicit: **0**
- `Administer`: Configurarea autentificării în backend
  - `Email`: Email pentru autentificarea în backend, implicit: **<admin@ppanel.dev>**
  - `Password`: Parola pentru autentificarea în backend, implicit: **password**

#### 4. Variabile de mediu

Variabilele de mediu acceptate sunt următoarele:

| Variabilă de mediu | Element de configurare | Exemplu                                          |
| ------------------ | --------------------- | :---------------------------------------------- |
| PPANEL\_DB         | Configurare MySQL     | root:password\@tcp(localhost:3306)/vpnboard   |
| PPANEL\_REDIS      | Configurare Redis     | redis\://localhost:6379                         |
```

