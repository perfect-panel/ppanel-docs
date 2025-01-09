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
    title: 'مستندات',
  },
  swagger: {
    type: 'page',
    title: 'سوگگر',
  },
  source: {
    title: 'منبع',
    type: 'menu',
    items: {
      user: {
        title: 'وب‌سایت کاربر پنل',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'وب‌سایت مدیر پنل',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'نود پنل',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      xrayr: {
        title: 'اکس‌ریر',
        href: 'https://github.com/perfect-panel/XrayR',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'دمو',
    type: 'menu',
    items: {
      user: {
        title: 'وب‌سایت کاربر',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'وب‌سایت مدیر',
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
