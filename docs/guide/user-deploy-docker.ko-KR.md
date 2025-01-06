---
title: 사용자端-Docker
order: 5
group: 
  title: 프론트엔드 배포
  order: 3
toc: content
---

### Docker를 사용한 배포

#### Docker 설치

다음 명령어를 실행하여 Docker를 설치합니다:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker를 사용하여 서비스 시작

다음 명령어를 실행하여 컨테이너를 시작합니다:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=ko-KR \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Docker Compose를 사용한 배포

`docker-compose.yml` 파일을 생성하고, 내용은 다음과 같습니다:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ko-KR
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

서비스 시작:

```bash
docker compose up -d
```

---

