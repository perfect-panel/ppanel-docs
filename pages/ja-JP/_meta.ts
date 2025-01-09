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
    title: 'ドキュメント',
  },
  swagger: {
    type: 'page',
    title: 'スワッガー',
  },
  source: {
    title: 'ソース',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL ユーザーウェブ',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL 管理者ウェブ',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL ノード',
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
    title: 'デモ',
    type: 'menu',
    items: {
      user: {
        title: 'ユーザーウェブ',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: '管理者ウェブ',
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
