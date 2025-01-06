```markdown
---
title: Binare
order: 2
group: 
  title: Implementare pe server
  order: 2
toc: content
---

### Instrucțiuni de instalare

#### Cerințe de sistem

- Mysql 5.7+ (se recomandă utilizarea versiunii 8.0)
- Redis 6.0+ (se recomandă utilizarea versiunii 7.0)

#### Instalare binară

1. Determinați arhitectura sistemului și descărcați fișierul binar corespunzător

Adresa de descărcare: `https://github.com/perfect-panel/ppanel/releases`

Exemplu: sistem: Linux amd64, utilizator: root, director curent: /root

- Descărcați fișierul binar

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Dezarhivați fișierul binar

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Intrați în directorul dezarhivat

```shell
cd ppanel-server-linux-amd64
```

- Acordați permisiuni de execuție fișierului binar

```shell
chmod +x ppanel
```

- Creați fișierul de serviciu systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=Server PPANEL
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

- Reîncărcați serviciile systemd

```shell
systemctl daemon-reload
```

- Porniți serviciul

```shell
systemctl start ppanel
```

##### Alte informații

1. Calea de instalare: fișierul binar va fi dezarhivat în directorul /root/ppanel-server-linux-amd64

2. Serviciul systemd:
   - Numele serviciului: ppanel
   - Fișierul de configurare al serviciului: /etc/systemd/system/ppanel.service
   - Comanda de pornire a serviciului: systemctl start ppanel
   - Comanda de oprire a serviciului: systemctl stop ppanel
   - Comanda de repornire a serviciului: systemctl restart ppanel
   - Comanda de stare a serviciului: systemctl status ppanel
   - Activare la pornire: systemctl enable ppanel

3. Activarea la pornire se poate face cu următoarea comandă

   ```shell
   systemctl enable ppanel
   ```

4. Jurnalul serviciului: jurnalul serviciului este, în mod implicit, redirecționat către fișierul /root/ppanel-server-linux-amd64/ppanel.log

5. Puteți vizualiza jurnalul serviciului folosind `journalctl -u ppanel -f`

6. Atunci când fișierul de configurare este gol sau inexistent, serviciul va porni cu configurația implicită, iar calea fișierului de configurare este: `./etc/ppanel.yaml`,
   vă rugăm să inițializați configurația sistemului prin `http://adresa-serverului:8080/init`

#### Configurarea proxy-ului invers NGINX

Iată un exemplu de configurare a proxy-ului invers, care redirecționează serviciul `ppanel` către domeniul `api.ppanel.dev`

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
        
       #Setare cache Nginx
       
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

Dacă utilizați serviciul de proxy Cloudflare, trebuie să obțineți adresa IP reală a utilizatorului. Vă rugăm să adăugați în fișierul de configurare Nginx în secțiunea Http:

- Este necesar: **modulul ngx_http_realip_module**, verificați dacă nginx a fost compilat cu acest modul folosind comanda nginx -V; dacă nu, va trebui să-l compilați singur.

```nginx
    # cloudflare Începere
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Sfârșit
```
```

