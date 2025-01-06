---
title: 관리端-Node
order: 3
group: 
  title: 프론트엔드 배포
  order: 3
toc: content
---

### PM2, Node.js 또는 Bun을 사용한 배포

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

#### 환경 변수 설정

`apps/admin/.env` 파일을 생성하고 필요한 환경 변수를 추가합니다 (위의 환경 변수 설정을 참조).

#### PM2 설정

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

#### Node.js 또는 Bun으로 서비스 시작

- **Node.js 시작**:
  ```bash
  node apps/admin/server.js
  ```
- **Bun 시작**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. 배포 확인**

### **4.1 PM2 서비스 상태**

다음 명령어를 실행하여 확인합니다:

```bash
pm2 list
```

### **4.2 브라우저 접근**

`http://<서버 IP>:3000`에 접속하여 서비스가 정상적으로 실행되고 있는지 확인합니다.

---

## **5. 서비스 관리**

### **PM2 명령어**

- 서비스 중지:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- 서비스 재시작:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- 서비스 삭제:
  ```bash
  pm2 delete ppanel-admin-web
  ```

