---
title: نود کلاینت
order: 5
nav:
  title: راهنما
  order: 1
group:
  title: استقرار
  order: 1
toc: content
---

## نصب نود کلاینت

### نصب با یک کلیک

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### نصب با Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### نصب با Docker Compose

```
# نصب docker و docker compose
curl -fsSL https://get.docker.com | bash -s docker

# کلون کردن پیکربندی
git clone https://github.com/perfect-panel/XrayR-release

# تغییر دایرکتوری
cd XrayR-release

# ویرایش config لطفاً به موارد پیکربندی مراجعه کنید، پس از ذخیره ادامه دهید
vi ./config/config.yml

# راه‌اندازی
docker compose up -d
```

توضیحات موارد پیکربندی:

```yaml
Log:
  Level: none # سطح لاگ: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json مسیر پیکربندی dns
ConnetionConfig:
  Handshake: 4 # محدودیت زمان handshake، ثانیه
  ConnIdle: 10 # محدودیت زمان بیکاری اتصال، ثانیه
  UplinkOnly: 2 # محدودیت زمانی هنگام بسته شدن اتصال downstream، ثانیه
  DownlinkOnly: 4 # محدودیت زمانی هنگام بسته شدن اتصال پس از بسته شدن uplink، ثانیه
  BufferSize: 64 # اندازه کش داخلی هر اتصال، کیلوبایت
Nodes:
  - PanelType: 'PPanel' # نوع پنل: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # نوع نود: V2ray, Shadowsocks, Trojan
      Timeout: 30 # زمان تایم‌اوت برای درخواست api
      EnableVless: false # فعال‌سازی Vless برای نوع V2ray
      EnableXTLS: false # فعال‌سازی XTLS برای V2ray و Trojan
      SpeedLimit: 0 # مگابیت بر ثانیه، تنظیمات محلی جایگزین تنظیمات از راه دور می‌شود، 0 به معنای غیرفعال است
      DeviceLimit: 0 # تنظیمات محلی جایگزین تنظیمات از راه دور می‌شود، 0 به معنای غیرفعال است
      RuleListPath: # /etc/XrayR/rulelist مسیر فایل لیست قوانین محلی
    ControllerConfig:
      ListenIP: 0.0.0.0 # آدرس IP که می‌خواهید گوش دهید
      SendIP: 0.0.0.0 # آدرس IP که می‌خواهید بسته‌ها را ارسال کنید
      UpdatePeriodic: 60 # زمان به‌روزرسانی اطلاعات نود، چند ثانیه
      EnableDNS: false # استفاده از پیکربندی DNS سفارشی، لطفاً اطمینان حاصل کنید که dns.json را به درستی تنظیم کرده‌اید
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, استراتژی DNS
      EnableProxyProtocol: false # فقط برای WebSocket و TCP کار می‌کند
      EnableFallback: false # فقط برای Trojan و Vless پشتیبانی می‌شود
      FallBackConfigs: # پشتیبانی از چندین fallback
        - SNI: # TLS SNI (Server Name Indication)، خالی برای هر چیزی
          Path: # مسیر HTTP، خالی برای هر چیزی
          Dest: 80 # الزامی، مقصد fallback، برای جزئیات به https://xtls.github.io/config/fallback/ مراجعه کنید.
          ProxyProtocolVer: 0 # ارسال نسخه پروتکل PROXY، 0 برای غیرفعال
      CertConfig:
        CertMode: dns # گزینه‌ای درباره نحوه دریافت گواهی: none, file, http, dns. انتخاب "none" به‌طور اجباری پیکربندی tls را غیرفعال می‌کند.
        CertDomain: 'node1.test.com' # دامنه برای گواهی
        CertFile: /etc/XrayR/cert/node1.test.com.cert # در صورتی که CertMode فایل باشد ارائه می‌شود
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # ارائه‌دهنده گواهی DNS، لیست کامل پشتیبانی را اینجا دریافت کنید: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # گزینه ENV DNS که توسط ارائه‌دهنده DNS استفاده می‌شود
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
