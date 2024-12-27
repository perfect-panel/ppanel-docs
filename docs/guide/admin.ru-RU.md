---
title: Управляющий интерфейс
order: 3
nav:
  title: Руководство
  order: 1
group:
  title: Развертывание
  order: 1
toc: content
---

# **Руководство по развертыванию управляющего интерфейса PPanel**

В этом руководстве подробно описывается, как развернуть управляющий интерфейс PPanel, включая различные способы развертывания с использованием Docker, Vercel, PM2, а также прямое использование Node.js или Bun.

---

## **1. Подготовка окружения**

Перед развертыванием убедитесь, что следующие инструменты установлены:

- **Node.js** (рекомендуется устанавливать через NVM, версия >= 22)
- **Bun** (быстрый JavaScript-движок)
- **PM2** (инструмент управления процессами для эффективного управления сервисами)
- **Docker** (для контейнерного развертывания)

---

## **2. Настройка переменных окружения**

Перед развертыванием вам необходимо настроить следующие переменные окружения:

```env
# Конфигурация приложения
NEXT_PUBLIC_DEFAULT_LANGUAGE=ru-RU
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Дефолтный пользователь
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Варианты развертывания**

### **3.1 Развертывание с использованием Docker**

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
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Развертывание с использованием Docker Compose

Создайте файл `docker-compose.yml` со следующим содержимым:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ru-RU
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Запустите сервис:

```bash
docker compose up -d
```

---

### **3.2 Развертывание с использованием Vercel**

Нажмите на кнопку ниже для быстрого развертывания:

[![Развернуть на Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20это%20чистый%2C%20профессиональный%2C%20и%20совершенный%20инструмент%20прокси-панели%2C%20предназначенный%20для%20вашего%20идеального%20выбора%20для%20обучения%20и%20практического%20использования&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=Управляющий%20интерфейс%20PPanel&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Шаги:**

1. Войдите или зарегистрируйтесь на [Vercel](https://vercel.com/) .
2. Нажмите кнопку развертывания, создайте форк репозитория и выберите `apps/admin`.
3. Настройте переменные окружения.
4. Нажмите **Deploy**, чтобы начать развертывание.

---

### **3.3 Развертывание с использованием PM2, Node.js или Bun**

#### Скачивание кода

Получите код из официального репозитория GitHub:

```bash
# Скачайте последнюю версию кода
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Распакуйте файл
tar -xzvf ppanel-admin-web.tar.gz

# Перейдите в каталог с кодом
cd ppanel-admin-web
```

#### Настройка переменных окружения

Создайте файл `apps/admin/.env` и добавьте необходимые переменные окружения (смотрите выше).

#### Настройка PM2

Создайте файл `ecosystem.config.js` со следующим содержимым:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // можно заменить на node
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

#### Запуск сервиса с помощью PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Запуск сервиса с использованием Node.js или Bun

- **Запуск с Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Запуск с Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Проверка развертывания**

### **4.1 Статус сервиса PM2**

Запустите следующую команду для проверки:

```bash
pm2 list
```

### **4.2 Доступ через браузер**

Перейдите по адресу `http://<Ваш IP сервера>:3000`, чтобы проверить работу сервиса.

---

## **5. Управление сервисом**

### **Команды PM2**

- Остановить сервис:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Перезапустить сервис:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Удалить сервис:
  ```bash
  pm2 delete ppanel-admin-web
  ```
