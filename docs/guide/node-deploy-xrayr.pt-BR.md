---
title: XrayR
order: 1
group: 
  title: Implantação do Node
  order: 5
toc: content
---

## Instalação do Node

### Instalação com um clique

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Instalação via Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Instalação via Docker Compose

```
# Instalar docker e docker compose
curl -fsSL https://get.docker.com | bash -s docker

# Clonar o repositório de configuração
git clone https://github.com/perfect-panel/XrayR-release

# Mudar para o diretório
cd XrayR-release

# Editar o config, consulte os itens de configuração e salve antes de continuar
vi ./config/config.yml

# Iniciar
docker compose up -d
```

Descrição dos itens de configuração:

```yaml
Log:
  Level: none # Nível de log: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Caminho para a configuração DNS
ConnetionConfig:
  Handshake: 4 # Limite de tempo para handshake, em segundos
  ConnIdle: 10 # Limite de tempo ocioso da conexão, em segundos
  UplinkOnly: 2 # Limite de tempo quando a conexão downstream é fechada, em segundos
  DownlinkOnly: 4 # Limite de tempo quando a conexão é fechada após o uplink ser fechado, em segundos
  BufferSize: 64 # Tamanho do cache interno de cada conexão, em kB
Nodes:
  - PanelType: 'PPanel' # Tipo de painel: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Tipo de nó: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Tempo limite para a requisição da API
      EnableVless: false # Habilitar Vless para o tipo V2ray
      EnableXTLS: false # Habilitar XTLS para V2ray e Trojan
      SpeedLimit: 0 # Mbps, configurações locais substituirão configurações remotas, 0 significa desabilitar
      DeviceLimit: 0 # Configurações locais substituirão configurações remotas, 0 significa desabilitar
      RuleListPath: # /etc/XrayR/rulelist Caminho para o arquivo de lista de regras local
    ControllerConfig:
      ListenIP: 0.0.0.0 # Endereço IP que você deseja escutar
      SendIP: 0.0.0.0 # Endereço IP que você deseja enviar pacotes
      UpdatePeriodic: 60 # Tempo para atualizar as informações do nó, em segundos
      EnableDNS: false # Usar configuração DNS personalizada, certifique-se de que você configurou o dns.json corretamente
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, estratégia DNS
      EnableProxyProtocol: false # Funciona apenas para WebSocket e TCP
      EnableFallback: false # Suporta apenas para Trojan e Vless
      FallBackConfigs: # Suporta múltiplos fallback
        - SNI: # TLS SNI (Server Name Indication), vazio para qualquer
          Path: # CAMINHO HTTP, vazio para qualquer
          Dest: 80 # Obrigatório, Destino do fallback, consulte https://xtls.github.io/config/fallback/ para detalhes.
          ProxyProtocolVer: 0 # Enviar versão do protocolo PROXY, 0 para desabilitar
      CertConfig:
        CertMode: dns # Opção sobre como obter o certificado: none, file, http, dns. Escolher "none" desabilitará forçadamente a configuração tls.
        CertDomain: 'node1.test.com' # Domínio para o certificado
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Fornecido se o CertMode for file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Provedor de certificado DNS, obtenha a lista completa de suporte aqui: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Opção de ambiente DNS usada pelo provedor DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

