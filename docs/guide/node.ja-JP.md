---
title: ノードエンド
order: 5
nav:
  title: ガイド
  order: 1
group:
  title: デプロイ
  order: 1
toc: content
---

## ノードエンドのインストール

### ワンクリックインストール

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker インストール

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker Compose インストール

```
# Docker と Docker Compose のインストール
curl -fsSL https://get.docker.com | bash -s docker

# 設定をクローン
git clone https://github.com/perfect-panel/XrayR-release

# ディレクトリを切り替え
cd XrayR-release

# config を編集、設定項目を参考にし、保存後に続行
vi ./config/config.yml

# 起動
docker compose up -d
```

設定項目の説明：

```yaml
Log:
  Level: none # ログレベル: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json DNS設定のパス
ConnetionConfig:
  Handshake: 4 # ハンドシェイクの時間制限、秒
  ConnIdle: 10 # 接続のアイドル時間制限、秒
  UplinkOnly: 2 # 接続の下流が閉じられたときの時間制限、秒
  DownlinkOnly: 4 # 接続が上流が閉じられた後に閉じられるときの時間制限、秒
  BufferSize: 64 # 各接続の内部キャッシュサイズ、kB
Nodes:
  - PanelType: 'PPanel' # パネルタイプ: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # ノードタイプ: V2ray, Shadowsocks, Trojan
      Timeout: 30 # APIリクエストのタイムアウト
      EnableVless: false # V2rayタイプのVlessを有効にする
      EnableXTLS: false # V2rayおよびTrojanのXTLSを有効にする
      SpeedLimit: 0 # Mbps、ローカル設定がリモート設定を上書き、0は無効を意味する
      DeviceLimit: 0 # ローカル設定がリモート設定を上書き、0は無効を意味する
      RuleListPath: # /etc/XrayR/rulelist ローカルルールリストファイルのパス
    ControllerConfig:
      ListenIP: 0.0.0.0 # リッスンするIPアドレス
      SendIP: 0.0.0.0 # パッケージを送信するIPアドレス
      UpdatePeriodic: 60 # ノード情報を更新する時間、何秒
      EnableDNS: false # カスタムDNS設定を使用、dns.jsonを正しく設定していることを確認してください
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS戦略
      EnableProxyProtocol: false # WebSocketおよびTCPにのみ機能
      EnableFallback: false # TrojanおよびVlessのみに対応
      FallBackConfigs: # 複数のフォールバックをサポート
        - SNI: # TLS SNI（サーバー名表示）、任意の場合は空
          Path: # HTTPパス、任意の場合は空
          Dest: 80 # 必須、フォールバックの宛先、詳細は https://xtls.github.io/config/fallback/ を確認してください。
          ProxyProtocolVer: 0 # PROXYプロトコルバージョンを送信、0は無効
      CertConfig:
        CertMode: dns # 証明書を取得する方法に関するオプション: none, file, http, dns。 "none"を選択するとtls設定が強制的に無効になります。
        CertDomain: 'node1.test.com' # 証明書のドメイン
        CertFile: /etc/XrayR/cert/node1.test.com.cert # CertModeがfileの場合に提供
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS証明書プロバイダー、完全なサポートリストはここで確認: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNSプロバイダーによって使用されるDNS ENVオプション
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
