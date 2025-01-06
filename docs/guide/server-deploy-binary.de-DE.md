```markdown
---
title: Binärdatei
order: 2
group: 
  title: Serverbereitstellung
  order: 2
toc: content
---

### Installationsanleitung

#### Systemanforderungen

- Mysql 5.7+ (empfohlen wird 8.0)
- Redis 6.0+ (empfohlen wird 7.0)

#### Installation der Binärdatei

1. Bestimmen Sie die Systemarchitektur und laden Sie die entsprechende Binärdatei herunter.

Download-Link: `https://github.com/perfect-panel/ppanel/releases`

Beispielbeschreibung: System: Linux amd64, Benutzer: root, aktuelles Verzeichnis: /root

- Laden Sie die Binärdatei herunter

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Entpacken Sie die Binärdatei

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Wechseln Sie in das entpackte Verzeichnis

```shell
cd ppanel-server-linux-amd64
```

- Gewähren Sie der Binärdatei Ausführungsrechte

```shell
chmod +x ppanel
```

- Erstellen Sie die systemd-Dienstdatei

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL Server
After=network.target

[Service]
ExecStart=/root/ppanel-server-linux-amd64/ppanel
Restart=always
User=root
WorkingDirectory=/root/ppanel-server-linux-amd64

[Install]
WantedBy=multi-user.target
EOF
```

- Laden Sie den systemd-Dienst neu

```shell
systemctl daemon-reload
```

- Starten Sie den Dienst

```shell
systemctl start ppanel
```

##### Weitere Hinweise

1. Installationspfad: Die Binärdatei wird im Verzeichnis /root/ppanel-server-linux-amd64 entpackt.

2. systemd-Dienst:
   - Dienstname: ppanel
   - Dienstkonfigurationsdatei: /etc/systemd/system/ppanel.service
   - Dienststartbefehl: systemctl start ppanel
   - Dienststoppbefehl: systemctl stop ppanel
   - Dienstneustartbefehl: systemctl restart ppanel
   - Dienststatusbefehl: systemctl status ppanel
   - Dienstautostart: systemctl enable ppanel

3. Um den Autostart beim Booten zu aktivieren, können Sie den folgenden Befehl verwenden:

   ```shell
   systemctl enable ppanel
   ```

4. Dienstprotokolle: Die Dienstprotokolle werden standardmäßig in die Datei /root/ppanel-server-linux-amd64/ppanel.log ausgegeben.

5. Sie können die Dienstprotokolle mit `journalctl -u ppanel -f` einsehen.

6. Wenn die Konfigurationsdatei leer oder nicht vorhanden ist, wird der Dienst mit der Standardkonfiguration gestartet. Der Pfad zur Konfigurationsdatei lautet: `./etc/ppanel.yaml`,
   bitte initialisieren Sie die Systemkonfiguration über `http://Server-Adresse:8080/init`.

#### NGINX Reverse-Proxy-Konfiguration

Hier ist ein Beispiel für die Reverse-Proxy-Konfiguration, um den Dienst `ppanel` auf die Domain `api.ppanel.dev` zu proxyen.

```nginx
server {
    listen 80;
    server_name ppanel.dev;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_http_version 1.1;
        
        add_header X-Cache $upstream_cache_status;
        
       # Nginx Cache setzen
       
        set $static_filezbsQiET1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_filezbsQiET1 1;
            expires 1m;
            }
        if ( $static_filezbsQiET1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
    }
}
```

Wenn Sie den Cloudflare-Proxydienst verwenden, müssen Sie die echte IP-Adresse des Benutzers erhalten. Bitte fügen Sie im Nginx-Konfigurationsdatei im HTTP-Abschnitt Folgendes hinzu:

- Abhängigkeit: **ngx_http_realip_module**-Modul, verwenden Sie den Befehl `nginx -V`, um zu überprüfen, ob Nginx dieses Modul bereits kompiliert hat. Andernfalls müssen Sie es selbst kompilieren.

```nginx
    # cloudflare Start
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare END
```
```

