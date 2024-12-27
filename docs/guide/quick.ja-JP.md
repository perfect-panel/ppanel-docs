---
title: クイックデプロイ
order: 1
nav:
  title: ガイド
  order: 1
group:
  title: デプロイ
  order: 1
toc: content
---

# クイックデプロイガイド

> **デプロイ前の注意事項**
>
> - **管理端のデフォルトポートは 8080 です**：事前にドメインの設定を行うか、利用可能な IP アドレスを確保して、管理端とユーザ端のインストールをスムーズに行えるようにしてください。
> - サーバー：詳細については [サーバー](/guide/server) を参照してください。
> - 管理端：詳細については [管理端](/guide/admin) を参照してください。
> - ユーザ端：詳細については [ユーザ端](/guide/user) を参照してください。

## ワンクリックデプロイ

以下のいずれかのコマンドを使用して、PPanel をワンクリックでデプロイできます。これにはサーバー、管理端、およびユーザ端が含まれます。

### オプション 1：`curl` を使用

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### オプション 2：`wget` を使用

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

