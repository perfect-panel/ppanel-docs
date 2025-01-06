```markdown
---
title: XrayR
order: 1
group: 
  title: การติดตั้งโหนด
  order: 5
toc: content
---

## การติดตั้งโหนด

### การติดตั้งด้วยคำสั่งเดียว

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### การติดตั้งด้วย Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### การติดตั้งด้วย Docker Compose

```
# ติดตั้ง Docker และ Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# ดึงการตั้งค่า
git clone https://github.com/perfect-panel/XrayR-release

# เปลี่ยนไปยังไดเรกทอรี
cd XrayR-release

# แก้ไข config โปรดดูที่รายการการตั้งค่า, บันทึกแล้วดำเนินการต่อ
vi ./config/config.yml

# เริ่มต้น
docker compose up -d
```

คำอธิบายรายการการตั้งค่า:

```yaml
Log:
  Level: none # ระดับบันทึก: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json เส้นทางไปยังการตั้งค่า DNS
ConnetionConfig:
  Handshake: 4 # ขีดจำกัดเวลาการจับมือ, วินาที
  ConnIdle: 10 # ขีดจำกัดเวลาการเชื่อมต่อที่ไม่ทำงาน, วินาที
  UplinkOnly: 2 # ขีดจำกัดเวลาที่การเชื่อมต่อขาลงถูกปิด, วินาที
  DownlinkOnly: 4 # ขีดจำกัดเวลาที่การเชื่อมต่อถูกปิดหลังจากที่ขาขึ้นถูกปิด, วินาที
  BufferSize: 64 # ขนาดแคชภายในของแต่ละการเชื่อมต่อ, kB
Nodes:
  - PanelType: 'PPanel' # ประเภทแผง: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # ประเภทโหนด: V2ray, Shadowsocks, Trojan
      Timeout: 30 # ขีดจำกัดเวลาสำหรับคำขอ API
      EnableVless: false # เปิดใช้งาน Vless สำหรับประเภท V2ray
      EnableXTLS: false # เปิดใช้งาน XTLS สำหรับ V2ray และ Trojan
      SpeedLimit: 0 # Mbps, การตั้งค่าท้องถิ่นจะทดแทนการตั้งค่าระยะไกล, 0 หมายถึงปิดใช้งาน
      DeviceLimit: 0 # การตั้งค่าท้องถิ่นจะทดแทนการตั้งค่าระยะไกล, 0 หมายถึงปิดใช้งาน
      RuleListPath: # /etc/XrayR/rulelist เส้นทางไปยังไฟล์รายการกฎท้องถิ่น
    ControllerConfig:
      ListenIP: 0.0.0.0 # ที่อยู่ IP ที่คุณต้องการฟัง
      SendIP: 0.0.0.0 # ที่อยู่ IP ที่คุณต้องการส่งแพ็กเกจ
      UpdatePeriodic: 60 # เวลาที่จะอัปเดตข้อมูลโหนด, กี่วินาที
      EnableDNS: false # ใช้การตั้งค่า DNS ที่กำหนดเอง, โปรดตรวจสอบให้แน่ใจว่าคุณตั้งค่า dns.json อย่างถูกต้อง
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, ยุทธศาสตร์ DNS
      EnableProxyProtocol: false # ใช้ได้เฉพาะสำหรับ WebSocket และ TCP
      EnableFallback: false # รองรับเฉพาะ Trojan และ Vless
      FallBackConfigs: # รองรับหลายการสำรอง
        - SNI: # TLS SNI (Server Name Indication), ว่างสำหรับใด ๆ
          Path: # HTTP PATH, ว่างสำหรับใด ๆ
          Dest: 80 # จำเป็น, จุดหมายของการสำรอง, ตรวจสอบ https://xtls.github.io/config/fallback/ สำหรับรายละเอียด
          ProxyProtocolVer: 0 # ส่งเวอร์ชันโปรโตคอล PROXY, 0 สำหรับปิดใช้งาน
      CertConfig:
        CertMode: dns # ตัวเลือกเกี่ยวกับวิธีการรับใบรับรอง: none, file, http, dns. เลือก "none" จะปิดการตั้งค่า tls อย่างบังคับ
        CertDomain: 'node1.test.com' # โดเมนสำหรับใบรับรอง
        CertFile: /etc/XrayR/cert/node1.test.com.cert # ให้หาก CertMode เป็นไฟล์
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # ผู้ให้บริการใบรับรอง DNS, รับรายการการสนับสนุนทั้งหมดที่นี่: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # ตัวเลือก DNS ENV ที่ใช้โดยผู้ให้บริการ DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

