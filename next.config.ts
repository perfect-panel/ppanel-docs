import type { NextConfig } from 'next';
import nextra from 'nextra';
import { outputLocales } from './.i18nrc.js';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: outputLocales,
    defaultLocale: 'en-US',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**.**',
      },
      {
        protocol: 'https',
        hostname: '**.**',
      },
    ],
  },
};

export default withNextra(nextConfig);
