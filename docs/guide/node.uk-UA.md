---
title: Вузловий кінець
order: 5
nav:
  title: Посібник
  order: 1
group:
  title: Розгортання
  order: 1
toc: content
---

## Встановлення вузлового кінця

### Одноклікове встановлення

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Встановлення через Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Встановлення через Docker Compose

```
# Встановлення Docker та Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Клонування конфігурації
git clone https://github.com/perfect-panel/XrayR-release

# Перехід до каталогу
cd XrayR-release

# Редагування конфігурації, будь ласка, зверніться до параметрів конфігурації, збережіть і продовжте
vi ./config/config.yml

# Запуск
docker compose up -d
```

Опис параметрів конфігурації:

```yaml
Log:
  Level: none # Рівень журналювання: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Шлях до конфігурації DNS
ConnetionConfig:
  Handshake: 4 # Ліміт часу рукостискання, секунди
  ConnIdle: 10 # Ліміт часу простою з'єднання, секунди
  UplinkOnly: 2 # Ліміт часу, коли з'єднання вниз закривається, секунди
  DownlinkOnly: 4 # Ліміт часу, коли з'єднання закривається після закриття з'єднання вгору, секунди
  BufferSize: 64 # Розмір внутрішнього кешу кожного з'єднання, кБ
Nodes:
  - PanelType: 'PPanel' # Тип панелі: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Тип вузла: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Тайм-аут для запиту API
      EnableVless: false # Увімкнути Vless для типу V2ray
      EnableXTLS: false # Увімкнути XTLS для V2ray та Trojan
      SpeedLimit: 0 # Мбіт/с, локальні налаштування замінять віддалені налаштування, 0 означає вимкнення
      DeviceLimit: 0 # Локальні налаштування замінять віддалені налаштування, 0 означає вимкнення
      RuleListPath: # /etc/XrayR/rulelist Шлях до локального файлу правил
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP-адреса, на якій ви хочете слухати
      SendIP: 0.0.0.0 # IP-адреса, на яку ви хочете надсилати пакети
      UpdatePeriodic: 60 # Час для оновлення інформації про вузол, скільки секунд.
      EnableDNS: false # Використовувати власну конфігурацію DNS, будь ласка, переконайтеся, що ви правильно налаштували dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, стратегія DNS
      EnableProxyProtocol: false # Працює лише для WebSocket і TCP
      EnableFallback: false # Підтримується лише для Trojan і Vless
      FallBackConfigs: # Підтримка кількох резервних варіантів
        - SNI: # TLS SNI (Ідентифікація імені сервера), порожньо для будь-якого
          Path: # HTTP ШЛЯХ, порожньо для будь-якого
          Dest: 80 # Обов'язково, призначення резервного варіанту, перевірте https://xtls.github.io/config/fallback/ для деталей.
          ProxyProtocolVer: 0 # Відправити версію протоколу PROXY, 0 для вимкнення
      CertConfig:
        CertMode: dns # Опція щодо отримання сертифіката: none, file, http, dns. Вибір "none" примусово вимкне конфігурацію tls.
        CertDomain: 'node1.test.com' # Домен для сертифіката
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Надається, якщо режим сертифіката - файл
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Провайдер сертифікатів DNS, отримайте повний список підтримки тут: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Опція DNS ENV, що використовується провайдером DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```
