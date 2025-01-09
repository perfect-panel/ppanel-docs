const meta = {
  index: {
    title: 'PPanel',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'ДОКУМЕНТАЦИЯ',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'ИСТОЧНИК',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL ПОЛЬЗОВАТЕЛЬСКИЙ ВЕБ',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL АДМИНИСТРАТОР ВЕБ',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL НОД',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      xrayr: {
        title: 'XRAYR',
        href: 'https://github.com/perfect-panel/XrayR',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'ДЕМО',
    type: 'menu',
    items: {
      user: {
        title: 'ПОЛЬЗОВАТЕЛЬСКИЙ ВЕБ',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'АДМИНИСТРАТОР ВЕБ',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'CHANGELOG',
  },
};

export default meta;
