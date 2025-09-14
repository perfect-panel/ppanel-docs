const meta = {
  index: {
    title: 'خانه',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'مستندات',
  },
  swagger: {
    type: 'page',
    title: 'مستندات API',
  },
  source: {
    title: 'کد منبع',
    type: 'menu',
    items: {
      user: {
        title: 'وب‌کاربر',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'وب‌مدیر',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'سرور',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'نود',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      subscription: {
        title: 'الگوی اشتراک',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'نمایش آنلاین',
    type: 'menu',
    items: {
      user: {
        title: 'نمایش کاربر',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'نمایش مدیر',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'فهرست تغییرات',
  },
};

export default meta;
