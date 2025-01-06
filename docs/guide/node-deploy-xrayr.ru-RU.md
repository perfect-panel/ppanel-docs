```markdown
---
title: XrayR
order: 1
group: 
  title: Развертывание узла
  order: 5
toc: content
---

## Установка узла

### Установка одним нажатием

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Установка через Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Установка через Docker Compose

```
# Установка Docker и Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Клонирование конфигурации
git clone https://github.com/perfect-panel/XrayR-release

# Переход в директорию
cd XrayR-release

# Редактирование конфигурации, пожалуйста, обратитесь к параметрам конфигурации, сохраните и продолжайте
vi ./config/config.yml

# Запуск
docker compose up -d
```

Описание параметров конфигурации:

```yaml
Log:
  Level: none # Уровень логирования: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Путь к конфигурации DNS
ConnetionConfig:
  Handshake: 4 # Ограничение времени рукопожатия, секунды
  ConnIdle: 10 # Ограничение времени простоя соединения, секунды
  UplinkOnly: 2 # Ограничение времени, когда соединение вниз закрыто, секунды
  DownlinkOnly: 4 # Ограничение времени, когда соединение закрыто после закрытия вверх, секунды
  BufferSize: 64 # Размер внутреннего кэша каждого соединения, кБ
Nodes:
  - PanelType: 'PPanel' # Тип панели: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Тип узла: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Таймаут для API-запроса
      EnableVless: false # Включить Vless для типа V2ray
      EnableXTLS: false # Включить XTLS для V2ray и Trojan
      SpeedLimit: 0 # Мбит/с, локальные настройки заменят удаленные настройки, 0 означает отключение
      DeviceLimit: 0 # Локальные настройки заменят удаленные настройки, 0 означает отключение
      RuleListPath: # /etc/XrayR/rulelist Путь к локальному файлу правил
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP-адрес, на котором вы хотите слушать
      SendIP: 0.0.0.0 # IP-адрес, на который вы хотите отправлять пакеты
      UpdatePeriodic: 60 # Время для обновления информации об узле, сколько секунд.
      EnableDNS: false # Использовать пользовательскую конфигурацию DNS, пожалуйста, убедитесь, что вы правильно настроили dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, стратегия DNS
      EnableProxyProtocol: false # Работает только для WebSocket и TCP
      EnableFallback: false # Поддерживается только для Trojan и Vless
      FallBackConfigs: # Поддержка нескольких резервных копий
        - SNI: # TLS SNI (Server Name Indication), пусто для любого
          Path: # HTTP PATH, пусто для любого
          Dest: 80 # Обязательно, назначение резервной копии, проверьте https://xtls.github.io/config/fallback/ для подробностей.
          ProxyProtocolVer: 0 # Отправить версию протокола PROXY, 0 для отключения
      CertConfig:
        CertMode: dns # Опция о том, как получить сертификат: none, file, http, dns. Выбор "none" принудительно отключит конфигурацию tls.
        CertDomain: 'node1.test.com' # Домен для сертификата
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Предоставляется, если CertMode - file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Провайдер сертификатов DNS, получите полный список поддерживаемых здесь: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Опция DNS ENV, используемая провайдером DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

