```markdown
---
title: Konfigurationsanleitung
order: 0
group: 
  title: Serverbereitstellung
  order: 2
toc: content
---

## Anforderungen an die Laufzeitumgebung

| Komponente       | Anforderungen                             |
| ---------------- | ---------------------------------------- |
| Serverkonfiguration | Mindestanforderung: 1 CPU-Kern, 2 GB RAM; Empfohlen: 2 CPU-Kerne, 4 GB RAM |
| MySQL            | 5.7 oder höher (empfohlen: MySQL 8)     |
| Redis            | 6 oder höher                             |
| NGINX/Apache     | Beliebige Version                        |

### Beschreibung der Konfigurationsdatei

#### 1. Pfad zur Konfigurationsdatei

Der Standardpfad zur Konfigurationsdatei lautet: `./etc/ppanel.yaml`, kann jedoch über den Startparameter `--config` angegeben werden.

#### 2. Format der Konfigurationsdatei

- Die Konfigurationsdatei ist im YAML-Format, unterstützt Kommentare und sollte den Namen xxx.yaml haben.

```yaml
# Beispiel für eine Konfigurationsdatei
Host:               # Dienst-Listener-Adresse, Standard: 0.0.0.0
Port:               # Dienst-Listener-Port, Standard: 8080
Debug:              # Ob der Debug-Modus aktiviert ist, im aktivierten Zustand kann die Backend-Logfunktion nicht verwendet werden, Standard: false
JwtAuth:            # JWT-Authentifizierungskonfiguration
  AccessSecret:     # Zugriffstoken-Schlüssel, Standard: zufällig generiert
  AccessExpire:     # Ablaufzeit des Zugriffstokens, Einheit Sekunden, Standard: 604800
Logger:             # Protokollkonfiguration
  FilePath:         # Pfad zur Protokolldatei, Standard: ./ppanel.log
  MaxSize:          # Maximale Größe der Protokolldatei, Einheit MB, Standard: 50
  MaxBackup:        # Maximale Anzahl der Protokoll-Backups, Standard: 3
  MaxAge:           # Maximale Aufbewahrungszeit der Protokolldatei, Einheit Tage, Standard: 30
  Compress:         # Ob die Protokolldatei komprimiert werden soll, Standard: true
  Level:            # Protokollebene, Standard: info, Optionen: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL-Adresse, Pflichtfeld
  Username:         # MySQL-Benutzername, Pflichtfeld
  Password:         # MySQL-Passwort, Pflichtfeld
  Dbname:           # MySQL-Datenbankname, Pflichtfeld
  Config:           # Standardwerte für MySQL-Konfiguration charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maximale Anzahl der Leerlaufverbindungen, Standard: 10
  MaxOpenConns:     # Maximale Anzahl der offenen Verbindungen, Standard: 100
  LogMode:          # Protokollebene, Standard: info, Optionen: debug, error, warn, info
  LogZap:           # Ob zap-Protokollierung für SQL verwendet werden soll, Standard: true
  SlowThreshold:    # Schwellenwert für langsame Abfragen, Einheit Millisekunden, Standard: 1000
Redis:
  Host:             # Redis-Adresse, Standard: localhost:6379
  Pass:             # Redis-Passwort, Standard: ""
  DB:               # Redis-Datenbank, Standard: 0

Administer:
  Email:            # E-Mail für den Backend-Login, Standard: admin@ppanel.dev
  Password:         # Passwort für den Backend-Login, Standard: password

```

#### 3. Erläuterung der Konfigurationsdatei

- `Host`: Dienst-Listener-Adresse, Standard: **0.0.0.0**
- `Port`: Dienst-Listener-Port, Standard: **8080**
- `Debug`: Ob der Debug-Modus aktiviert ist, im aktivierten Zustand kann die Backend-Logfunktion nicht verwendet werden, Standard: **false**
- `JwtAuth`: JWT-Authentifizierungskonfiguration
  - `AccessSecret`: Zugriffstoken-Schlüssel, Standard: **zufällig generiert**
  - `AccessExpire`: Ablaufzeit des Zugriffstokens, Einheit Sekunden, Standard: **604800**
- `Logger`: Protokollkonfiguration
- `FilePath`: Pfad zur Protokolldatei, Standard: **./ppanel.log**
- `MaxSize`: Maximale Größe der Protokolldatei, Einheit MB, Standard: **50**
- `MaxBackup`: Maximale Anzahl der Protokoll-Backups, Standard: **3**
- `MaxAge`: Maximale Aufbewahrungszeit der Protokolldatei, Einheit Tage, Standard: **30**
- `Compress`: Ob die Protokolldatei komprimiert werden soll, Standard: **true**
- `Level`: Protokollebene, Standard: **info**, Optionen: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL-Konfiguration
  - `Addr`: MySQL-Adresse, Pflichtfeld
  - `Username`: MySQL-Benutzername, Pflichtfeld
  - `Password`: MySQL-Passwort, Pflichtfeld
  - `Dbname`: MySQL-Datenbankname, Pflichtfeld
  - `Config`: Standardwerte für MySQL-Konfiguration charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maximale Anzahl der Leerlaufverbindungen, Standard: **10**
  - `MaxOpenConns`: Maximale Anzahl der offenen Verbindungen, Standard: **100**
  - `LogMode`: Protokollebene, Standard: **info**, Optionen: **debug, error, warn, info**
  - `LogZap`: Ob zap-Protokollierung für SQL verwendet werden soll, Standard: **true**
  - `SlowThreshold`: Schwellenwert für langsame Abfragen, Einheit Millisekunden, Standard: **1000**
- `Redis`: Redis-Konfiguration
- `Host`: Redis-Adresse, Standard: **localhost:6379**
- `Pass`: Redis-Passwort, Standard: **""**
- `DB`: Redis-Datenbank, Standard: **0**
- `Administer`: Backend-Login-Konfiguration
  - `Email`: E-Mail für den Backend-Login, Standard: **<admin@ppanel.dev>**
  - `Password`: Passwort für den Backend-Login, Standard: **password**

#### 4. Umgebungsvariablen

Die unterstützten Umgebungsvariablen sind wie folgt:

| Umgebungsvariable | Konfiguration | Beispiel                                      |
| ----------------- | ------------- | :------------------------------------------- |
| PPANEL\_DB       | MySQL-Konfiguration | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS    | Redis-Konfiguration | redis\://localhost:6379                      |
```

