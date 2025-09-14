const meta = {
  index: {
    title: 'หน้าแรก',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'เอกสาร',
  },
  swagger: {
    type: 'page',
    title: 'เอกสาร API',
  },
  source: {
    title: 'ซอร์สโค้ด',
    type: 'menu',
    items: {
      user: {
        title: 'เว็บผู้ใช้',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'เว็บผู้ดูแล',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'เซิร์ฟเวอร์',
        href: 'https://github.com/perfect-panel/ppanel-server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      subscription: {
        title: 'เทมเพลตรับสมัคร',
        href: 'https://github.com/perfect-panel/ppanel-subscription',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'สาธิตออนไลน์',
    type: 'menu',
    items: {
      user: {
        title: 'สาธิตผู้ใช้',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'สาธิตผู้ดูแล',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'บันทึกการเปลี่ยนแปลง',
  },
};

export default meta;
