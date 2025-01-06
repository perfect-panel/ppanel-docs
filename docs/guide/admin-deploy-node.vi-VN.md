---
title: Quản lý - Node
order: 3
group: 
  title: Triển khai Frontend
  order: 3
toc: content
---

### Sử dụng PM2, Node.js hoặc Bun để triển khai

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

#### Sử dụng Node.js hoặc Bun để khởi động dịch vụ

- **Khởi động bằng Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Khởi động bằng Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Xác minh triển khai**

### **4.1 Trạng thái dịch vụ PM2**

Chạy lệnh sau để kiểm tra:

```bash
pm2 list
```

### **4.2 Truy cập qua trình duyệt**

Truy cập `http://<Địa chỉ IP máy chủ của bạn>:3000` để xác minh tình trạng hoạt động của dịch vụ.

---

## **5. Quản lý dịch vụ**

### **Lệnh PM2**

- Dừng dịch vụ:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Khởi động lại dịch vụ:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Xóa dịch vụ:
  ```bash
  pm2 delete ppanel-admin-web
  ```

