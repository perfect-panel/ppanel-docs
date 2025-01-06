---
title: Gestion - Docker
order: 2
group: 
  title: Déploiement Frontend
  order: 3
toc: content
---

### Déploiement avec Docker

#### Installation de Docker

Exécutez la commande suivante pour installer Docker :

```bash
curl -fsSL https://get.docker.com | bash
```

#### Démarrer le service avec Docker

Exécutez la commande suivante pour démarrer le conteneur :

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=fr-FR \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Déploiement avec Docker Compose

Créez un fichier `docker-compose.yml` avec le contenu suivant :

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: fr-FR
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

Démarrez le service :

```bash
docker compose up -d
```

---

