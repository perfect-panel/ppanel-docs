---
title: ユーザー端
order: 4
nav:
  title: ガイド
  order: 1
group:
  title: デプロイ
  order: 1
toc: content
---

# **PPanel ユーザー端デプロイガイド**

本ガイドでは、Docker、Vercel、PM2、または Node.js や Bun を直接使用したさまざまなデプロイ方法を含む、PPanel ユーザー端のデプロイ方法を詳しく説明します。

---

## **1. 環境準備**

デプロイの前に、以下のツールがインストールされていることを確認してください：

- **Node.js**（NVM を使用してインストールすることを推奨、バージョン >= 22）
- **Bun**（高速な JavaScript ランタイム）
- **PM2**（サービスを効率的に管理するためのプロセスマネージャ）
- **Docker**（コンテナ化デプロイ用）

---

## **2. 環境変数の設定**

デプロイの前に、以下の環境変数を設定する必要があります：

```env
# アプリケーション設定
NEXT_PUBLIC_DEFAULT_LANGUAGE=ja-JP
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# 連絡先情報
NEXT_PUBLIC_EMAIL=support@example.com

# コミュニティおよびソーシャルメディアリンク
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# デフォルトユーザー
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. デプロイオプション**

### **3.1 Docker を使用したデプロイ**

#### Docker のインストール

以下のコマンドを実行して Docker をインストールします：

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker を使用してサービスを起動

以下のコマンドを実行してコンテナを起動します：

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=ja-JP \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_EMAIL=support@example.com \
  -e NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example \
  -e NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example \
  -e NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example \
  -e NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example \
  -e NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example \
  -e NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example \
  -e NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Docker Compose を使用したデプロイ

`docker-compose.yml`ファイルを作成し、以下の内容を記述します：

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ja-JP
      NEXT_PUBLIC_SITE_URL: https://example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_EMAIL: support@example.com
      NEXT_PUBLIC_TELEGRAM_LINK: https://t.me/example
      NEXT_PUBLIC_TWITTER_LINK: https://twitter.com/example
      NEXT_PUBLIC_DISCORD_LINK: https://discord.com/example
      NEXT_PUBLIC_INSTAGRAM_LINK: https://instagram.com/example
      NEXT_PUBLIC_LINKEDIN_LINK: https://linkedin.com/example
      NEXT_PUBLIC_FACEBOOK_LINK: https://facebook.com/example
      NEXT_PUBLIC_GITHUB_LINK: https://github.com/example/repository
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

サービスを起動します：

```bash
docker compose up -d
```

---

### **3.2 Vercel を使用したデプロイ**

以下のボタンをクリックして迅速にデプロイできます：
[![Vercelを使用してデプロイ](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=PPanel%20User%20Web&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**手順：**

1. [Vercel](https://vercel.com/)にログインまたは登録します。
2. デプロイボタンをクリックし、リポジトリをフォークして`apps/user`を選択します。
3. 環境変数を設定します。
4. **Deploy**をクリックしてデプロイを開始します。

---

### **3.3 PM2、Node.js、または Bun を使用したデプロイ**

#### コードのダウンロード

公式 GitHub リポジトリからコードを取得します：

```bash
# 最新バージョンのコードをダウンロード
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# ファイルを解凍
tar -xzvf ppanel-user-web.tar.gz

# コードディレクトリに移動
cd ppanel-user-web
```

#### 環境変数の設定

`apps/user/.env`ファイルを作成し、必要な環境変数を追加します（上記の環境変数設定を参照）。

#### PM2 の設定

`ecosystem.config.js`ファイルを作成し、以下の内容を記述します：

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // nodeに変更可能
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

- **Node.js で起動**：
  ```bash
  node apps/user/server.js
  ```
- **Bun で起動**：
  ```bash
  bun apps/user/server.js
  ```

---

## **4. デプロイの確認**

### **4.1 PM2 サービスの状態**

以下のコマンドを実行して確認します：

```bash
pm2 list
```

### **4.2 ブラウザでのアクセス**

`http://<あなたのサーバーIP>:3000`にアクセスしてサービスの動作を確認します。

---

## **5. サービス管理**

### **PM2 コマンド**

- サービスを停止：
  ```bash
  pm2 stop ppanel-user-web
  ```
- サービスを再起動：
  ```bash
  pm2 restart ppanel-user-web
  ```
- サービスを削除：
  ```bash
  pm2 delete ppanel-user-web
  ```
