const meta = {
  index: {
    title: 'होम',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'दस्तावेज़',
  },
  swagger: {
    type: 'page',
    title: 'API दस्तावेज़',
  },
  source: {
    title: 'स्रोत कोड',
    type: 'menu',
    items: {
      user: {
        title: 'उपयोगकर्ता वेबसाइट',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'प्रशासक वेबसाइट',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      server: {
        title: 'सर्वर',
        href: 'https://github.com/perfect-panel/server',
        newWindow: true,
      },
      node: {
        title: 'नोड',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      subscription: {
        title: 'सब्सक्रिप्शन टेम्पलेट',
        href: 'https://github.com/perfect-panel/subscription-template',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'ऑनलाइन डेमो',
    type: 'menu',
    items: {
      user: {
        title: 'उपयोगकर्ता डेमो',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'प्रशासक डेमो',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
  changelog: {
    type: 'page',
    title: 'चेंजलॉग',
  },
};

export default meta;
