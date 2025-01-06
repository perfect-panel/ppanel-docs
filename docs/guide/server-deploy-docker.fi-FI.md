```markdown
---
title: Docker
order: 1
group: 
  title: Palvelin asennus
  order: 2
toc: content
---

## Asenna Docker

Suorita seuraava komento asentaaksesi Docker nopeasti:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Nopeasti alkuun

### Web-käyttöliittymän kautta alustus

PPanel tukee web-pohjaista alustusta, mikä yksinkertaistaa manuaalista konfigurointiprosessia.

### Alustuksen vaiheet

1. **Luo tarvittavat konfigurointitiedostot**: Luo ensin manuaalisesti ja konfiguroi `/app/etc/ppanel.yaml` -tiedosto, jotta voit jatkaa konfigurointia.

2. **Suorita Docker-kontti**:

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

3. **Käy alustussivulla**: Avaa selain ja siirry osoitteeseen `http://palvelinIP:8080/init`.

4. **Viimeistele konfigurointi**: Seuraa ohjeita asettaaksesi ylläpitäjätilin, konfiguroidaksesi MySQL-tietokannan ja Redis-palvelimen.

5. **Napsauta alustuspainiketta**: Kun konfigurointi on valmis, napsauta "Alusta" -painiketta, jolloin sovellus tallentaa konfiguroinnin automaattisesti ja käynnistää uudelleen.

   > **Huomio**: PPanel käyttää oletuksena porttia **8080**, varmista, että tämä portti on käytettävissä, ja säädä palomuuriasetuksia tarvittaessa.

## Dockerin käyttö asennuksessa

PPanel käyttää oletuksena porttia **8080**, varmista, että tämä portti on käytettävissä, ja säädä palomuuriasetuksia tarvittaessa.

Jos et käytä web-alustusta, voit kirjautua sisään oletusylläpitäjätilillä:

- **Käyttäjänimi**: `admin@ppanel.dev`
- **Salasana**: `password`

> **Huomio**: Muuta oletussalasana heti ensimmäisen kirjautumisen jälkeen turvallisuuden varmistamiseksi.

### Luo tarvittavat konfigurointitiedostot

Ennen Docker-asennuksen aloittamista, luo ensin manuaalisesti ja konfiguroi `/app/etc/ppanel.yaml`, jotta järjestelmä toimii oikein. Yksityiskohtaisia konfigurointiesimerkkejä varten katso asiakirjan [konfigurointiesimerkit](#konfigurointiesimerkit) -osio.

### Suorita Docker-kontti

Suorita seuraava komento käynnistääksesi kontin:

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

## Docker Compose -asennus

PPanel käyttää oletuksena porttia **8080**, varmista, että tämä portti on käytettävissä, ja säädä palomuuriasetuksia tarvittaessa.

### Luo tarvittavat konfigurointitiedostot

Ennen Docker Compose -asennuksen aloittamista, luo ensin manuaalisesti ja konfiguroi `/app/etc/ppanel.yaml`, jotta järjestelmä toimii oikein. Yksityiskohtaisia konfigurointiesimerkkejä varten katso asiakirjan [konfigurointiesimerkit](#konfigurointiesimerkit) -osio.

### Luo Docker Compose -konfigurointitiedosto

Luo `docker-compose.yml` -tiedosto:

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

### Käynnistä palvelu

Suorita seuraava komento käynnistääksesi palvelun:

```sh
docker compose up -d
```

## Tärkeitä huomautuksia

- **Turvallisuus**: Muista muuttaa oletussalasana ja avaimet varmistaaksesi sovelluksen turvallisuuden.
- **Porttiasetukset**: Varmista, että tarvittavat portit ovat avoinna, jotta verkkoyhteysongelmia ei ilmene.
- **Tietojen pysyvyys**: Suositellaan, että liität tietovolyymit kontin ajon aikana tietojen pysyvyyden varmistamiseksi.

## Konfigurointiesimerkit

Alla on esimerkki `ppanel.yaml` -konfigurointitiedostosta:

```yaml
Host: 0.0.0.0 # Kuuntelu IP
Port: 8080 # Käynnistysportti
Debug: true # Onko virheenkorjaustila käytössä
JwtAuth:
  AccessSecret: your-secret-key # Token salaisuus (muokkaa)
  AccessExpire: 604800 # Token voimassaoloaika (sekunteina)
Logger:
  FilePath: ./ppanel.log # Lokitiedoston polku
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Lokitaso: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Tietokannan osoite
  Dbname: vpnboard # Tietokannan nimi
  Username: root # Tietokannan käyttäjänimi
  Password: your-password # Tietokannan salasana (muokkaa)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis salasana (jos on)
  DB: 0

Administer:
  Password: password # Ylläpitäjän salasana (tulee muuttaa)
  Email: admin@ppanel.dev # Ylläpitäjän sähköpostiosoite
```

> **Huomio**: Muuta konfigurointitiedostoa ja käynnistä Docker-kontti uudelleen, jotta muutokset tulevat voimaan.

## Hanki tukea

Jos kohtaat ongelmia, katso virallista dokumentaatiota tai ota yhteyttä tukitiimiin saadaksesi apua.
```

