const meta = {
  index: {
    title: '홈',
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
    title: 'API 문서',
  },
  source: {
    title: '소스 코드',
    type: 'menu',
    items: {
      user: {
        title: '사용자',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: '관리자',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: '서버',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: '구독 템플릿',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: '데모',
    type: 'menu',
    items: {
      user: {
        title: '사용자',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: '관리자',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: '업데이트 기록',
  },
};

export default meta;
