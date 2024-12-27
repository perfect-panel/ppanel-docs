---
title: แผงการจัดการ
order: 3
nav:
  title: คู่มือ
  order: 1
group:
  title: การติดตั้ง
  order: 1
toc: content
---

# **คู่มือการติดตั้งแผงการจัดการ PPanel**

คู่มือนี้จะอธิบายรายละเอียดเกี่ยวกับวิธีการติดตั้งแผงการจัดการ PPanel รวมถึง Docker, Vercel, PM2 และวิธีการติดตั้งโดยตรงด้วย Node.js หรือ Bun หลายวิธี

---

## **1. การเตรียมสภาพแวดล้อม**

ก่อนการติดตั้ง กรุณาให้แน่ใจว่าได้ติดตั้งเครื่องมือดังต่อไปนี้แล้ว:

- **Node.js** (แนะนำให้ติดตั้งผ่าน NVM, เวอร์ชัน >= 22)
- **Bun** (รันไทม์ JavaScript ที่รวดเร็ว)
- **PM2** (เครื่องมือจัดการกระบวนการสำหรับการจัดการบริการอย่างมีประสิทธิภาพ)
- **Docker** (สำหรับการติดตั้งในรูปแบบคอนเทนเนอร์)

---

## **2. การกำหนดค่าตัวแปรสภาพแวดล้อม**

ก่อนการติดตั้ง คุณต้องกำหนดค่าตัวแปรสภาพแวดล้อมดังต่อไปนี้:

```env
# การกำหนดค่าของแอปพลิเคชัน
NEXT_PUBLIC_DEFAULT_LANGUAGE=th-TH
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# ผู้ใช้เริ่มต้น
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. ตัวเลือกการติดตั้ง**

### **3.1 การติดตั้งด้วย Docker**

#### ติดตั้ง Docker

รันคำสั่งต่อไปนี้เพื่อติดตั้ง Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### เริ่มบริการด้วย Docker

รันคำสั่งต่อไปนี้เพื่อเริ่มคอนเทนเนอร์:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=th-TH \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### การติดตั้งด้วย Docker Compose

สร้างไฟล์ `docker-compose.yml` โดยมีเนื้อหาดังนี้:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: th-TH
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

เริ่มบริการ:

```bash
docker compose up -d
```

---

### **3.2 การติดตั้งด้วย Vercel**

คลิกปุ่มด้านล่างเพื่อทำการติดตั้งอย่างรวดเร็ว:

[![ติดตั้งบน Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**ขั้นตอน:**

1. ลงชื่อเข้าใช้หรือสมัครสมาชิกที่ [Vercel](https://vercel.com/)
2. คลิกปุ่มติดตั้ง, fork โครงการและเลือก `apps/admin`
3. กำหนดค่าตัวแปรสภาพแวดล้อม
4. คลิก **Deploy** เพื่อเริ่มการติดตั้ง

---

### **3.3 การติดตั้งด้วย PM2, Node.js หรือ Bun**

#### ดาวน์โหลดโค้ด

ดึงโค้ดจาก GitHub อย่างเป็นทางการ:

```bash
# ดาวน์โหลดโค้ดเวอร์ชันล่าสุด
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# แตกไฟล์
tar -xzvf ppanel-admin-web.tar.gz

# เข้าสู่ไดเรกทอรีโค้ด
cd ppanel-admin-web
```

#### กำหนดค่าตัวแปรสภาพแวดล้อม

สร้างไฟล์ `apps/admin/.env` และเพิ่มตัวแปรสภาพแวดล้อมที่จำเป็น (อ้างอิงจากการกำหนดค่าตัวแปรสภาพแวดล้อมข้างต้น)

#### กำหนดค่า PM2

สร้างไฟล์ `ecosystem.config.js` โดยมีเนื้อหาดังนี้:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // สามารถเปลี่ยนเป็น node
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

#### เริ่มบริการด้วย PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### เริ่มบริการด้วย Node.js หรือ Bun

- **เริ่มด้วย Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **เริ่มด้วย Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. การตรวจสอบการติดตั้ง**

### **4.1 สถานะบริการ PM2**

รันคำสั่งต่อไปนี้เพื่อตรวจสอบ:

```bash
pm2 list
```

### **4.2 การเข้าถึงผ่านเบราว์เซอร์**

เข้าถึง `http://<IP ของเซิร์ฟเวอร์ของคุณ>:3000` เพื่อตรวจสอบสถานะการทำงานของบริการ

---

## **5. การจัดการบริการ**

### **คำสั่ง PM2**

- หยุดบริการ:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- รีสตาร์ทบริการ:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- ลบบริการ:
  ```bash
  pm2 delete ppanel-admin-web
  ```
