const meta = {
  index: {
    title: 'PPanel',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: "raw"
    }
  },
  docs: {
    type: 'page',
    title: 'Documentation'
  },
  source: {
   title: 'Source Code',
   type : 'menu',
    items: {
      user: {
        title: 'User Panel',
        href: "https://github.com/perfect-panel/ppanel-web/tree/main/apps/user",
        newWindow: true
      },
      admin: {
        title: 'Admin Panel',
        href: "https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin",
        newWindow: true
      },
      xrayr: {
        title: 'XrayR',
        href: "https://github.com/perfect-panel/XrayR",
        newWindow: true
      },
    }
  },
  demo: {
    title: 'Demo',
    type: 'menu',
    items: {
      user: {
        title: 'User Panel',
        href: "https://user.ppanel.dev",
        newWindow: true
      },
      admin: {
        title: 'Admin Panel',
        href: "https://admin.ppanel.dev",
        newWindow: true
      }
    },
  },
}

export default meta;
