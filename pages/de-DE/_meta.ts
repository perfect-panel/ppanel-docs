const meta = {
  index: {
    title: 'Startseite',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Dokumentation',
  },
  swagger: {
    type: 'page',
    title: 'API-Dokumentation',
  },
  source: {
    title: 'Quellcode',
    type: 'menu',
    items: {
      user: {
        title: 'Benutzer-Web',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Admin-Web',
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
        title: 'Abonnement-Vorlage',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Online-Demo',
    type: 'menu',
    items: {
      user: {
        title: 'Benutzer-Demo',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Admin-Demo',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Änderungsprotokoll',
  },
};

export default meta;
