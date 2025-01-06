---
title: ผู้ใช้-Node
order: 6
group: 
  title: การปรับใช้ด้านหน้า
  order: 3
toc: content
---

### การปรับใช้ด้วย PM2, Node.js หรือ Bun

#### ดาวน์โหลดโค้ด

ดึงโค้ดจาก GitHub ที่เป็นทางการ:

```bash
# ดาวน์โหลดโค้ดเวอร์ชันล่าสุด
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# แตกไฟล์
tar -xzvf ppanel-user-web.tar.gz

# เข้าสู่ไดเรกทอรีโค้ด
cd ppanel-user-web
```

#### ตั้งค่าตัวแปรสภาพแวดล้อม

สร้างไฟล์ `apps/user/.env` และเพิ่มตัวแปรสภาพแวดล้อมที่จำเป็น (อ้างอิงจากการตั้งค่าตัวแปรสภาพแวดล้อมข้างต้น).

#### ตั้งค่า PM2

สร้างไฟล์ `ecosystem.config.js` โดยมีเนื้อหาดังนี้:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // สามารถเปลี่ยนเป็น node ได้
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
  node apps/user/server.js
  ```

- **เริ่มด้วย Bun**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. ตรวจสอบการปรับใช้**

### **4.1 สถานะบริการ PM2**

รันคำสั่งต่อไปนี้เพื่อตรวจสอบ:

```bash
pm2 list
```

### **4.2 การเข้าถึงผ่านเบราว์เซอร์**

เข้าถึง `http://<IP ของเซิร์ฟเวอร์ของคุณ>:3000` เพื่อตรวจสอบสถานะการทำงานของบริการ.

---

## **5. การจัดการบริการ**

### **คำสั่ง PM2**

- หยุดบริการ:

  ```bash
  pm2 stop ppanel-user-web
  ```

- รีสตาร์ทบริการ:

  ```bash
  pm2 restart ppanel-user-web
  ```

- ลบบริการ:

  ```bash
  pm2 delete ppanel-user-web
  ```

