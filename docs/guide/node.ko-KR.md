---
title: 노드 엔드
order: 5
nav:
  title: 가이드
  order: 1
group:
  title: 배포
  order: 1
toc: content
---

## 노드 엔드 설치

### 원클릭 설치

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Docker 설치

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Docker Compose 설치

```
# Docker 및 Docker Compose 설치
curl -fsSL https://get.docker.com | bash -s docker

# 구성 파일 가져오기
git clone https://github.com/perfect-panel/XrayR-release

# 디렉토리 변경
cd XrayR-release

# config 편집, 구성 항목을 참조하여 저장 후 계속 진행
vi ./config/config.yml

# 시작
docker compose up -d
```

구성 항목 설명:

```yaml
Log:
  Level: none # 로그 수준: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json DNS 구성 경로
ConnetionConfig:
  Handshake: 4 # 핸드쉐이크 시간 제한, 초
  ConnIdle: 10 # 연결 유휴 시간 제한, 초
  UplinkOnly: 2 # 연결 하류가 닫힐 때의 시간 제한, 초
  DownlinkOnly: 4 # 업링크가 닫힌 후 연결이 닫힐 때의 시간 제한, 초
  BufferSize: 64 # 각 연결의 내부 캐시 크기, kB
Nodes:
  - PanelType: 'PPanel' # 패널 유형: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # 노드 유형: V2ray, Shadowsocks, Trojan
      Timeout: 30 # API 요청의 시간 초과
      EnableVless: false # V2ray 유형에 대해 Vless 활성화
      EnableXTLS: false # V2ray 및 Trojan에 대해 XTLS 활성화
      SpeedLimit: 0 # Mbps, 로컬 설정이 원격 설정을 대체, 0은 비활성화 의미
      DeviceLimit: 0 # 로컬 설정이 원격 설정을 대체, 0은 비활성화 의미
      RuleListPath: # /etc/XrayR/rulelist 로컬 규칙 목록 파일 경로
    ControllerConfig:
      ListenIP: 0.0.0.0 # 수신할 IP 주소
      SendIP: 0.0.0.0 # 패키지를 전송할 IP 주소
      UpdatePeriodic: 60 # 노드 정보 업데이트 시간, 초 단위
      EnableDNS: false # 사용자 정의 DNS 구성 사용, dns.json을 잘 설정했는지 확인
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS 전략
      EnableProxyProtocol: false # WebSocket 및 TCP에만 작동
      EnableFallback: false # Trojan 및 Vless에만 지원
      FallBackConfigs: # 여러 개의 폴백 지원
        - SNI: # TLS SNI(서버 이름 표시), 모든 경우에 대해 비워두기
          Path: # HTTP 경로, 모든 경우에 대해 비워두기
          Dest: 80 # 필수, 폴백의 목적지, 자세한 내용은 https://xtls.github.io/config/fallback/ 참조.
          ProxyProtocolVer: 0 # PROXY 프로토콜 버전 전송, 0은 비활성화
      CertConfig:
        CertMode: dns # 인증서를 얻는 방법에 대한 옵션: none, file, http, dns. "none"을 선택하면 tls 구성이 강제로 비활성화됩니다.
        CertDomain: 'node1.test.com' # 인증서 도메인
        CertFile: /etc/XrayR/cert/node1.test.com.cert # CertMode가 file인 경우 제공
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS 인증서 제공자, 전체 지원 목록은 여기에서 확인: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS 제공자가 사용하는 DNS ENV 옵션
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
