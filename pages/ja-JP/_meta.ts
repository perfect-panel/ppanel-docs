const meta = {
  index: {
    title: 'ホーム',
    type: 'page',
    display: 'hidden',
    theme: { layout: 'raw' },
  },
  docs: { type: 'page', title: 'ドキュメント' },
  swagger: { type: 'page', title: 'APIドキュメント' },
  source: {
    title: 'ソースコード',
    type: 'menu',
    items: {
      user: {
        title: 'ユーザー',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: '管理',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'サーバー',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'ノード',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: 'サブスクリプションテンプレート',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'オンラインデモ',
    type: 'menu',
    items: {
      user: { title: 'ユーザー', href: 'https://user.ppanel.dev', newWindow: true },
      admin: { title: '管理', href: 'https://admin.ppanel.dev', newWindow: true },
    },
  },
  changelog: { type: 'page', title: '更新履歴' },
};

export default meta;
