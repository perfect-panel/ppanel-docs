---
title: Painel de Gerenciamento
order: 3
nav:
  title: Guia
  order: 1
group:
  title: Implantação
  order: 1
toc: content
---

# **Guia de Implantação do Painel de Gerenciamento PPanel**

Este guia descreve detalhadamente como implantar o Painel de Gerenciamento PPanel, incluindo várias opções de implantação como Docker, Vercel, PM2, e o uso direto de Node.js ou Bun.

---

## **1. Preparação do Ambiente**

Antes de implantar, certifique-se de que as seguintes ferramentas estão instaladas:

- **Node.js** (recomendado instalar via NVM, versão >= 22)
- **Bun** (runtime JavaScript rápido)
- **PM2** (ferramenta de gerenciamento de processos para gerenciar serviços de forma eficiente)
- **Docker** (para implantação em contêiner)

---

## **2. Configuração de Variáveis de Ambiente**

Antes da implantação, você precisará configurar as seguintes variáveis de ambiente:

```env
# Configuração do aplicativo
NEXT_PUBLIC_DEFAULT_LANGUAGE=pt-BR
NEXT_PUBLIC_SITE_URL=https://admin.exemplo.com
NEXT_PUBLIC_API_URL=https://api.exemplo.com

# Usuário padrão
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@exemplo.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=senha123
```

---

## **3. Opções de Implantação**

### **3.1 Implantação com Docker**

#### Instalação do Docker

Execute o seguinte comando para instalar o Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Iniciando o Serviço com Docker

Execute o seguinte comando para iniciar o contêiner:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=pt-BR \
  -e NEXT_PUBLIC_SITE_URL=https://admin.exemplo.com \
  -e NEXT_PUBLIC_API_URL=https://api.exemplo.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@exemplo.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=senha123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Implantação com Docker Compose

Crie um arquivo `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: pt-BR
      NEXT_PUBLIC_SITE_URL: https://admin.exemplo.com
      NEXT_PUBLIC_API_URL: https://api.exemplo.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@exemplo.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: senha123
```

Inicie o serviço:

```bash
docker compose up -d
```

---

### **3.2 Implantação com Vercel**

Clique no botão abaixo para implantar rapidamente:

[![Implantar no Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20é%20uma%20ferramenta%20de%20painel%20proxy%20aberta%20e%20profissional%2C%20perfeita%20para%20seu%20aprendizado%20e%20uso%20prático&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Passos:**

1. Faça login ou registre-se no [Vercel](https://vercel.com/) .
2. Clique no botão de implantação, faça um fork do repositório e selecione `apps/admin`.
3. Configure as variáveis de ambiente.
4. Clique em **Deploy** para iniciar a implantação.

---

### **3.3 Implantação com PM2, Node.js ou Bun**

#### Baixando o Código

Obtenha o código do repositório oficial do GitHub:

```bash
# Baixar a versão mais recente do código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Descompactar o arquivo
tar -xzvf ppanel-admin-web.tar.gz

# Acesse o diretório do código
cd ppanel-admin-web
```

#### Configuração das Variáveis de Ambiente

Crie um arquivo `apps/admin/.env` e adicione as variáveis de ambiente necessárias (consulte a configuração de variáveis de ambiente acima).

#### Configuração do PM2

Crie um arquivo `ecosystem.config.js` com o seguinte conteúdo:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // pode ser alterado para node
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
      },
    },
  ],
};
```

#### Iniciando o Serviço com PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Iniciando o Serviço com Node.js ou Bun

- **Início com Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Início com Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verificação da Implantação**

### **4.1 Status do Serviço PM2**

Execute o seguinte comando para verificar:

```bash
pm2 list
```

### **4.2 Acesso pelo Navegador**

Acesse `http://<Seu IP do Servidor>:3000` para verificar se o serviço está em execução.

---

## **5. Gerenciamento de Serviços**

### **Comandos PM2**

- Parar o serviço:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Reiniciar o serviço:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Remover o serviço:
  ```bash
  pm2 delete ppanel-admin-web
  ```
