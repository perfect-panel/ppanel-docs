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
    title: '문서',
  },
  swagger: {
    type: 'page',
    title: '스웨거',
  },
  source: {
    title: '소스',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL 사용자 웹',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL 관리자 웹',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL 노드',
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
    title: '데모',
    type: 'menu',
    items: {
      user: {
        title: '사용자 웹',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: '관리자 웹',
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
