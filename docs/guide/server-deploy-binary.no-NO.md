```markdown
---
title: Binær
order: 2
group: 
  title: Serverdistribusjon
  order: 2
toc: content
---

### Installationsinstruksjoner

#### Forutsetninger

- Mysql 5.7+ (anbefalt versjon 8.0)
- Redis 6.0+ (anbefalt versjon 7.0)

#### Binær installasjon

1. Bestem systemarkitektur og last ned den tilsvarende binærfilen

Nedlastingsadresse: `https://github.com/perfect-panel/ppanel/releases`

Eksempelbeskrivelse: System: Linux amd64, Bruker: root, Nåværende katalog: /root

- Last ned binærfilen

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Pakk ut binærfilen

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Gå inn i den utpakkede katalogen

```shell
cd ppanel-server-linux-amd64
```

- Gi binærfilen kjøretilgang

```shell
chmod +x ppanel
```

- Opprett systemd tjenestefil

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

- Last inn systemd tjenesten på nytt

```shell
systemctl daemon-reload
```

- Start tjenesten

```shell
systemctl start ppanel
```

##### Andre merknader

1. Installationsbane: Binærfilen vil bli pakket ut til /root/ppanel-server-linux-amd64 katalogen

2. systemd tjeneste:
   - Tjenestenavn: ppanel
   - Tjenestekonfigurasjonsfil: /etc/systemd/system/ppanel.service
   - Tjenestestartkommando: systemctl start ppanel
   - Tjenestestoppkommando: systemctl stop ppanel
   - Tjenesterestartkommando: systemctl restart ppanel
   - Tjenestestatuskommando: systemctl status ppanel
   - Tjenesteautostart ved oppstart: systemctl enable ppanel

3. For å sette opp autostart ved oppstart, kan du bruke følgende kommando

   ```shell
   systemctl enable ppanel
   ```

4. Tjenestelogg: Tjenestelogg skrives som standard til /root/ppanel-server-linux-amd64/ppanel.log filen

5. Du kan se tjenesteloggen med `journalctl -u ppanel -f`

6. Når konfigurasjonsfilen er tom eller ikke eksisterer, vil tjenesten starte med standardkonfigurasjon, konfigurasjonsfilens bane er: `./etc/ppanel.yaml`,
   vennligst initialiser systemkonfigurasjonen via `http://serveradresse:8080/init`

#### NGINX omvendt proxy-konfigurasjon

Her er et eksempel på omvendt proxy-konfigurasjon som proxyer `ppanel` tjenesten til `api.ppanel.dev` domenet

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
        
       #Sett Nginx Cache
       
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

Hvis du bruker Cloudflare proxy-tjeneste, må du få tak i den virkelige IP-adressen til brukeren. Vennligst legg til følgende i Nginx konfigurasjonsfil i Http-delen:

- Avhengighet: **ngx_http_realip_module** modulen, bruk `nginx -V` kommandoen for å sjekke om nginx allerede er kompilert med denne modulen, hvis ikke, må du kompilere den selv.

```nginx
    # cloudflare Start
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare END
```
```

