---
title: Configuration Instructions
order: 0
group: 
  title: Server Deployment
  order: 2
toc: content
---

## Runtime Environment Requirements

| Component       | Requirements                             |
| --------------- | ---------------------------------------- |
| Server Config   | Minimum: 1 CPU core, 2GB RAM; Recommended: 2 CPU cores, 4GB RAM |
| MySQL           | 5.7 and above (Recommended: MySQL 8)    |
| Redis           | 6 and above                              |
| NGINX/Apache    | Any version                              |

### Configuration File Instructions

#### 1. Configuration File Path

The default path for the configuration file is: `./etc/ppanel.yaml`, which can be specified using the startup parameter `--config`.

#### 2. Configuration File Format

- The configuration file is in YAML format, supports comments, and is named xxx.yaml.

```yaml
# Configuration file example
Host:               # Service listening address, default: 0.0.0.0
Port:               # Service listening port, default: 8080
Debug:              # Whether to enable debug mode, cannot use backend logging feature when enabled, default: false
JwtAuth:            # JWT authentication configuration
  AccessSecret:     # Access token secret, default: randomly generated
  AccessExpire:     # Access token expiration time, in seconds, default: 604800
Logger:             # Logging configuration
  FilePath:         # Log file path, default: ./ppanel.log
  MaxSize:          # Maximum log file size, in MB, default: 50
  MaxBackup:        # Maximum number of log file backups, default: 3
  MaxAge:           # Maximum log file retention time, in days, default: 30
  Compress:         # Whether to compress log files, default: true
  Level:            # Log level, default: info, options: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQL address, required
  Username:         # MySQL username, required
  Password:         # MySQL password, required
  Dbname:           # MySQL database name, required
  Config:           # MySQL default configuration charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Maximum idle connections, default: 10
  MaxOpenConns:     # Maximum open connections, default: 100
  LogMode:          # Log level, default: info, options: debug, error, warn, info
  LogZap:           # Whether to use zap for SQL logging, default: true
  SlowThreshold:    # Slow query threshold, in milliseconds, default: 1000
Redis:
  Host:             # Redis address, default: localhost:6379
  Pass:             # Redis password, default: ""
  DB:               # Redis database, default: 0

Administer:
  Email:            # Backend login email, default: admin@ppanel.dev
  Password:         # Backend login password, default: password

```

#### 3. Configuration File Explanation

- `Host`: Service listening address, default: **0.0.0.0**
- `Port`: Service listening port, default: **8080**
- `Debug`: Whether to enable debug mode, cannot use backend logging feature when enabled, default: **false**
- `JwtAuth`: JWT authentication configuration
  - `AccessSecret`: Access token secret, default: **randomly generated**
  - `AccessExpire`: Access token expiration time, in seconds, default: **604800**
- `Logger`: Logging configuration
  - `FilePath`: Log file path, default: **./ppanel.log**
  - `MaxSize`: Maximum log file size, in MB, default: **50**
  - `MaxBackup`: Maximum number of log file backups, default: **3**
  - `MaxAge`: Maximum log file retention time, in days, default: **30**
  - `Compress`: Whether to compress log files, default: **true**
  - `Level`: Log level, default: **info**, options: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL configuration
  - `Addr`: MySQL address, required
  - `Username`: MySQL username, required
  - `Password`: MySQL password, required
  - `Dbname`: MySQL database name, required
  - `Config`: MySQL default configuration charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Maximum idle connections, default: **10**
  - `MaxOpenConns`: Maximum open connections, default: **100**
  - `LogMode`: Log level, default: **info**, options: **debug, error, warn, info**
  - `LogZap`: Whether to use zap for SQL logging, default: **true**
  - `SlowThreshold`: Slow query threshold, in milliseconds, default: **1000**
- `Redis`: Redis configuration
  - `Host`: Redis address, default: **localhost:6379**
  - `Pass`: Redis password, default: **""**
  - `DB`: Redis database, default: **0**
- `Administer`: Backend login configuration
  - `Email`: Backend login email, default: **<admin@ppanel.dev>**
  - `Password`: Backend login password, default: **password**

#### 4. Environment Variables

The supported environment variables are as follows:

| Environment Variable | Configuration Item | Example                                      |
| -------------------- | ------------------ | :------------------------------------------ |
| PPANEL\_DB           | MySQL Configuration | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS        | Redis Configuration | redis://localhost:6379                      |

