---
title: Управляющий интерфейс - Vercel
order: 1
group: 
  title: Развертывание фронтенда
  order: 3
toc: content
---

### Развертывание с помощью Vercel\*\*

Нажмите на кнопку ниже для быстрого развертывания:

[![Развернуть на Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Шаги:**

1. Войдите или зарегистрируйтесь на [Vercel](https://vercel.com/) .
2. Нажмите кнопку развертывания, создайте форк репозитория и выберите `apps/admin`.
3. Настройте переменные окружения.
4. Нажмите **Deploy**, чтобы начать развертывание.

---

### **3.3 Развертывание с помощью PM2, Node.js или Bun**

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

Создайте файл `apps/admin/.env` и добавьте необходимые переменные окружения (смотрите выше для конфигурации переменных окружения).

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

