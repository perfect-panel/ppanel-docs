```markdown
---
title: Docker
order: 1
group: 
  title: サーバーのデプロイ
  order: 2
toc: content
---

## Dockerのインストール

以下のコマンドを実行して、Dockerを迅速にインストールします：

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## クイックスタート

### Webインターフェースによる初期化

PPanelはWebベースの初期化をサポートしており、手動設定プロセスを簡素化します。

### 初期化手順

1. **必要な設定ファイルを作成**：まず、手動で`/app/etc/ppanel.yaml`ファイルを作成し、後続の設定のために構成します。

2. **Dockerコンテナを実行**：

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

3. **初期化ページにアクセス**：ブラウザで`http://サーバーIP:8080/init`にアクセスします。

4. **設定を完了**：指示に従って管理者アカウントを設定し、MySQLデータベースとRedisサーバーを構成します。

5. **初期化ボタンをクリック**：設定が完了したら、「初期化」ボタンをクリックし、アプリケーションが自動的に設定を保存して再起動します。

   > **注意**：PPanelはデフォルトでポート**8080**を使用します。このポートがアクセス可能であることを確認し、必要に応じてファイアウォールの設定を調整してください。

## Dockerを使用したデプロイ

PPanelはデフォルトでポート**8080**を使用します。このポートがアクセス可能であることを確認し、必要に応じてファイアウォールの設定を調整してください。

Web初期化を使用しない場合は、デフォルトの管理者アカウントでログインできます：

- **ユーザー名**：`admin@ppanel.dev`
- **パスワード**：`password`

> **注意**：初回ログイン後は、セキュリティを確保するためにデフォルトのパスワードを速やかに変更してください。

### 必要な設定ファイルの作成

Dockerデプロイを開始する前に、まず手動で`/app/etc/ppanel.yaml`を作成し、システムが正常に動作するように構成します。詳細な設定項目の例については、ドキュメントの[設定項目の例](#設定項目の例)の部分を参照してください。

### Dockerコンテナの実行

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

## Docker Composeを使用したデプロイ

PPanelはデフォルトでポート**8080**を使用します。このポートがアクセス可能であることを確認し、必要に応じてファイアウォールの設定を調整してください。

### 必要な設定ファイルの作成

Docker Composeデプロイを開始する前に、まず手動で`/app/etc/ppanel.yaml`を作成し、システムが正常に動作するように構成します。詳細な設定項目の例については、ドキュメントの[設定項目の例](#設定項目の例)の部分を参照してください。

### Docker Compose設定ファイルの作成

`docker-compose.yml`ファイルを作成します：

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
- **データの永続化**：コンテナを実行する際には、データの永続化を実現するためにデータボリュームをマウントすることをお勧めします。

## 設定項目の例

以下は`ppanel.yaml`の設定項目の例です：

```yaml
Host: 0.0.0.0 # リッスンIP
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
  Pass: # Redisパスワード（ある場合）
  DB: 0

Administer:
  Password: password # 管理者パスワード（変更すべき）
  Email: admin@ppanel.dev # 管理者のメールアドレス
```

> **注意**：設定ファイルを変更した後は、変更を適用するためにDockerコンテナを再起動してください。

## サポートを受ける

問題が発生した場合は、公式ドキュメントを参照するか、サポートチームに連絡して支援を受けてください。
```

