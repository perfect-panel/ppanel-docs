```markdown
---
title: 구성 설명
order: 0
group: 
  title: 서버 배포
  order: 2
toc: content
---

## 실행 환경 요구 사항

| 구성 요소       | 요구 사항                              |
| ------------ | ----------------------------------- |
| 서버 구성        | 최소: 1 코어 CPU, 2GB 메모리; 추천: 2 코어 CPU, 4GB 메모리 |
| MySQL        | 5.7 이상 (추천: MySQL 8)                 |
| Redis        | 6 이상                               |
| NGINX/Apache | 임의 버전                              |

### 구성 파일 설명

#### 1. 구성 파일 경로

구성 파일의 기본 경로는: `./etc/ppanel.yaml`이며, 시작 매개변수 `--config`를 통해 구성 파일 경로를 지정할 수 있습니다.

#### 2. 구성 파일 형식

- 구성 파일은 YAML 형식이며, 주석을 지원하고, 이름은 xxx.yaml입니다.

```yaml
# 구성 파일 예시
Host:               # 서비스 리스닝 주소, 기본: 0.0.0.0
Port:               # 서비스 리스닝 포트, 기본: 8080
Debug:              # 디버그 모드 활성화 여부, 활성화 시 백엔드 로그 기능 사용 불가, 기본: false
JwtAuth:            # JWT 인증 구성
  AccessSecret:     # 액세스 토큰 비밀키, 기본: 랜덤 생성
  AccessExpire:     # 액세스 토큰 만료 시간, 단위 초, 기본: 604800
Logger:             # 로그 구성
  FilePath:         # 로그 파일 경로, 기본: ./ppanel.log
  MaxSize:          # 로그 파일 최대 크기, 단위 MB, 기본: 50
  MaxBackup:        # 로그 파일 최대 백업 수, 기본: 3
  MaxAge:           # 로그 파일 최대 보존 시간, 단위 일, 기본: 30
  Compress:         # 로그 파일 압축 여부, 기본: true
  Level:            # 로그 수준, 기본: info, 선택: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL 주소, 필수
  Username:         # MySQL 사용자 이름, 필수
  Password:         # MySQL 비밀번호, 필수
  Dbname:           # MySQL 데이터베이스 이름, 필수
  Config:           # MySQL 구성 기본값 charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # 최대 유휴 연결 수, 기본: 10
  MaxOpenConns:     # 최대 열린 연결 수, 기본: 100
  LogMode:          # 로그 수준, 기본: info, 선택: debug, error, warn, info
  LogZap:           # SQL 로그 기록에 zap 사용 여부, 기본: true
  SlowThreshold:    # 느린 쿼리 임계값, 단위 밀리초, 기본: 1000
Redis:
  Host:             # Redis 주소, 기본: localhost:6379
  Pass:             # Redis 비밀번호, 기본: ""
  DB:               # Redis 데이터베이스, 기본: 0

Administer:
  Email:            # 백엔드 로그인 이메일, 기본: admin@ppanel.dev
  Password:         # 백엔드 로그인 비밀번호, 기본: password

```

#### 3. 구성 파일 설명

- `Host`: 서비스 리스닝 주소, 기본: **0.0.0.0**
- `Port`: 서비스 리스닝 포트, 기본: **8080**
- `Debug`: 디버그 모드 활성화 여부, 활성화 시 백엔드 로그 기능 사용 불가, 기본: **false**
- `JwtAuth`: JWT 인증 구성
  - `AccessSecret`: 액세스 토큰 비밀키, 기본: **랜덤 생성**
  - `AccessExpire`: 액세스 토큰 만료 시간, 단위 초, 기본: **604800**
- `Logger`: 로그 구성
- `FilePath`: 로그 파일 경로, 기본: **./ppanel.log**
- `MaxSize`: 로그 파일 최대 크기, 단위 MB, 기본: **50**
- `MaxBackup`: 로그 파일 최대 백업 수, 기본: **3**
- `MaxAge`: 로그 파일 최대 보존 시간, 단위 일, 기본: **30**
- `Compress`: 로그 파일 압축 여부, 기본: **true**
- `Level`: 로그 수준, 기본: **info**, 선택: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL 구성
  - `Addr`: MySQL 주소, 필수
  - `Username`: MySQL 사용자 이름, 필수
  - `Password`: MySQL 비밀번호, 필수
  - `Dbname`: MySQL 데이터베이스 이름, 필수
  - `Config`: MySQL 구성 기본값 charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: 최대 유휴 연결 수, 기본: **10**
  - `MaxOpenConns`: 최대 열린 연결 수, 기본: **100**
  - `LogMode`: 로그 수준, 기본: **info**, 선택: **debug, error, warn, info**
  - `LogZap`: SQL 로그 기록에 zap 사용 여부, 기본: **true**
  - `SlowThreshold`: 느린 쿼리 임계값, 단위 밀리초, 기본: **1000**
- `Redis`: Redis 구성
- `Host`: Redis 주소, 기본: **localhost:6379**
- `Pass`: Redis 비밀번호, 기본: **""**
- `DB`: Redis 데이터베이스, 기본: **0**
- `Administer`: 백엔드 로그인 구성
  - `Email`: 백엔드 로그인 이메일, 기본: **<admin@ppanel.dev>**
  - `Password`: 백엔드 로그인 비밀번호, 기본: **password**

#### 4. 환경 변수

지원되는 환경 변수는 다음과 같습니다:

| 환경 변수          | 구성 항목     | 예시                                          |
| ------------- | ------- | :------------------------------------------ |
| PPANEL\_DB    | MySQL 구성 | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS | Redis 구성 | redis\://localhost:6379"                    |
```

