---
title: 관리端-Vercel
order: 1
group: 
  title: 프론트엔드 배포
  order: 3
toc: content
---

### Vercel을 사용한 배포\*\*

아래 버튼을 클릭하여 빠르게 배포하세요:

[![Vercel에 배포하기](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**단계:**

1. [Vercel](https://vercel.com/)에 로그인하거나 등록합니다.
2. 배포 버튼을 클릭하여 저장소를 포크하고 `apps/admin`을 선택합니다.
3. 환경 변수를 구성합니다.
4. **Deploy**를 클릭하여 배포를 시작합니다.

---

### **3.3 PM2, Node.js 또는 Bun을 사용한 배포**

#### 코드 다운로드

공식 GitHub 저장소에서 코드를 가져옵니다:

```bash
# 최신 버전 코드 다운로드
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# 파일 압축 해제
tar -xzvf ppanel-admin-web.tar.gz

# 코드 디렉토리로 이동
cd ppanel-admin-web
```

#### 환경 변수 구성

`apps/admin/.env` 파일을 생성하고 필요한 환경 변수를 추가합니다 (위의 환경 변수 구성 참조).

#### PM2 구성

`ecosystem.config.js` 파일을 생성하고 다음 내용을 추가합니다:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### PM2로 서비스 시작

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

