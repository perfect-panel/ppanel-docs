```markdown
---
title: Docker
order: 1
group: 
  title: Implementare server
  order: 2
toc: content
---

## Instalare Docker

Rulați următoarea comandă pentru a instala rapid Docker:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Începere rapidă

### Inițializare prin interfața web

PPanel suportă inițializarea bazată pe web, simplificând procesul de configurare manuală.

### Pașii de inițializare

1. **Creează fișierul de configurare necesar**: În primul rând, creați manual și configurați fișierul `/app/etc/ppanel.yaml` pentru a permite configurarea ulterioară.

2. **Rulați containerul Docker**:

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

3. **Accesați pagina de inițializare**: În browser, accesați `http://IP-server:8080/init`.

4. **Finalizați configurarea**: Urmați instrucțiunile pentru a seta contul de administrator, a configura baza de date MySQL și serverul Redis.

5. **Apăsați butonul de inițializare**: După finalizarea configurării, apăsați butonul „Inițializare”, aplicația va salva automat configurația și se va reporni.

   > **Notă**: PPanel folosește implicit portul **8080**, asigurați-vă că acest port este accesibil, ajustați setările firewall-ului dacă este necesar.

## Utilizarea Docker pentru implementare

PPanel folosește implicit portul **8080**, asigurați-vă că acest port este accesibil, ajustați setările firewall-ului dacă este necesar.

Dacă nu utilizați inițializarea web, vă puteți conecta cu contul de administrator implicit:

- **Nume utilizator**: `admin@ppanel.dev`
- **Parolă**: `password`

> **Notă**: Vă rugăm să schimbați parola implicită imediat după prima conectare pentru a asigura securitatea.

### Crearea fișierului de configurare necesar

Înainte de a începe implementarea Docker, creați manual și configurați `/app/etc/ppanel.yaml` pentru a asigura funcționarea corectă a sistemului. Pentru exemple detaliate de opțiuni de configurare, consultați secțiunea [Exemple de opțiuni de configurare](#exemple-de-opțiuni-de-configurare).

### Rularea containerului Docker

Rulați următoarea comandă pentru a porni containerul:

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

## Utilizarea Docker Compose pentru implementare

PPanel folosește implicit portul **8080**, asigurați-vă că acest port este accesibil, ajustați setările firewall-ului dacă este necesar.

### Crearea fișierului de configurare necesar

Înainte de a începe implementarea Docker Compose, creați manual și configurați `/app/etc/ppanel.yaml` pentru a asigura funcționarea corectă a sistemului. Pentru exemple detaliate de opțiuni de configurare, consultați secțiunea [Exemple de opțiuni de configurare](#exemple-de-opțiuni-de-configurare).

### Crearea fișierului de configurare Docker Compose

Creează fișierul `docker-compose.yml`:

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

### Pornirea serviciului

Rulați următoarea comandă pentru a porni serviciul:

```sh
docker compose up -d
```

## Sfaturi importante

- **Securitate**: Asigurați-vă că schimbați parola și cheia implicită pentru a asigura securitatea aplicației.
- **Configurarea porturilor**: Asigurați-vă că porturile necesare sunt deschise pentru a evita problemele de acces la rețea.
- **Persistența datelor**: Se recomandă montarea volumelor de date în timpul rulării containerului pentru a asigura persistența datelor.

## Exemple de opțiuni de configurare

Iată un exemplu de opțiuni de configurare pentru `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # IP de ascultare
Port: 8080 # Port de rulare
Debug: true # Activare mod de depanare
JwtAuth:
  AccessSecret: your-secret-key # Cheia secretă pentru token (vă rugăm să modificați)
  AccessExpire: 604800 # Valabilitatea token-ului (secunde)
Logger:
  FilePath: ./ppanel.log # Calea fișierului de jurnal
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Nivel de jurnalizare: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Adresa bazei de date
  Dbname: vpnboard # Numele bazei de date
  Username: root # Numele de utilizator al bazei de date
  Password: your-password # Parola bazei de date (vă rugăm să modificați)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Parola Redis (dacă există)
  DB: 0

Administer:
  Password: password # Parola administratorului (ar trebui schimbată)
  Email: admin@ppanel.dev # Adresa de email a administratorului
```

> **Notă**: După modificarea fișierului de configurare, vă rugăm să reporniți containerul Docker pentru a aplica modificările.

## Obținerea suportului

Dacă întâmpinați probleme, consultați documentația oficială sau contactați echipa de suport pentru asistență.
```

