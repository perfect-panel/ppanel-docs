---
title: Yönetim Paneli
order: 3
nav:
  title: Kılavuz
  order: 1
group:
  title: Dağıtım
  order: 1
toc: content
---

# **PPanel Yönetim Paneli Dağıtım Kılavuzu**

Bu kılavuz, PPanel yönetim panelinin Docker, Vercel, PM2 ve doğrudan Node.js veya Bun kullanarak nasıl dağıtılacağını ayrıntılı bir şekilde açıklamaktadır.

---

## **1. Ortam Hazırlığı**

Dağıtım öncesinde, aşağıdaki araçların yüklü olduğundan emin olun:

- **Node.js** (NVM ile yüklenmesi önerilir, sürüm >= 22)
- **Bun** (Hızlı JavaScript çalışma zamanı)
- **PM2** (Hizmetleri verimli bir şekilde yönetmek için süreç yönetim aracı)
- **Docker** (Konteyner tabanlı dağıtım için)

---

## **2. Ortam Değişkenleri Yapılandırması**

Dağıtım öncesinde, aşağıdaki ortam değişkenlerini yapılandırmanız gerekmektedir:

```env
# Uygulama yapılandırması
NEXT_PUBLIC_DEFAULT_LANGUAGE=tr-TR
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Varsayılan kullanıcı
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Dağıtım Seçenekleri**

### **3.1 Docker Kullanarak Dağıtım**

#### Docker'ı Yükleme

Docker'ı yüklemek için aşağıdaki komutu çalıştırın:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker ile Hizmeti Başlatma

Konteyneri başlatmak için aşağıdaki komutu çalıştırın:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=tr-TR \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Docker Compose ile Dağıtım

Bir `docker-compose.yml` dosyası oluşturun ve içeriğini aşağıdaki gibi ayarlayın:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: tr-TR
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Hizmeti başlatın:

```bash
docker compose up -d
```

---

### **3.2 Vercel Kullanarak Dağıtım**

Hızlı dağıtım için aşağıdaki butona tıklayın:

[![Vercel'de Dağıtım Yap](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20saf%2C%20profesyonel%2C%20ve%20mükemmel%20açık%20kaynak%20proxy%20panel%20aracı%2C%20öğrenme%20ve%20pratik%20kullanım%20için%20ideal%20seçiminiz%20olarak%20tasarlanmıştır&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Yönetim%20Webi&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Adımlar:**

1. [Vercel](https://vercel.com/) hesabınıza giriş yapın veya kaydolun.
2. Dağıtım butonuna tıklayın, depoyu fork edin ve `apps/admin` seçin.
3. Ortam değişkenlerini yapılandırın.
4. Dağıtımı başlatmak için **Deploy** butonuna tıklayın.

---

### **3.3 PM2, Node.js veya Bun Kullanarak Dağıtım**

#### Kodu İndirme

Resmi GitHub deposundan kodu alın:

```bash
# En son sürüm kodunu indirin
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Dosyayı çıkarın
tar -xzvf ppanel-admin-web.tar.gz

# Kod dizinine girin
cd ppanel-admin-web
```

#### Ortam Değişkenlerini Yapılandırma

Gerekli ortam değişkenlerini eklemek için `apps/admin/.env` dosyasını oluşturun (yukarıdaki ortam değişkenleri yapılandırmasına bakın).

#### PM2 Yapılandırması

Aşağıdaki içeriğe sahip bir `ecosystem.config.js` dosyası oluşturun:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // node olarak değiştirilebilir
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

#### PM2 ile Hizmeti Başlatma

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Node.js veya Bun ile Hizmeti Başlatma

- **Node.js ile başlatma**:
  ```bash
  node apps/admin/server.js
  ```
- **Bun ile başlatma**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Dağıtımı Doğrulama**

### **4.1 PM2 Hizmet Durumu**

Aşağıdaki komutu çalıştırarak kontrol edin:

```bash
pm2 list
```

### **4.2 Tarayıcıdan Erişim**

Hizmetin çalıştığını doğrulamak için `http://<sunucu IP'niz>:3000` adresine gidin.

---

## **5. Hizmet Yönetimi**

### **PM2 Komutları**

- Hizmeti durdurma:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Hizmeti yeniden başlatma:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Hizmeti silme:
  ```bash
  pm2 delete ppanel-admin-web
  ```
