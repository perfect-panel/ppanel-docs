---
title: Gerenciamento - Docker
order: 2
group: 
  title: Implantação Frontend
  order: 3
toc: content
---

### Implantação com Docker

#### Instalando o Docker

Execute o seguinte comando para instalar o Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Iniciando o serviço com Docker

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

