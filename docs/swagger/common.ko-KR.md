---
title: 공공
order: 2
nav:
  title: API
  order: 2
group:
  title: 스웨거
  order: 1
---

```tsx
/**
 * compact: true
 * inline: true
 */
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function Page() {
  return <SwaggerUI url="/swagger/common.json" />;
}
```

