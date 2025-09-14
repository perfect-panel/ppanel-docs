const meta = {
  index: {
    title: 'Strona główna',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Dokumentacja',
  },
  swagger: {
    type: 'page',
    title: 'Dokumentacja API',
  },
  source: {
    title: 'Kod źródłowy',
    type: 'menu',
    items: {
      user: {
        title: 'Strona użytkownika',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Panel administracyjny',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Serwer',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      subscription: {
        title: 'Szablon subskrypcji',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Demo online',
    type: 'menu',
    items: {
      user: {
        title: 'Demo użytkownika',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Demo administratora',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Historia zmian',
  },
};

export default meta;
