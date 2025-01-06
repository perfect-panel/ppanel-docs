```markdown
---
title: Binarny
order: 2
group: 
  title: Wdrożenie serwera
  order: 2
toc: content
---

### Instrukcje instalacji

#### Wymagania systemowe

- Mysql 5.7+ (zalecana wersja 8.0)
- Redis 6.0+ (zalecana wersja 7.0)

#### Instalacja binarna

1. Określ architekturę systemu i pobierz odpowiedni plik binarny

Adres pobierania: `https://github.com/perfect-panel/ppanel/releases`

Przykład: system: Linux amd64, użytkownik: root, bieżący katalog: /root

- Pobierz plik binarny

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Rozpakuj plik binarny

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Wejdź do rozpakowanego katalogu

```shell
cd ppanel-server-linux-amd64
```

- Przyznaj plikowi binarnemu uprawnienia do wykonywania

```shell
chmod +x ppanel
```

- Utwórz plik usługi systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=Serwer PPANEL
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

- Przeładuj usługi systemd

```shell
systemctl daemon-reload
```

- Uruchom usługę

```shell
systemctl start ppanel
```

##### Inne uwagi

1. Ścieżka instalacji: plik binarny zostanie rozpakowany do katalogu /root/ppanel-server-linux-amd64

2. Usługa systemd:
   - Nazwa usługi: ppanel
   - Plik konfiguracyjny usługi: /etc/systemd/system/ppanel.service
   - Komenda uruchamiająca usługę: systemctl start ppanel
   - Komenda zatrzymująca usługę: systemctl stop ppanel
   - Komenda restartująca usługę: systemctl restart ppanel
   - Komenda sprawdzająca status usługi: systemctl status ppanel
   - Autostart usługi przy starcie systemu: systemctl enable ppanel

3. Aby ustawić autostart przy starcie systemu, użyj poniższej komendy

   ```shell
   systemctl enable ppanel
   ```

4. Logi usługi: logi usługi domyślnie są zapisywane w pliku /root/ppanel-server-linux-amd64/ppanel.log

5. Możesz przeglądać logi usługi za pomocą `journalctl -u ppanel -f`

6. Gdy plik konfiguracyjny jest pusty lub nie istnieje, usługa uruchomi się z domyślną konfiguracją, a ścieżka do pliku konfiguracyjnego to: `./etc/ppanel.yaml`,
   proszę zainicjować konfigurację systemu przez `http://adres-serwera:8080/init`

#### Konfiguracja proxy odwrotnego NGINX

Poniżej znajduje się przykład konfiguracji proxy odwrotnego, który przekierowuje usługę `ppanel` na domenę `api.ppanel.dev`

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
        
       #Ustawienia pamięci podręcznej Nginx
       
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

Jeśli korzystasz z usługi proxy Cloudflare, musisz uzyskać prawdziwy adres IP użytkownika. Proszę dodać do sekcji Http w pliku konfiguracyjnym Nginx:

- Wymaga: **ngx_http_realip_module**, użyj polecenia nginx -V, aby sprawdzić, czy nginx został skompilowany z tym modułem; jeśli nie, musisz go skompilować samodzielnie.

```nginx
    # cloudflare Start
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare END
```
```

