---
title: Binário
order: 2
group: 
  title: Implantação do Servidor
  order: 2
toc: content
---

### Instruções de Instalação

#### Requisitos do Sistema

- Mysql 5.7+ (recomendado usar 8.0)
- Redis 6.0+ (recomendado usar 7.0)

#### Instalação do Binário

1. Determine a arquitetura do sistema e baixe o arquivo binário correspondente.

Endereço de download: `https://github.com/perfect-panel/ppanel/releases`

Exemplo: sistema: Linux amd64, usuário: root, diretório atual: /root

- Baixe o arquivo binário

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Extraia o arquivo binário

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Acesse o diretório extraído

```shell
cd ppanel-server-linux-amd64
```

- Conceda permissões de execução ao arquivo binário

```shell
chmod +x ppanel
```

- Crie o arquivo de serviço systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=Servidor PPANEL
After=network.target

[Service]
ExecStart=/root/ppanel-server-linux-amd64/ppanel
Restart=always
User=root
WorkingDirectory=/root/ppanel-server-linux-amd64

[Install]
WantedBy=multi-user.target
EOF
```

- Recarregue os serviços do systemd

```shell
systemctl daemon-reload
```

- Inicie o serviço

```shell
systemctl start ppanel
```

##### Outras Observações

1. Caminho de instalação: o arquivo binário será extraído no diretório /root/ppanel-server-linux-amd64

2. Serviço systemd:
   - Nome do serviço: ppanel
   - Arquivo de configuração do serviço: /etc/systemd/system/ppanel.service
   - Comando para iniciar o serviço: systemctl start ppanel
   - Comando para parar o serviço: systemctl stop ppanel
   - Comando para reiniciar o serviço: systemctl restart ppanel
   - Comando para verificar o status do serviço: systemctl status ppanel
   - Habilitar o serviço para iniciar na inicialização: systemctl enable ppanel

3. Para habilitar a inicialização automática, você pode usar o seguinte comando:

   ```shell
   systemctl enable ppanel
   ```

4. Logs do serviço: os logs do serviço são, por padrão, gravados no arquivo /root/ppanel-server-linux-amd64/ppanel.log

5. Você pode visualizar os logs do serviço com `journalctl -u ppanel -f`

6. Quando o arquivo de configuração estiver vazio ou não existir, o serviço será iniciado com a configuração padrão, cujo caminho do arquivo de configuração é: `./etc/ppanel.yaml`,
   por favor, inicialize a configuração do sistema através de `http://endereço-do-servidor:8080/init`

#### Configuração de Proxy Reverso NGINX

Abaixo está um exemplo de configuração de proxy reverso, que proxy o serviço `ppanel` para o domínio `api.ppanel.dev`

```nginx
server {
    listen 80;
    server_name ppanel.dev;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_http_version 1.1;
        
        add_header X-Cache $upstream_cache_status;
        
       # Definir Cache do Nginx
       
        set $static_filezbsQiET1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_filezbsQiET1 1;
            expires 1m;
            }
        if ( $static_filezbsQiET1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
    }
}
```

Se você estiver usando o serviço de proxy Cloudflare, precisará obter o IP real do usuário. Por favor, adicione ao parágrafo Http do arquivo de configuração do Nginx:

- Dependência: **ngx_http_realip_module**, use o comando nginx -V para verificar se o nginx já foi compilado com este módulo; caso contrário, você precisará compilar por conta própria.

```nginx
    # cloudflare Início
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Fim
```

