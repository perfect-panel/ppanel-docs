```markdown
---
title: 도커
order: 1
group: 
  title: 서버 배포
  order: 2
toc: content
---

## 도커 설치

다음 명령어를 실행하여 도커를 빠르게 설치하세요:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## 빠른 시작

### 웹 인터페이스를 통한 초기화

PPanel은 웹 기반 초기화를 지원하여 수동 구성 과정을 간소화합니다.

### 초기화 단계

1. **필수 구성 파일 생성**: 먼저 수동으로 `/app/etc/ppanel.yaml` 파일을 생성하고 구성하여 후속 구성을 준비합니다.

2. **도커 컨테이너 실행**:

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **초기화 페이지 접근**: 브라우저에서 `http://서버IP:8080/init`에 접속합니다.

4. **구성 완료**: 안내에 따라 관리자 계정 설정, MySQL 데이터베이스 및 Redis 서버 구성을 진행합니다.

5. **초기화 버튼 클릭**: 구성이 완료되면 "초기화" 버튼을 클릭하여 애플리케이션이 자동으로 구성을 저장하고 재시작합니다.

   > **주의**: PPanel은 기본적으로 포트 **8080**을 사용하므로, 이 포트에 접근할 수 있는지 확인하고 필요시 방화벽 설정을 조정하세요.

## 도커를 이용한 배포

PPanel은 기본적으로 포트 **8080**을 사용하므로, 이 포트에 접근할 수 있는지 확인하고 필요시 방화벽 설정을 조정하세요.

웹 초기화를 사용하지 않는 경우, 기본 관리자 계정으로 로그인할 수 있습니다:

- **사용자 이름**: `admin@ppanel.dev`
- **비밀번호**: `password`

> **주의**: 첫 로그인 후에는 기본 비밀번호를 즉시 변경하여 보안을 강화하세요.

### 필수 구성 파일 생성

도커 배포를 시작하기 전에, 먼저 수동으로 `/app/etc/ppanel.yaml`을 생성하고 구성하여 시스템이 정상적으로 작동하도록 합니다. 자세한 구성 항목 예시는 문서의 [구성 항목 예시](#구성항목예시) 부분을 참조하세요.

### 도커 컨테이너 실행

다음 명령어를 실행하여 컨테이너를 시작합니다:

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## 도커 컴포즈를 이용한 배포

PPanel은 기본적으로 포트 **8080**을 사용하므로, 이 포트에 접근할 수 있는지 확인하고 필요시 방화벽 설정을 조정하세요.

### 필수 구성 파일 생성

도커 컴포즈 배포를 시작하기 전에, 먼저 수동으로 `/app/etc/ppanel.yaml`을 생성하고 구성하여 시스템이 정상적으로 작동하도록 합니다. 자세한 구성 항목 예시는 문서의 [구성 항목 예시](#구성항목예시) 부분을 참조하세요.

### 도커 컴포즈 구성 파일 생성

`docker-compose.yml` 파일을 생성합니다:

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### 서비스 시작

다음 명령어를 실행하여 서비스를 시작합니다:

```sh
docker compose up -d
```

## 중요 사항

- **보안**: 기본 비밀번호와 키를 반드시 변경하여 애플리케이션의 보안을 확보하세요.
- **포트 구성**: 필요한 포트가 열려 있는지 확인하여 네트워크 접근 문제를 피하세요.
- **데이터 지속성**: 컨테이너를 실행할 때 데이터 볼륨을 마운트하여 데이터 지속성을 확보하는 것이 좋습니다.

## 구성 항목 예시

다음은 `ppanel.yaml`의 구성 항목 예시입니다:

```yaml
Host: 0.0.0.0 # 수신 IP
Port: 8080 # 실행 포트
Debug: true # 디버그 모드 활성화 여부
JwtAuth:
  AccessSecret: your-secret-key # 토큰 비밀키 (수정 필요)
  AccessExpire: 604800 # 토큰 유효 기간 (초)
Logger:
  FilePath: ./ppanel.log # 로그 파일 경로
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # 로그 수준: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # 데이터베이스 주소
  Dbname: vpnboard # 데이터베이스 이름
  Username: root # 데이터베이스 사용자 이름
  Password: your-password # 데이터베이스 비밀번호 (수정 필요)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis 비밀번호 (있을 경우)
  DB: 0

Administer:
  Password: password # 관리자 비밀번호 (변경 필요)
  Email: admin@ppanel.dev # 관리자 이메일 주소
```

> **주의**: 구성 파일을 수정한 후에는 변경 사항을 적용하기 위해 도커 컨테이너를 재시작하세요.

## 지원 받기

문제가 발생하면 공식 문서를 참조하거나 지원 팀에 연락하여 도움을 받으세요.
```

