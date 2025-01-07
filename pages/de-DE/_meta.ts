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
    title: 'DOKUMENTATION',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'QUELLEN',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL BENUTZER WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL ADMIN WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL KNOTEN',
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
        title: 'BENUTZER WEB',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'ADMIN WEB',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
};

export default meta;
