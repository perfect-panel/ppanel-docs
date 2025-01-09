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
    title: 'DOCS',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'SURSA',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL UTILIZATOR WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL ADMIN WEB',
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
    title: 'DEMO',
    type: 'menu',
    items: {
      user: {
        title: 'WEB UTILIZATOR',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'WEB ADMIN',
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
