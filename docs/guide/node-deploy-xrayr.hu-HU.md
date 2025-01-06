```markdown
---
title: XrayR
order: 1
group: 
  title: Csomópont telepítése
  order: 5
toc: content
---

## Csomópont telepítése

### Egyszerű telepítés

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker telepítés

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker compose telepítés

```
# Docker és Docker compose telepítése
curl -fsSL https://get.docker.com | bash -s docker

# Konfiguráció letöltése
git clone https://github.com/perfect-panel/XrayR-release

# Könyvtár váltás
cd XrayR-release

# A config szerkesztése, kérjük, nézze meg a konfigurációs elemeket, mentés után folytassa
vi ./config/config.yml

# Indítás
docker compose up -d
```

A konfigurációs elemek magyarázata:

```yaml
Log:
  Level: none # Naplózási szint: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json DNS konfiguráció elérési útja
ConnetionConfig:
  Handshake: 4 # Kézfogás időkorlát, másodperc
  ConnIdle: 10 # Kapcsolat inaktív időkorlát, másodperc
  UplinkOnly: 2 # Időkorlát, amikor a kapcsolat lefelé zárva van, másodperc
  DownlinkOnly: 4 # Időkorlát, amikor a kapcsolat zárva van, miután a felfelé zárva van, másodperc
  BufferSize: 64 # Minden kapcsolat belső gyorsítótárának mérete, kB
Nodes:
  - PanelType: 'PPanel' # Panel típusa: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Csomópont típusa: V2ray, Shadowsocks, Trojan
      Timeout: 30 # API kérés időkorlátja
      EnableVless: false # Vless engedélyezése V2ray típushoz
      EnableXTLS: false # XTLS engedélyezése V2ray és Trojan számára
      SpeedLimit: 0 # Mbps, Helyi beállítások felülírják a távoli beállításokat, 0 azt jelenti, hogy letiltva
      DeviceLimit: 0 # Helyi beállítások felülírják a távoli beállításokat, 0 azt jelenti, hogy letiltva
      RuleListPath: # /etc/XrayR/rulelist Helyi szabálylista fájl elérési útja
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP cím, amelyen hallgatni szeretne
      SendIP: 0.0.0.0 # IP cím, amelyre csomagot szeretne küldeni
      UpdatePeriodic: 60 # Idő a csomópont információ frissítésére, hány másodperc
      EnableDNS: false # Egyedi DNS konfiguráció használata, kérjük, győződjön meg arról, hogy a dns.json megfelelően van beállítva
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS stratégia
      EnableProxyProtocol: false # Csak WebSocket és TCP esetén működik
      EnableFallback: false # Csak Trojan és Vless esetén támogatott
      FallBackConfigs: # Támogatja a több visszaállítást
        - SNI: # TLS SNI (Server Name Indication), üres bármire
          Path: # HTTP PATH, üres bármire
          Dest: 80 # Kötelező, a visszaállítás célja, részletekért ellenőrizze: https://xtls.github.io/config/fallback/
          ProxyProtocolVer: 0 # PROXY protokoll verzió küldése, 0 letiltásra
      CertConfig:
        CertMode: dns # Opció a tanúsítvány megszerzésének módjáról: none, file, http, dns. A "none" választása kötelezően letiltja a tls konfigurációt.
        CertDomain: 'node1.test.com' # Tanúsítvány domain
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Megadva, ha a CertMode fájl
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS tanúsítvány szolgáltató, a teljes támogatási lista itt található: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS ENV opció, amelyet a DNS szolgáltató használ
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

