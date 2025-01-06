```markdown
---
title: 配置說明
order: 0
group: 
  title: 伺服器部署
  order: 2
toc: content
---

## 運行環境要求

| 组件           | 要求                                  |
| ------------ | ----------------------------------- |
| 伺服器配置        | 最低：1 核 CPU，2GB 內存；推薦：2 核 CPU，4GB 內存 |
| MySQL        | 5.7 及以上（推薦 MySQL 8）                 |
| Redis        | 6 及以上                               |
| NGINX/Apache | 任何版本                                |

### 配置文件說明

#### 1. 配置文件路徑

配置文件默認路徑為:`./etc/ppanel.yaml`，可通過啟動參數 `--config` 指定配置文件路徑。

#### 2. 配置文件格式

- 配置文件為yaml格式，支持註釋,命名為xxx.yaml。

```yaml
# 配置文件示例
Host:               # 服務監聽地址,默認: 0.0.0.0
Port:               # 服務監聽端口,默認: 8080
Debug:              # 是否開啟調試模式,開啟後無法使用後台日誌功能, 默認: false
JwtAuth:            # JWT認證配置
  AccessSecret:     # 訪問令牌密鑰, 默認: 隨機生成
  AccessExpire:     # 訪問令牌過期時間,單位秒, 默認: 604800
Logger:             # 日誌配置
  FilePath:         # 日誌文件路徑, 默認: ./ppanel.log
  MaxSize:          # 日誌文件最大大小,單位MB, 默認: 50
  MaxBackup:        # 日誌文件最大備份數, 默認: 3
  MaxAge:           # 日誌文件最大保存時間,單位天, 默認: 30
  Compress:         # 是否壓縮日誌文件, 默認: true
  Level:            # 日誌級別, 默認: info, 可選: debug, info, warn, error, panic, panic, fatal
MySQL:
  Addr:             # MySQL地址, 必填
  Username:         # MySQL用戶名, 必填
  Password:         # MySQL密碼, 必填
  Dbname:           # MySQL數據庫名, 必填
  Config:           # Mysql配置默認值 charset=utf8mb4&parseTime=true&loc=Asia%2FHong_Kong
  MaxIdleConns:     # 最大空閒連接數, 默認: 10
  MaxOpenConns:     # 最大打開連接數, 默認: 100
  LogMode:          # 日誌級別, 默認: info, 可選: debug, error, warn, info
  LogZap:           # 是否使用zap日誌記錄sql, 默認: true
  SlowThreshold:    # 慢查詢閾值,單位毫秒, 默認: 1000
Redis:
  Host:             # Redis地址, 默認:localhost:6379
  Pass:             # Redis密碼, 默認: ""
  DB:               # Redis數據庫, 默認: 0

Administer:
  Email:            # 後台登錄郵箱, 默認: admin@ppanel.dev
  Password:         # 後台登錄密碼, 默認: password

```

#### 3. 配置文件說明

- `Host`: 服務監聽地址,默認: **0.0.0.0**
- `Port`: 服務監聽端口,默認: **8080**
- `Debug`: 是否開啟調試模式,開啟後無法使用後台日誌功能, 默認: **false**
- `JwtAuth`: JWT認證配置
  - `AccessSecret`: 訪問令牌密鑰, 默認: **隨機生成**
  - `AccessExpire`: 訪問令牌過期時間,單位秒, 默認: **604800**
- `Logger`: 日誌配置
- `FilePath`: 日誌文件路徑, 默認: **./ppanel.log**
- `MaxSize`: 日誌文件最大大小,單位MB, 默認: **50**
- `MaxBackup`: 日誌文件最大備份數, 默認: **3**
- `MaxAge`: 日誌文件最大保存時間,單位天, 默認: **30**
- `Compress`: 是否壓縮日誌文件, 默認: **true**
- `Level`: 日誌級別, 默認: **info**, 可選: **debug, info, warn, error, panic, panic, fatal**
- `MySQL`: MySQL配置
  - `Addr`: MySQL地址, 必填
  - `Username`: MySQL用戶名, 必填
  - `Password`: MySQL密碼, 必填
  - `Dbname`: MySQL數據庫名, 必填
  - `Config`: Mysql配置默認值 charset=utf8mb4\&parseTime=true\&loc=Asia%2FHong_Kong
  - `MaxIdleConns`: 最大空閒連接數, 默認: **10**
  - `MaxOpenConns`: 最大打開連接數, 默認: **100**
  - `LogMode`: 日誌級別, 默認: **info**, 可選: **debug, error, warn, info**
  - `LogZap`: 是否使用zap日誌記錄sql, 默認: **true**
  - `SlowThreshold`: 慢查詢閾值,單位毫秒, 默認: **1000**
- `Redis`: Redis配置
- `Host`: Redis地址, 默認: **localhost:6379**
- `Pass`: Redis密碼, 默認: **""**
- `DB`: Redis數據庫, 默認: **0**
- `Administer`: 後台登錄配置
  - `Email`: 後台登錄郵箱, 默認: **<admin@ppanel.dev>**
  - `Password`: 後台登錄密碼, 默認: **password**

#### 4. 環境變量

支持的環境變量如下：

| 環境變量          | 配置項     | 示例                                          |
| ------------- | ------- | :------------------------------------------ |
| PPANEL\_DB    | MySQL配置 | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS | Redis配置 | redis\://localhost:6379"                    |
```

