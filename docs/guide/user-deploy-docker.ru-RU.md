---
title: Пользовательский интерфейс - Docker
order: 5
group: 
  title: Развертывание фронтенда
  order: 3
toc: content
---

### Развертывание с помощью Docker

#### Установка Docker

Запустите следующую команду для установки Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Запуск сервиса с помощью Docker

Запустите следующую команду для старта контейнера:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=ru-RU \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Развертывание с помощью Docker Compose

Создайте файл `docker-compose.yml` со следующим содержимым:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ru-RU
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Запустите сервис:

```bash
docker compose up -d
```

---

