```markdown
---
title: Docker
order: 1
group: 
  title: Triển khai máy chủ
  order: 2
toc: content
---

## Cài đặt Docker

Chạy lệnh sau để cài đặt Docker nhanh chóng:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Bắt đầu nhanh

### Khởi tạo qua giao diện Web

PPanel hỗ trợ khởi tạo dựa trên Web, giúp đơn giản hóa quá trình cấu hình thủ công.

### Các bước khởi tạo

1. **Tạo tệp cấu hình cần thiết**: Đầu tiên, hãy tạo và cấu hình tệp `/app/etc/ppanel.yaml` một cách thủ công để thực hiện các cấu hình tiếp theo.

2. **Chạy container Docker**:

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **Truy cập trang khởi tạo**: Mở trình duyệt và truy cập `http://ĐịaChỉIPMáyChủ:8080/init`.

4. **Hoàn tất cấu hình**: Làm theo hướng dẫn để thiết lập tài khoản quản trị viên, cấu hình cơ sở dữ liệu MySQL và máy chủ Redis.

5. **Nhấn nút khởi tạo**: Sau khi hoàn tất cấu hình, nhấn nút “Khởi tạo”, ứng dụng sẽ tự động lưu cấu hình và khởi động lại.

   > **Lưu ý**: PPanel mặc định sử dụng cổng **8080**, hãy đảm bảo cổng này có thể truy cập, điều chỉnh cài đặt tường lửa nếu cần.

## Sử dụng Docker để triển khai

PPanel mặc định sử dụng cổng **8080**, hãy đảm bảo cổng này có thể truy cập, điều chỉnh cài đặt tường lửa nếu cần.

Nếu không sử dụng khởi tạo Web, bạn có thể đăng nhập bằng tài khoản quản trị viên mặc định:

- **Tên người dùng**: `admin@ppanel.dev`
- **Mật khẩu**: `password`

> **Lưu ý**: Sau lần đăng nhập đầu tiên, hãy thay đổi mật khẩu mặc định ngay lập tức để đảm bảo an toàn.

### Tạo tệp cấu hình cần thiết

Trước khi bắt đầu triển khai Docker, hãy tạo và cấu hình tệp `/app/etc/ppanel.yaml` một cách thủ công để đảm bảo hệ thống hoạt động bình thường. Để biết thêm chi tiết về các mục cấu hình, hãy tham khảo phần [Ví dụ về các mục cấu hình](#ví-dụ-về-các-mục-cấu-hình) trong tài liệu.

### Chạy container Docker

Chạy lệnh sau để khởi động container:

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## Sử dụng Docker Compose để triển khai

PPanel mặc định sử dụng cổng **8080**, hãy đảm bảo cổng này có thể truy cập, điều chỉnh cài đặt tường lửa nếu cần.

### Tạo tệp cấu hình cần thiết

Trước khi bắt đầu triển khai Docker Compose, hãy tạo và cấu hình tệp `/app/etc/ppanel.yaml` một cách thủ công để đảm bảo hệ thống hoạt động bình thường. Để biết thêm chi tiết về các mục cấu hình, hãy tham khảo phần [Ví dụ về các mục cấu hình](#ví-dụ-về-các-mục-cấu-hình) trong tài liệu.

### Tạo tệp cấu hình Docker Compose

Tạo tệp `docker-compose.yml`:

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### Khởi động dịch vụ

Chạy lệnh sau để khởi động dịch vụ:

```sh
docker compose up -d
```

## Lưu ý quan trọng

- **An toàn**: Hãy chắc chắn thay đổi mật khẩu và khóa mặc định để đảm bảo an toàn cho ứng dụng.
- **Cấu hình cổng**: Đảm bảo các cổng cần thiết đã được mở, tránh các vấn đề truy cập mạng.
- **Dữ liệu bền vững**: Nên gắn kết các khối dữ liệu khi chạy container để đảm bảo dữ liệu bền vững.

## Ví dụ về các mục cấu hình

Dưới đây là ví dụ về các mục cấu hình trong `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # Địa chỉ IP lắng nghe
Port: 8080 # Cổng chạy
Debug: true # Có bật chế độ gỡ lỗi không
JwtAuth:
  AccessSecret: your-secret-key # Khóa Token (vui lòng thay đổi)
  AccessExpire: 604800 # Thời gian hiệu lực Token (giây)
Logger:
  FilePath: ./ppanel.log # Đường dẫn tệp nhật ký
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Cấp độ nhật ký: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Địa chỉ cơ sở dữ liệu
  Dbname: vpnboard # Tên cơ sở dữ liệu
  Username: root # Tên người dùng cơ sở dữ liệu
  Password: your-password # Mật khẩu cơ sở dữ liệu (vui lòng thay đổi)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Mật khẩu Redis (nếu có)
  DB: 0

Administer:
  Password: password # Mật khẩu quản trị viên (nên thay đổi)
  Email: admin@ppanel.dev # Địa chỉ email quản trị viên
```

> **Lưu ý**: Sau khi thay đổi tệp cấu hình, hãy khởi động lại container Docker để áp dụng các thay đổi.

## Nhận hỗ trợ

Nếu gặp vấn đề, hãy tham khảo tài liệu chính thức hoặc liên hệ với đội ngũ hỗ trợ để được giúp đỡ.
```

