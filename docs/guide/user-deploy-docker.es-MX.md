---
title: Cliente-Docker
order: 5
group: 
  title: Despliegue Frontend
  order: 3
toc: content
---

### Despliegue usando Docker\*\*

#### Instalación de Docker

Ejecuta el siguiente comando para instalar Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Iniciar el servicio con Docker

Ejecuta el siguiente comando para iniciar el contenedor:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=es-MX \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Despliegue usando Docker Compose

Crea un archivo `docker-compose.yml` con el siguiente contenido:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: es-MX
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Inicia el servicio:

```bash
docker compose up -d
```

---

