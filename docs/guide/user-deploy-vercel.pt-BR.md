---
title: Cliente - Vercel
order: 7
group: 
  title: Implantação Frontend
  order: 3
toc: content
---

### Implantação com Vercel

Clique no botão abaixo para implantar rapidamente:

[![Implantar no Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20é%20uma%20ferramenta%20de%20proxy%20open-source%20pura%2C%20profissional%20e%20perfeita%2C%20projetada%20para%20ser%20sua%20escolha%20ideal%20para%20aprendizado%20e%20uso%20prático\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20Web%20do%20usuário\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**Passos:**

1. Faça login ou registre-se no [Vercel](https://vercel.com/).
2. Clique no botão de implantação, faça um fork do repositório e selecione `apps/user`.
3. Configure as variáveis de ambiente.
4. Clique em **Deploy** para iniciar a implantação.

---

### **3.3 Implantação usando PM2, Node.js ou Bun**

#### Baixar o código

Obtenha o código do repositório oficial do GitHub:

```bash
# Baixar a versão mais recente do código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Descompactar o arquivo
tar -xzvf ppanel-user-web.tar.gz

# Acessar o diretório do código
cd ppanel-user-web
```

#### Configurar variáveis de ambiente

Crie o arquivo `apps/user/.env` e adicione as variáveis de ambiente necessárias (consulte a configuração de variáveis de ambiente acima).

#### Configurar PM2

Crie o arquivo `ecosystem.config.js` com o seguinte conteúdo:

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

#### Iniciar o serviço com PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

