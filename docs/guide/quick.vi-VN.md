---
title: Triển khai nhanh
order: 1
nav:
  title: Hướng dẫn
  order: 1
group:
  title: Triển khai
  order: 1
toc: content
---

# Hướng dẫn triển khai nhanh

> **Lưu ý trước khi triển khai**
>
> - **Cổng mặc định của quản lý là 8080**: Vui lòng cấu hình trước phân giải tên miền hoặc đảm bảo có địa chỉ IP khả dụng để hoàn tất việc cài đặt cho quản lý và người dùng.
> - Máy chủ: Để biết thêm thông tin, vui lòng tham khảo [Máy chủ](/guide/server).
> - Quản lý: Để biết thêm thông tin, vui lòng tham khảo [Quản lý](/guide/admin).
> - Người dùng: Để biết thêm thông tin, vui lòng tham khảo [Người dùng](/guide/user).

## Triển khai một lần nhấn

Sử dụng bất kỳ lệnh nào dưới đây để triển khai PPanel một cách nhanh chóng, bao gồm máy chủ, quản lý và người dùng:

### Tùy chọn 1: Sử dụng `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Tùy chọn 2: Sử dụng `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

