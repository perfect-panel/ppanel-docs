```markdown
---
title: Nhị phân
order: 2
group: 
  title: Triển khai máy chủ
  order: 2
toc: content
---

### Hướng dẫn cài đặt

#### Yêu cầu hệ thống trước

- Mysql 5.7+ (Khuyến nghị sử dụng 8.0)
- Redis 6.0+ (Khuyến nghị sử dụng 7.0)

#### Cài đặt nhị phân

1. Xác định kiến trúc hệ thống và tải xuống tệp nhị phân tương ứng

Địa chỉ tải xuống: `https://github.com/perfect-panel/ppanel/releases`

Mô tả ví dụ: Hệ thống: Linux amd64, Người dùng: root, Thư mục hiện tại: /root

- Tải xuống tệp nhị phân

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Giải nén tệp nhị phân

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Vào thư mục đã giải nén

```shell
cd ppanel-server-linux-amd64
```

- Cấp quyền thực thi cho tệp nhị phân

```shell
chmod +x ppanel
```

- Tạo tệp dịch vụ systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=Máy chủ PPANEL
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

- Tải lại dịch vụ systemd

```shell
systemctl daemon-reload
```

- Khởi động dịch vụ

```shell
systemctl start ppanel
```

##### Các lưu ý khác

1. Đường dẫn cài đặt: Tệp nhị phân sẽ được giải nén vào thư mục /root/ppanel-server-linux-amd64

2. Dịch vụ systemd:
   - Tên dịch vụ: ppanel
   - Tệp cấu hình dịch vụ: /etc/systemd/system/ppanel.service
   - Lệnh khởi động dịch vụ: systemctl start ppanel
   - Lệnh dừng dịch vụ: systemctl stop ppanel
   - Lệnh khởi động lại dịch vụ: systemctl restart ppanel
   - Lệnh kiểm tra trạng thái dịch vụ: systemctl status ppanel
   - Dịch vụ tự khởi động khi khởi động máy: systemctl enable ppanel

3. Để thiết lập tự khởi động, có thể sử dụng lệnh sau

   ```shell
   systemctl enable ppanel
   ```

4. Nhật ký dịch vụ: Nhật ký dịch vụ mặc định được xuất ra tệp /root/ppanel-server-linux-amd64/ppanel.log

5. Có thể xem nhật ký dịch vụ bằng lệnh `journalctl -u ppanel -f`

6. Khi tệp cấu hình trống hoặc không tồn tại, dịch vụ sẽ sử dụng cấu hình mặc định để khởi động, đường dẫn tệp cấu hình là: `./etc/ppanel.yaml`,
   vui lòng truy cập `http://địa_chỉ_máy_chủ:8080/init` để khởi tạo cấu hình hệ thống

#### Cấu hình proxy ngược NGINX

Dưới đây là ví dụ cấu hình proxy ngược, chuyển tiếp dịch vụ `ppanel` đến tên miền `api.ppanel.dev`

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
        
       #Thiết lập bộ nhớ cache Nginx
       
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

Nếu sử dụng dịch vụ proxy của Cloudflare, cần lấy địa chỉ IP thực của người dùng. Vui lòng thêm vào đoạn Http trong tệp cấu hình Nginx:

- Cần phụ thuộc vào: **ngx_http_realip_module** module, sử dụng lệnh nginx -V để kiểm tra xem nginx đã biên dịch module này chưa, nếu chưa thì cần tự biên dịch.

```nginx
    # cloudflare Bắt đầu
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare KẾT THÚC
```
```

