---
title: Todos
order: 1
nav:
  title: API
  order: 2
group:
  title: Swagger
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
  return <SwaggerUI url="/swagger/ppanel.json" />;
}
```

