```markdown
---
title: XrayR
order: 1
group: 
  title: Triển khai nút
  order: 5
toc: content
---

## Cài đặt nút

### Cài đặt một lần nhấn

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Cài đặt Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Cài đặt Docker Compose

```
# Cài đặt docker và docker compose
curl -fsSL https://get.docker.com | bash -s docker

# Kéo cấu hình
git clone https://github.com/perfect-panel/XrayR-release

# Chuyển đổi thư mục
cd XrayR-release

# Chỉnh sửa config, vui lòng tham khảo các mục cấu hình, lưu lại và tiếp tục
vi ./config/config.yml

# Khởi động
docker compose up -d
```

Giải thích các mục cấu hình:

```yaml
Log:
  Level: none # Mức độ ghi log: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Đường dẫn đến cấu hình dns
ConnetionConfig:
  Handshake: 4 # Giới hạn thời gian bắt tay, Giây
  ConnIdle: 10 # Giới hạn thời gian kết nối nhàn rỗi, Giây
  UplinkOnly: 2 # Giới hạn thời gian khi kết nối downstream bị đóng, Giây
  DownlinkOnly: 4 # Giới hạn thời gian khi kết nối bị đóng sau khi uplink bị đóng, Giây
  BufferSize: 64 # Kích thước bộ đệm nội bộ của mỗi kết nối, kB
Nodes:
  - PanelType: 'PPanel' # Loại bảng điều khiển: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Loại nút: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Thời gian chờ cho yêu cầu api
      EnableVless: false # Kích hoạt Vless cho loại V2ray
      EnableXTLS: false # Kích hoạt XTLS cho V2ray và Trojan
      SpeedLimit: 0 # Mbps, Cài đặt cục bộ sẽ thay thế cài đặt từ xa, 0 có nghĩa là vô hiệu hóa
      DeviceLimit: 0 # Cài đặt cục bộ sẽ thay thế cài đặt từ xa, 0 có nghĩa là vô hiệu hóa
      RuleListPath: # /etc/XrayR/rulelist Đường dẫn đến tệp danh sách quy tắc cục bộ
    ControllerConfig:
      ListenIP: 0.0.0.0 # Địa chỉ IP bạn muốn lắng nghe
      SendIP: 0.0.0.0 # Địa chỉ IP bạn muốn gửi gói tin
      UpdatePeriodic: 60 # Thời gian để cập nhật thông tin nút, bao nhiêu giây.
      EnableDNS: false # Sử dụng cấu hình DNS tùy chỉnh, Vui lòng đảm bảo rằng bạn đã thiết lập dns.json đúng cách
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, Chiến lược DNS
      EnableProxyProtocol: false # Chỉ hoạt động cho WebSocket và TCP
      EnableFallback: false # Chỉ hỗ trợ cho Trojan và Vless
      FallBackConfigs: # Hỗ trợ nhiều fallback
        - SNI: # TLS SNI (Server Name Indication), Trống cho bất kỳ
          Path: # ĐƯỜNG DẪN HTTP, Trống cho bất kỳ
          Dest: 80 # Bắt buộc, Điểm đến của fallback, kiểm tra https://xtls.github.io/config/fallback/ để biết chi tiết.
          ProxyProtocolVer: 0 # Gửi phiên bản giao thức PROXY, 0 để vô hiệu hóa
      CertConfig:
        CertMode: dns # Tùy chọn về cách lấy chứng chỉ: none, file, http, dns. Chọn "none" sẽ tắt cấu hình tls.
        CertDomain: 'node1.test.com' # Tên miền để chứng chỉ
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Cung cấp nếu CertMode là file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Nhà cung cấp chứng chỉ DNS, Nhận danh sách hỗ trợ đầy đủ tại đây: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Tùy chọn ENV DNS được sử dụng bởi nhà cung cấp DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

