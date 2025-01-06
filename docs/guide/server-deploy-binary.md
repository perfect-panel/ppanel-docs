---
title: Binary
order: 2
group: 
  title: Server Deployment
  order: 2
toc: content
---

### Installation Instructions

#### Prerequisite System Requirements

- MySQL 5.7+ (recommended version: 8.0)
- Redis 6.0+ (recommended version: 7.0)

#### Binary Installation

1. Determine the system architecture and download the corresponding binary file.

Download link: `https://github.com/perfect-panel/ppanel/releases`

Example description: System: Linux amd64, User: root, Current directory: /root

- Download the binary file

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Extract the binary file

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Navigate to the extracted directory

```shell
cd ppanel-server-linux-amd64
```

- Grant execution permissions to the binary file

```shell
chmod +x ppanel
```

- Create a systemd service file

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

- Reload the systemd service

```shell
systemctl daemon-reload
```

- Start the service

```shell
systemctl start ppanel
```

##### Additional Information

1. Installation path: The binary file will be extracted to the /root/ppanel-server-linux-amd64 directory.

2. systemd service:
   - Service name: ppanel
   - Service configuration file: /etc/systemd/system/ppanel.service
   - Service start command: systemctl start ppanel
   - Service stop command: systemctl stop ppanel
   - Service restart command: systemctl restart ppanel
   - Service status command: systemctl status ppanel
   - Enable service on boot: systemctl enable ppanel

3. To set the service to start on boot, you can use the following command:

   ```shell
   systemctl enable ppanel
   ```

4. Service logs: By default, service logs are output to the /root/ppanel-server-linux-amd64/ppanel.log file.

5. You can view the service logs using `journalctl -u ppanel -f`.

6. If the configuration file is empty or does not exist, the service will start with default settings. The configuration file path is: `./etc/ppanel.yaml`. Please initialize the system configuration via `http://server_address:8080/init`.

#### NGINX Reverse Proxy Configuration

Below is an example of reverse proxy configuration, which proxies the `ppanel` service to the `api.ppanel.dev` domain.

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
        
       # Set Nginx Cache
       
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

If you are using Cloudflare's proxy service, you need to obtain the user's real IP address. Please add the following to the Http section of your Nginx configuration file:

- Dependency: **ngx_http_realip_module** module. Use the `nginx -V` command to check if Nginx has been compiled with this module; if not, you will need to compile it yourself.

```nginx
    # Cloudflare Start
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # Cloudflare END
```

