---
title: ユーザー端-Docker
order: 5
group: 
  title: フロントエンドデプロイ
  order: 3
toc: content
---

### Dockerを使用したデプロイ

#### Dockerのインストール

以下のコマンドを実行してDockerをインストールします：

```bash
curl -fsSL https://get.docker.com | bash
```

#### Dockerを使用してサービスを起動

以下のコマンドを実行してコンテナを起動します：

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=ja-JP \
  -e NEXT_PUBLIC_SITE_URL=https://user.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=user@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-user-web \
  ppanel/ppanel-user-web:latest
```

#### Docker Composeを使用したデプロイ

`docker-compose.yml` ファイルを作成し、以下の内容を記述します：

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: ja-JP
      NEXT_PUBLIC_SITE_URL: https://user.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: user@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

サービスを起動します：

```bash
docker compose up -d
```

---

