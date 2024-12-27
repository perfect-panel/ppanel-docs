---
title: Węzeł
order: 5
nav:
  title: Przewodnik
  order: 1
group:
  title: Wdrożenie
  order: 1
toc: content
---

## Instalacja węzła

### Instalacja jednym poleceniem

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Instalacja za pomocą Dockera

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Instalacja za pomocą Docker Compose

```
# Instalacja Dockera i Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Klonowanie repozytorium
git clone https://github.com/perfect-panel/XrayR-release

# Przejdź do katalogu
cd XrayR-release

# Edytuj plik konfiguracyjny, zapoznaj się z opcjami konfiguracyjnymi, zapisz i kontynuuj
vi ./config/config.yml

# Uruchom
docker compose up -d
```

Opis opcji konfiguracyjnych:

```yaml
Log:
  Level: none # Poziom logowania: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Ścieżka do konfiguracji DNS
ConnetionConfig:
  Handshake: 4 # Limit czasu handshake, sekundy
  ConnIdle: 10 # Limit czasu bezczynności połączenia, sekundy
  UplinkOnly: 2 # Limit czasu, gdy połączenie downstream jest zamknięte, sekundy
  DownlinkOnly: 4 # Limit czasu, gdy połączenie jest zamknięte po zamknięciu uplink, sekundy
  BufferSize: 64 # Rozmiar wewnętrznej pamięci podręcznej każdego połączenia, kB
Nodes:
  - PanelType: 'PPanel' # Typ panelu: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Typ węzła: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Limit czasu dla żądania API
      EnableVless: false # Włącz Vless dla typu V2ray
      EnableXTLS: false # Włącz XTLS dla V2ray i Trojana
      SpeedLimit: 0 # Mbps, lokalne ustawienia zastąpią ustawienia zdalne, 0 oznacza wyłączenie
      DeviceLimit: 0 # Lokalna konfiguracja zastąpi zdalne ustawienia, 0 oznacza wyłączenie
      RuleListPath: # /etc/XrayR/rulelist Ścieżka do lokalnego pliku listy reguł
    ControllerConfig:
      ListenIP: 0.0.0.0 # Adres IP, na którym chcesz nasłuchiwać
      SendIP: 0.0.0.0 # Adres IP, na który chcesz wysyłać pakiety
      UpdatePeriodic: 60 # Czas aktualizacji informacji o węźle, w sekundach
      EnableDNS: false # Użyj niestandardowej konfiguracji DNS, upewnij się, że poprawnie ustawisz dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, strategia DNS
      EnableProxyProtocol: false # Działa tylko dla WebSocket i TCP
      EnableFallback: false # Obsługuje tylko Trojana i Vless
      FallBackConfigs: # Obsługuje wiele fallbacków
        - SNI: # TLS SNI (Server Name Indication), puste dla dowolnego
          Path: # ŚCIEŻKA HTTP, puste dla dowolnego
          Dest: 80 # Wymagane, docelowy adres fallback, sprawdź https://xtls.github.io/config/fallback/ po szczegóły.
          ProxyProtocolVer: 0 # Wysyła wersję protokołu PROXY, 0 dla wyłączenia
      CertConfig:
        CertMode: dns # Opcja dotycząca sposobu uzyskania certyfikatu: none, file, http, dns. Wybór "none" wymusi wyłączenie konfiguracji tls.
        CertDomain: 'node1.test.com' # Domeny do certyfikatu
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Podano, jeśli CertMode to file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Dostawca certyfikatów DNS, pełna lista wsparcia tutaj: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Opcja DNS ENV używana przez dostawcę DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
