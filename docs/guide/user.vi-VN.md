---
title: Người dùng
order: 4
nav:
  title: Hướng dẫn
  order: 1
group:
  title: Triển khai
  order: 1
toc: content
---

# **Hướng dẫn triển khai PPanel cho người dùng**

Hướng dẫn này chi tiết cách triển khai PPanel cho người dùng, bao gồm nhiều phương thức triển khai như Docker, Vercel, PM2, và sử dụng trực tiếp Node.js hoặc Bun.

---

## **1. Chuẩn bị môi trường**

Trước khi triển khai, hãy đảm bảo rằng các công cụ sau đã được cài đặt:

- **Node.js** (khuyên dùng cài đặt qua NVM, phiên bản >= 22)
- **Bun** (môi trường chạy JavaScript nhanh)
- **PM2** (công cụ quản lý tiến trình, dùng để quản lý dịch vụ hiệu quả)
- **Docker** (dùng để triển khai dưới dạng container)

---

## **2. Cấu hình biến môi trường**

Trước khi triển khai, bạn cần cấu hình các biến môi trường sau:

```env
# Cấu hình ứng dụng
NEXT_PUBLIC_DEFAULT_LANGUAGE=vi-VN
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Thông tin liên hệ
NEXT_PUBLIC_EMAIL=support@example.com

# Liên kết cộng đồng và mạng xã hội
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Người dùng mặc định
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Tùy chọn triển khai**

### **3.1 Triển khai bằng Docker**

#### Cài đặt Docker

Chạy lệnh sau để cài đặt Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Khởi động dịch vụ bằng Docker

Chạy lệnh sau để khởi động container:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=vi-VN \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Triển khai bằng Docker Compose

Tạo một tệp `docker-compose.yml` với nội dung như sau:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: vi-VN
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Khởi động dịch vụ:

```bash
docker compose up -d
```

---

### **3.2 Triển khai bằng Vercel**

Nhấn nút dưới đây để triển khai nhanh chóng:
[![Triển khai bằng Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20là%20một%20công%20cụ%20proxy%20mở%20nguồn%20thuần%20tuý%2C%20chuyên%20nghiệp%2C%20và%20hoàn%20hảo%2C%20được%20thiết%20kế%20để%20trở%20thành%20lựa%20chọn%20lý%20tưởng%20của%20bạn%20cho%20việc%20học%20tập%20và%20sử%20dụng%20thực%20tiễn&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Các bước:**

1. Đăng nhập hoặc đăng ký [Vercel](https://vercel.com/) .
2. Nhấn nút triển khai, fork kho lưu trữ và chọn `apps/user` .
3. Cấu hình biến môi trường.
4. Nhấn **Deploy** để bắt đầu triển khai.

---

### **3.3 Triển khai bằng PM2, Node.js hoặc Bun**

#### Tải mã nguồn

Lấy mã nguồn từ kho GitHub chính thức:

```bash
# Tải mã nguồn phiên bản mới nhất
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Giải nén tệp
tar -xzvf ppanel-user-web.tar.gz

# Vào thư mục mã nguồn
cd ppanel-user-web
```

#### Cấu hình biến môi trường

Tạo tệp `apps/user/.env` và thêm các biến môi trường cần thiết (tham khảo phần cấu hình biến môi trường ở trên).

#### Cấu hình PM2

Tạo tệp `ecosystem.config.js` với nội dung như sau:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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

#### Khởi động dịch vụ bằng PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Khởi động dịch vụ bằng Node.js hoặc Bun

- **Khởi động bằng Node.js**:
  ```bash
  node apps/user/server.js
  ```
- **Khởi động bằng Bun**:
  ```bash
  bun apps/user/server.js
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
  pm2 stop ppanel-user-web
  ```
- Khởi động lại dịch vụ:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Xóa dịch vụ:
  ```bash
  pm2 delete ppanel-user-web
  ```
