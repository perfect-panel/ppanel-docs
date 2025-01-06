```markdown
---
title: XrayR
order: 1
group: 
  title: Node-deployering
  order: 5
toc: content
---

## Installere node

### Én-klikks installasjon

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker installasjon

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker Compose installasjon

```
# Installer docker og docker compose
curl -fsSL https://get.docker.com | bash -s docker

# Klon konfigurasjonen
git clone https://github.com/perfect-panel/XrayR-release

# Bytt katalog
cd XrayR-release

# Rediger config, vennligst referer til konfigurasjonsalternativene, lagre og fortsett
vi ./config/config.yml

# Start
docker compose up -d
```

Forklaring av konfigurasjonsalternativer:

```yaml
Log:
  Level: none # Loggnivå: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Sti til dns-konfigurasjon
ConnetionConfig:
  Handshake: 4 # Tidsgrense for håndtrykk, sekunder
  ConnIdle: 10 # Tidsgrense for inaktiv forbindelse, sekunder
  UplinkOnly: 2 # Tidsgrense når nedstrømsforbindelsen er stengt, sekunder
  DownlinkOnly: 4 # Tidsgrense når forbindelsen er stengt etter at oppstrømsforbindelsen er stengt, sekunder
  BufferSize: 64 # Den interne hurtigbufferstørrelsen for hver forbindelse, kB
Nodes:
  - PanelType: 'PPanel' # Paneltype: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Nodetype: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Tidsgrense for API-forespørselen
      EnableVless: false # Aktiver Vless for V2ray-type
      EnableXTLS: false # Aktiver XTLS for V2ray og Trojan
      SpeedLimit: 0 # Mbps, Lokale innstillinger vil erstatte eksterne innstillinger, 0 betyr deaktivert
      DeviceLimit: 0 # Lokale innstillinger vil erstatte eksterne innstillinger, 0 betyr deaktivert
      RuleListPath: # /etc/XrayR/rulelist Sti til lokal regelistefil
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP-adresse du vil lytte til
      SendIP: 0.0.0.0 # IP-adresse du vil sende pakker til
      UpdatePeriodic: 60 # Tid for å oppdatere nodeinformasjonen, hvor mange sekunder.
      EnableDNS: false # Bruk tilpasset DNS-konfigurasjon, vennligst sørg for at du har satt opp dns.json riktig
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS-strategi
      EnableProxyProtocol: false # Fungerer kun for WebSocket og TCP
      EnableFallback: false # Støtter kun for Trojan og Vless
      FallBackConfigs: # Støtter flere fallback-alternativer
        - SNI: # TLS SNI (Server Name Indication), Tom for hvilken som helst
          Path: # HTTP PATH, Tom for hvilken som helst
          Dest: 80 # Påkrevd, Destinasjon for fallback, sjekk https://xtls.github.io/config/fallback/ for detaljer.
          ProxyProtocolVer: 0 # Send PROXY-protokollversjon, 0 for å deaktivere
      CertConfig:
        CertMode: dns # Alternativ om hvordan man får sertifikat: none, file, http, dns. Velg "none" for å tvinge deaktivering av tls-konfigurasjonen.
        CertDomain: 'node1.test.com' # Domene for sertifikat
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Angitt hvis CertMode er file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS sertifikatleverandør, Få den fullstendige støttelisten her: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS ENV-alternativ brukt av DNS-leverandør
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

