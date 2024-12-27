---
title: Kullanıcı Arayüzü
order: 4
nav:
  title: Kılavuz
  order: 1
group:
  title: Dağıtım
  order: 1
toc: content
---

# **PPanel Kullanıcı Arayüzü Dağıtım Kılavuzu**

Bu kılavuz, PPanel kullanıcı arayüzünün Docker, Vercel, PM2 ve doğrudan Node.js veya Bun kullanarak nasıl dağıtılacağını ayrıntılı bir şekilde açıklamaktadır.

---

## **1. Ortam Hazırlığı**

Dağıtımdan önce, aşağıdaki araçların yüklü olduğundan emin olun:

- **Node.js** (NVM ile yüklenmesi önerilir, sürüm >= 22)
- **Bun** (hızlı JavaScript çalışma zamanı)
- **PM2** (hizmetleri verimli bir şekilde yönetmek için süreç yönetim aracı)
- **Docker** (konteynerleştirilmiş dağıtım için)

---

## **2. Ortam Değişkenleri Yapılandırması**

Dağıtımdan önce, aşağıdaki ortam değişkenlerini yapılandırmanız gerekmektedir:

```env
# Uygulama yapılandırması
NEXT_PUBLIC_DEFAULT_LANGUAGE=tr-TR
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# İletişim bilgileri
NEXT_PUBLIC_EMAIL=support@example.com

# Topluluk ve sosyal medya bağlantıları
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

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

#### Docker Compose ile Dağıtım

Bir `docker-compose.yml` dosyası oluşturun ve içeriğini aşağıdaki gibi ayarlayın:

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: tr-TR
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

Hizmeti başlatmak için:

```bash
docker compose up -d
```

---

### **3.2 Vercel Kullanarak Dağıtım**

Hızlı dağıtım için aşağıdaki düğmeye tıklayın:
[![Vercel ile Dağıtım](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20saf%2C%20profesyonel%2C%20ve%20mükemmel%20açık%20kaynak%20proxy%20panel%20aracı%2C%20öğrenme%20ve%20pratik%20kullanım%20için%20ideal%20seçiminiz%20olarak%20tasarlanmıştır&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20Kullanıcı%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Adımlar:**

1. [Vercel](https://vercel.com/) hesabınıza giriş yapın veya kaydolun.
2. Dağıtım düğmesine tıklayın, depoyu fork edin ve `apps/user` seçin.
3. Ortam değişkenlerini yapılandırın.
4. **Deploy** butonuna tıklayarak dağıtımı başlatın.

---

### **3.3 PM2, Node.js veya Bun Kullanarak Dağıtım**

#### Kodu İndirme

Resmi GitHub deposundan kodu alın:

```bash
# En son sürüm kodunu indirin
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Dosyayı çıkarın
tar -xzvf ppanel-user-web.tar.gz

# Kod dizinine girin
cd ppanel-user-web
```

#### Ortam Değişkenlerini Yapılandırma

Gerekli ortam değişkenlerini eklemek için `apps/user/.env` dosyasını oluşturun (yukarıdaki ortam değişkenleri yapılandırmasına bakın).

#### PM2 Yapılandırması

Aşağıdaki içeriğe sahip bir `ecosystem.config.js` dosyası oluşturun:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
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
  node apps/user/server.js
  ```
- **Bun ile başlatma**:
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Dağıtımı Doğrulama**

### **4.1 PM2 Hizmet Durumu**

Aşağıdaki komutu çalıştırarak kontrol edin:

```bash
pm2 list
```

### **4.2 Tarayıcı ile Erişim**

Hizmetin çalıştığını doğrulamak için `http://<sunucu IP'niz>:3000` adresine gidin.

---

## **5. Hizmet Yönetimi**

### **PM2 Komutları**

- Hizmeti durdurma:
  ```bash
  pm2 stop ppanel-user-web
  ```
- Hizmeti yeniden başlatma:
  ```bash
  pm2 restart ppanel-user-web
  ```
- Hizmeti silme:
  ```bash
  pm2 delete ppanel-user-web
  ```
