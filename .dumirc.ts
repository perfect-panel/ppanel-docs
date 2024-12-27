import { defineConfig } from 'dumi';

export default defineConfig({
  ...(process.env.NODE_ENV === 'development'
    ? {}
    : { ssr: { builder: 'webpack' } }),
  favicons: ['/favicon.svg'],
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'PPanel',
    logo: '/favicon.svg',
    footer: `
      <div style="display: flex; justify-content: center; align-items: center;">
        <a href="https://github.com/perfect-panel" target="_blank" style="line-height: 1; margin-right: 16px;">
          <img src="/favicon.svg" alt="logo" style="width: 24px; height:24px;" />
        </a>
        <span>© 2024 PPanel</span>
      </div>
    `,
    socialLinks: {
      github: 'https://github.com/perfect-panel',
    },
    nprogress: true,
    prefersColor: {
      default: 'auto',
    },
  },
  locales: [
    {
      id: 'en-US',
      name: 'English',
    },
    {
      id: 'cs-CZ',
      name: 'Čeština',
    },
    {
      id: 'de-DE',
      name: 'Deutsch',
    },
    {
      id: 'es-ES',
      name: 'Español (España)',
    },
    {
      id: 'es-MX',
      name: 'Español (México)',
    },
    {
      id: 'fa-IR',
      name: 'فارسی',
    },
    {
      id: 'fi-FI',
      name: 'Suomi',
    },
    {
      id: 'fr-FR',
      name: 'Français',
    },
    {
      id: 'hi-IN',
      name: 'हिन्दी',
    },
    {
      id: 'hu-HU',
      name: 'Magyar',
    },
    {
      id: 'ja-JP',
      name: '日本語',
    },
    {
      id: 'ko-KR',
      name: '한국어',
    },
    {
      id: 'no-NO',
      name: 'Norsk',
    },
    {
      id: 'pl-PL',
      name: 'Polski',
    },
    {
      id: 'pt-BR',
      name: 'Português (Brasil)',
    },
    {
      id: 'ro-RO',
      name: 'Română',
    },
    {
      id: 'ru-RU',
      name: 'Русский',
    },
    {
      id: 'th-TH',
      name: 'ไทย',
    },
    {
      id: 'tr-TR',
      name: 'Türkçe',
    },
    {
      id: 'uk-UA',
      name: 'Українська',
    },
    {
      id: 'vi-VN',
      name: 'Tiếng Việt',
    },
    {
      id: 'zh-CN',
      name: '简体中文',
    },
    {
      id: 'zh-HK',
      name: '繁體中文 (香港)',
    },
  ],
  styles: [
    `
    .swagger-ui .scheme-container,
    .swagger-ui .information-container.wrapper {
      display: none !important;
    }

    [data-prefers-color="dark"] .swagger-ui {
      filter: invert(1) hue-rotate(180deg);
    }
    `,
  ],
});
