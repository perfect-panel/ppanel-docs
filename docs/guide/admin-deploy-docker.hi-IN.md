---
title: प्रबंधन पैनल - Docker
order: 2
group: 
  title: फ्रंटेंड तैनाती
  order: 3
toc: content
---

### Docker का उपयोग करके तैनाती\*\*

#### Docker स्थापित करें

Docker स्थापित करने के लिए निम्नलिखित कमांड चलाएँ:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker का उपयोग करके सेवा प्रारंभ करें

कंटेनर प्रारंभ करने के लिए निम्नलिखित कमांड चलाएँ:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=en-US \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Docker Compose का उपयोग करके तैनाती

एक `docker-compose.yml` फ़ाइल बनाएं, जिसमें निम्नलिखित सामग्री हो:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: en-US
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

सेवा प्रारंभ करें:

```bash
docker compose up -d
```

---

