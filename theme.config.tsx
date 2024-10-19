import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/legacy/image'

const config: DocsThemeConfig = {
  i18n: [
    { locale: 'en-US', name: 'English' },
    { locale: 'zh-CN', name: '中文' },
  ],
  project: {
    link: 'https://github.com/perfect-panel/ppanel-docs'
  },
  logo: (
    <div className="flex items-center font-bold gap-2">
      <Image src="https://raw.githubusercontent.com/perfect-panel/ppanel-assets/refs/heads/main/logo.svg" width={48} height={48} alt='logo' />
      PPanel
    </div>
  ),
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title
    const image =
      'https://docs.ppanel.dev/' +
      (isDefault ? 'og.jpeg' : `api/og?title=${config.title}`)

    const description =
      config.frontMatter.description ||
      'PPanel is a pure, professional, and perfect open-source proxy panel tool, designed to be your ideal choice for learning and practical use.'
    const title = config.title + (route === '/' ? '' : ' - PPanel')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="docs.ppanel.dev" />
        <meta name="twitter:url" content="https://docs.ppanel.dev" />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </>
    )
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  darkMode: true,
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="text-xs">
          © {new Date().getFullYear()} The PPanel Project.
        </p>
      </div>
    )
  }
}

export default config