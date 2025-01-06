```markdown
---
title: 設定説明
order: 0
group: 
  title: サーバーのデプロイ
  order: 2
toc: content
---

## 実行環境の要件

| コンポーネント       | 要件                                   |
| ---------------- | ------------------------------------ |
| サーバー構成        | 最低：1 コア CPU、2GB メモリ；推奨：2 コア CPU、4GB メモリ |
| MySQL            | 5.7 以上（推奨 MySQL 8）                  |
| Redis            | 6 以上                                |
| NGINX/Apache     | 任意のバージョン                          |

### 設定ファイルの説明

#### 1. 設定ファイルのパス

設定ファイルのデフォルトパスは:`./etc/ppanel.yaml`で、起動パラメータ `--config` を使用して設定ファイルのパスを指定できます。

#### 2. 設定ファイルの形式

- 設定ファイルはyaml形式で、コメントをサポートし、名前はxxx.yamlとします。

```yaml
# 設定ファイルの例
Host:               # サービスリスニングアドレス, デフォルト: 0.0.0.0
Port:               # サービスリスニングポート, デフォルト: 8080
Debug:              # デバッグモードを有効にするか, 有効にするとバックエンドのログ機能が使用できなくなります, デフォルト: false
JwtAuth:            # JWT認証設定
  AccessSecret:     # アクセストークンの秘密鍵, デフォルト: ランダム生成
  AccessExpire:     # アクセストークンの有効期限, 単位秒, デフォルト: 604800
Logger:             # ログ設定
  FilePath:         # ログファイルのパス, デフォルト: ./ppanel.log
  MaxSize:          # ログファイルの最大サイズ, 単位MB, デフォルト: 50
  MaxBackup:        # ログファイルの最大バックアップ数, デフォルト: 3
  MaxAge:           # ログファイルの最大保存期間, 単位日, デフォルト: 30
  Compress:         # ログファイルを圧縮するか, デフォルト: true
  Level:            # ログレベル, デフォルト: info, 選択肢: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # MySQLアドレス, 必須
  Username:         # MySQLユーザー名, 必須
  Password:         # MySQLパスワード, 必須
  Dbname:           # MySQLデータベース名, 必須
  Config:           # MySQL設定のデフォルト値 charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # 最大アイドル接続数, デフォルト: 10
  MaxOpenConns:     # 最大オープン接続数, デフォルト: 100
  LogMode:          # ログレベル, デフォルト: info, 選択肢: debug, error, warn, info
  LogZap:           # SQLのzapログ記録を使用するか, デフォルト: true
  SlowThreshold:    # スロークエリの閾値, 単位ミリ秒, デフォルト: 1000
Redis:
  Host:             # Redisアドレス, デフォルト: localhost:6379
  Pass:             # Redisパスワード, デフォルト: ""
  DB:               # Redisデータベース, デフォルト: 0

Administer:
  Email:            # バックエンドログイン用メール, デフォルト: admin@ppanel.dev
  Password:         # バックエンドログイン用パスワード, デフォルト: password

```

#### 3. 設定ファイルの説明

- `Host`: サービスリスニングアドレス, デフォルト: **0.0.0.0**
- `Port`: サービスリスニングポート, デフォルト: **8080**
- `Debug`: デバッグモードを有効にするか, 有効にするとバックエンドのログ機能が使用できなくなります, デフォルト: **false**
- `JwtAuth`: JWT認証設定
  - `AccessSecret`: アクセストークンの秘密鍵, デフォルト: **ランダム生成**
  - `AccessExpire`: アクセストークンの有効期限, 単位秒, デフォルト: **604800**
- `Logger`: ログ設定
- `FilePath`: ログファイルのパス, デフォルト: **./ppanel.log**
- `MaxSize`: ログファイルの最大サイズ, 単位MB, デフォルト: **50**
- `MaxBackup`: ログファイルの最大バックアップ数, デフォルト: **3**
- `MaxAge`: ログファイルの最大保存期間, 単位日, デフォルト: **30**
- `Compress`: ログファイルを圧縮するか, デフォルト: **true**
- `Level`: ログレベル, デフォルト: **info**, 選択肢: **debug, info, warn, error, panic, fatal**
- `MySQL`: MySQL設定
  - `Addr`: MySQLアドレス, 必須
  - `Username`: MySQLユーザー名, 必須
  - `Password`: MySQLパスワード, 必須
  - `Dbname`: MySQLデータベース名, 必須
  - `Config`: MySQL設定のデフォルト値 charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: 最大アイドル接続数, デフォルト: **10**
  - `MaxOpenConns`: 最大オープン接続数, デフォルト: **100**
  - `LogMode`: ログレベル, デフォルト: **info**, 選択肢: **debug, error, warn, info**
  - `LogZap`: SQLのzapログ記録を使用するか, デフォルト: **true**
  - `SlowThreshold`: スロークエリの閾値, 単位ミリ秒, デフォルト: **1000**
- `Redis`: Redis設定
- `Host`: Redisアドレス, デフォルト: **localhost:6379**
- `Pass`: Redisパスワード, デフォルト: **""**
- `DB`: Redisデータベース, デフォルト: **0**
- `Administer`: バックエンドログイン設定
  - `Email`: バックエンドログイン用メール, デフォルト: **<admin@ppanel.dev>**
  - `Password`: バックエンドログイン用パスワード, デフォルト: **password**

#### 4. 環境変数

サポートされている環境変数は以下の通りです：

| 環境変数          | 設定項目     | 例                                          |
| ------------- | ------- | :------------------------------------------ |
| PPANEL\_DB    | MySQL設定 | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS | Redis設定 | redis\://localhost:6379"                    |
```

