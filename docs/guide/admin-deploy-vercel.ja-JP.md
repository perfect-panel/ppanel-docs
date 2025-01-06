---
title: 管理端-Vercel
order: 1
group: 
  title: フロントエンドデプロイ
  order: 3
toc: content
---

### Vercelを使用したデプロイ\*\*

以下のボタンをクリックして迅速にデプロイします：

[![Vercelでデプロイ](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20は%20純粋で%20プロフェッショナルで%20完璧な%20オープンソースの%20プロキシパネルツールであり、%20学習と実用に最適な選択肢として設計されています\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20管理ウェブ\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**手順：**

1. [Vercel](https://vercel.com/)にログインまたは登録します。
2. デプロイボタンをクリックし、リポジトリをフォークして `apps/admin` を選択します。
3. 環境変数を設定します。
4. **Deploy** をクリックしてデプロイを開始します。

---

### **3.3 PM2、Node.js、またはBunを使用したデプロイ**

#### コードのダウンロード

公式GitHubリポジトリからコードを取得します：

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

#### PM2の設定

`ecosystem.config.js` ファイルを作成し、以下の内容を記述します：

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### PM2を使用してサービスを起動

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

