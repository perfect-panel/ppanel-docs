---
title: Knoten-Ende
order: 5
nav:
  title: Anleitung
  order: 1
group:
  title: Bereitstellung
  order: 1
toc: content
---

## Installation des Knoten-Endes

### Ein-Klick-Installation

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker-Installation

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker-Compose-Installation

```
# Installieren von Docker und Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Konfiguration klonen
git clone https://github.com/perfect-panel/XrayR-release

# Verzeichnis wechseln
cd XrayR-release

# Konfiguration bearbeiten, bitte die Konfigurationselemente beachten, speichern und fortfahren
vi ./config/config.yml

# Starten
docker compose up -d
```

Erläuterung der Konfigurationselemente:

```yaml
Log:
  Level: none # Protokollebene: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Pfad zur DNS-Konfiguration
ConnetionConfig:
  Handshake: 4 # Zeitlimit für den Handshake, Sekunden
  ConnIdle: 10 # Zeitlimit für die Leerlaufzeit der Verbindung, Sekunden
  UplinkOnly: 2 # Zeitlimit, wenn die Verbindung zum Downstream geschlossen ist, Sekunden
  DownlinkOnly: 4 # Zeitlimit, wenn die Verbindung nach dem Schließen des Uplinks geschlossen wird, Sekunden
  BufferSize: 64 # Die interne Cache-Größe jeder Verbindung, kB
Nodes:
  - PanelType: 'PPanel' # Paneltyp: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Knotentyp: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Timeout für die API-Anfrage
      EnableVless: false # Vless für den V2ray-Typ aktivieren
      EnableXTLS: false # XTLS für V2ray und Trojan aktivieren
      SpeedLimit: 0 # Mbps, Lokale Einstellungen ersetzen entfernte Einstellungen, 0 bedeutet deaktivieren
      DeviceLimit: 0 # Lokale Einstellungen ersetzen entfernte Einstellungen, 0 bedeutet deaktivieren
      RuleListPath: # /etc/XrayR/rulelist Pfad zur lokalen Regeldatei
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP-Adresse, auf der Sie hören möchten
      SendIP: 0.0.0.0 # IP-Adresse, an die Sie Pakete senden möchten
      UpdatePeriodic: 60 # Zeit zum Aktualisieren der Knotendaten, wie viele Sekunden.
      EnableDNS: false # Benutzerdefinierte DNS-Konfiguration verwenden, bitte sicherstellen, dass Sie die dns.json korrekt eingestellt haben
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS-Strategie
      EnableProxyProtocol: false # Funktioniert nur für WebSocket und TCP
      EnableFallback: false # Unterstützt nur Trojan und Vless
      FallBackConfigs: # Unterstützt mehrere Fallbacks
        - SNI: # TLS SNI (Server Name Indication), leer für beliebig
          Path: # HTTP-PFAD, leer für beliebig
          Dest: 80 # Erforderlich, Ziel des Fallbacks, siehe https://xtls.github.io/config/fallback/ für Details.
          ProxyProtocolVer: 0 # PROXY-Protokollversion senden, 0 zum Deaktivieren
      CertConfig:
        CertMode: dns # Option, wie das Zertifikat erhalten werden soll: none, file, http, dns. Wählen Sie "none", um die TLS-Konfiguration zwangsweise zu deaktivieren.
        CertDomain: 'node1.test.com' # Domain für das Zertifikat
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Bereitgestellt, wenn der CertMode file ist
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS-Zertifikatanbieter, vollständige Unterstützungsübersicht hier: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS-ENV-Option, die vom DNS-Anbieter verwendet wird
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
