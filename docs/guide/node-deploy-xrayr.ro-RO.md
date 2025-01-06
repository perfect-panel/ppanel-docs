```markdown
---
title: XrayR
order: 1
group: 
  title: Implementare pe nod
  order: 5
toc: content
---

## Instalare nod

### Instalare cu un singur clic

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Instalare Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Instalare Docker Compose

```
# Instalare Docker și Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Clonare configurație
git clone https://github.com/perfect-panel/XrayR-release

# Schimbare director
cd XrayR-release

# Editare config, vă rugăm să consultați opțiunile de configurare, salvați și continuați
vi ./config/config.yml

# Pornire
docker compose up -d
```

Explicația opțiunilor de configurare:

```yaml
Log:
  Level: none # Nivel de logare: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Calea către configurația DNS
ConnetionConfig:
  Handshake: 4 # Limită de timp pentru handshake, secunde
  ConnIdle: 10 # Limită de timp pentru inactivitate a conexiunii, secunde
  UplinkOnly: 2 # Limită de timp când conexiunea downstream este închisă, secunde
  DownlinkOnly: 4 # Limită de timp când conexiunea este închisă după ce uplink-ul este închis, secunde
  BufferSize: 64 # Dimensiunea cache-ului intern pentru fiecare conexiune, kB
Nodes:
  - PanelType: 'PPanel' # Tip de panou: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Tip de nod: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Timeout pentru cererea API
      EnableVless: false # Activează Vless pentru tipul V2ray
      EnableXTLS: false # Activează XTLS pentru V2ray și Trojan
      SpeedLimit: 0 # Mbps, setările locale vor înlocui setările de la distanță, 0 înseamnă dezactivat
      DeviceLimit: 0 # Setările locale vor înlocui setările de la distanță, 0 înseamnă dezactivat
      RuleListPath: # /etc/XrayR/rulelist Calea către fișierul local de reguli
    ControllerConfig:
      ListenIP: 0.0.0.0 # Adresa IP pe care doriți să ascultați
      SendIP: 0.0.0.0 # Adresa IP pe care doriți să trimiteți pachete
      UpdatePeriodic: 60 # Timpul pentru actualizarea informațiilor despre nod, câte secunde.
      EnableDNS: false # Folosește configurația DNS personalizată, vă rugăm să vă asigurați că ați setat corect dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, strategie DNS
      EnableProxyProtocol: false # Funcționează doar pentru WebSocket și TCP
      EnableFallback: false # Suportă doar pentru Trojan și Vless
      FallBackConfigs: # Suportă mai multe fallback-uri
        - SNI: # TLS SNI (Server Name Indication), gol pentru oricare
          Path: # Calea HTTP, gol pentru oricare
          Dest: 80 # Necesare, destinația fallback-ului, verificați https://xtls.github.io/config/fallback/ pentru detalii.
          ProxyProtocolVer: 0 # Trimite versiunea protocolului PROXY, 0 pentru dezactivare
      CertConfig:
        CertMode: dns # Opțiune despre cum să obțineți certificatul: none, file, http, dns. Alegeți "none" va dezactiva forțat configurația tls.
        CertDomain: 'node1.test.com' # Domeniu pentru certificat
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Furnizat dacă CertMode este file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Furnizor de certificat DNS, obțineți lista completă de suport aici: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Opțiune DNS ENV utilizată de furnizorul DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

