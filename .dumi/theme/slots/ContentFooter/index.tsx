import Giscus from '@giscus/react';
import { useLocale, usePrefersColor } from 'dumi';
import ContentFooter from 'dumi/theme-default/slots/ContentFooter';
import { memo } from 'react';

export default memo(() => {
  const locale = useLocale();
  const [color] = usePrefersColor();
  return (
    <>
      {process.env.UMI_APP_GISCUS_REPO &&
        process.env.UMI_APP_GISCUS_REPO_ID &&
        process.env.UMI_APP_GISCUS_CATEGORY_ID && (
          <section style={{ marginTop: '32px' }}>
            <Giscus
              id="comments"
              repo={process.env.UMI_APP_GISCUS_REPO}
              repoId={process.env.UMI_APP_GISCUS_REPO_ID}
              categoryId={process.env.UMI_APP_GISCUS_CATEGORY_ID}
              mapping="pathname"
              strict="0"
              reactionsEnabled="1"
              emitMetadata="1"
              inputPosition="top"
              theme={color === 'dark' ? 'dark_protanopia' : 'light_protanopia'}
              lang={locale}
              loading="lazy"
              crossorigin="anonymous"
              async
            />
          </section>
        )}
      <ContentFooter />
    </>
  );
});
