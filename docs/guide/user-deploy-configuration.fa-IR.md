```markdown
---
title: کاربر-پایان-راهنمای پیکربندی
order: 4
group: 
  title: استقرار فرانت‌اند
  order: 3
toc: content
---

# **راهنمای استقرار PPanel**

این راهنما به طور مفصل نحوه استقرار پایانه کاربر PPanel را شامل Docker، Vercel، PM2 و همچنین چندین روش استقرار مستقیم با استفاده از Node.js یا Bun توضیح می‌دهد.

---

## **1. آماده‌سازی محیط**

قبل از استقرار، لطفاً اطمینان حاصل کنید که ابزارهای زیر نصب شده‌اند:

- **Node.js** (توصیه می‌شود از طریق NVM نصب شود، نسخه >= 22)
- **Bun** (زمان‌سنج سریع جاوا اسکریپت)
- **PM2** (ابزار مدیریت فرآیند برای مدیریت کارآمد خدمات)
- **Docker** (برای استقرار کانتینری)

---

## **2. پیکربندی متغیرهای محیطی**

قبل از استقرار، شما نیاز به پیکربندی متغیرهای محیطی زیر دارید:

```env
# پیکربندی برنامه
NEXT_PUBLIC_DEFAULT_LANGUAGE=fa-IR
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# کاربر پیش‌فرض
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---
```

