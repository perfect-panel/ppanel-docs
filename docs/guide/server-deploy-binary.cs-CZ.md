```markdown
---
title: Binární
order: 2
group: 
  title: Nasazení serveru
  order: 2
toc: content
---

### Pokyny k instalaci

#### Požadavky na systém

- Mysql 5.7+ (doporučeno 8.0)
- Redis 6.0+ (doporučeno 7.0)

#### Instalace binárního souboru

1. Určete architekturu systému a stáhněte odpovídající binární soubor

Stahovací adresa: `https://github.com/perfect-panel/ppanel/releases`

Příklad: systém: Linux amd64, uživatel: root, aktuální adresář: /root

- Stáhněte binární soubor

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Rozbalte binární soubor

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Přejděte do rozbaleného adresáře

```shell
cd ppanel-server-linux-amd64
```

- Přiřaďte binárnímu souboru práva k provádění

```shell
chmod +x ppanel
```

- Vytvořte soubor služby systemd

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

- Znovu načtěte služby systemd

```shell
systemctl daemon-reload
```

- Spusťte službu

```shell
systemctl start ppanel
```

##### Další poznámky

1. Cesta k instalaci: binární soubor bude rozbalen do adresáře /root/ppanel-server-linux-amd64

2. Služba systemd:
   - Název služby: ppanel
   - Konfigurační soubor služby: /etc/systemd/system/ppanel.service
   - Příkaz pro spuštění služby: systemctl start ppanel
   - Příkaz pro zastavení služby: systemctl stop ppanel
   - Příkaz pro restartování služby: systemctl restart ppanel
   - Příkaz pro kontrolu stavu služby: systemctl status ppanel
   - Automatické spuštění služby při startu: systemctl enable ppanel

3. Automatické spuštění při startu lze nastavit pomocí následujícího příkazu

   ```shell
   systemctl enable ppanel
   ```

4. Logy služby: logy služby se ve výchozím nastavení ukládají do souboru /root/ppanel-server-linux-amd64/ppanel.log

5. Logy služby lze zobrazit pomocí `journalctl -u ppanel -f`

6. Pokud je konfigurační soubor prázdný nebo neexistuje, služba se spustí s výchozími nastaveními, cesta k souboru s konfigurací je: `./etc/ppanel.yaml`,
   prosím, inicializujte systémovou konfiguraci přes `http://server_adresa:8080/init`

#### Konfigurace reverzního proxy NGINX

Níže je uveden příklad konfigurace reverzního proxy, který proxy službu `ppanel` na doménu `api.ppanel.dev`

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
        
       # Nastavení cache Nginx
       
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

Pokud používáte službu Cloudflare, je třeba získat skutečnou IP adresu uživatele. Přidejte do konfiguračního souboru Nginx do sekce Http následující:

- Je třeba mít závislost: **ngx_http_realip_module**, použijte příkaz nginx -V pro zjištění, zda byl tento modul již zkompilován, pokud ne, je třeba ho zkompilovat.

```nginx
    # cloudflare Start
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare END
```
```

