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
    title: '文档'
  },
  source: {
   title: '源码',
   type : 'menu',
    items: {
      user: {
        title: '用户端',
        href: "https://github.com/perfect-panel/ppanel-web/tree/main/apps/user",
        newWindow: true
      },
      admin: {
        title: '管理端',
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
  demo:{
    title: '演示',
    type: 'menu',
    items: {
      user: {
        title: '用户端',
        href: "https://user.ppanel.dev",
        newWindow: true
      },
      admin: {
        title: '管理端',
        href: "https://admin.ppanel.dev",
        newWindow: true
      }
    },
  },
}

export default meta