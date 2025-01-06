```markdown
---
title: Hướng dẫn cấu hình
order: 0
group: 
  title: Triển khai máy chủ
  order: 2
toc: content
---

## Yêu cầu môi trường hoạt động

| Thành phần       | Yêu cầu                                  |
| ---------------- | ---------------------------------------- |
| Cấu hình máy chủ  | Tối thiểu: 1 lõi CPU, 2GB RAM; Khuyến nghị: 2 lõi CPU, 4GB RAM |
| MySQL            | 5.7 trở lên (Khuyến nghị MySQL 8)      |
| Redis            | 6 trở lên                                |
| NGINX/Apache     | Bất kỳ phiên bản nào                     |

### Giải thích tệp cấu hình

#### 1. Đường dẫn tệp cấu hình

Đường dẫn tệp cấu hình mặc định là: `./etc/ppanel.yaml`, có thể chỉ định đường dẫn tệp cấu hình thông qua tham số khởi động `--config`.

#### 2. Định dạng tệp cấu hình

- Tệp cấu hình có định dạng yaml, hỗ trợ chú thích, được đặt tên là xxx.yaml.

```yaml
# Ví dụ tệp cấu hình
Host:               # Địa chỉ lắng nghe dịch vụ, mặc định: 0.0.0.0
Port:               # Cổng lắng nghe dịch vụ, mặc định: 8080
Debug:              # Có bật chế độ gỡ lỗi hay không, nếu bật sẽ không sử dụng được chức năng ghi nhật ký phía sau, mặc định: false
JwtAuth:            # Cấu hình xác thực JWT
  AccessSecret:     # Khóa mã thông báo truy cập, mặc định: ngẫu nhiên
  AccessExpire:     # Thời gian hết hạn mã thông báo truy cập, đơn vị giây, mặc định: 604800
Logger:             # Cấu hình ghi nhật ký
  FilePath:         # Đường dẫn tệp nhật ký, mặc định: ./ppanel.log
  MaxSize:          # Kích thước tối đa của tệp nhật ký, đơn vị MB, mặc định: 50
  MaxBackup:        # Số lượng bản sao tối đa của tệp nhật ký, mặc định: 3
  MaxAge:           # Thời gian lưu trữ tối đa của tệp nhật ký, đơn vị ngày, mặc định: 30
  Compress:         # Có nén tệp nhật ký hay không, mặc định: true
  Level:            # Cấp độ nhật ký, mặc định: info, có thể chọn: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Địa chỉ MySQL, bắt buộc
  Username:         # Tên người dùng MySQL, bắt buộc
  Password:         # Mật khẩu MySQL, bắt buộc
  Dbname:           # Tên cơ sở dữ liệu MySQL, bắt buộc
  Config:           # Giá trị cấu hình mặc định của Mysql charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Số lượng kết nối nhàn rỗi tối đa, mặc định: 10
  MaxOpenConns:     # Số lượng kết nối mở tối đa, mặc định: 100
  LogMode:          # Cấp độ nhật ký, mặc định: info, có thể chọn: debug, error, warn, info
  LogZap:           # Có sử dụng ghi nhật ký zap cho sql hay không, mặc định: true
  SlowThreshold:    # Ngưỡng truy vấn chậm, đơn vị mili giây, mặc định: 1000
Redis:
  Host:             # Địa chỉ Redis, mặc định: localhost:6379
  Pass:             # Mật khẩu Redis, mặc định: ""
  DB:               # Cơ sở dữ liệu Redis, mặc định: 0

Administer:
  Email:            # Email đăng nhập quản trị, mặc định: admin@ppanel.dev
  Password:         # Mật khẩu đăng nhập quản trị, mặc định: password

```

#### 3. Giải thích tệp cấu hình

- `Host`: Địa chỉ lắng nghe dịch vụ, mặc định: **0.0.0.0**
- `Port`: Cổng lắng nghe dịch vụ, mặc định: **8080**
- `Debug`: Có bật chế độ gỡ lỗi hay không, nếu bật sẽ không sử dụng được chức năng ghi nhật ký phía sau, mặc định: **false**
- `JwtAuth`: Cấu hình xác thực JWT
  - `AccessSecret`: Khóa mã thông báo truy cập, mặc định: **ngẫu nhiên**
  - `AccessExpire`: Thời gian hết hạn mã thông báo truy cập, đơn vị giây, mặc định: **604800**
- `Logger`: Cấu hình ghi nhật ký
- `FilePath`: Đường dẫn tệp nhật ký, mặc định: **./ppanel.log**
- `MaxSize`: Kích thước tối đa của tệp nhật ký, đơn vị MB, mặc định: **50**
- `MaxBackup`: Số lượng bản sao tối đa của tệp nhật ký, mặc định: **3**
- `MaxAge`: Thời gian lưu trữ tối đa của tệp nhật ký, đơn vị ngày, mặc định: **30**
- `Compress`: Có nén tệp nhật ký hay không, mặc định: **true**
- `Level`: Cấp độ nhật ký, mặc định: **info**, có thể chọn: **debug, info, warn, error, panic, fatal**
- `MySQL`: Cấu hình MySQL
  - `Addr`: Địa chỉ MySQL, bắt buộc
  - `Username`: Tên người dùng MySQL, bắt buộc
  - `Password`: Mật khẩu MySQL, bắt buộc
  - `Dbname`: Tên cơ sở dữ liệu MySQL, bắt buộc
  - `Config`: Giá trị cấu hình mặc định của Mysql charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Số lượng kết nối nhàn rỗi tối đa, mặc định: **10**
  - `MaxOpenConns`: Số lượng kết nối mở tối đa, mặc định: **100**
  - `LogMode`: Cấp độ nhật ký, mặc định: **info**, có thể chọn: **debug, error, warn, info**
  - `LogZap`: Có sử dụng ghi nhật ký zap cho sql hay không, mặc định: **true**
  - `SlowThreshold`: Ngưỡng truy vấn chậm, đơn vị mili giây, mặc định: **1000**
- `Redis`: Cấu hình Redis
- `Host`: Địa chỉ Redis, mặc định: **localhost:6379**
- `Pass`: Mật khẩu Redis, mặc định: **""**
- `DB`: Cơ sở dữ liệu Redis, mặc định: **0**
- `Administer`: Cấu hình đăng nhập quản trị
  - `Email`: Email đăng nhập quản trị, mặc định: **<admin@ppanel.dev>**
  - `Password`: Mật khẩu đăng nhập quản trị, mặc định: **password**

#### 4. Biến môi trường

Các biến môi trường hỗ trợ như sau:

| Biến môi trường     | Mục cấu hình | Ví dụ                                          |
| ------------------ | ------------ | :-------------------------------------------- |
| PPANEL\_DB         | Cấu hình MySQL | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS      | Cấu hình Redis | redis\://localhost:6379                      |
```

