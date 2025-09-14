const meta = {
  index: {
    title: '首頁',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: '文件',
  },
  swagger: {
    type: 'page',
    title: 'API 文件',
  },
  source: {
    title: '原始碼',
    type: 'menu',
    items: {
      user: {
        title: '用戶端',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: '管理端',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: '服務端',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: '節點端',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: '訂閱模板',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: '在線演示',
    type: 'menu',
    items: {
      user: {
        title: '用戶端演示',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: '管理端演示',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: '更新日誌',
  },
};

export default meta;
