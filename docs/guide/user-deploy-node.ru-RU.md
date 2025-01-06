---
title: Клиентская часть - Node
order: 6
group: 
  title: Развертывание фронтенда
  order: 3
toc: content
---

### Развертывание с помощью PM2, Node.js или Bun

#### Скачивание кода

Получите код из официального репозитория GitHub:

```bash
# Скачивание последней версии кода
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Распаковка файла
tar -xzvf ppanel-user-web.tar.gz

# Переход в директорию с кодом
cd ppanel-user-web
```

#### Настройка переменных окружения

Создайте файл `apps/user/.env` и добавьте необходимые переменные окружения (смотрите выше для конфигурации переменных окружения).

#### Настройка PM2

Создайте файл `ecosystem.config.js` со следующим содержимым:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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

#### Запуск сервиса с помощью Node.js или Bun

- **Запуск с Node.js**:

  ```bash
  node apps/user/server.js
  ```

- **Запуск с Bun**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. Проверка развертывания**

### **4.1 Статус сервиса PM2**

Выполните следующую команду для проверки:

```bash
pm2 list
```

### **4.2 Доступ через браузер**

Перейдите по адресу `http://<Ваш IP сервера>:3000`, чтобы проверить состояние работы сервиса.

---

## **5. Управление сервисом**

### **Команды PM2**

- Остановка сервиса:

  ```bash
  pm2 stop ppanel-user-web
  ```

- Перезапуск сервиса:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Удаление сервиса:

  ```bash
  pm2 delete ppanel-user-web
  ```

