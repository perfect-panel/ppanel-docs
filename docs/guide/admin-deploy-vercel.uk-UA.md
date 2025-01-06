```markdown
---
title: Управлінський інтерфейс - Vercel
order: 1
group: 
  title: Деплоймент фронтенду
  order: 3
toc: content
---

### Використання Vercel для деплойменту\*\*

Натисніть на кнопку нижче для швидкого деплойменту:

[![Деплой на Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Кроки:**

1. Увійдіть або зареєструйтесь на [Vercel](https://vercel.com/) .
2. Натисніть кнопку деплойменту, форкніть репозиторій і виберіть `apps/admin`.
3. Налаштуйте змінні середовища.
4. Натисніть **Deploy**, щоб розпочати деплоймент.

---

### **3.3 Використання PM2, Node.js або Bun для деплойменту**

#### Завантаження коду

Отримайте код з офіційного GitHub репозиторію:

```bash
# Завантажте останню версію коду
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Розпакуйте файл
tar -xzvf ppanel-admin-web.tar.gz

# Перейдіть до каталогу з кодом
cd ppanel-admin-web
```

#### Налаштування змінних середовища

Створіть файл `apps/admin/.env` і додайте необхідні змінні середовища (посилаючись на налаштування змінних середовища вище).

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
```

