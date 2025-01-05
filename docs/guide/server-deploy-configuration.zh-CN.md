---
title: 配置说明
order: 0
group: 
  title: 服务端部署
  order: 2
toc: content
---
## 运行环境要求

| 组件         | 要求                                               |
| ------------ | -------------------------------------------------- |
| 服务器配置   | 最低：1 核 CPU，2GB 内存；推荐：2 核 CPU，4GB 内存 |
| MySQL        | 5.7 及以上（推荐 MySQL 8）                         |
| Redis        | 6 及以上                                           |
| NGINX/Apache | 任意版本                                           |

### 配置文件说明

#### 1. 配置文件路径

配置文件默认路径为:`./etc/ppanel.yaml`，可通过启动参数 `--config` 指定配置文件路径。

#### 2. 配置文件格式

- 配置文件为yaml格式，支持注释,命名为xxx.yaml。

```yaml
# 配置文件示例
Host:               # 服务监听地址,默认: 0.0.0.0
Port:               # 服务监听端口,默认: 8080
Debug:              # 是否开启调试模式,开启后无法使用后台日志功能, 默认: false
JwtAuth:            # JWT认证配置
  AccessSecret:     # 访问令牌密钥, 默认: 随机生成
  AccessExpire:     # 访问令牌过期时间,单位秒, 默认: 604800
Logger:             # 日志配置
  FilePath:         # 日志文件路径, 默认: ./ppanel.log
  MaxSize:          # 日志文件最大大小,单位MB, 默认: 50
  MaxBackup:        # 日志文件最大备份数, 默认: 3
  MaxAge:           # 日志文件最大保存时间,单位天, 默认: 30
  Compress:         # 是否压缩日志文件, 默认: true
  Level:            # 日志级别, 默认: info, 可选: debug, info, warn, error, panic, panic, fatal
MySQL:
  Addr:             # MySQL地址, 必填
  Username:         # MySQL用户名, 必填
  Password:         # MySQL密码, 必填
  Dbname:           # MySQL数据库名, 必填
  Config:           # Mysql配置默认值 charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # 最大空闲连接数, 默认: 10
  MaxOpenConns:     # 最大打开连接数, 默认: 100
  LogMode:          # 日志级别, 默认: info, 可选: debug, error, warn, info
  LogZap:           # 是否使用zap日志记录sql, 默认: true
  SlowThreshold:    # 慢查询阈值,单位毫秒, 默认: 1000
Redis:
  Host:             # Redis地址, 默认:localhost:6379
  Pass:             # Redis密码, 默认: ""
  DB:               # Redis数据库, 默认: 0

Administer:
  Email:            # 后台登录邮箱, 默认: admin@ppanel.dev
  Password:         # 后台登录密码, 默认: password

```

#### 3. 配置文件说明

- `Host`: 服务监听地址,默认: **0.0.0.0**
- `Port`: 服务监听端口,默认: **8080**
- `Debug`: 是否开启调试模式,开启后无法使用后台日志功能, 默认: **false**
- `JwtAuth`: JWT认证配置
  - `AccessSecret`: 访问令牌密钥, 默认: **随机生成**
  - `AccessExpire`: 访问令牌过期时间,单位秒, 默认: **604800**
- `Logger`: 日志配置
- `FilePath`: 日志文件路径, 默认: **./ppanel.log**
- `MaxSize`: 日志文件最大大小,单位MB, 默认: **50**
- `MaxBackup`: 日志文件最大备份数, 默认: **3**
- `MaxAge`: 日志文件最大保存时间,单位天, 默认: **30**
- `Compress`: 是否压缩日志文件, 默认: **true**
- `Level`: 日志级别, 默认: **info**, 可选: **debug, info, warn, error, panic, panic, fatal**
- `MySQL`: MySQL配置
  - `Addr`: MySQL地址, 必填
  - `Username`: MySQL用户名, 必填
  - `Password`: MySQL密码, 必填
  - `Dbname`: MySQL数据库名, 必填
  - `Config`: Mysql配置默认值 charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  - `MaxIdleConns`: 最大空闲连接数, 默认: **10**
  - `MaxOpenConns`: 最大打开连接数, 默认: **100**
  - `LogMode`: 日志级别, 默认: **info**, 可选: **debug, error, warn, info**
  - `LogZap`: 是否使用zap日志记录sql, 默认: **true**
  - `SlowThreshold`: 慢查询阈值,单位毫秒, 默认: **1000**
- `Redis`: Redis配置
- `Host`: Redis地址, 默认: **localhost:6379**
- `Pass`: Redis密码, 默认: **""**
- `DB`: Redis数据库, 默认: **0**
- `Administer`: 后台登录配置
  - `Email`: 后台登录邮箱, 默认: **<admin@ppanel.dev>**
  - `Password`: 后台登录密码, 默认: **password**

#### 4. 环境变量

支持的环境变量如下：

| 环境变量         | 配置项     | 示例                                         |
|--------------|---------|:-------------------------------------------|
| PPANEL_DB    | MySQL配置 | root:password@tcp(localhost:3306)/vpnboard |
| PPANEL_REDIS | Redis配置 | redis://localhost:6379"                    |
