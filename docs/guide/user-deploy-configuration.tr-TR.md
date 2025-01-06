---
title: Kullanıcı Tarafı - Konfigürasyon Açıklaması
order: 4
group: 
  title: Ön Uç Dağıtımı
  order: 3
toc: content
---

# **PPanel Dağıtım Kılavuzu**

Bu kılavuz, PPanel kullanıcı tarafını Docker, Vercel, PM2 ve doğrudan Node.js veya Bun kullanarak nasıl dağıtacağınızı ayrıntılı bir şekilde açıklamaktadır.

---

## **1. Ortam Hazırlığı**

Dağıtıma başlamadan önce, aşağıdaki araçların yüklü olduğundan emin olun:

- **Node.js** (NVM ile yüklenmesi önerilir, sürüm >= 22)
- **Bun** (Hızlı JavaScript çalışma zamanı)
- **PM2** (Hizmetleri verimli bir şekilde yönetmek için süreç yönetim aracı)
- **Docker** (Konteyner tabanlı dağıtım için)

---

## **2. Ortam Değişkeni Konfigürasyonu**

Dağıtıma başlamadan önce, aşağıdaki ortam değişkenlerini yapılandırmanız gerekmektedir:

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

