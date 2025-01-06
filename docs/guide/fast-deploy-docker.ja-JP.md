---
title: Docker
order: 0
group:
  title: クイックデプロイ
  order: 1
toc: content
---

# クイックデプロイガイド

> **デプロイ前の注意事項**
>
> - **管理ポートはデフォルトで 8080**：ドメインの解決を事前に設定するか、利用可能な IP アドレスがあることを確認してください。これにより、管理端とユーザー端のインストールがスムーズに行えます。
> - サーバー：詳細については [サーバー](/guide/server) を参照してください。
> - 管理端：詳細については [管理端](/guide/admin) を参照してください。
> - ユーザー端：詳細については [ユーザー端](/guide/user) を参照してください。

## ワンクリックデプロイ

以下のいずれかのコマンドを使用して、PPanel をワンクリックでデプロイできます。サーバー、管理端、ユーザー端が含まれます。

### オプション 1：`curl` を使用

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### オプション 2：`wget` を使用

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

