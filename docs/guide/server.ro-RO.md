---
title: Server
order: 2
nav:
  title: Ghid
  order: 1
group:
  title: Implementare
  order: 1
toc: content
---

## Cerințe de mediu

| Componentă         | Cerințe                                                         |
| ------------------ | --------------------------------------------------------------- |
| Configurare server | Minim: 1 nucleu CPU, 2GB RAM; Recomandat: 2 nuclee CPU, 4GB RAM |
| MySQL              | 5.7 sau mai recent (recomandat MySQL 8)                         |
| Redis              | 6 sau mai recent                                                |
| NGINX/Apache       | Orice versiune                                                  |

## Instalare Docker

Rulați următoarea comandă pentru a instala rapid Docker:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Începere rapidă

### Inițializare prin interfața web

PPanel suportă inițializarea bazată pe web, simplificând procesul de configurare manuală.

### Pașii de inițializare

1. **Creează fișierul de configurare necesar**: Începe prin a crea manual și a configura fișierul `/app/etc/ppanel.yaml` pentru configurările ulterioare.

2. **Rulează containerul Docker**:

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

3. **Accesează pagina de inițializare**: În browser, accesează `http://IP-server:8080/init`.

4. **Finalizează configurarea**: Urmează instrucțiunile pentru a seta contul de administrator, a configura baza de date MySQL și serverul Redis.

5. **Apasă butonul de inițializare**: După ce ai finalizat configurarea, apasă butonul „Inițializare”, aplicația va salva automat configurația și se va reporni.

   > **Notă**: PPanel folosește implicit portul **8080**, asigură-te că acest port este accesibil, ajustează setările firewall-ului dacă este necesar.

## Implementare folosind Docker

PPanel folosește implicit portul **8080**, asigură-te că acest port este accesibil, ajustează setările firewall-ului dacă este necesar.

Dacă nu folosești inițializarea web, poți să te conectezi cu contul de administrator implicit:

- **Nume utilizator**: `admin@ppanel.dev`
- **Parolă**: `password`

> **Notă**: Te rugăm să schimbi parola implicită imediat după prima conectare pentru a asigura securitatea.

### Creează fișierul de configurare necesar

Înainte de a începe implementarea Docker, creează manual și configurează `/app/etc/ppanel.yaml` pentru a asigura funcționarea corectă a sistemului. Pentru exemple detaliate de configurare, consultă secțiunea [Exemple de configurare](#exemple-de-configurare) din documentație.

### Rulează containerul Docker

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

## Implementare folosind Docker Compose

PPanel folosește implicit portul **8080**, asigură-te că acest port este accesibil, ajustează setările firewall-ului dacă este necesar.

### Creează fișierul de configurare necesar

Înainte de a începe implementarea Docker Compose, creează manual și configurează `/app/etc/ppanel.yaml` pentru a asigura funcționarea corectă a sistemului. Pentru exemple detaliate de configurare, consultă secțiunea [Exemple de configurare](#exemple-de-configurare) din documentație.

### Creează fișierul de configurare Docker Compose

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

### Pornește serviciul

Rulați următoarea comandă pentru a porni serviciul:

```sh
docker compose up -d
```

## Sfaturi importante

- **Securitate**: Asigură-te că schimbi parola și cheia implicită pentru a asigura securitatea aplicației.
- **Configurarea porturilor**: Asigură-te că porturile necesare sunt deschise pentru a evita problemele de acces la rețea.
- **Persistența datelor**: Se recomandă montarea volumelor de date în timpul rulării containerului pentru a asigura persistența datelor.

## Exemple de configurare

Iată un exemplu de configurare pentru `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # IP de ascultare
Port: 8080 # Port de rulare
Debug: true # Activare mod de depanare
JwtAuth:
  AccessSecret: your-secret-key # Cheia secretă pentru Token (te rugăm să o modifici)
  AccessExpire: 604800 # Valabilitatea Token-ului (secunde)
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
  Password: your-password # Parola bazei de date (te rugăm să o modifici)
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

> **Notă**: După modificarea fișierului de configurare, te rugăm să repornești containerul Docker pentru a aplica modificările.

## Obținerea suportului

Dacă întâmpini probleme, te rugăm să consulți documentația oficială sau să contactezi echipa de suport pentru ajutor.
