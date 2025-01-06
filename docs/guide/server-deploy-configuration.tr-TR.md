```markdown
---
title: Konfigürasyon Açıklaması
order: 0
group: 
  title: Sunucu Dağıtımı
  order: 2
toc: content
---

## Çalışma Ortamı Gereksinimleri

| Bileşen           | Gereksinim                                  |
| ---------------- | ------------------------------------------- |
| Sunucu Yapılandırması | Minimum: 1 çekirdek CPU, 2GB RAM; Önerilen: 2 çekirdek CPU, 4GB RAM |
| MySQL            | 5.7 ve üzeri (Önerilen MySQL 8)            |
| Redis            | 6 ve üzeri                                  |
| NGINX/Apache     | Herhangi bir sürüm                          |

### Konfigürasyon Dosyası Açıklaması

#### 1. Konfigürasyon Dosyası Yolu

Konfigürasyon dosyasının varsayılan yolu: `./etc/ppanel.yaml`, başlatma parametresi `--config` ile konfigürasyon dosyası yolu belirtilebilir.

#### 2. Konfigürasyon Dosyası Formatı

- Konfigürasyon dosyası yaml formatındadır, yorumları destekler, xxx.yaml olarak adlandırılmalıdır.

```yaml
# Konfigürasyon dosyası örneği
Host:               # Servis dinleme adresi, varsayılan: 0.0.0.0
Port:               # Servis dinleme portu, varsayılan: 8080
Debug:              # Hata ayıklama modunu açma, açıldığında arka plan günlük işlevi kullanılamaz, varsayılan: false
JwtAuth:            # JWT kimlik doğrulama yapılandırması
  AccessSecret:     # Erişim belirteci anahtarı, varsayılan: rastgele oluşturulur
  AccessExpire:     # Erişim belirteci süresi, birim saniye, varsayılan: 604800
Logger:             # Günlük yapılandırması
  FilePath:         # Günlük dosyası yolu, varsayılan: ./ppanel.log
  MaxSize:          # Günlük dosyasının maksimum boyutu, birim MB, varsayılan: 50
  MaxBackup:        # Günlük dosyasının maksimum yedek sayısı, varsayılan: 3
  MaxAge:           # Günlük dosyasının maksimum saklama süresi, birim gün, varsayılan: 30
  Compress:         # Günlük dosyalarını sıkıştırma, varsayılan: true
  Level:            # Günlük seviyesi, varsayılan: info, seçenekler: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL adresi, zorunlu
  Username:         # MySQL kullanıcı adı, zorunlu
  Password:         # MySQL şifresi, zorunlu
  Dbname:           # MySQL veritabanı adı, zorunlu
  Config:           # Mysql yapılandırma varsayılanı charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maksimum boş bağlantı sayısı, varsayılan: 10
  MaxOpenConns:     # Maksimum açık bağlantı sayısı, varsayılan: 100
  LogMode:          # Günlük seviyesi, varsayılan: info, seçenekler: debug, error, warn, info
  LogZap:           # SQL günlük kaydı için zap kullanma, varsayılan: true
  SlowThreshold:    # Yavaş sorgu eşiği, birim milisaniye, varsayılan: 1000
Redis:
  Host:             # Redis adresi, varsayılan: localhost:6379
  Pass:             # Redis şifresi, varsayılan: ""
  DB:               # Redis veritabanı, varsayılan: 0

Administer:
  Email:            # Arka plan giriş e-postası, varsayılan: admin@ppanel.dev
  Password:         # Arka plan giriş şifresi, varsayılan: password

```

#### 3. Konfigürasyon Dosyası Açıklaması

- `Host`: Servis dinleme adresi, varsayılan: **0.0.0.0**
- `Port`: Servis dinleme portu, varsayılan: **8080**
- `Debug`: Hata ayıklama modunu açma, açıldığında arka plan günlük işlevi kullanılamaz, varsayılan: **false**
- `JwtAuth`: JWT kimlik doğrulama yapılandırması
  - `AccessSecret`: Erişim belirteci anahtarı, varsayılan: **rastgele oluşturulur**
  - `AccessExpire`: Erişim belirteci süresi, birim saniye, varsayılan: **604800**
- `Logger`: Günlük yapılandırması
- `FilePath`: Günlük dosyası yolu, varsayılan: **./ppanel.log**
- `MaxSize`: Günlük dosyasının maksimum boyutu, birim MB, varsayılan: **50**
- `MaxBackup`: Günlük dosyasının maksimum yedek sayısı, varsayılan: **3**
- `MaxAge`: Günlük dosyasının maksimum saklama süresi, birim gün, varsayılan: **30**
- `Compress`: Günlük dosyalarını sıkıştırma, varsayılan: **true**
- `Level`: Günlük seviyesi, varsayılan: **info**, seçenekler: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL yapılandırması
  - `Addr`: MySQL adresi, zorunlu
  - `Username`: MySQL kullanıcı adı, zorunlu
  - `Password`: MySQL şifresi, zorunlu
  - `Dbname`: MySQL veritabanı adı, zorunlu
  - `Config`: Mysql yapılandırma varsayılanı charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maksimum boş bağlantı sayısı, varsayılan: **10**
  - `MaxOpenConns`: Maksimum açık bağlantı sayısı, varsayılan: **100**
  - `LogMode`: Günlük seviyesi, varsayılan: **info**, seçenekler: **debug, error, warn, info**
  - `LogZap`: SQL günlük kaydı için zap kullanma, varsayılan: **true**
  - `SlowThreshold`: Yavaş sorgu eşiği, birim milisaniye, varsayılan: **1000**
- `Redis`: Redis yapılandırması
- `Host`: Redis adresi, varsayılan: **localhost:6379**
- `Pass`: Redis şifresi, varsayılan: **""**
- `DB`: Redis veritabanı, varsayılan: **0**
- `Administer`: Arka plan giriş yapılandırması
  - `Email`: Arka plan giriş e-postası, varsayılan: **<admin@ppanel.dev>**
  - `Password`: Arka plan giriş şifresi, varsayılan: **password**

#### 4. Ortam Değişkenleri

Desteklenen ortam değişkenleri aşağıdaki gibidir:

| Ortam Değişkeni   | Konfigürasyon Öğesi | Örnek                                          |
| ---------------- | ------------------- | :-------------------------------------------- |
| PPANEL\_DB      | MySQL yapılandırması | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS   | Redis yapılandırması | redis\://localhost:6379                       |
```

