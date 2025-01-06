---
title: XrayR
order: 1
group: 
  title: Implementación del nodo
  order: 5
toc: content
---

## Instalación del nodo

### Instalación con un solo comando

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Instalación con Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Instalación con Docker Compose

```
# Instalar Docker y Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Clonar la configuración
git clone https://github.com/perfect-panel/XrayR-release

# Cambiar de directorio
cd XrayR-release

# Editar la configuración, por favor consulta los parámetros de configuración, guarda y continúa
vi ./config/config.yml

# Iniciar
docker compose up -d
```

Descripción de los parámetros de configuración:

```yaml
Log:
  Level: none # Nivel de registro: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Ruta al archivo de configuración DNS
ConnetionConfig:
  Handshake: 4 # Límite de tiempo de handshake, en segundos
  ConnIdle: 10 # Límite de tiempo de inactividad de la conexión, en segundos
  UplinkOnly: 2 # Límite de tiempo cuando se cierra la conexión de bajada, en segundos
  DownlinkOnly: 4 # Límite de tiempo cuando se cierra la conexión después de que se cierra la subida, en segundos
  BufferSize: 64 # Tamaño de caché interno de cada conexión, en kB
Nodes:
  - PanelType: 'PPanel' # Tipo de panel: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Tipo de nodo: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Tiempo de espera para la solicitud API
      EnableVless: false # Habilitar Vless para el tipo V2ray
      EnableXTLS: false # Habilitar XTLS para V2ray y Trojan
      SpeedLimit: 0 # Mbps, la configuración local reemplazará la configuración remota, 0 significa deshabilitar
      DeviceLimit: 0 # La configuración local reemplazará la configuración remota, 0 significa deshabilitar
      RuleListPath: # /etc/XrayR/rulelist Ruta al archivo de lista de reglas local
    ControllerConfig:
      ListenIP: 0.0.0.0 # Dirección IP en la que deseas escuchar
      SendIP: 0.0.0.0 # Dirección IP en la que deseas enviar paquetes
      UpdatePeriodic: 60 # Tiempo para actualizar la información del nodo, en segundos
      EnableDNS: false # Usar configuración DNS personalizada, asegúrate de que configures bien el dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, estrategia DNS
      EnableProxyProtocol: false # Solo funciona para WebSocket y TCP
      EnableFallback: false # Solo soporta Trojan y Vless
      FallBackConfigs: # Soporta múltiples caídas
        - SNI: # TLS SNI (Server Name Indication), vacío para cualquier
          Path: # RUTA HTTP, vacío para cualquier
          Dest: 80 # Requerido, destino de la caída, consulta https://xtls.github.io/config/fallback/ para más detalles.
          ProxyProtocolVer: 0 # Enviar versión del protocolo PROXY, 0 para deshabilitar
      CertConfig:
        CertMode: dns # Opción sobre cómo obtener el certificado: none, file, http, dns. Elegir "none" deshabilitará forzosamente la configuración tls.
        CertDomain: 'node1.test.com' # Dominio para el certificado
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Proporcionado si el CertMode es file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Proveedor de certificado DNS, consulta la lista completa de soporte aquí: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Opción de entorno DNS utilizada por el proveedor DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

