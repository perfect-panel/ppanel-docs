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
    title: 'DOCUMENTACIÓN',
  },
  swagger: {
    type: 'page',
    title: 'SWAGGER',
  },
  source: {
    title: 'CÓDIGO FUENTE',
    type: 'menu',
    items: {
      user: {
        title: 'PPANEL WEB DE USUARIO',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'PPANEL WEB DE ADMINISTRADOR',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'PPANEL NODE',
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
    title: 'DEMO',
    type: 'menu',
    items: {
      user: {
        title: 'WEB DE USUARIO',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'WEB DE ADMINISTRADOR',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
};

export default meta;
