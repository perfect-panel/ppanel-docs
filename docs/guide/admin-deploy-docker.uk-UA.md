---
title: Управлінський інтерфейс - Docker
order: 2
group: 
  title: Деплоймент фронтенду
  order: 3
toc: content
---

### Використання Docker для деплойменту

#### Встановлення Docker

Запустіть наступну команду для встановлення Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Запуск сервісу за допомогою Docker

Запустіть наступну команду для старту контейнера:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=uk-UA \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Деплоймент за допомогою Docker Compose

Створіть файл `docker-compose.yml` з наступним вмістом:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: uk-UA
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Запустіть сервіс:

```bash
docker compose up -d
```

---

