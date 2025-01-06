---
title: ผู้ใช้-Vercel
order: 7
group: 
  title: การปรับใช้ด้านหน้า
  order: 3
toc: content
---

### การปรับใช้ด้วย Vercel\*\*

คลิกปุ่มด้านล่างเพื่อปรับใช้ได้อย่างรวดเร็ว:

[![ปรับใช้บน Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20user%20Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**ขั้นตอน:**

1. ลงชื่อเข้าใช้หรือสมัครสมาชิกที่ [Vercel](https://vercel.com/)。
2. คลิกปุ่มปรับใช้, fork โครงการและเลือก `apps/user`。
3. ตั้งค่าตัวแปรสภาพแวดล้อม。
4. คลิก **Deploy** เพื่อเริ่มการปรับใช้。

---

### **3.3 การปรับใช้ด้วย PM2, Node.js หรือ Bun**

#### ดาวน์โหลดโค้ด

ดึงโค้ดจาก GitHub อย่างเป็นทางการ:

```bash
# ดาวน์โหลดโค้ดเวอร์ชันล่าสุด
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# แตกไฟล์
tar -xzvf ppanel-user-web.tar.gz

# เข้าสู่ไดเรกทอรีโค้ด
cd ppanel-user-web
```

#### ตั้งค่าตัวแปรสภาพแวดล้อม

สร้างไฟล์ `apps/user/.env` และเพิ่มตัวแปรสภาพแวดล้อมที่จำเป็น (อ้างอิงจากการตั้งค่าตัวแปรสภาพแวดล้อมข้างต้น)。

#### ตั้งค่า PM2

สร้างไฟล์ `ecosystem.config.js` โดยมีเนื้อหาดังนี้:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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

