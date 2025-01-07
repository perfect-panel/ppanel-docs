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
    title: 'BELGELER',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'KAYNAK',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL KULLANICI WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL YÖNETİCİ WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL DÜĞÜM',
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
        title: 'KULLANICI WEB',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'YÖNETİCİ WEB',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
};

export default meta;
