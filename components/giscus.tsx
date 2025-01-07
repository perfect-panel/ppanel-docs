import GiscusReact from '@giscus/react';
import { useTheme } from 'nextra-theme-docs';
import { useRouter } from 'nextra/hooks';

export default function Giscus() {
  const { locale } = useRouter();
  const lang = locale?.startsWith('zh') ? locale : locale?.split('-')[0];
  const { resolvedTheme } = useTheme();

  if (!(process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID && process.env.NEXT_PUBLIC_GISCUS_REPO_ID))
    return null;

  return (
    <section className='mt-8'>
      <GiscusReact
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        category='Q&A'
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        repo='perfect-panel/ppanel-docs'
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
        mapping='url'
        lang={lang}
      />
    </section>
  );
}
