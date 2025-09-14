const meta = {
  index: {
    title: '首页',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: '文档',
  },
  swagger: {
    type: 'page',
    title: '接口文档',
  },
  source: {
    title: '源代码',
    type: 'menu',
    items: {
      user: {
        title: '用户端',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: '管理端',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: '服务端',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: '节点端',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: '订阅模板',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: '在线演示',
    type: 'menu',
    items: {
      user: {
        title: '用户端',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: '管理端',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: '更新日志',
  },
};

export default meta;
