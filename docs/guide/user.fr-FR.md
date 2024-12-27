---
title: Client PPanel
order: 4
nav:
  title: Guide
  order: 1
group:
  title: Déploiement
  order: 1
toc: content
---

# **Guide de déploiement du client PPanel**

Ce guide décrit en détail comment déployer le client PPanel, y compris plusieurs méthodes de déploiement avec Docker, Vercel, PM2, ainsi que l'utilisation directe de Node.js ou Bun.

---

## **1. Préparation de l'environnement**

Avant de déployer, assurez-vous que les outils suivants sont installés :

- **Node.js** (recommandé via NVM, version >= 22)
- **Bun** (runtime JavaScript rapide)
- **PM2** (outil de gestion de processus pour une gestion efficace des services)
- **Docker** (pour le déploiement en conteneur)

---

## **2. Configuration des variables d'environnement**

Avant le déploiement, vous devez configurer les variables d'environnement suivantes :

```env
# Configuration de l'application
NEXT_PUBLIC_DEFAULT_LANGUAGE=fr-FR
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Informations de contact
NEXT_PUBLIC_EMAIL=support@example.com

# Liens communautaires et réseaux sociaux
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/example
NEXT_PUBLIC_TWITTER_LINK=https://twitter.com/example
NEXT_PUBLIC_DISCORD_LINK=https://discord.com/example
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/example
NEXT_PUBLIC_LINKEDIN_LINK=https://linkedin.com/example
NEXT_PUBLIC_FACEBOOK_LINK=https://facebook.com/example
NEXT_PUBLIC_GITHUB_LINK=https://github.com/example/repository

# Utilisateur par défaut
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. Options de déploiement**

### **3.1 Déploiement avec Docker**

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

#### Déploiement avec Docker Compose

Créez un fichier `docker-compose.yml` avec le contenu suivant :

```yaml
version: '3'

services:
  ppanel-user-web:
    image: ppanel/ppanel-user-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: fr-FR
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

Démarrez le service :

```bash
docker compose up -d
```

---

### **3.2 Déploiement avec Vercel**

Cliquez sur le bouton ci-dessous pour un déploiement rapide :
[![Déployer avec Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20est%20un%20outil%20proxy%20open-source%20pur%2C%20professionnel%20et%20parfait%2C%20conçu%20pour%20être%20votre%20choix%20idéal%20pour%20l'apprentissage%20et%20l'utilisation%20pratique&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev&demo-title=Web%20Utilisateur%20PPanel&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F&from=.&project-name=ppanel-user-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fuser&skippable-integrations=1)

**Étapes :**

1. Connectez-vous ou inscrivez-vous sur [Vercel](https://vercel.com/) .
2. Cliquez sur le bouton de déploiement, fork le dépôt et sélectionnez `apps/user`.
3. Configurez les variables d'environnement.
4. Cliquez sur **Déployer** pour commencer le déploiement.

---

### **3.3 Déploiement avec PM2, Node.js ou Bun**

#### Télécharger le code

Récupérez le code depuis le dépôt GitHub officiel :

```bash
# Télécharger la dernière version du code
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Décompresser le fichier
tar -xzvf ppanel-user-web.tar.gz

# Accéder au répertoire du code
cd ppanel-user-web
```

#### Configurer les variables d'environnement

Créez un fichier `apps/user/.env` et ajoutez les variables d'environnement nécessaires (voir la configuration des variables d'environnement ci-dessus).

#### Configurer PM2

Créez un fichier `ecosystem.config.js` avec le contenu suivant :

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // peut être changé en node
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

#### Démarrer le service avec PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Démarrer le service avec Node.js ou Bun

- **Démarrage avec Node.js** :
  ```bash
  node apps/user/server.js
  ```
- **Démarrage avec Bun** :
  ```bash
  bun apps/user/server.js
  ```

---

## **4. Vérification du déploiement**

### **4.1 État du service PM2**

Exécutez la commande suivante pour vérifier :

```bash
pm2 list
```

### **4.2 Accès via le navigateur**

Accédez à `http://<Votre IP de serveur>:3000` pour vérifier le bon fonctionnement du service.

---

## **5. Gestion des services**

### **Commandes PM2**

- Arrêter le service :
  ```bash
  pm2 stop ppanel-user-web
  ```
- Redémarrer le service :
  ```bash
  pm2 restart ppanel-user-web
  ```
- Supprimer le service :
  ```bash
  pm2 delete ppanel-user-web
  ```
