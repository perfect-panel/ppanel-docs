---
title: 管理端-構成説明
order: 0
group: 
  title: フロントエンドデプロイ
  order: 3
toc: content
---

# **PPanel 管理端デプロイガイド**

本ガイドでは、Docker、Vercel、PM2、または直接 Node.js や Bun を使用したさまざまなデプロイ方法を含む、PPanel 管理端のデプロイ方法を詳しく説明します。

---

## **1. 環境準備**

デプロイの前に、以下のツールがインストールされていることを確認してください：

- **Node.js**（NVM を通じてのインストールを推奨、バージョン >= 22）
- **Bun**（高速な JavaScript 実行環境）
- **PM2**（サービスを効率的に管理するためのプロセスマネージャ）
- **Docker**（コンテナ化デプロイ用）

---

## **2. 環境変数の設定**

デプロイの前に、以下の環境変数を設定する必要があります：

```env
# アプリケーション設定
NEXT_PUBLIC_DEFAULT_LANGUAGE=ja-JP
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# デフォルトユーザー
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

