const meta = {
  index: {
    title: 'Acasă',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Documentație',
  },
  swagger: {
    type: 'page',
    title: 'Documentație API',
  },
  source: {
    title: 'Cod sursă',
    type: 'menu',
    items: {
      user: {
        title: 'Site utilizator',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Site administrare',
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
      },
      subscription: {
        title: 'Șablon abonament',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Demonstrație online',
    type: 'menu',
    items: {
      user: {
        title: 'Demonstrație utilizator',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Demonstrație administrare',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Jurnal de modificări',
  },
};

export default meta;
