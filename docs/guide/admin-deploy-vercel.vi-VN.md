---
title: Quản lý - Vercel
order: 1
group: 
  title: Triển khai Frontend
  order: 3
toc: content
---

### Sử dụng Vercel để triển khai\*\*

Nhấn vào nút dưới đây để triển khai nhanh chóng:

[![Triển khai trên Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20là%20một%20công%20cụ%20proxy%20mở%20nguồn%20thuần%20khiết%2C%20chuyên%20nghiệp%2C%20và%20hoàn%20hảo%2C%20được%20thiết%20kế%20để%20trở%20thành%20lựa%20chọn%20lý%20tưởng%20của%20bạn%20cho%20việc%20học%20tập%20và%20sử%20dụng%20thực%20tiễn\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Các bước:**

1. Đăng nhập hoặc đăng ký [Vercel](https://vercel.com/) .
2. Nhấn nút triển khai, fork kho lưu trữ và chọn `apps/admin` .
3. Cấu hình biến môi trường.
4. Nhấn **Deploy** để bắt đầu triển khai.

---

### **3.3 Sử dụng PM2, Node.js hoặc Bun để triển khai**

#### Tải mã nguồn

Lấy mã nguồn từ kho GitHub chính thức:

```bash
# Tải phiên bản mã nguồn mới nhất
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Giải nén tệp
tar -xzvf ppanel-admin-web.tar.gz

# Vào thư mục mã nguồn
cd ppanel-admin-web
```

#### Cấu hình biến môi trường

Tạo tệp `apps/admin/.env` và thêm các biến môi trường cần thiết (tham khảo cấu hình biến môi trường ở trên).

#### Cấu hình PM2

Tạo tệp `ecosystem.config.js` với nội dung như sau:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // có thể thay bằng node
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

#### Sử dụng PM2 để khởi động dịch vụ

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

