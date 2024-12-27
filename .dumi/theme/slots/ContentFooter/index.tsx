import Giscus from '@giscus/react';
import ContentFooter from 'dumi/theme-default/slots/ContentFooter';
import { memo } from 'react';

export default memo(() => {
  console.log('process.env.GISCUS_REPO', process.env.GISCUS_REPO);
  return (
    <>
      {process.env.UMI_APP_GISCUS_REPO &&
        process.env.UMI_APP_GISCUS_REPO_ID &&
        process.env.UMI_APP_GISCUS_CATEGORY_ID && (
          <section style={{ marginTop: '32px' }}>
            <Giscus
              id="comments"
              repo={process.env.UMI_APP_GISCUS_REPO}
              repo-id={process.env.UMI_APP_GISCUS_REPO_ID}
              category-id={process.env.UMI_APP_GISCUS_CATEGORY_ID}
              mapping="pathname"
              strict="0"
              reactions-enabled="1"
              emit-metadata="1"
              input-position="top"
              theme="preferred_color_scheme"
              lang="zh-CN"
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
