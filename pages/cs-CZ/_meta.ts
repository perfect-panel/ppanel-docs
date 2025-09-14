const meta = {
  index: {
    title: 'Domov',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Dokumentace',
  },
  swagger: {
    type: 'page',
    title: 'API dokumentace',
  },
  source: {
    title: 'Zdrojový kód',
    type: 'menu',
    items: {
      user: {
        title: 'Uživatelské web',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Administrátorské web',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Server',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: 'Šablona předplatného',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Online demo',
    type: 'menu',
    items: {
      user: {
        title: 'Uživatelské demo',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Admin demo',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Změny',
  },
};

export default meta;
