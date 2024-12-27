---
title: استقرار سریع
order: 1
nav:
  title: راهنما
  order: 1
group:
  title: استقرار
  order: 1
toc: content
---

# راهنمای استقرار سریع

> **نکات مهم قبل از استقرار**
>
> - **پورت پیش‌فرض مدیریت 8080 است**: لطفاً قبل از شروع، تنظیمات مربوط به دامنه را انجام دهید یا اطمینان حاصل کنید که یک آدرس IP قابل استفاده دارید تا نصب مدیریت و کاربر به‌راحتی انجام شود.
> - سرور: برای اطلاعات بیشتر به [سرور](/guide/server) مراجعه کنید.
> - مدیریت: برای اطلاعات بیشتر به [مدیریت](/guide/admin) مراجعه کنید.
> - کاربر: برای اطلاعات بیشتر به [کاربر](/guide/user) مراجعه کنید.

## استقرار با یک کلیک

با استفاده از هر یک از دستورات زیر می‌توانید PPanel را به‌صورت یک‌کلیک استقرار دهید، که شامل سرور، مدیریت و کاربر است:

### گزینه 1: استفاده از `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### گزینه 2: استفاده از `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

