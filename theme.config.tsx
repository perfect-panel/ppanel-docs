import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs';
import Image from 'next/legacy/image';
import Footer from './components/footer';

const config: DocsThemeConfig = {
  i18n: [
    {
      locale: 'en-US',
      name: 'English',
      direction: 'ltr',
    },
    {
      locale: 'cs-CZ',
      name: 'Čeština',
      direction: 'ltr',
    },
    {
      locale: 'de-DE',
      name: 'Deutsch',
      direction: 'ltr',
    },
    {
      locale: 'es-ES',
      name: 'Español (España)',
      direction: 'ltr',
    },
    {
      locale: 'es-MX',
      name: 'Español (México)',
      direction: 'ltr',
    },
    {
      locale: 'fa-IR',
      name: 'فارسی',
      direction: 'rtl',
    },
    {
      locale: 'fi-FI',
      name: 'Suomi',
      direction: 'ltr',
    },
    {
      locale: 'fr-FR',
      name: 'Français',
      direction: 'ltr',
    },
    {
      locale: 'hi-IN',
      name: 'हिन्दी',
      direction: 'ltr',
    },
    {
      locale: 'hu-HU',
      name: 'Magyar',
      direction: 'ltr',
    },
    {
      locale: 'ja-JP',
      name: '日本語',
      direction: 'ltr',
    },
    {
      locale: 'ko-KR',
      name: '한국어',
      direction: 'ltr',
    },
    {
      locale: 'no-NO',
      name: 'Norsk',
      direction: 'ltr',
    },
    {
      locale: 'pl-PL',
      name: 'Polski',
      direction: 'ltr',
    },
    {
      locale: 'pt-BR',
      name: 'Português (Brasil)',
      direction: 'ltr',
    },
    {
      locale: 'ro-RO',
      name: 'Română',
      direction: 'ltr',
    },
    {
      locale: 'ru-RU',
      name: 'Русский',
      direction: 'ltr',
    },
    {
      locale: 'th-TH',
      name: 'ไทย',
      direction: 'ltr',
    },
    {
      locale: 'tr-TR',
      name: 'Türkçe',
      direction: 'ltr',
    },
    {
      locale: 'uk-UA',
      name: 'Українська',
      direction: 'ltr',
    },
    {
      locale: 'vi-VN',
      name: 'Tiếng Việt',
      direction: 'ltr',
    },
    {
      locale: 'zh-CN',
      name: '简体中文',
      direction: 'ltr',
    },
    {
      locale: 'zh-HK',
      name: '繁體中文 (香港)',
      direction: 'ltr',
    },
  ],
  project: {
    link: 'https://github.com/perfect-panel/ppanel-docs',
  },
  logo: (
    <div className='flex items-center font-bold gap-2'>
      <Image
        src='https://raw.githubusercontent.com/perfect-panel/ppanel-assets/refs/heads/main/logo.svg'
        width={48}
        height={48}
        alt='logo'
      />
      PPanel
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const isDefault = route === '/' || !config.title;
    const image = 'https://ppanel.dev/' + (isDefault ? 'og.jpeg' : `api/og?title=${config.title}`);

    const description =
      config.frontMatter.description ||
      'PPanel is a pure, professional, and perfect open-source proxy panel tool, designed to be your ideal choice for learning and practical use.';
    const title = config.title + (route === '/' ? '' : ' - PPanel');

    return (
      <>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />

        <meta name='msapplication-TileColor' content='#fff' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site:domain' content='ppanel.dev' />
        <meta name='twitter:url' content='https://ppanel.dev' />
        <meta name='apple-mobile-web-app-title' content='Nextra' />
        <link rel='icon' href='favicon.svg' type='image/svg+xml' />
      </>
    );
  },
  docsRepositoryBase: 'https://github.com/perfect-panel/ppanel-docs',
  editLink: {
    content: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  darkMode: true,
  footer: {
    component: <Footer />,
  },
};

export default config;
