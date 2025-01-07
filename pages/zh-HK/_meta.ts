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
    title: '文檔',
  },
  swagger: {
    type: 'page',
    title: '接口文檔',
  },
  source: {
    title: '源碼',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL 用戶網頁',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL 管理員網頁',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL 節點',
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
    title: '示範',
    type: 'menu',
    items: {
      user: {
        title: '用戶網頁',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: '管理員網頁',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
};

export default meta;
