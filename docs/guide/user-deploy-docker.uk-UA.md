---
title: Клієнтська частина - Docker
order: 5
group: 
  title: Деплоймент фронтенду
  order: 3
toc: content
---

### Використання Docker для деплойменту

#### Встановлення Docker

Виконайте наступну команду для встановлення Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Запуск сервісу за допомогою Docker

Виконайте наступну команду для запуску контейнера:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=uk-UA \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Деплоймент за допомогою Docker Compose

Створіть файл `docker-compose.yml` з наступним вмістом:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: uk-UA
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Запустіть сервіс:

```bash
docker compose up -d
```

---

