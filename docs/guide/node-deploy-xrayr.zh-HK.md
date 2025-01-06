```markdown
---
title: XrayR
order: 1
group: 
  title: 節點端部署
  order: 5
toc: content
---

## 安裝節點端

### 一鍵安裝

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker 安裝

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker compose 安裝

```
# 安裝docker及 docker compose
curl -fsSL https://get.docker.com | bash -s docker

# 拉取配置
git clone https://github.com/perfect-panel/XrayR-release

# 切換目錄
cd XrayR-release

# 編輯 config 請參考配置項, 保存後繼續
vi ./config/config.yml

# 啟動
docker compose up -d
```

配置項說明：

```yaml
Log:
  Level: none # 日誌級別: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json DNS 配置路徑
ConnetionConfig:
  Handshake: 4 # 握手時間限制，秒
  ConnIdle: 10 # 連接閒置時間限制，秒
  UplinkOnly: 2 # 當下行連接關閉時的時間限制，秒
  DownlinkOnly: 4 # 當上行關閉後連接關閉的時間限制，秒
  BufferSize: 64 # 每個連接的內部緩存大小，kB
Nodes:
  - PanelType: 'PPanel' # 面板類型: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # 節點類型: V2ray, Shadowsocks, Trojan
      Timeout: 30 # API 請求的超時時間
      EnableVless: false # 為 V2ray 類型啟用 Vless
      EnableXTLS: false # 為 V2ray 和 Trojan 啟用 XTLS
      SpeedLimit: 0 # Mbps，本地設置將替代遠程設置，0 表示禁用
      DeviceLimit: 0 # 本地設置將替代遠程設置，0 表示禁用
      RuleListPath: # /etc/XrayR/rulelist 本地規則列表文件的路徑
    ControllerConfig:
      ListenIP: 0.0.0.0 # 您想要監聽的 IP 地址
      SendIP: 0.0.0.0 # 您想要發送數據包的 IP 地址
      UpdatePeriodic: 60 # 更新節點信息的時間，幾秒
      EnableDNS: false # 使用自定義 DNS 配置，請確保您正確設置 dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS 策略
      EnableProxyProtocol: false # 只對 WebSocket 和 TCP 有效
      EnableFallback: false # 只支持 Trojan 和 Vless
      FallBackConfigs: # 支持多個回退
        - SNI: # TLS SNI（服務器名稱指示），空白表示任何
          Path: # HTTP 路徑，空白表示任何
          Dest: 80 # 必需，回退的目的地，詳情請查看 https://xtls.github.io/config/fallback/
          ProxyProtocolVer: 0 # 發送 PROXY 協議版本，0 表示禁用
      CertConfig:
        CertMode: dns # 獲取證書的選項: none, file, http, dns。選擇 "none" 將強制禁用 tls 配置。
        CertDomain: 'node1.test.com' # 證書的域名
        CertFile: /etc/XrayR/cert/node1.test.com.cert # 如果 CertMode 是 file，則提供
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS 證書提供者，獲取完整支持列表請訪問: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS ENV 選項由 DNS 提供者使用
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

