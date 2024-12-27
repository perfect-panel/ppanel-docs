---
title: Server
order: 2
nav:
  title: Příručka
  order: 1
group:
  title: Nasazení
  order: 1
toc: content
---

## Požadavky na běhové prostředí

| Komponenta      | Požadavek                              |
| --------------- | -------------------------------------- |
| Konfigurace serveru | Minimálně: 1 jádro CPU, 2GB RAM; Doporučeno: 2 jádra CPU, 4GB RAM |
| MySQL           | 5.7 a vyšší (doporučeno MySQL 8)     |
| Redis           | 6 a vyšší                              |
| NGINX/Apache    | Libovolná verze                       |

## Instalace Dockeru

Spusťte následující příkaz pro rychlou instalaci Dockeru:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Rychlý start

### Inicializace přes webové rozhraní

PPanel podporuje webovou inicializaci, což zjednodušuje proces ruční konfigurace.

### Krok inicializace

1. **Vytvoření nezbytného konfiguračního souboru**: Nejprve ručně vytvořte a nakonfigurujte soubor `/app/etc/ppanel.yaml` pro další konfiguraci.

2. **Spuštění Docker kontejneru**:

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

3. **Přístup k inicializační stránce**: V prohlížeči přejděte na `http://IP_serveru:8080/init`.

4. **Dokončení konfigurace**: Podle pokynů nastavte administrátorský účet, nakonfigurujte databázi MySQL a server Redis.

5. **Klikněte na tlačítko inicializace**: Po dokončení konfigurace klikněte na tlačítko „Inicializovat“, aplikace automaticky uloží konfiguraci a restartuje se.

   > **Poznámka**: PPanel ve výchozím nastavení používá port **8080**, ujistěte se, že je tento port přístupný, a v případě potřeby upravte nastavení firewallu.

## Nasazení pomocí Dockeru

PPanel ve výchozím nastavení používá port **8080**, ujistěte se, že je tento port přístupný, a v případě potřeby upravte nastavení firewallu.

Pokud nepoužíváte webovou inicializaci, můžete se přihlásit pomocí výchozího administrátorského účtu:

- **Uživatelské jméno**: `admin@ppanel.dev`
- **Heslo**: `password`

> **Poznámka**: Po prvním přihlášení prosím okamžitě změňte výchozí heslo pro zajištění bezpečnosti.

### Vytvoření nezbytného konfiguračního souboru

Před zahájením nasazení pomocí Dockeru nejprve ručně vytvořte a nakonfigurujte `/app/etc/ppanel.yaml`, abyste zajistili správný chod systému. Podrobné příklady konfiguračních položek naleznete v části [Příklady konfiguračních položek](#příklady-konfiguračních-položek).

### Spuštění Docker kontejneru

Spusťte následující příkaz pro spuštění kontejneru:

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

## Nasazení pomocí Docker Compose

PPanel ve výchozím nastavení používá port **8080**, ujistěte se, že je tento port přístupný, a v případě potřeby upravte nastavení firewallu.

### Vytvoření nezbytného konfiguračního souboru

Před zahájením nasazení pomocí Docker Compose nejprve ručně vytvořte a nakonfigurujte `/app/etc/ppanel.yaml`, abyste zajistili správný chod systému. Podrobné příklady konfiguračních položek naleznete v části [Příklady konfiguračních položek](#příklady-konfiguračních-položek).

### Vytvoření konfiguračního souboru Docker Compose

Vytvořte soubor `docker-compose.yml`:

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

### Spuštění služby

Spusťte následující příkaz pro spuštění služby:

```sh
docker compose up -d
```

## Důležitá upozornění

- **Bezpečnost**: Nezapomeňte změnit výchozí heslo a klíče pro zajištění bezpečnosti aplikace.
- **Nastavení portu**: Ujistěte se, že jsou potřebné porty otevřené, aby se předešlo problémům s přístupem k síti.
- **Trvalost dat**: Doporučuje se při spuštění kontejneru připojit datový svazek pro zajištění trvalosti dat.

## Příklady konfiguračních položek

Níže je příklad konfiguračních položek pro `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # IP pro naslouchání
Port: 8080 # Port pro spuštění
Debug: true # Zda povolit režim ladění
JwtAuth:
  AccessSecret: your-secret-key # Token klíč (prosím změňte)
  AccessExpire: 604800 # Platnost tokenu (vteřiny)
Logger:
  FilePath: ./ppanel.log # Cesta k souboru s logy
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Úroveň logování: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Adresa databáze
  Dbname: vpnboard # Název databáze
  Username: root # Uživatelské jméno databáze
  Password: your-password # Heslo databáze (prosím změňte)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Heslo Redis (pokud existuje)
  DB: 0

Administer:
  Password: password # Heslo administrátora (mělo by být změněno)
  Email: admin@ppanel.dev # E-mailová adresa administrátora
```

> **Poznámka**: Po úpravě konfiguračního souboru restartujte Docker kontejner, aby se změny projevily.

## Získání podpory

Pokud narazíte na problémy, prosím, odkazujte na oficiální dokumentaci nebo kontaktujte tým podpory pro pomoc.

