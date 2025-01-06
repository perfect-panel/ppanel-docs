```markdown
---
title: باینری
order: 2
group: 
  title: استقرار سرور
  order: 2
toc: content
---

### دستورالعمل نصب

#### الزامات سیستم پیش‌نیاز

- Mysql 5.7+ (استفاده از 8.0 توصیه می‌شود)
- Redis 6.0+ (استفاده از 7.0 توصیه می‌شود)

#### نصب باینری

1. معماری سیستم را تعیین کرده و فایل باینری مربوطه را دانلود کنید.

آدرس دانلود: `https://github.com/perfect-panel/ppanel/releases`

توضیحات نمونه: سیستم: Linux amd64، کاربر: root، دایرکتوری فعلی: /root

- دانلود فایل باینری

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- استخراج فایل باینری

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- وارد دایرکتوری استخراج شده شوید

```shell
cd ppanel-server-linux-amd64
```

- مجوز اجرای فایل باینری را تعیین کنید

```shell
chmod +x ppanel
```

- ایجاد فایل سرویس systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=سرور PPANEL
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

- بارگذاری مجدد سرویس systemd

```shell
systemctl daemon-reload
```

- راه‌اندازی سرویس

```shell
systemctl start ppanel
```

##### توضیحات دیگر

1. مسیر نصب: فایل باینری در دایرکتوری /root/ppanel-server-linux-amd64 استخراج خواهد شد.

2. سرویس systemd:
   - نام سرویس: ppanel
   - فایل پیکربندی سرویس: /etc/systemd/system/ppanel.service
   - دستور راه‌اندازی سرویس: systemctl start ppanel
   - دستور توقف سرویس: systemctl stop ppanel
   - دستور راه‌اندازی مجدد سرویس: systemctl restart ppanel
   - دستور وضعیت سرویس: systemctl status ppanel
   - راه‌اندازی خودکار سرویس در هنگام بوت: systemctl enable ppanel

3. برای تنظیم راه‌اندازی خودکار در هنگام بوت می‌توانید از دستور زیر استفاده کنید:

   ```shell
   systemctl enable ppanel
   ```

4. لاگ سرویس: لاگ سرویس به طور پیش‌فرض در فایل /root/ppanel-server-linux-amd64/ppanel.log خروجی می‌شود.

5. می‌توانید با استفاده از `journalctl -u ppanel -f` لاگ سرویس را مشاهده کنید.

6. زمانی که فایل پیکربندی خالی یا وجود نداشته باشد، سرویس با پیکربندی پیش‌فرض راه‌اندازی می‌شود، مسیر فایل پیکربندی: `./etc/ppanel.yaml`،
   لطفاً از طریق `http://آدرس_سرور:8080/init` پیکربندی سیستم را اولیه‌سازی کنید.

#### پیکربندی پروکسی معکوس NGINX

در زیر نمونه‌ای از پیکربندی پروکسی معکوس آورده شده است که سرویس `ppanel` را به دامنه `api.ppanel.dev` پروکسی می‌کند.

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
        
       #تنظیم کش Nginx
       
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

اگر از خدمات پروکسی Cloudflare استفاده می‌کنید، باید آدرس IP واقعی کاربر را دریافت کنید. لطفاً در بخش Http فایل پیکربندی Nginx موارد زیر را اضافه کنید:

- نیاز به ماژول: **ngx_http_realip_module**، برای بررسی اینکه آیا Nginx این ماژول را کامپایل کرده است، از دستور nginx -V استفاده کنید. اگر این ماژول وجود نداشته باشد، باید خودتان آن را کامپایل کنید.

```nginx
    # شروع cloudflare
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # پایان cloudflare
```
```

