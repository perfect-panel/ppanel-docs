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
    title: 'दस्तावेज़',
  },
  swagger: {
    type: 'page',
    title: 'स्वैगर',
  },
  source: {
    title: 'स्रोत',
    type: 'menu',
    items: {
      user: {
        title: 'पीपैनल उपयोगकर्ता वेब',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/user',
        newWindow: true,
      },
      admin: {
        title: 'पीपैनल प्रशासन वेब',
        href: 'https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin',
        newWindow: true,
      },
      node: {
        title: 'पीपैनल नोड',
        href: 'https://github.com/wyx2685/ppanel-node',
      },
      xrayr: {
        title: 'एक्सरेयर',
        href: 'https://github.com/perfect-panel/XrayR',
        newWindow: true,
      },
    },
  },
  demo: {
    title: 'डेमो',
    type: 'menu',
    items: {
      user: {
        title: 'उपयोगकर्ता वेब',
        href: 'https://user.ppanel.dev',
        newWindow: true,
      },
      admin: {
        title: 'प्रशासन वेब',
        href: 'https://admin.ppanel.dev',
        newWindow: true,
      },
    },
  },
};

export default meta;
