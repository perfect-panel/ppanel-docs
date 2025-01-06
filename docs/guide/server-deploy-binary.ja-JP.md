```markdown
---
title: バイナリ
order: 2
group: 
  title: サーバーのデプロイ
  order: 2
toc: content
---

### インストールガイド

#### 前提システム要件

- Mysql 5.7+ (8.0の使用を推奨)
- Redis 6.0+ (7.0の使用を推奨)

#### バイナリのインストール

1. システムアーキテクチャを確認し、対応するバイナリファイルをダウンロードします。

ダウンロードリンク：`https://github.com/perfect-panel/ppanel/releases`

例：システム：Linux amd64、ユーザー：root、現在のディレクトリ：/root

- バイナリファイルをダウンロード

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- バイナリファイルを解凍

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- 解凍したディレクトリに移動

```shell
cd ppanel-server-linux-amd64
```

- バイナリファイルに実行権限を付与

```shell
chmod +x ppanel
```

- systemd サービスファイルを作成

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL Server
After=network.target

[Service]
ExecStart=/root/ppanel-server-linux-amd64/ppanel
Restart=always
User=root
WorkingDirectory=/root/ppanel-server-linux-amd64

[Install]
WantedBy=multi-user.target
EOF
```

- systemd サービスを再読み込み

```shell
systemctl daemon-reload
```

- サービスを起動

```shell
systemctl start ppanel
```

##### その他の説明

1. インストールパス：バイナリファイルは /root/ppanel-server-linux-amd64 ディレクトリに解凍されます。

2. systemd サービス：
   - サービス名：ppanel
   - サービス設定ファイル：/etc/systemd/system/ppanel.service
   - サービス起動コマンド：systemctl start ppanel
   - サービス停止コマンド：systemctl stop ppanel
   - サービス再起動コマンド：systemctl restart ppanel
   - サービス状態コマンド：systemctl status ppanel
   - サービスの自動起動：systemctl enable ppanel

3. 自動起動の設定は以下のコマンドで行えます。

   ```shell
   systemctl enable ppanel
   ```

4. サービスログ：サービスログはデフォルトで /root/ppanel-server-linux-amd64/ppanel.log ファイルに出力されます。

5. `journalctl -u ppanel -f` コマンドでサービスログを確認できます。

6. 設定ファイルが空または存在しない場合、サービスはデフォルト設定で起動します。設定ファイルのパスは：`./etc/ppanel.yaml` です。
   システム設定を初期化するには、`http://サーバーアドレス:8080/init` にアクセスしてください。

#### NGINX リバースプロキシ設定

以下はリバースプロキシ設定の例で、`ppanel` サービスを `api.ppanel.dev` ドメインにプロキシします。

```nginx
server {
    listen 80;
    server_name ppanel.dev;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_http_version 1.1;
        
        add_header X-Cache $upstream_cache_status;
        
       # Nginx キャッシュの設定
       
        set $static_filezbsQiET1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_filezbsQiET1 1;
            expires 1m;
            }
        if ( $static_filezbsQiET1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
    }
}
```

Cloudflareのプロキシサービスを使用する場合、ユーザーの実際のアクセスIPを取得する必要があります。Nginx設定ファイルのHTTPセクションに以下を追加してください：

- 必要な依存関係：**ngx_http_realip_module** モジュール。nginx -V コマンドでnginxがこのモジュールをコンパイルしているか確認してください。コンパイルされていない場合は、自分でコンパイルする必要があります。

```nginx
    # cloudflare 開始
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare 終了
```
```

