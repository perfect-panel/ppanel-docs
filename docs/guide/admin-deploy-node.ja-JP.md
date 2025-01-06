---
title: 管理端-Node
order: 3
group: 
  title: フロントエンドデプロイ
  order: 3
toc: content
---

### PM2、Node.js または Bun を使用したデプロイ

#### コードのダウンロード

公式 GitHub リポジトリからコードを取得します：

```bash
# 最新バージョンのコードをダウンロード
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# ファイルを解凍
tar -xzvf ppanel-admin-web.tar.gz

# コードディレクトリに移動
cd ppanel-admin-web
```

#### 環境変数の設定

`apps/admin/.env` ファイルを作成し、必要な環境変数を追加します（上記の環境変数設定を参照）。

#### PM2 の設定

`ecosystem.config.js` ファイルを作成し、以下の内容を記述します：

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // node に変更可能
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

#### PM2 を使用してサービスを起動

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Node.js または Bun を使用してサービスを起動

- **Node.js での起動**：
  ```bash
  node apps/admin/server.js
  ```
- **Bun での起動**：
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. デプロイの確認**

### **4.1 PM2 サービスの状態**

以下のコマンドを実行して確認します：

```bash
pm2 list
```

### **4.2 ブラウザでのアクセス**

`http://<あなたのサーバー IP>:3000` にアクセスして、サービスの稼働状況を確認します。

---

## **5. サービス管理**

### **PM2 コマンド**

- サービスを停止：
  ```bash
  pm2 stop ppanel-admin-web
  ```
- サービスを再起動：
  ```bash
  pm2 restart ppanel-admin-web
  ```
- サービスを削除：
  ```bash
  pm2 delete ppanel-admin-web
  ```

