---
title: Yönetim Paneli - Vercel
order: 1
group: 
  title: Ön Uç Dağıtımı
  order: 3
toc: content
---

### Vercel ile Dağıtım Yapma\*\*

Hızlı dağıtım için aşağıdaki butona tıklayın:

[![Vercel'de Dağıtım Yap](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20saf%2C%20profesyonel%2C%20ve%20mükemmel%20bir%20açık%20kaynak%20proxy%20panel%20aracıdır%2C%20öğrenme%20ve%20pratik%20kullanım%20için%20ideal%20seçiminiz%20olmak%20üzere%20tasarlanmıştır\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Yönetim%20Web%20Arayüzü\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Adımlar:**

1. [Vercel](https://vercel.com/) hesabınıza giriş yapın veya kaydolun.
2. Dağıtım butonuna tıklayın, depoyu fork edin ve `apps/admin` seçin.
3. Ortam değişkenlerini yapılandırın.
4. Dağıtımı başlatmak için **Deploy** butonuna tıklayın.

---

### **3.3 PM2, Node.js veya Bun ile Dağıtım Yapma**

#### Kodu İndirin

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

`apps/admin/.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin (yukarıdaki ortam değişkeni yapılandırmasına bakın).

#### PM2'yi Yapılandırma

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

#### PM2 ile Servisi Başlatma

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

