---
title: サーバー
order: 2
nav:
  title: ガイド
  order: 1
group:
  title: デプロイ
  order: 1
toc: content
---

## 実行環境要件

| コンポーネント | 要件                                                       |
| -------------- | ---------------------------------------------------------- |
| サーバー構成   | 最低：1 コア CPU、2GB メモリ；推奨：2 コア CPU、4GB メモリ |
| MySQL          | 5.7 以上（推奨 MySQL 8）                                   |
| Redis          | 6 以上                                                     |
| NGINX/Apache   | 任意のバージョン                                           |

## Docker のインストール

以下のコマンドを実行して、Docker を迅速にインストールします：

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## クイックスタート

### Web インターフェースによる初期化

PPanel は Web ベースの初期化をサポートしており、手動設定プロセスを簡素化します。

### 初期化手順

1. **必要な設定ファイルを作成**：まず、手動で `/app/etc/ppanel.yaml` ファイルを作成し、後続の設定を行います。

2. **Docker コンテナを実行**：

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **初期化ページにアクセス**：ブラウザで `http://サーバーIP:8080/init` にアクセスします。

4. **設定を完了**：指示に従って管理者アカウント、MySQL データベース、Redis サーバーを設定します。

5. **初期化ボタンをクリック**：設定が完了したら、「初期化」ボタンをクリックし、アプリケーションが自動的に設定を保存して再起動します。

   > **注意**：PPanel はデフォルトでポート **8080** を使用します。このポートがアクセス可能であることを確認し、必要に応じてファイアウォールの設定を調整してください。

## Docker を使用したデプロイ

PPanel はデフォルトでポート **8080** を使用します。このポートがアクセス可能であることを確認し、必要に応じてファイアウォールの設定を調整してください。

Web 初期化を使用しない場合は、デフォルトの管理者アカウントでログインできます：

- **ユーザー名**：`admin@ppanel.dev`
- **パスワード**：`password`

> **注意**：初回ログイン後は、セキュリティを確保するためにデフォルトのパスワードを速やかに変更してください。

### 必要な設定ファイルの作成

Docker デプロイを開始する前に、まず手動で `/app/etc/ppanel.yaml` を作成し、システムが正常に動作するように設定します。詳細な設定項目の例については、ドキュメントの [設定項目の例](#設定項目の例) セクションを参照してください。

### Docker コンテナの実行

以下のコマンドを実行してコンテナを起動します：

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## Docker Compose を使用したデプロイ

PPanel はデフォルトでポート **8080** を使用します。このポートがアクセス可能であることを確認し、必要に応じてファイアウォールの設定を調整してください。

### 必要な設定ファイルの作成

Docker Compose デプロイを開始する前に、まず手動で `/app/etc/ppanel.yaml` を作成し、システムが正常に動作するように設定します。詳細な設定項目の例については、ドキュメントの [設定項目の例](#設定項目の例) セクションを参照してください。

### Docker Compose 設定ファイルの作成

`docker-compose.yml` ファイルを作成します：

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### サービスの起動

以下のコマンドを実行してサービスを起動します：

```sh
docker compose up -d
```

## 重要な注意事項

- **セキュリティ**：デフォルトのパスワードとキーを必ず変更し、アプリケーションの安全性を確保してください。
- **ポート設定**：必要なポートが開放されていることを確認し、ネットワークアクセスの問題を避けてください。
- **データの永続化**：コンテナを実行する際にデータボリュームをマウントしてデータの永続化を実現することをお勧めします。

## 設定項目の例

以下は `ppanel.yaml` の設定項目の例です：

```yaml
Host: 0.0.0.0 # リッスン IP
Port: 8080 # 実行ポート
Debug: true # デバッグモードを有効にするか
JwtAuth:
  AccessSecret: your-secret-key # トークンキー（変更してください）
  AccessExpire: 604800 # トークンの有効期限（秒）
Logger:
  FilePath: ./ppanel.log # ログファイルのパス
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # ログレベル：info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # データベースアドレス
  Dbname: vpnboard # データベース名
  Username: root # データベースユーザー名
  Password: your-password # データベースパスワード（変更してください）
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis パスワード（ある場合）
  DB: 0

Administer:
  Password: password # 管理者パスワード（変更すべき）
  Email: admin@ppanel.dev # 管理者のメールアドレス
```

> **注意**：設定ファイルを変更した後は、変更を適用するために Docker コンテナを再起動してください。

## サポートを受ける

問題が発生した場合は、公式ドキュメントを参照するか、サポートチームに連絡して支援を受けてください。
