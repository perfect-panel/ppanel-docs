---
title: 사용자端
order: 4
nav:
  title: 가이드
  order: 1
group:
  title: 배포
  order: 1
toc: content
---

# **PPanel 사용자端 배포 가이드**

이 가이드는 PPanel 사용자端을 배포하는 방법을 자세히 설명합니다. Docker, Vercel, PM2 및 Node.js 또는 Bun을 직접 사용하는 다양한 배포 방법이 포함되어 있습니다.

---

## **1. 환경 준비**

배포 전에 다음 도구가 설치되어 있는지 확인하십시오:

- **Node.js** (NVM을 통해 설치하는 것이 권장되며, 버전 >= 22)
- **Bun** (빠른 JavaScript 런타임)
- **PM2** (효율적인 서비스 관리를 위한 프로세스 관리 도구)
- **Docker** (컨테이너화 배포를 위한 도구)

---

## **2. 환경 변수 설정**

배포 전에 다음 환경 변수를 설정해야 합니다:

```env
# 애플리케이션 설정
NEXT_PUBLIC_DEFAULT_LANGUAGE=ko-KR
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 연락처 정보
NEXT_PUBLIC_EMAIL=support@example.com

# 커뮤니티 및 소셜 미디어 링크
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# 기본 사용자
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. 배포 옵션**

### **3.1 Docker를 사용한 배포**

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
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Docker Compose를 사용한 배포

`docker-compose.yml` 파일을 생성하고 다음 내용을 추가합니다:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ko-KR
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

서비스를 시작합니다:

```bash
docker compose up -d
```

---

### **3.2 Vercel을 사용한 배포**

다음 버튼을 클릭하여 빠르게 배포하세요:
[![Vercel로 배포하기](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**단계:**

1. [Vercel](https://vercel.com/)에 로그인하거나 등록합니다.
2. 배포 버튼을 클릭하여 저장소를 포크하고 `apps/user`를 선택합니다.
3. 환경 변수를 설정합니다.
4. **Deploy**를 클릭하여 배포를 시작합니다.

---

### **3.3 PM2, Node.js 또는 Bun을 사용한 배포**

#### 코드 다운로드

공식 GitHub 저장소에서 코드를 가져옵니다:

```bash
# 최신 버전 코드 다운로드
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# 파일 압축 해제
tar -xzvf ppanel-user-web.tar.gz

# 코드 디렉토리로 이동
cd ppanel-user-web
```

#### 환경 변수 설정

`apps/user/.env` 파일을 생성하고 필요한 환경 변수를 추가합니다 (위의 환경 변수 설정을 참조).

#### PM2 설정

`ecosystem.config.js` 파일을 생성하고 다음 내용을 추가합니다:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // node로 변경 가능
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
      },
    },
  ],
};
```

#### PM2를 사용하여 서비스 시작

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Node.js 또는 Bun을 사용하여 서비스 시작

- **Node.js 시작**:
  ```bash
  node apps/user/server.js
  ```
- **Bun 시작**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. 배포 확인**

### **4.1 PM2 서비스 상태 확인**

다음 명령어를 실행하여 확인합니다:

```bash
pm2 list
```

### **4.2 브라우저에서 접근**

`http://<서버 IP>:3000`에 접속하여 서비스가 정상적으로 작동하는지 확인합니다.

---

## **5. 서비스 관리**

### **PM2 명령어**

- 서비스 중지:
  ```bash
  pm2 stop ppanel-user-web
  ```
- 서비스 재시작:
  ```bash
  pm2 restart ppanel-user-web
  ```
- 서비스 삭제:
  ```bash
  pm2 delete ppanel-user-web
  ```
