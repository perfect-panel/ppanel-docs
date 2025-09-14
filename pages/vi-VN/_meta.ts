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
    title: 'TÀI LIỆU',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'NGUỒN',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL NGƯỜI DÙNG WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL QUẢN TRỊ WEB',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'PPANEL SERVER',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'PPANEL NODE',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: 'MẪU ĐĂNG KÝ',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'DEMO',
    type: 'menu',
    items: {
      user: {
        title: 'NGƯỜI DÙNG WEB',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'QUẢN TRỊ WEB',
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
