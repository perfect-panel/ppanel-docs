```markdown
---
title: XrayR
order: 1
group: 
  title: Déploiement côté nœud
  order: 5
toc: content
---

## Installation du côté nœud

### Installation en un clic

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### Installation avec Docker

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### Installation avec Docker Compose

```
# Installer Docker et Docker Compose
curl -fsSL https://get.docker.com | bash -s docker

# Cloner la configuration
git clone https://github.com/perfect-panel/XrayR-release

# Changer de répertoire
cd XrayR-release

# Éditer le fichier de configuration, veuillez vous référer aux options de configuration, sauvegardez et continuez
vi ./config/config.yml

# Démarrer
docker compose up -d
```

Explication des options de configuration :

```yaml
Log:
  Level: none # Niveau de journalisation : none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json Chemin vers la configuration DNS
ConnetionConfig:
  Handshake: 4 # Limite de temps pour le handshake, en secondes
  ConnIdle: 10 # Limite de temps d'inactivité de la connexion, en secondes
  UplinkOnly: 2 # Limite de temps lorsque la connexion en aval est fermée, en secondes
  DownlinkOnly: 4 # Limite de temps lorsque la connexion est fermée après la fermeture de l'aval, en secondes
  BufferSize: 64 # Taille du cache interne de chaque connexion, en kB
Nodes:
  - PanelType: 'PPanel' # Type de panneau : PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # Type de nœud : V2ray, Shadowsocks, Trojan
      Timeout: 30 # Délai d'attente pour la requête API
      EnableVless: false # Activer Vless pour le type V2ray
      EnableXTLS: false # Activer XTLS pour V2ray et Trojan
      SpeedLimit: 0 # Mbps, Les paramètres locaux remplaceront les paramètres distants, 0 signifie désactiver
      DeviceLimit: 0 # Les paramètres locaux remplaceront les paramètres distants, 0 signifie désactiver
      RuleListPath: # /etc/XrayR/rulelist Chemin vers le fichier de liste de règles local
    ControllerConfig:
      ListenIP: 0.0.0.0 # Adresse IP à écouter
      SendIP: 0.0.0.0 # Adresse IP pour envoyer le paquet
      UpdatePeriodic: 60 # Temps pour mettre à jour les informations du nœud, en secondes
      EnableDNS: false # Utiliser une configuration DNS personnalisée, veuillez vous assurer que vous avez bien configuré le dns.json
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, stratégie DNS
      EnableProxyProtocol: false # Fonctionne uniquement pour WebSocket et TCP
      EnableFallback: false # Supporte uniquement Trojan et Vless
      FallBackConfigs: # Supporte plusieurs retours
        - SNI: # TLS SNI (Server Name Indication), vide pour n'importe quel
          Path: # CHEMIN HTTP, vide pour n'importe quel
          Dest: 80 # Requis, Destination du fallback, consultez https://xtls.github.io/config/fallback/ pour plus de détails.
          ProxyProtocolVer: 0 # Envoyer la version du protocole PROXY, 0 pour désactiver
      CertConfig:
        CertMode: dns # Option sur la façon d'obtenir le certificat : none, file, http, dns. Choisir "none" désactivera de force la configuration tls.
        CertDomain: 'node1.test.com' # Domaine pour le certificat
        CertFile: /etc/XrayR/cert/node1.test.com.cert # Fournie si le CertMode est file
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # Fournisseur de certificat DNS, obtenez la liste complète des supports ici : https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # Options ENV DNS utilisées par le fournisseur DNS
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

