---
title: Управлінський інтерфейс - Node
order: 3
group: 
  title: Деплой фронтенду
  order: 3
toc: content
---

### Використання PM2, Node.js або Bun для деплою

#### Завантаження коду

Отримайте код з офіційного репозиторію GitHub:

```bash
# Завантажити останню версію коду
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Розпакувати файл
tar -xzvf ppanel-admin-web.tar.gz

# Перейти до каталогу з кодом
cd ppanel-admin-web
```

#### Налаштування змінних середовища

Створіть файл `apps/admin/.env` та додайте необхідні змінні середовища (посилання на налаштування змінних середовища вище).

#### Налаштування PM2

Створіть файл `ecosystem.config.js` з таким вмістом:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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
  node apps/admin/server.js
  ```
- **Запуск за допомогою Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Перевірка деплою**

### **4.1 Статус сервісу PM2**

Виконайте наступну команду для перевірки:

```bash
pm2 list
```

### **4.2 Доступ через браузер**

Перейдіть за адресою `http://<Ваш IP сервера>:3000`, щоб перевірити стан роботи сервісу.

---

## **5. Управління сервісом**

### **Команди PM2**

- Зупинити сервіс:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Перезапустити сервіс:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Видалити сервіс:
  ```bash
  pm2 delete ppanel-admin-web
  ```

