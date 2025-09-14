const meta = {
  index: {
    title: 'Hjem',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Dokumenter',
  },
  swagger: {
    type: 'page',
    title: 'API-dokumentasjon',
  },
  source: {
    title: 'Kildekode',
    type: 'menu',
    items: {
      user: {
        title: 'Brukerweb',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Adminweb',
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
        title: 'Abonnement-mal',
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
        title: 'Brukerdemonstrasjon',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Admin demonstrasjon',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Endringslogg',
  },
};

export default meta;
