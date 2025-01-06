```markdown
---
title: 이진수
order: 2
group: 
  title: 서버 배포
  order: 2
toc: content
---

### 설치 설명

#### 전제 시스템 요구 사항

- Mysql 5.7+ (8.0 사용 권장)
- Redis 6.0+ (7.0 사용 권장)

#### 이진수 설치

1. 시스템 아키텍처를 확인하고 해당 이진 파일을 다운로드합니다.

다운로드 주소: `https://github.com/perfect-panel/ppanel/releases`

예시 설명: 시스템: Linux amd64, 사용자: root, 현재 디렉토리: /root

- 이진 파일 다운로드

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- 이진 파일 압축 해제

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- 압축 해제된 디렉토리로 이동

```shell
cd ppanel-server-linux-amd64
```

- 이진 파일에 실행 권한 부여

```shell
chmod +x ppanel
```

- systemd 서비스 파일 생성

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL 서버
After=network.target

[Service]
ExecStart=/root/ppanel-server-linux-amd64/ppanel
Restart=always
User=root
WorkingDirectory=/root/ppanel-server-linux-amd64

[Install]
WantedBy=multi-user.target
EOF
```

- systemd 서비스 재로드

```shell
systemctl daemon-reload
```

- 서비스 시작

```shell
systemctl start ppanel
```

##### 기타 설명

1. 설치 경로: 이진 파일은 /root/ppanel-server-linux-amd64 디렉토리에 압축 해제됩니다.

2. systemd 서비스:
   - 서비스 이름: ppanel
   - 서비스 구성 파일: /etc/systemd/system/ppanel.service
   - 서비스 시작 명령: systemctl start ppanel
   - 서비스 중지 명령: systemctl stop ppanel
   - 서비스 재시작 명령: systemctl restart ppanel
   - 서비스 상태 명령: systemctl status ppanel
   - 서비스 부팅 시 자동 시작: systemctl enable ppanel

3. 부팅 시 자동 시작 설정은 다음 명령어로 가능합니다.

   ```shell
   systemctl enable ppanel
   ```

4. 서비스 로그: 서비스 로그는 기본적으로 /root/ppanel-server-linux-amd64/ppanel.log 파일에 출력됩니다.

5. `journalctl -u ppanel -f` 명령어로 서비스 로그를 확인할 수 있습니다.

6. 구성 파일이 비어 있거나 존재하지 않는 경우, 서비스는 기본 구성으로 시작되며, 구성 파일 경로는 `./etc/ppanel.yaml`입니다. 
   시스템 구성을 초기화하려면 `http://서버주소:8080/init`를 통해 초기화하십시오.

#### NGINX 역방향 프록시 구성

다음은 역방향 프록시 구성 예시로, `ppanel` 서비스를 `api.ppanel.dev` 도메인으로 프록시합니다.

```nginx
server {
    listen 80;
    server_name ppanel.dev;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_http_version 1.1;
        
        add_header X-Cache $upstream_cache_status;
        
       # Nginx 캐시 설정
       
        set $static_filezbsQiET1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_filezbsQiET1 1;
            expires 1m;
            }
        if ( $static_filezbsQiET1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
    }
}
```

Cloudflare 프록시 서비스를 사용하는 경우, 사용자의 실제 IP를 가져와야 합니다. Nginx 구성 파일의 Http 섹션에 다음을 추가하십시오:

- 필요 모듈: **ngx_http_realip_module** 모듈, `nginx -V` 명령어로 Nginx가 해당 모듈로 컴파일되었는지 확인하십시오. 없다면 직접 컴파일해야 합니다.

```nginx
    # cloudflare 시작
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare 종료
```
```

