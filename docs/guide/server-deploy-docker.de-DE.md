```markdown
---
title: Docker
order: 1
group: 
  title: Serverbereitstellung
  order: 2
toc: content
---

## Docker installieren

Führen Sie den folgenden Befehl aus, um Docker schnell zu installieren:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Schnellstart

### Web-Oberfläche zur Initialisierung

PPanel unterstützt die webbasierte Initialisierung, die den manuellen Konfigurationsprozess vereinfacht.

### Initialisierungsschritte

1. **Erstellen Sie die erforderlichen Konfigurationsdateien**: Erstellen und konfigurieren Sie zunächst manuell die Datei `/app/etc/ppanel.yaml`, um die nachfolgende Konfiguration vorzubereiten.

2. **Docker-Container ausführen**:

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

3. **Zugriff auf die Initialisierungsseite**: Greifen Sie im Browser auf `http://ServerIP:8080/init` zu.

4. **Konfiguration abschließen**: Richten Sie gemäß den Anweisungen ein Administratorkonto ein und konfigurieren Sie die MySQL-Datenbank sowie den Redis-Server.

5. **Klicken Sie auf die Schaltfläche zur Initialisierung**: Nach Abschluss der Konfiguration klicken Sie auf die Schaltfläche „Initialisieren“, die Anwendung speichert automatisch die Konfiguration und startet neu.

   > **Hinweis**: PPanel verwendet standardmäßig den Port **8080**. Stellen Sie sicher, dass dieser Port zugänglich ist, und passen Sie gegebenenfalls die Firewall-Einstellungen an.

## Docker-Bereitstellung verwenden

PPanel verwendet standardmäßig den Port **8080**. Stellen Sie sicher, dass dieser Port zugänglich ist, und passen Sie gegebenenfalls die Firewall-Einstellungen an.

Wenn Sie die Web-Initialisierung nicht verwenden, können Sie sich mit dem Standard-Administratorkonto anmelden:

- **Benutzername**: `admin@ppanel.dev`
- **Passwort**: `password`

> **Hinweis**: Ändern Sie das Standardpasswort nach dem ersten Login umgehend, um die Sicherheit zu gewährleisten.

### Erstellen Sie die erforderlichen Konfigurationsdateien

Bevor Sie mit der Docker-Bereitstellung beginnen, erstellen und konfigurieren Sie zunächst manuell die Datei `/app/etc/ppanel.yaml`, um sicherzustellen, dass das System ordnungsgemäß funktioniert. Für detaillierte Beispiele der Konfigurationselemente siehe den Abschnitt [Beispiele für Konfigurationselemente](#beispiele-für-konfigurationselemente) in der Dokumentation.

### Docker-Container ausführen

Führen Sie den folgenden Befehl aus, um den Container zu starten:

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

## Docker Compose-Bereitstellung verwenden

PPanel verwendet standardmäßig den Port **8080**. Stellen Sie sicher, dass dieser Port zugänglich ist, und passen Sie gegebenenfalls die Firewall-Einstellungen an.

### Erstellen Sie die erforderlichen Konfigurationsdateien

Bevor Sie mit der Docker Compose-Bereitstellung beginnen, erstellen und konfigurieren Sie zunächst manuell die Datei `/app/etc/ppanel.yaml`, um sicherzustellen, dass das System ordnungsgemäß funktioniert. Für detaillierte Beispiele der Konfigurationselemente siehe den Abschnitt [Beispiele für Konfigurationselemente](#beispiele-für-konfigurationselemente) in der Dokumentation.

### Erstellen Sie die Docker Compose-Konfigurationsdatei

Erstellen Sie die Datei `docker-compose.yml`:

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

### Dienste starten

Führen Sie den folgenden Befehl aus, um die Dienste zu starten:

```sh
docker compose up -d
```

## Wichtige Hinweise

- **Sicherheit**: Ändern Sie unbedingt das Standardpasswort und den Schlüssel, um die Sicherheit der Anwendung zu gewährleisten.
- **Portkonfiguration**: Stellen Sie sicher, dass die erforderlichen Ports geöffnet sind, um Netzwerkzugriffsprobleme zu vermeiden.
- **Datenpersistenz**: Es wird empfohlen, beim Ausführen des Containers Datenvolumes zu mounten, um die Datenpersistenz zu gewährleisten.

## Beispiele für Konfigurationselemente

Hier sind Beispiele für die Konfigurationselemente in `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # Zu hörende IP
Port: 8080 # Ausführungsport
Debug: true # Debug-Modus aktivieren
JwtAuth:
  AccessSecret: your-secret-key # Token-Schlüssel (bitte ändern)
  AccessExpire: 604800 # Token-Gültigkeitsdauer (Sekunden)
Logger:
  FilePath: ./ppanel.log # Pfad zur Protokolldatei
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Protokollebene: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Datenbankadresse
  Dbname: vpnboard # Datenbankname
  Username: root # Datenbankbenutzername
  Password: your-password # Datenbankpasswort (bitte ändern)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis-Passwort (falls vorhanden)
  DB: 0

Administer:
  Password: password # Administratorpasswort (sollte geändert werden)
  Email: admin@ppanel.dev # E-Mail-Adresse des Administrators
```

> **Hinweis**: Nach der Änderung der Konfigurationsdatei starten Sie bitte den Docker-Container neu, um die Änderungen anzuwenden.

## Unterstützung erhalten

Bei Problemen konsultieren Sie bitte die offizielle Dokumentation oder wenden Sie sich an das Support-Team, um Hilfe zu erhalten.
```

