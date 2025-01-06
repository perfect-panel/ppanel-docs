---
title: Instruções de Configuração
order: 0
group: 
  title: Implantação do Servidor
  order: 2
toc: content
---

## Requisitos do Ambiente de Execução

| Componente      | Requisitos                             |
| --------------- | ------------------------------------- |
| Configuração do Servidor | Mínimo: 1 núcleo de CPU, 2GB de memória; Recomendado: 2 núcleos de CPU, 4GB de memória |
| MySQL           | 5.7 ou superior (Recomendado MySQL 8) |
| Redis           | 6 ou superior                         |
| NGINX/Apache    | Qualquer versão                       |

### Descrição do Arquivo de Configuração

#### 1. Caminho do Arquivo de Configuração

O caminho padrão do arquivo de configuração é: `./etc/ppanel.yaml`, que pode ser especificado através do parâmetro de inicialização `--config`.

#### 2. Formato do Arquivo de Configuração

- O arquivo de configuração está no formato YAML, suporta comentários e deve ser nomeado como xxx.yaml.

```yaml
# Exemplo de arquivo de configuração
Host:               # Endereço de escuta do serviço, padrão: 0.0.0.0
Port:               # Porta de escuta do serviço, padrão: 8080
Debug:              # Se o modo de depuração está ativado, não será possível usar a função de log em segundo plano, padrão: false
JwtAuth:            # Configuração de autenticação JWT
  AccessSecret:     # Chave do token de acesso, padrão: gerado aleatoriamente
  AccessExpire:     # Tempo de expiração do token de acesso, em segundos, padrão: 604800
Logger:             # Configuração de log
  FilePath:         # Caminho do arquivo de log, padrão: ./ppanel.log
  MaxSize:          # Tamanho máximo do arquivo de log, em MB, padrão: 50
  MaxBackup:        # Número máximo de backups do arquivo de log, padrão: 3
  MaxAge:           # Tempo máximo de retenção do arquivo de log, em dias, padrão: 30
  Compress:         # Se os arquivos de log devem ser compactados, padrão: true
  Level:            # Nível de log, padrão: info, opções: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Endereço do MySQL, obrigatório
  Username:         # Nome de usuário do MySQL, obrigatório
  Password:         # Senha do MySQL, obrigatório
  Dbname:           # Nome do banco de dados MySQL, obrigatório
  Config:           # Valores padrão de configuração do MySQL charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Número máximo de conexões ociosas, padrão: 10
  MaxOpenConns:     # Número máximo de conexões abertas, padrão: 100
  LogMode:          # Nível de log, padrão: info, opções: debug, error, warn, info
  LogZap:           # Se deve usar o zap para registrar logs SQL, padrão: true
  SlowThreshold:    # Limite de consultas lentas, em milissegundos, padrão: 1000
Redis:
  Host:             # Endereço do Redis, padrão: localhost:6379
  Pass:             # Senha do Redis, padrão: ""
  DB:               # Banco de dados Redis, padrão: 0

Administer:
  Email:            # E-mail de login do painel, padrão: admin@ppanel.dev
  Password:         # Senha de login do painel, padrão: password

```

#### 3. Descrição do Arquivo de Configuração

- `Host`: Endereço de escuta do serviço, padrão: **0.0.0.0**
- `Port`: Porta de escuta do serviço, padrão: **8080**
- `Debug`: Se o modo de depuração está ativado, não será possível usar a função de log em segundo plano, padrão: **false**
- `JwtAuth`: Configuração de autenticação JWT
  - `AccessSecret`: Chave do token de acesso, padrão: **gerado aleatoriamente**
  - `AccessExpire`: Tempo de expiração do token de acesso, em segundos, padrão: **604800**
- `Logger`: Configuração de log
- `FilePath`: Caminho do arquivo de log, padrão: **./ppanel.log**
- `MaxSize`: Tamanho máximo do arquivo de log, em MB, padrão: **50**
- `MaxBackup`: Número máximo de backups do arquivo de log, padrão: **3**
- `MaxAge`: Tempo máximo de retenção do arquivo de log, em dias, padrão: **30**
- `Compress`: Se os arquivos de log devem ser compactados, padrão: **true**
- `Level`: Nível de log, padrão: **info**, opções: **debug, info, warn, error, panic, fatal**
- `MySQL`: Configuração do MySQL
  - `Addr`: Endereço do MySQL, obrigatório
  - `Username`: Nome de usuário do MySQL, obrigatório
  - `Password`: Senha do MySQL, obrigatório
  - `Dbname`: Nome do banco de dados MySQL, obrigatório
  - `Config`: Valores padrão de configuração do MySQL charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Número máximo de conexões ociosas, padrão: **10**
  - `MaxOpenConns`: Número máximo de conexões abertas, padrão: **100**
  - `LogMode`: Nível de log, padrão: **info**, opções: **debug, error, warn, info**
  - `LogZap`: Se deve usar o zap para registrar logs SQL, padrão: **true**
  - `SlowThreshold`: Limite de consultas lentas, em milissegundos, padrão: **1000**
- `Redis`: Configuração do Redis
- `Host`: Endereço do Redis, padrão: **localhost:6379**
- `Pass`: Senha do Redis, padrão: **""**
- `DB`: Banco de dados Redis, padrão: **0**
- `Administer`: Configuração de login do painel
  - `Email`: E-mail de login do painel, padrão: **<admin@ppanel.dev>**
  - `Password`: Senha de login do painel, padrão: **password**

#### 4. Variáveis de Ambiente

As variáveis de ambiente suportadas são as seguintes:

| Variável de Ambiente | Item de Configuração | Exemplo                                      |
| -------------------- | -------------------- | :------------------------------------------ |
| PPANEL\_DB           | Configuração do MySQL | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS        | Configuração do Redis | redis://localhost:6379                      |

