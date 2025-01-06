---
title: Gestion - Vercel
order: 1
group: 
  title: Déploiement Frontend
  order: 3
toc: content
---

### Déployer avec Vercel

Cliquez sur le bouton ci-dessous pour déployer rapidement :

[![Déployer sur Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20est%20un%20outil%20de%20proxy%20open-source%20pur%2C%20professionnel%20et%20parfait%2C%20conçu%20pour%20être%20votre%20choix%20idéal%20pour%20l'apprentissage%20et%20l'utilisation%20pratique\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev\&demo-title=PPanel%20Admin%20Web\&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F\&from=.\&project-name=ppanel-admin-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fadmin\&skippable-integrations=1)

**Étapes :**

1. Connectez-vous ou inscrivez-vous sur [Vercel](https://vercel.com/) .
2. Cliquez sur le bouton de déploiement, fork le dépôt et sélectionnez `apps/admin`.
3. Configurez les variables d'environnement.
4. Cliquez sur **Déployer** pour commencer le déploiement.

---

### **3.3 Déployer avec PM2, Node.js ou Bun**

#### Télécharger le code

Obtenez le code depuis le dépôt GitHub officiel :

```bash
# Télécharger la dernière version du code
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Décompresser le fichier
tar -xzvf ppanel-admin-web.tar.gz

# Accéder au répertoire du code
cd ppanel-admin-web
```

#### Configurer les variables d'environnement

Créez le fichier `apps/admin/.env` et ajoutez les variables d'environnement nécessaires (voir la configuration des variables d'environnement ci-dessus).

#### Configurer PM2

Créez le fichier `ecosystem.config.js` avec le contenu suivant :

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

