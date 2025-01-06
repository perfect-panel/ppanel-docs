---
title: Cliente - Docker
order: 5
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
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
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
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Inicie o serviço:

```bash
docker compose up -d
```

---

