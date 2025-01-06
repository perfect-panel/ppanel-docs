---
title: Bináris
order: 2
group: 
  title: Szolgáltató telepítése
  order: 2
toc: content
---

### Telepítési útmutató

#### Előfeltételek

- Mysql 5.7+ (ajánlott a 8.0 használata)
- Redis 6.0+ (ajánlott a 7.0 használata)

#### Bináris telepítés

1. Határozza meg a rendszer architektúráját, és töltse le a megfelelő bináris fájlt

Letöltési cím: `https://github.com/perfect-panel/ppanel/releases`

Példa: Rendszer: Linux amd64, Felhasználó: root, Jelenlegi könyvtár: /root

- Bináris fájl letöltése

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Bináris fájl kicsomagolása

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Lépjen be a kicsomagolt könyvtárba

```shell
cd ppanel-server-linux-amd64
```

- Adjon végrehajtási jogosultságot a bináris fájlnak

```shell
chmod +x ppanel
```

- Hozzon létre systemd szolgáltatás fájlt

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

- Töltse újra a systemd szolgáltatásokat

```shell
systemctl daemon-reload
```

- Indítsa el a szolgáltatást

```shell
systemctl start ppanel
```

##### Egyéb megjegyzések

1. Telepítési útvonal: A bináris fájl a /root/ppanel-server-linux-amd64 könyvtárba lesz kicsomagolva.

2. systemd szolgáltatás:
   - Szolgáltatás neve: ppanel
   - Szolgáltatás konfigurációs fájl: /etc/systemd/system/ppanel.service
   - Szolgáltatás indító parancs: systemctl start ppanel
   - Szolgáltatás leállító parancs: systemctl stop ppanel
   - Szolgáltatás újraindító parancs: systemctl restart ppanel
   - Szolgáltatás állapot parancs: systemctl status ppanel
   - Szolgáltatás automatikus indítása: systemctl enable ppanel

3. Az automatikus indítást a következő parancs segítségével állíthatja be:

   ```shell
   systemctl enable ppanel
   ```

4. Szolgáltatás napló: A szolgáltatás naplója alapértelmezés szerint a /root/ppanel-server-linux-amd64/ppanel.log fájlba kerül.

5. A szolgáltatás naplója megtekinthető a `journalctl -u ppanel -f` paranccsal.

6. Ha a konfigurációs fájl üres vagy nem létezik, a szolgáltatás alapértelmezett konfigurációval indul, a konfigurációs fájl elérési útja: `./etc/ppanel.yaml`,
   kérjük, a `http://szerver_cím:8080/init` címen inicializálja a rendszer konfigurációját.

#### NGINX fordított proxy konfiguráció

Az alábbiakban egy fordított proxy konfigurációs példa található, amely a `ppanel` szolgáltatást az `api.ppanel.dev` domain alá irányítja.

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
        
       #Nginx cache beállítása
       
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

Ha Cloudflare proxy szolgáltatást használ, szükséges a felhasználó valódi IP-címének megszerzése. Kérjük, adja hozzá a következőket az Nginx konfigurációs fájl Http szakaszához:

- Szükséges: **ngx_http_realip_module** modul, az nginx -V parancs segítségével ellenőrizheti, hogy az nginx már tartalmazza-e ezt a modult; ha nem, akkor saját magának kell lefordítania.

```nginx
    # cloudflare Kezdete
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Vége
```

