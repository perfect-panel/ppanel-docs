const meta = {
  index: {
    title: 'Главная',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Документация',
  },
  swagger: {
    type: 'page',
    title: 'Документация API',
  },
  source: {
    title: 'Исходный код',
    type: 'menu',
    items: {
      user: {
        title: 'Пользователь',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Админ',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Сервер',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'Нода',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: 'Шаблон подписки',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Демонстрация онлайн',
    type: 'menu',
    items: {
      user: {
        title: 'Демонстрация пользователя',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Демонстрация администратора',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Журнал изменений',
  },
};

export default meta;
