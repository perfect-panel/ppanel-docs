---
title: Gerenciamento - Node
order: 3
group: 
  title: Implantação Frontend
  order: 3
toc: content
---

### Implantação com PM2, Node.js ou Bun

#### Baixar o Código

Obtenha o código do repositório oficial do GitHub:

```bash
# Baixar a versão mais recente do código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Descompactar o arquivo
tar -xzvf ppanel-admin-web.tar.gz

# Acessar o diretório do código
cd ppanel-admin-web
```

#### Configurar Variáveis de Ambiente

Crie o arquivo `apps/admin/.env` e adicione as variáveis de ambiente necessárias (consulte a configuração de variáveis de ambiente acima).

#### Configurar PM2

Crie o arquivo `ecosystem.config.js` com o seguinte conteúdo:

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

#### Iniciar o Serviço com PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Iniciar o Serviço com Node.js ou Bun

- **Iniciar com Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Iniciar com Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verificar a Implantação**

### **4.1 Status do Serviço PM2**

Execute o seguinte comando para verificar:

```bash
pm2 list
```

### **4.2 Acesso pelo Navegador**

Acesse `http://<Seu IP do Servidor>:3000` para verificar o funcionamento do serviço.

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
- Deletar o serviço:
  ```bash
  pm2 delete ppanel-admin-web
  ```

