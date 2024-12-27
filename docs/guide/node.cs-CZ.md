---
title: Uzlový server
order: 5
nav:
  title: Příručka
  order: 1
group:
  title: Nasazení
  order: 1
toc: content
---

## Instalace uzlového serveru

### Jednoduchá instalace

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Instalace pomocí Dockeru

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Instalace pomocí Docker Compose

```
# Instalace Dockeru a Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Klonování konfigurace
git clone https://github.com/perfect-panel/XrayR-release

# Přepnutí do adresáře
cd XrayR-release

# Úprava konfigurace, prosím, odkazujte se na konfigurační položky, po uložení pokračujte
vi ./config/config.yml

# Spuštění
docker compose up -d
```

Popis konfiguračních položek:

```yaml
Log:
  Level: none # Úroveň protokolování: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Cesta k DNS konfiguraci
ConnetionConfig:
  Handshake: 4 # Časový limit handshake, sekundy
  ConnIdle: 10 # Časový limit nečinnosti připojení, sekundy
  UplinkOnly: 2 # Časový limit, kdy je uzavřeno připojení směrem dolů, sekundy
  DownlinkOnly: 4 # Časový limit, kdy je připojení uzavřeno po uzavření směru nahoru, sekundy
  BufferSize: 64 # Velikost interního cache pro každé připojení, kB
Nodes:
  - PanelType: 'PPanel' # Typ panelu: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Typ uzlu: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Časový limit pro API požadavek
      EnableVless: false # Povolit Vless pro typ V2ray
      EnableXTLS: false # Povolit XTLS pro V2ray a Trojan
      SpeedLimit: 0 # Mbps, Místní nastavení nahradí vzdálená nastavení, 0 znamená zakázat
      DeviceLimit: 0 # Místní nastavení nahradí vzdálená nastavení, 0 znamená zakázat
      RuleListPath: # /etc/XrayR/rulelist Cesta k místnímu souboru pravidel
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP adresa, na které chcete naslouchat
      SendIP: 0.0.0.0 # IP adresa, na kterou chcete posílat pakety
      UpdatePeriodic: 60 # Čas pro aktualizaci informací o uzlu, kolik sekund.
      EnableDNS: false # Použít vlastní DNS konfiguraci, prosím, ujistěte se, že máte správně nastavený dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS strategie
      EnableProxyProtocol: false # Funguje pouze pro WebSocket a TCP
      EnableFallback: false # Podporuje pouze Trojan a Vless
      FallBackConfigs: # Podporuje více záložních konfigurací
        - SNI: # TLS SNI (Server Name Indication), prázdné pro jakékoli
          Path: # HTTP CESTA, prázdné pro jakékoli
          Dest: 80 # Povinné, cílová adresa záložního připojení, podívejte se na https://xtls.github.io/config/fallback/ pro podrobnosti.
          ProxyProtocolVer: 0 # Odeslat verzi PROXY protokolu, 0 pro zakázání
      CertConfig:
        CertMode: dns # Možnost, jak získat certifikát: none, file, http, dns. Výběr "none" trvale zakáže konfiguraci tls.
        CertDomain: 'node1.test.com' # Doména pro certifikát
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Poskytováno, pokud je CertMode soubor
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Poskytovatel DNS certifikátu, získejte úplný seznam podporovaných zde: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS ENV možnost používaná poskytovatelem DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
