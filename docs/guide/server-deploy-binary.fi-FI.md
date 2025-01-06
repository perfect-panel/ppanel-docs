```markdown
---
title: Binaarinen
order: 2
group: 
  title: Palvelin asennus
  order: 2
toc: content
---

### Asennusohjeet

#### Esijärjestelmävaatimukset

- Mysql 5.7+ (suositellaan käytettäväksi 8.0)
- Redis 6.0+ (suositellaan käytettäväksi 7.0)

#### Binaarinen asennus

1. Määritä järjestelmän arkkitehtuuri ja lataa vastaava binaaritiedosto

Latausosoite: `https://github.com/perfect-panel/ppanel/releases`

Esimerkkikuvaus: Järjestelmä: Linux amd64, käyttäjä: root, nykyinen hakemisto: /root

- Lataa binaaritiedosto

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Purkaa binaaritiedosto

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Siirry purettuun hakemistoon

```shell
cd ppanel-server-linux-amd64
```

- Anna binaaritiedostolle suoritusoikeudet

```shell
chmod +x ppanel
```

- Luo systemd palvelutiedosto

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

- Lataa systemd palvelut uudelleen

```shell
systemctl daemon-reload
```

- Käynnistä palvelu

```shell
systemctl start ppanel
```

##### Muut tiedot

1. Asennuspolku: Binaaritiedosto purkautuu hakemistoon /root/ppanel-server-linux-amd64

2. systemd palvelu:
   - Palvelun nimi: ppanel
   - Palvelun konfiguraatiotiedosto: /etc/systemd/system/ppanel.service
   - Palvelun käynnistyskomento: systemctl start ppanel
   - Palvelun pysäytyskomento: systemctl stop ppanel
   - Palvelun uudelleenkäynnistyskomento: systemctl restart ppanel
   - Palvelun tilakomento: systemctl status ppanel
   - Palvelun automaattinen käynnistys: systemctl enable ppanel

3. Aseta automaattinen käynnistys seuraavalla komennolla

   ```shell
   systemctl enable ppanel
   ```

4. Palveluloki: Palveluloki tallennetaan oletuksena tiedostoon /root/ppanel-server-linux-amd64/ppanel.log

5. Palvelulokin voi tarkistaa komennolla `journalctl -u ppanel -f`

6. Kun konfiguraatiotiedosto on tyhjää tai ei ole olemassa, palvelu käynnistyy oletusasetuksilla, konfiguraatiotiedoston polku on: `./etc/ppanel.yaml`,
   käynnistä järjestelmän konfigurointi osoitteessa `http://palvelimen_osoite:8080/init`

#### NGINX käänteinen proxy-asetus

Alla on esimerkki käänteisestä proxy-asetuksesta, joka ohjaa `ppanel` palvelun `api.ppanel.dev` verkkotunnukseen

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
        
       #Aseta Nginx välimuisti
       
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

Jos käytät Cloudflare-proxypalvelua, sinun on saatava käyttäjän todellinen IP-osoite. Lisää Nginx konfiguraatiotiedostoon Http-osioon:

- Tarvitaan: **ngx_http_realip_module** moduuli, tarkista komennolla nginx -V onko nginx käännetty tämän moduulin kanssa, jos ei, sinun on käännettävä se itse.

```nginx
    # cloudflare Aloitus
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Loppu
```
```

