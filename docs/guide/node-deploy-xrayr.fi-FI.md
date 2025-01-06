```markdown
---
title: XrayR
order: 1
group: 
  title: Solmupisteen asennus
  order: 5
toc: content
---

## Solmupisteen asennus

### Yhden komennon asennus

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker-asennus

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker Compose -asennus

```
# Asenna docker ja docker compose
curl -fsSL https://get.docker.com | bash -s docker

# Vedä konfiguraatio
git clone https://github.com/perfect-panel/XrayR-release

# Siirry hakemistoon
cd XrayR-release

# Muokkaa configia, katso konfigurointikohteita, tallenna ja jatka
vi ./config/config.yml

# Käynnistä
docker compose up -d
```

Konfigurointikohteiden selitys:

```yaml
Log:
  Level: none # Lokitaso: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Polku dns-konfiguraatioon
ConnetionConfig:
  Handshake: 4 # Kättelyaika, sekuntia
  ConnIdle: 10 # Yhteyden tyhjilläänoloaika, sekuntia
  UplinkOnly: 2 # Aika, jolloin yhteys alavirtaan suljetaan, sekuntia
  DownlinkOnly: 4 # Aika, jolloin yhteys suljetaan, kun ylöspäin suuntautunut yhteys on suljettu, sekuntia
  BufferSize: 64 # Jokaisen yhteyden sisäinen välimuistin koko, kB
Nodes:
  - PanelType: 'PPanel' # Paneelityyppi: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Solmupisteen tyyppi: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Aika ylittää API-pyyntö
      EnableVless: false # Ota Vless käyttöön V2ray-tyypille
      EnableXTLS: false # Ota XTLS käyttöön V2raylle ja Trojanille
      SpeedLimit: 0 # Mbps, Paikalliset asetukset korvaavat etäasetukset, 0 tarkoittaa pois päältä
      DeviceLimit: 0 # Paikalliset asetukset korvaavat etäasetukset, 0 tarkoittaa pois päältä
      RuleListPath: # /etc/XrayR/rulelist Polku paikalliseen sääntölistatiedostoon
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP-osoite, jota haluat kuunnella
      SendIP: 0.0.0.0 # IP-osoite, jota haluat lähettää paketteja
      UpdatePeriodic: 60 # Aika päivittää solmun tiedot, kuinka monta sekuntia.
      EnableDNS: false # Käytä mukautettua DNS-konfiguraatiota, varmista, että olet määrittänyt dns.json-tiedoston oikein
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS-strategia
      EnableProxyProtocol: false # Toimii vain WebSocketille ja TCP:lle
      EnableFallback: false # Tukee vain Trojanille ja Vlessille
      FallBackConfigs: # Tukee useita varakäytäntöjä
        - SNI: # TLS SNI (Server Name Indication), tyhjää kaikille
          Path: # HTTP PATH, tyhjää kaikille
          Dest: 80 # Pakollinen, varakäytön kohde, tarkista https://xtls.github.io/config/fallback/ lisätietoja varten.
          ProxyProtocolVer: 0 # Lähetä PROXY-protokollan versio, 0 poistaa käytöstä
      CertConfig:
        CertMode: dns # Vaihtoehto siitä, miten sertifikaatti saadaan: none, file, http, dns. Valitse "none", jolloin tls-konfiguraatio poistuu käytöstä.
        CertDomain: 'node1.test.com' # Sertifikaatin domain
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Tarjotaan, jos CertMode on file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS-sertifikaatin tarjoaja, katso täydellinen tukiluettelo täältä: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS ENV -vaihtoehto, jota DNS-tarjoaja käyttää
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

