---
title: Servidor
order: 2
nav:
  title: Guia
  order: 1
group:
  title: Implantação
  order: 1
toc: content
---

## Requisitos do Ambiente de Execução

| Componente               | Requisitos                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Configuração do Servidor | Mínimo: 1 núcleo de CPU, 2GB de memória; Recomendado: 2 núcleos de CPU, 4GB de memória |
| MySQL                    | 5.7 ou superior (Recomendado MySQL 8)                                                  |
| Redis                    | 6 ou superior                                                                          |
| NGINX/Apache             | Qualquer versão                                                                        |

## Instalação do Docker

Execute o seguinte comando para instalar o Docker rapidamente:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Começo Rápido

### Inicialização via Interface Web

O PPanel suporta a inicialização baseada na Web, simplificando o processo de configuração manual.

### Passos de Inicialização

1. **Crie os arquivos de configuração necessários**: Primeiro, crie e configure manualmente o arquivo `/app/etc/ppanel.yaml` para as configurações subsequentes.

2. **Execute o contêiner Docker**:

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **Acesse a página de inicialização**: No navegador, acesse `http://IP_do_servidor:8080/init`.

4. **Complete a configuração**: Siga as instruções para configurar a conta de administrador, o banco de dados MySQL e o servidor Redis.

5. **Clique no botão de inicialização**: Após concluir a configuração, clique no botão "Inicializar", e o aplicativo salvará automaticamente as configurações e reiniciará.

   > **Nota**: O PPanel usa a porta **8080** por padrão, certifique-se de que esta porta esteja acessível e ajuste as configurações do firewall, se necessário.

## Implantação Usando Docker

O PPanel usa a porta **8080** por padrão, certifique-se de que esta porta esteja acessível e ajuste as configurações do firewall, se necessário.

Se você não usar a inicialização via Web, pode fazer login com a conta de administrador padrão:

- **Nome de usuário**: `admin@ppanel.dev`
- **Senha**: `password`

> **Nota**: Após o primeiro login, altere a senha padrão imediatamente para garantir a segurança.

### Criação dos Arquivos de Configuração Necessários

Antes de iniciar a implantação do Docker, crie e configure manualmente o arquivo `/app/etc/ppanel.yaml` para garantir que o sistema funcione corretamente. Para exemplos detalhados de itens de configuração, consulte a seção [Exemplo de Itens de Configuração](#exemplo-de-itens-de-configuração) do documento.

### Executando o Contêiner Docker

Execute o seguinte comando para iniciar o contêiner:

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## Implantação Usando Docker Compose

O PPanel usa a porta **8080** por padrão, certifique-se de que esta porta esteja acessível e ajuste as configurações do firewall, se necessário.

### Criação dos Arquivos de Configuração Necessários

Antes de iniciar a implantação do Docker Compose, crie e configure manualmente o arquivo `/app/etc/ppanel.yaml` para garantir que o sistema funcione corretamente. Para exemplos detalhados de itens de configuração, consulte a seção [Exemplo de Itens de Configuração](#exemplo-de-itens-de-configuração) do documento.

### Criação do Arquivo de Configuração do Docker Compose

Crie o arquivo `docker-compose.yml`:

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### Iniciando o Serviço

Execute o seguinte comando para iniciar o serviço:

```sh
docker compose up -d
```

## Dicas Importantes

- **Segurança**: Certifique-se de alterar a senha e a chave padrão para garantir a segurança do aplicativo.
- **Configuração de Portas**: Verifique se as portas necessárias estão abertas para evitar problemas de acesso à rede.
- **Persistência de Dados**: É recomendável montar volumes de dados ao executar contêineres para garantir a persistência dos dados.

## Exemplo de Itens de Configuração

Aqui está um exemplo de itens de configuração para `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # IP de escuta
Port: 8080 # Porta de execução
Debug: true # Ativar modo de depuração
JwtAuth:
  AccessSecret: sua-chave-secreta # Chave do Token (por favor, modifique)
  AccessExpire: 604800 # Validade do Token (segundos)
Logger:
  FilePath: ./ppanel.log # Caminho do arquivo de log
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Nível de log: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Endereço do banco de dados
  Dbname: vpnboard # Nome do banco de dados
  Username: root # Nome de usuário do banco de dados
  Password: sua-senha # Senha do banco de dados (por favor, modifique)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Senha do Redis (se houver)
  DB: 0

Administer:
  Password: password # Senha do administrador (deve ser alterada)
  Email: admin@ppanel.dev # Endereço de e-mail do administrador
```

> **Nota**: Após modificar o arquivo de configuração, reinicie o contêiner Docker para aplicar as alterações.

## Obter Suporte

Se você encontrar problemas, consulte a documentação oficial ou entre em contato com a equipe de suporte para obter ajuda.
