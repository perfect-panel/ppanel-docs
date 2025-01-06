---
title: Yönetim Paneli - Konfigürasyon Açıklaması
order: 0
group: 
  title: Ön Uç Dağıtımı
  order: 3
toc: content
---

# **PPanel Yönetim Paneli Dağıtım Kılavuzu**

Bu kılavuz, PPanel yönetim panelinin Docker, Vercel, PM2 ve doğrudan Node.js veya Bun kullanarak nasıl dağıtılacağını ayrıntılı bir şekilde açıklamaktadır.

---

## **1. Ortam Hazırlığı**

Dağıtımdan önce, aşağıdaki araçların yüklü olduğundan emin olun:

- **Node.js** (NVM ile yüklenmesi önerilir, sürüm >= 22)
- **Bun** (hızlı JavaScript çalışma zamanı)
- **PM2** (hizmetleri verimli bir şekilde yönetmek için süreç yönetim aracı)
- **Docker** (konteynerleştirilmiş dağıtım için)

---

## **2. Ortam Değişkeni Konfigürasyonu**

Dağıtımdan önce, aşağıdaki ortam değişkenlerini yapılandırmanız gerekmektedir:

```env
# Uygulama konfigürasyonu
NEXT_PUBLIC_DEFAULT_LANGUAGE=tr-TR
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Varsayılan kullanıcı
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

