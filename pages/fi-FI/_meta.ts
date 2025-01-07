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
    title: 'DOKUMENTIT',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'LÄHDE',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL KÄYTTÄJÄVERKKO',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL ADMIN VERKKO',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL SOLMU',
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
    title: 'DEMO',
    type: 'menu',
    items: {
      user: {
        title: 'KÄYTTÄJÄVERKKO',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'ADMIN VERKKO',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
};

export default meta;
