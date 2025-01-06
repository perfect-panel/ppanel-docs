---
title: XrayR
order: 1
group: 
  title: Node Deployment
  order: 5
toc: content
---

## Installing Node

### One-Click Installation

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker Installation

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker Compose Installation

```
# Install Docker and Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Clone the configuration
git clone https://github.com/perfect-panel/XrayR-release

# Change directory
cd XrayR-release

# Edit the config, please refer to the configuration items, save and continue
vi ./config/config.yml

# Start
docker compose up -d
```

Configuration Item Explanation:

```yaml
Log:
  Level: none # Log level: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Path to DNS config
ConnectionConfig:
  Handshake: 4 # Handshake time limit, seconds
  ConnIdle: 10 # Connection idle time limit, seconds
  UplinkOnly: 2 # Time limit when the connection downstream is closed, seconds
  DownlinkOnly: 4 # Time limit when the connection is closed after the uplink is closed, seconds
  BufferSize: 64 # The internal cache size of each connection, kB
Nodes:
  - PanelType: 'PPanel' # Panel type: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Node type: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Timeout for the API request
      EnableVless: false # Enable Vless for V2ray Type
      EnableXTLS: false # Enable XTLS for V2ray and Trojan
      SpeedLimit: 0 # Mbps, Local settings will replace remote settings, 0 means disable
      DeviceLimit: 0 # Local settings will replace remote settings, 0 means disable
      RuleListPath: # /etc/XrayR/rulelist Path to local rulelist file
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP address you want to listen on
      SendIP: 0.0.0.0 # IP address you want to send packages to
      UpdatePeriodic: 60 # Time to update the node info, in seconds
      EnableDNS: false # Use custom DNS config, please ensure that you set the dns.json correctly
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS strategy
      EnableProxyProtocol: false # Only works for WebSocket and TCP
      EnableFallback: false # Only supports Trojan and Vless
      FallBackConfigs: # Support multiple fallbacks
        - SNI: # TLS SNI (Server Name Indication), empty for any
          Path: # HTTP PATH, empty for any
          Dest: 80 # Required, Destination of fallback, check https://xtls.github.io/config/fallback/ for details.
          ProxyProtocolVer: 0 # Send PROXY protocol version, 0 to disable
      CertConfig:
        CertMode: dns # Option about how to get certificate: none, file, http, dns. Choosing "none" will forcibly disable the TLS config.
        CertDomain: 'node1.test.com' # Domain for the certificate
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Provided if the CertMode is file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS cert provider, get the full support list here: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS ENV options used by DNS provider
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

