---
title: Kullanıcı Tarafı - Node
order: 6
group: 
  title: Ön Uç Dağıtımı
  order: 3
toc: content
---

### PM2, Node.js veya Bun ile Dağıtım Yapma

#### Kod İndirme

Resmi GitHub deposundan kodu alın:

```bash
# En son sürümü indirin
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Dosyayı çıkarın
tar -xzvf ppanel-user-web.tar.gz

# Kod dizinine girin
cd ppanel-user-web
```

#### Ortam Değişkenlerini Yapılandırma

`apps/user/.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin (yukarıdaki ortam değişkeni yapılandırmasına bakın).

#### PM2'yi Yapılandırma

`ecosystem.config.js` dosyasını oluşturun, içeriği aşağıdaki gibi olsun:

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

#### PM2 ile Servisi Başlatma

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Node.js veya Bun ile Servisi Başlatma

- **Node.js ile Başlatma**:

  ```bash
  node apps/user/server.js
  ```

- **Bun ile Başlatma**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. Dağıtımı Doğrulama**

### **4.1 PM2 Servis Durumu**

Aşağıdaki komutu çalıştırarak kontrol edin:

```bash
pm2 list
```

### **4.2 Tarayıcı ile Erişim**

`http://<sunucu IP'niz>:3000` adresine giderek servisin çalışma durumunu doğrulayın.

---

## **5. Servis Yönetimi**

### **PM2 Komutları**

- Servisi Durdurma:

  ```bash
  pm2 stop ppanel-user-web
  ```

- Servisi Yeniden Başlatma:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Servisi Silme:

  ```bash
  pm2 delete ppanel-user-web
  ```

