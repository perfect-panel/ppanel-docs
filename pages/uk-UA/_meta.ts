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
    title: 'ДОКУМЕНТАЦІЯ',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'ДЖЕРЕЛО',
    type: 'menu',
    items: {
      user: {
        title: 'ВЕБ КОРИСТУВАЧА PPANEL',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'ВЕБ АДМІНІСТРАТОРА PPANEL',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL NODE',
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
        title: 'ВЕБ КОРИСТУВАЧА',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'ВЕБ АДМІНІСТРАТОРА',
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
