---
title: Cliente - Node
order: 6
group: 
  title: Implantação Frontend
  order: 3
toc: content
---

### Implantação com PM2, Node.js ou Bun

#### Baixar o código

Obtenha o código do repositório oficial do GitHub:

```bash
# Baixar a versão mais recente do código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Descompactar o arquivo
tar -xzvf ppanel-user-web.tar.gz

# Entrar no diretório do código
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

#### Iniciar o serviço com Node.js ou Bun

- **Iniciar com Node.js**:

  ```bash
  node apps/user/server.js
  ```

- **Iniciar com Bun**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. Verificar a implantação**

### **4.1 Status do serviço PM2**

Execute o seguinte comando para verificar:

```bash
pm2 list
```

### **4.2 Acesso pelo navegador**

Acesse `http://<Seu IP do servidor>:3000` para verificar se o serviço está em execução.

---

## **5. Gerenciamento de serviços**

### **Comandos PM2**

- Parar o serviço:

  ```bash
  pm2 stop ppanel-user-web
  ```

- Reiniciar o serviço:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Deletar o serviço:

  ```bash
  pm2 delete ppanel-user-web
  ```

