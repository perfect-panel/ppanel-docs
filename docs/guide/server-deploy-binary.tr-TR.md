```markdown
---
title: İkili
order: 2
group: 
  title: Sunucu Dağıtımı
  order: 2
toc: content
---

### Kurulum Talimatları

#### Ön Gereksinimler

- Mysql 5.7+ (8.0 kullanılması önerilir)
- Redis 6.0+ (7.0 kullanılması önerilir)

#### İkili Kurulum

1. Sistem mimarisini belirleyin ve ilgili ikili dosyayı indirin.

İndirme adresi: `https://github.com/perfect-panel/ppanel/releases`

Örnek açıklama: Sistem: Linux amd64, Kullanıcı: root, Mevcut dizin: /root

- İkili dosyayı indirin

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- İkili dosyayı çıkarın

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Çıkarılan dizine girin

```shell
cd ppanel-server-linux-amd64
```

- İkili dosyaya çalıştırma izni verin

```shell
chmod +x ppanel
```

- systemd hizmet dosyası oluşturun

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL Sunucusu
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

- systemd hizmetini yeniden yükleyin

```shell
systemctl daemon-reload
```

- Hizmeti başlatın

```shell
systemctl start ppanel
```

##### Diğer Açıklamalar

1. Kurulum yolu: İkili dosya /root/ppanel-server-linux-amd64 dizinine çıkarılacaktır.

2. systemd hizmeti:
   - Hizmet adı: ppanel
   - Hizmet yapılandırma dosyası: /etc/systemd/system/ppanel.service
   - Hizmet başlatma komutu: systemctl start ppanel
   - Hizmet durdurma komutu: systemctl stop ppanel
   - Hizmet yeniden başlatma komutu: systemctl restart ppanel
   - Hizmet durum komutu: systemctl status ppanel
   - Hizmetin başlangıçta otomatik başlatılması: systemctl enable ppanel

3. Başlangıçta otomatik başlatmayı ayarlamak için aşağıdaki komutu kullanabilirsiniz

   ```shell
   systemctl enable ppanel
   ```

4. Hizmet günlükleri: Hizmet günlükleri varsayılan olarak /root/ppanel-server-linux-amd64/ppanel.log dosyasına yazılır.

5. Hizmet günlüklerini `journalctl -u ppanel -f` komutuyla görüntüleyebilirsiniz.

6. Yapılandırma dosyası boş veya mevcut değilse, hizmet varsayılan yapılandırma ile başlatılacaktır. Yapılandırma dosyası yolu: `./etc/ppanel.yaml`,
   Lütfen sistemi yapılandırmak için `http://sunucu_adresi:8080/init` adresini kullanın.

#### NGINX Ters Proxy Yapılandırması

Aşağıda, `ppanel` hizmetini `api.ppanel.dev` alan adına yönlendiren ters proxy yapılandırma örneği bulunmaktadır.

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
        
       # Nginx Önbelleğini Ayarlayın
       
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

Cloudflare proxy hizmetini kullanıyorsanız, kullanıcıların gerçek IP adreslerini almak için Nginx yapılandırma dosyasının Http bölümüne aşağıdakileri ekleyin:

- Gereksinim: **ngx_http_realip_module** modülü, nginx -V komutunu kullanarak nginx'in bu modül ile derlenip derlenmediğini kontrol edin. Eğer yoksa, kendiniz derlemeniz gerekecek.

```nginx
    # cloudflare Başlangıç
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Bitiş
```
```

