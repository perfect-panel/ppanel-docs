```markdown
---
title: ไบนารี
order: 2
group: 
  title: การติดตั้งเซิร์ฟเวอร์
  order: 2
toc: content
---

### คำแนะนำการติดตั้ง

#### ข้อกำหนดระบบเบื้องต้น

- Mysql 5.7+ (แนะนำให้ใช้ 8.0)
- Redis 6.0+ (แนะนำให้ใช้ 7.0)

#### การติดตั้งไบนารี

1. ตรวจสอบสถาปัตยกรรมของระบบ และดาวน์โหลดไฟล์ไบนารีที่ตรงกัน

ที่อยู่ดาวน์โหลด: `https://github.com/perfect-panel/ppanel/releases`

ตัวอย่างคำอธิบาย: ระบบ: Linux amd64, ผู้ใช้: root, ไดเรกทอรีปัจจุบัน: /root

- ดาวน์โหลดไฟล์ไบนารี

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- แตกไฟล์ไบนารี

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- เข้าสู่ไดเรกทอรีที่แตกไฟล์แล้ว

```shell
cd ppanel-server-linux-amd64
```

- มอบสิทธิ์การใช้งานให้กับไฟล์ไบนารี

```shell
chmod +x ppanel
```

- สร้างไฟล์บริการ systemd

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

- โหลดบริการ systemd ใหม่

```shell
systemctl daemon-reload
```

- เริ่มบริการ

```shell
systemctl start ppanel
```

##### คำอธิบายเพิ่มเติม

1. เส้นทางการติดตั้ง: ไฟล์ไบนารีจะถูกแตกไปที่ไดเรกทอรี /root/ppanel-server-linux-amd64

2. บริการ systemd:
   - ชื่อบริการ: ppanel
   - ไฟล์กำหนดค่าบริการ: /etc/systemd/system/ppanel.service
   - คำสั่งเริ่มบริการ: systemctl start ppanel
   - คำสั่งหยุดบริการ: systemctl stop ppanel
   - คำสั่งรีสตาร์ทบริการ: systemctl restart ppanel
   - คำสั่งตรวจสอบสถานะบริการ: systemctl status ppanel
   - เปิดใช้งานบริการเมื่อบูต: systemctl enable ppanel

3. การตั้งค่าให้เปิดใช้งานเมื่อบูตสามารถทำได้โดยใช้คำสั่งต่อไปนี้

   ```shell
   systemctl enable ppanel
   ```

4. บันทึกบริการ: บันทึกบริการจะถูกส่งออกไปยังไฟล์ /root/ppanel-server-linux-amd64/ppanel.log โดยค่าเริ่มต้น

5. สามารถดูบันทึกบริการได้โดยใช้ `journalctl -u ppanel -f`

6. เมื่อไฟล์กำหนดค่าเป็นค่าว่างหรือไม่มีอยู่ บริการจะเริ่มต้นด้วยการกำหนดค่าเริ่มต้น โดยเส้นทางไฟล์กำหนดค่าคือ: `./etc/ppanel.yaml` 
   กรุณาใช้ `http://ที่อยู่เซิร์ฟเวอร์:8080/init` เพื่อเริ่มต้นการกำหนดค่าระบบ

#### การกำหนดค่าการตั้งค่า NGINX

ด้านล่างนี้เป็นตัวอย่างการกำหนดค่าการตั้งค่าแบบย้อนกลับ โดยการตั้งค่าให้บริการ `ppanel` ไปยังโดเมน `api.ppanel.dev`

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
        
       # ตั้งค่าแคช Nginx
       
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

หากใช้บริการ Cloudflare ต้องการรับ IP ที่แท้จริงของผู้ใช้ กรุณาเพิ่มในส่วน Http ของไฟล์กำหนดค่า Nginx:

- ต้องพึ่งพา: **ngx_http_realip_module** โมดูล, ใช้คำสั่ง nginx -V เพื่อตรวจสอบว่า Nginx ได้ถูกคอมไพล์โมดูลนี้หรือไม่ หากไม่มีก็ต้องคอมไพล์เอง

```nginx
    # cloudflare เริ่มต้น
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare สิ้นสุด
```
```

