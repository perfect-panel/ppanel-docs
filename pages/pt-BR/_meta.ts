const meta = {
  index: {
    title: 'Início',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Documentação',
  },
  swagger: {
    type: 'page',
    title: 'Documentação da API',
  },
  source: {
    title: 'Código fonte',
    type: 'menu',
    items: {
      user: {
        title: 'Site do usuário',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'Site do administrador',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'Servidor',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'Node',
        href: 'https://github.com/wyx2685/ppanel-node',
        newWindow: true,
      },
      subscription: {
        title: 'Modelo de assinatura',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'Demonstração online',
    type: 'menu',
    items: {
      user: {
        title: 'Demonstração do usuário',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'Demonstração do administrador',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'Registro de alterações',
  },
};

export default meta;
