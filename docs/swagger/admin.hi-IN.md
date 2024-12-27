---
title: प्रबंधन पृष्ठ
order: 4
nav:
  title: एपीआई
  order: 2
group:
  title: स्वैगर
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
  return <SwaggerUI url="/swagger/admin.json" />;
}
```

