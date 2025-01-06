```markdown
---
title: XrayR
order: 1
group: 
  title: Düğüm Uç Noktası Dağıtımı
  order: 5
toc: content
---

## Düğüm Uç Noktasını Kurma

### Tek Tıkla Kurulum

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker ile Kurulum

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker Compose ile Kurulum

```
# Docker ve Docker Compose'u kur
curl -fsSL https://get.docker.com | bash -s docker

# Konfigürasyonu çek
git clone https://github.com/perfect-panel/XrayR-release

# Dizin değiştir
cd XrayR-release

# Konfigürasyonu düzenleyin, lütfen yapılandırma öğelerine bakın, kaydettikten sonra devam edin
vi ./config/config.yml

# Başlat
docker compose up -d
```

Yapılandırma öğeleri açıklaması:

```yaml
Log:
  Level: none # Günlük seviyesi: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json DNS yapılandırma yolu
ConnetionConfig:
  Handshake: 4 # El sıkışma zaman sınırı, Saniye
  ConnIdle: 10 # Bağlantı boşta kalma zaman sınırı, Saniye
  UplinkOnly: 2 # Bağlantı aşağı akış kapandığında zaman sınırı, Saniye
  DownlinkOnly: 4 # Yukarı akış kapandığında bağlantı kapandığında zaman sınırı, Saniye
  BufferSize: 64 # Her bağlantının iç cache boyutu, kB
Nodes:
  - PanelType: 'PPanel' # Panel türü: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Düğüm türü: V2ray, Shadowsocks, Trojan
      Timeout: 30 # API isteği için zaman aşımı
      EnableVless: false # V2ray türü için Vless'i etkinleştir
      EnableXTLS: false # V2ray ve Trojan için XTLS'yi etkinleştir
      SpeedLimit: 0 # Mbps, Yerel ayarlar uzak ayarları geçersiz kılacak, 0 devre dışı bırakır
      DeviceLimit: 0 # Yerel ayarlar uzak ayarları geçersiz kılacak, 0 devre dışı bırakır
      RuleListPath: # /etc/XrayR/rulelist Yerel kural listesi dosyasının yolu
    ControllerConfig:
      ListenIP: 0.0.0.0 # Dinlemek istediğiniz IP adresi
      SendIP: 0.0.0.0 # Paket göndermek istediğiniz IP adresi
      UpdatePeriodic: 60 # Düğüm bilgilerini güncelleme süresi, kaç saniye.
      EnableDNS: false # Özel DNS yapılandırmasını kullan, lütfen dns.json'u düzgün ayarladığınızdan emin olun
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS stratejisi
      EnableProxyProtocol: false # Sadece WebSocket ve TCP için geçerlidir
      EnableFallback: false # Sadece Trojan ve Vless için desteklenir
      FallBackConfigs: # Birden fazla geri dönüşü destekler
        - SNI: # TLS SNI (Sunucu Adı Belirtimi), herhangi bir şey için boş
          Path: # HTTP YOLU, herhangi bir şey için boş
          Dest: 80 # Gerekli, geri dönüşün hedefi, detaylar için https://xtls.github.io/config/fallback/ adresine bakın.
          ProxyProtocolVer: 0 # PROXY protokol versiyonunu gönder, 0 devre dışı bırakır
      CertConfig:
        CertMode: dns # Sertifika alma yöntemi hakkında seçenek: none, file, http, dns. "none" seçmek tls yapılandırmasını zorla devre dışı bırakır.
        CertDomain: 'node1.test.com' # Sertifika için alan adı
        CertFile: /etc/XrayR/cert/node1.test.com.cert # CertMode dosya ise sağlanır
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS sertifika sağlayıcısı, tam destek listesini buradan alın: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS sağlayıcı tarafından kullanılan DNS ENV seçeneği
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

