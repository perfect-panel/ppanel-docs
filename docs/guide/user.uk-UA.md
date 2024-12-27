---
title: Клієнтська частина
order: 4
nav:
  title: Посібник
  order: 1
group:
  title: Розгортання
  order: 1
toc: content
---

# **Посібник з розгортання клієнтської частини PPanel**

Цей посібник детально описує, як розгорнути клієнтську частину PPanel, включаючи Docker, Vercel, PM2, а також різні способи розгортання за допомогою Node.js або Bun.

---

## **1. Підготовка середовища**

Перед розгортанням переконайтеся, що наступні інструменти встановлені:

- **Node.js** (рекомендується встановлювати через NVM, версія >= 22)
- **Bun** (швидкий JavaScript-інтерпретатор)
- **PM2** (інструмент управління процесами для ефективного керування сервісами)
- **Docker** (для контейнеризованого розгортання)

---

## **2. Налаштування змінних середовища**

Перед розгортанням вам потрібно налаштувати наступні змінні середовища:

```env
# Налаштування програми
NEXT_PUBLIC_DEFAULT_LANGUAGE=uk-UA
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Контактна інформація
NEXT_PUBLIC_EMAIL=support@example.com

# Посилання на спільноти та соціальні мережі
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# За замовчуванням користувач
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Варіанти розгортання**

### **3.1 Розгортання за допомогою Docker**

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
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Розгортання за допомогою Docker Compose

Створіть файл `docker-compose.yml` з таким вмістом:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: uk-UA
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Запустіть сервіс:

```bash
docker compose up -d
```

---

### **3.2 Розгортання за допомогою Vercel**

Натисніть на кнопку нижче для швидкого розгортання:
[![Розгортання за допомогою Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Кроки:**

1. Увійдіть або зареєструйтесь на [Vercel](https://vercel.com/) .
2. Натисніть кнопку розгортання, форкніть репозиторій і виберіть `apps/user`.
3. Налаштуйте змінні середовища.
4. Натисніть **Deploy**, щоб почати розгортання.

---

### **3.3 Розгортання за допомогою PM2, Node.js або Bun**

#### Завантаження коду

Отримайте код з офіційного репозиторію GitHub:

```bash
# Завантажте останню версію коду
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Розпакуйте файл
tar -xzvf ppanel-user-web.tar.gz

# Перейдіть до каталогу з кодом
cd ppanel-user-web
```

#### Налаштування змінних середовища

Створіть файл `apps/user/.env` і додайте необхідні змінні середовища (посилаючись на налаштування змінних середовища вище).

#### Налаштування PM2

Створіть файл `ecosystem.config.js` з таким вмістом:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // можна змінити на node
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

#### Запуск сервісу за допомогою PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Запуск сервісу за допомогою Node.js або Bun

- **Запуск за допомогою Node.js**:
  ```bash
  node apps/user/server.js
  ```
- **Запуск за допомогою Bun**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Перевірка розгортання**

### **4.1 Статус сервісу PM2**

Виконайте наступну команду для перевірки:

```bash
pm2 list
```

### **4.2 Доступ через браузер**

Перейдіть за адресою `http://<Ваш IP сервера>:3000`, щоб перевірити, чи працює сервіс.

---

## **5. Управління сервісом**

### **Команди PM2**

- Зупинити сервіс:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Перезапустити сервіс:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Видалити сервіс:
  ```bash
  pm2 delete ppanel-user-web
  ```
