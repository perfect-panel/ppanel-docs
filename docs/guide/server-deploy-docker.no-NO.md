```markdown
---
title: Docker
order: 1
group: 
  title: Serverdeployering
  order: 2
toc: content
---

## Installere Docker

Kjør følgende kommando for å raskt installere Docker:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Komme i gang

### Initialisering via webgrensesnitt

PPanel støtter webbasert initialisering, noe som forenkler den manuelle konfigurasjonsprosessen.

### Initialiseringstrinn

1. **Opprett nødvendige konfigurasjonsfiler**: Først må du manuelt opprette og konfigurere `/app/etc/ppanel.yaml`-filen for videre konfigurasjon.

2. **Kjør Docker-containeren**:

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

3. **Tilgang til initialiseringsside**: Åpne nettleseren og gå til `http://serverIP:8080/init`.

4. **Fullfør konfigurasjonen**: Følg instruksjonene for å sette opp administratorkonto, konfigurere MySQL-database og Redis-server.

5. **Klikk på initialiseringsknappen**: Etter at konfigurasjonen er fullført, klikk på "Initialiser"-knappen, så vil applikasjonen automatisk lagre konfigurasjonen og starte på nytt.

   > **Merk**: PPanel bruker som standard port **8080**, vennligst sørg for at denne porten er tilgjengelig, og juster brannmurinnstillingene om nødvendig.

## Bruke Docker for deployering

PPanel bruker som standard port **8080**, vennligst sørg for at denne porten er tilgjengelig, og juster brannmurinnstillingene om nødvendig.

Hvis du ikke bruker webinitialisering, kan du logge inn med standard administratorkonto:

- **Brukernavn**: `admin@ppanel.dev`
- **Passord**: `password`

> **Merk**: Husk å endre standardpassordet etter første innlogging for å sikre sikkerheten.

### Opprett nødvendige konfigurasjonsfiler

Før du begynner med Docker-deployering, må du først manuelt opprette og konfigurere `/app/etc/ppanel.yaml` for å sikre at systemet fungerer som det skal. For detaljerte konfigurasjonsalternativer, se delen [Konfigurasjonsalternativer](#konfigurasjonsalternativer) i dokumentasjonen.

### Kjør Docker-containeren

Kjør følgende kommando for å starte containeren:

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

## Bruke Docker Compose for deployering

PPanel bruker som standard port **8080**, vennligst sørg for at denne porten er tilgjengelig, og juster brannmurinnstillingene om nødvendig.

### Opprett nødvendige konfigurasjonsfiler

Før du begynner med Docker Compose-deployering, må du først manuelt opprette og konfigurere `/app/etc/ppanel.yaml` for å sikre at systemet fungerer som det skal. For detaljerte konfigurasjonsalternativer, se delen [Konfigurasjonsalternativer](#konfigurasjonsalternativer) i dokumentasjonen.

### Opprett Docker Compose-konfigurasjonsfil

Opprett `docker-compose.yml`-filen:

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

### Start tjenesten

Kjør følgende kommando for å starte tjenesten:

```sh
docker compose up -d
```

## Viktige tips

- **Sikkerhet**: Husk å endre standardpassord og nøkler for å sikre applikasjonen.
- **Portkonfigurasjon**: Sørg for at nødvendige porter er åpne for å unngå nettverksproblemer.
- **Datapersistens**: Det anbefales å montere datavolumer for å oppnå datapersistens når du kjører containere.

## Konfigurasjonsalternativer

Her er et eksempel på konfigurasjonsalternativer for `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # Lytte-IP
Port: 8080 # Kjøringsport
Debug: true # Om debug-modus er aktivert
JwtAuth:
  AccessSecret: your-secret-key # Token-nøkkel (vennligst endre)
  AccessExpire: 604800 # Token gyldighetstid (sekunder)
Logger:
  FilePath: ./ppanel.log # Sti til loggfil
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Loggnivå: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Databaseadresse
  Dbname: vpnboard # Databasenavn
  Username: root # Databasebrukernavn
  Password: your-password # Databasepassord (vennligst endre)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis-passord (hvis aktuelt)
  DB: 0

Administer:
  Password: password # Administratorkodeord (bør endres)
  Email: admin@ppanel.dev # Administratorepostadresse
```

> **Merk**: Etter å ha endret konfigurasjonsfilen, vennligst start Docker-containeren på nytt for å bruke endringene.

## Få støtte

Hvis du opplever problemer, vennligst se den offisielle dokumentasjonen eller kontakt supportteamet for hjelp.
```

