---
title: Hướng dẫn cấu hình quản lý
order: 0
group: 
  title: Triển khai phía trước
  order: 3
toc: content
---

# **Hướng dẫn triển khai PPanel quản lý**

Hướng dẫn này chi tiết cách triển khai PPanel quản lý, bao gồm nhiều phương thức triển khai như Docker, Vercel, PM2, cũng như sử dụng trực tiếp Node.js hoặc Bun.

---

## **1. Chuẩn bị môi trường**

Trước khi triển khai, hãy đảm bảo rằng các công cụ sau đã được cài đặt:

- **Node.js** (khuyến nghị cài đặt qua NVM, phiên bản >= 22)
- **Bun** (môi trường thực thi JavaScript nhanh)
- **PM2** (công cụ quản lý tiến trình, dùng để quản lý dịch vụ hiệu quả)
- **Docker** (dùng để triển khai dưới dạng container)

---

## **2. Cấu hình biến môi trường**

Trước khi triển khai, bạn cần cấu hình các biến môi trường sau:

```env
# Cấu hình ứng dụng
NEXT_PUBLIC_DEFAULT_LANGUAGE=vi-VN
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Người dùng mặc định
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

