---
title: Client - Node
order: 6
group: 
  title: Déploiement Frontend
  order: 3
toc: content
---

### Déploiement avec PM2, Node.js ou Bun

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

Créez le fichier `apps/user/.env` et ajoutez les variables d'environnement nécessaires (voir la configuration des variables d'environnement ci-dessus).

#### Configurer PM2

Créez le fichier `ecosystem.config.js` avec le contenu suivant :

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

## **5. Gestion du service**

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

