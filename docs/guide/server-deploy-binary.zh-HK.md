```markdown
---
title: 二進制
order: 2
group: 
  title: 伺服器部署
  order: 2
toc: content
---

### 安裝說明

#### 前置系統要求

- Mysql 5.7+ (推薦使用8.0)
- Redis 6.0+ (推薦使用7.0)

#### 二進制安裝

1. 確定系統架構，並下載對應的二進制文件

下載地址：`https://github.com/perfect-panel/ppanel/releases`

示例說明：系統：Linux amd64，使用者：root，當前目錄：/root

- 下載二進制文件

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- 解壓二進制文件

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- 進入解壓後的目錄

```shell
cd ppanel-server-linux-amd64
```

- 賦予二進制文件執行權限

```shell
chmod +x ppanel
```

- 創建 systemd 服務文件

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL Server
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

- 重新加載 systemd 服務

```shell
systemctl daemon-reload
```

- 啟動服務

```shell
systemctl start ppanel
```

##### 其他說明

1. 安裝路徑：二進制文件將解壓到 /root/ppanel-server-linux-amd64 目錄下

2. systemd 服務：
   - 服務名稱：ppanel
   - 服務配置文件：/etc/systemd/system/ppanel.service
   - 服務啟動命令：systemctl start ppanel
   - 服務停止命令：systemctl stop ppanel
   - 服務重啟命令：systemctl restart ppanel
   - 服務狀態命令：systemctl status ppanel
   - 服務開機自啟：systemctl enable ppanel

3. 設置開機自啟可通過以下命令開機自啟

   ```shell
   systemctl enable ppanel
   ```

4. 服務日誌：服務日誌默認輸出到 /root/ppanel-server-linux-amd64/ppanel.log 文件中

5. 可通過 `journalctl -u ppanel -f` 查看服務日誌

6. 當配置文件為空或不存在的情況下，服務會使用默認配置啟動，配置文件路徑為：`./etc/ppanel.yaml`，
   請通過`http://伺服器地址:8080/init` 初始化系統配置

#### NGINX 反向代理配置

以下是反向代理配置示例，將 `ppanel` 服務代理到 `api.ppanel.dev` 域名下

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
        
       #設置 Nginx 緩存
       
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

如果使用 Cloudflare 代理服務，需要獲取到用戶真實訪問 IP。請在 Nginx 配置文件中 Http 段落中加入:

- 需要依賴：**ngx\_http\_realip\_module** 模塊，使用 nginx -V 命令查看 nginx 是否已經編譯該模塊，沒有的話需要自己編譯。

```nginx
    # cloudflare 開始
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare 結束
```
```

