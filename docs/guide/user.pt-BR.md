---
title: Cliente PPanel
order: 4
nav:
  title: Guia
  order: 1
group:
  title: Implantação
  order: 1
toc: content
---

# **Guia de Implantação do Cliente PPanel**

Este guia detalha como implantar o cliente PPanel, incluindo várias opções de implantação com Docker, Vercel, PM2, e o uso direto de Node.js ou Bun.

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
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Informações de contato
NEXT_PUBLIC_EMAIL=support@example.com

# Links de comunidade e redes sociais
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Usuário padrão
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
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
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Implantação com Docker Compose

Crie um arquivo `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: pt-BR
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Inicie o serviço:

```bash
docker compose up -d
```

---

### **3.2 Implantação com Vercel**

Clique no botão abaixo para implantar rapidamente:
[![Implantar com Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20é%20uma%20ferramenta%20de%20painel%20proxy%20aberta%20e%20profissional%2C%20projetada%20para%20ser%20sua%20escolha%20ideal%20para%20aprendizado%20e%20uso%20prático&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=Web%20do%20Usuário%20PPanel&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Passos:**

1. Faça login ou registre-se em [Vercel](https://vercel.com/).
2. Clique no botão de implantação, faça um fork do repositório e selecione `apps/user`.
3. Configure as variáveis de ambiente.
4. Clique em **Deploy** para iniciar a implantação.

---

### **3.3 Implantação com PM2, Node.js ou Bun**

#### Baixando o Código

Obtenha o código do repositório oficial do GitHub:

```bash
# Baixar a versão mais recente do código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Descompactar o arquivo
tar -xzvf ppanel-user-web.tar.gz

# Acesse o diretório do código
cd ppanel-user-web
```

#### Configurando Variáveis de Ambiente

Crie um arquivo `apps/user/.env` e adicione as variáveis de ambiente necessárias (consulte a configuração de variáveis de ambiente acima).

#### Configurando o PM2

Crie um arquivo `ecosystem.config.js` com o seguinte conteúdo:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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
  node apps/user/server.js
  ```
- **Início com Bun**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Verificando a Implantação**

### **4.1 Status do Serviço PM2**

Execute o seguinte comando para verificar:

```bash
pm2 list
```

### **4.2 Acesso pelo Navegador**

Acesse `http://<Seu IP do Servidor>:3000` para verificar se o serviço está funcionando.

---

## **5. Gerenciamento de Serviços**

### **Comandos PM2**

- Parar o serviço:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Reiniciar o serviço:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Remover o serviço:
  ```bash
  pm2 delete ppanel-user-web
  ```
