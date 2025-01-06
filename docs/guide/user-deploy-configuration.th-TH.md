```markdown
---
title: ผู้ใช้-คำอธิบายการตั้งค่า
order: 4
group: 
  title: การปรับใช้ด้านหน้า
  order: 3
toc: content
---

# **คู่มือการปรับใช้ PPanel**

คู่มือนี้จะอธิบายรายละเอียดเกี่ยวกับการปรับใช้ PPanel ผู้ใช้ รวมถึง Docker, Vercel, PM2 และวิธีการปรับใช้ที่หลากหลายโดยใช้ Node.js หรือ Bun โดยตรง

---

## **1. การเตรียมสภาพแวดล้อม**

ก่อนการปรับใช้ โปรดตรวจสอบให้แน่ใจว่าได้ติดตั้งเครื่องมือดังต่อไปนี้แล้ว:

- **Node.js** (แนะนำให้ติดตั้งผ่าน NVM, เวอร์ชัน >= 22)
- **Bun** (รันไทม์ JavaScript ที่รวดเร็ว)
- **PM2** (เครื่องมือจัดการกระบวนการสำหรับการจัดการบริการอย่างมีประสิทธิภาพ)
- **Docker** (สำหรับการปรับใช้ในรูปแบบคอนเทนเนอร์)

---

## **2. การตั้งค่าตัวแปรสภาพแวดล้อม**

ก่อนการปรับใช้ คุณต้องตั้งค่าตัวแปรสภาพแวดล้อมดังต่อไปนี้:

```env
# การตั้งค่าแอปพลิเคชัน
NEXT_PUBLIC_DEFAULT_LANGUAGE=th-TH
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# ผู้ใช้เริ่มต้น
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---
```

