const { defineConfig } = require('@lobehub/i18n-cli');

const outputLocales = [
  'cs-CZ',
  'de-DE',
  'en-US',
  'es-ES',
  'es-MX',
  'fa-IR',
  'fi-FI',
  'fr-FR',
  'hi-IN',
  'hu-HU',
  'ja-JP',
  'ko-KR',
  'no-NO',
  'pl-PL',
  'pt-BR',
  'ro-RO',
  'ru-RU',
  'th-TH',
  'tr-TR',
  'uk-UA',
  'vi-VN',
  'zh-CN',
  'zh-HK',
];

module.exports = defineConfig({
  modelName: 'gpt-4o-mini',
  markdown: {
    entry: ['./docs/*.zh-CN.md', './docs/**/*.zh-CN.md'],
    entryLocale: 'zh-CN',
    outputLocales: outputLocales,
    outputExtensions: (locale) =>
      locale === 'en-US' ? '.md' : `.${locale}.md`,
    translateCode: true,
    includeMatter: true,
  },
});
