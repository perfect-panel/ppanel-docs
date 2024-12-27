---
title: Serveur
order: 2
nav:
  title: Guide
  order: 1
group:
  title: Déploiement
  order: 1
toc: content
---

## Exigences de l'environnement d'exécution

| Composant                | Exigences                                                                 |
| ------------------------ | ------------------------------------------------------------------------- |
| Configuration du serveur | Minimum : 1 cœur CPU, 2 Go de RAM ; Recommandé : 2 cœurs CPU, 4 Go de RAM |
| MySQL                    | 5.7 et supérieur (MySQL 8 recommandé)                                     |
| Redis                    | 6 et supérieur                                                            |
| NGINX/Apache             | Toute version                                                             |

## Installation de Docker

Exécutez la commande suivante pour installer rapidement Docker :

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Démarrage rapide

### Initialisation via l'interface Web

PPanel prend en charge l'initialisation basée sur le Web, simplifiant ainsi le processus de configuration manuelle.

### Étapes d'initialisation

1. **Créer le fichier de configuration nécessaire** : Créez et configurez manuellement le fichier `/app/etc/ppanel.yaml` pour les configurations ultérieures.

2. **Exécuter le conteneur Docker** :

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **Accéder à la page d'initialisation** : Ouvrez votre navigateur et accédez à `http://IP_du_serveur:8080/init`.

4. **Compléter la configuration** : Suivez les instructions pour configurer le compte administrateur, la base de données MySQL et le serveur Redis.

5. **Cliquer sur le bouton d'initialisation** : Une fois la configuration terminée, cliquez sur le bouton "Initialiser", l'application enregistrera automatiquement la configuration et redémarrera.

   > **Remarque** : PPanel utilise par défaut le port **8080**, veuillez vous assurer que ce port est accessible et ajustez les paramètres du pare-feu si nécessaire.

## Déploiement avec Docker

PPanel utilise par défaut le port **8080**, veuillez vous assurer que ce port est accessible et ajustez les paramètres du pare-feu si nécessaire.

Si vous ne souhaitez pas utiliser l'initialisation Web, vous pouvez vous connecter avec le compte administrateur par défaut :

- **Nom d'utilisateur** : `admin@ppanel.dev`
- **Mot de passe** : `password`

> **Remarque** : Veuillez changer le mot de passe par défaut dès votre première connexion pour garantir la sécurité.

### Création du fichier de configuration nécessaire

Avant de commencer le déploiement avec Docker, créez et configurez manuellement le fichier `/app/etc/ppanel.yaml` pour garantir le bon fonctionnement du système. Pour des exemples de configurations détaillées, veuillez consulter la section [Exemples de configuration](#exemples-de-configuration).

### Exécution du conteneur Docker

Exécutez la commande suivante pour démarrer le conteneur :

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## Déploiement avec Docker Compose

PPanel utilise par défaut le port **8080**, veuillez vous assurer que ce port est accessible et ajustez les paramètres du pare-feu si nécessaire.

### Création du fichier de configuration nécessaire

Avant de commencer le déploiement avec Docker Compose, créez et configurez manuellement le fichier `/app/etc/ppanel.yaml` pour garantir le bon fonctionnement du système. Pour des exemples de configurations détaillées, veuillez consulter la section [Exemples de configuration](#exemples-de-configuration).

### Création du fichier de configuration Docker Compose

Créez le fichier `docker-compose.yml` :

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### Démarrer le service

Exécutez la commande suivante pour démarrer le service :

```sh
docker compose up -d
```

## Remarques importantes

- **Sécurité** : Veuillez changer le mot de passe et la clé par défaut pour garantir la sécurité de l'application.
- **Configuration des ports** : Assurez-vous que les ports nécessaires sont ouverts pour éviter les problèmes d'accès réseau.
- **Persistance des données** : Il est recommandé de monter des volumes de données lors de l'exécution des conteneurs pour assurer la persistance des données.

## Exemples de configuration

Voici un exemple de configuration pour `ppanel.yaml` :

```yaml
Host: 0.0.0.0 # IP d'écoute
Port: 8080 # Port d'exécution
Debug: true # Activer le mode débogage
JwtAuth:
  AccessSecret: votre-clé-secrète # Clé du token (veuillez modifier)
  AccessExpire: 604800 # Durée de validité du token (secondes)
Logger:
  FilePath: ./ppanel.log # Chemin du fichier journal
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Niveau de journalisation : info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Adresse de la base de données
  Dbname: vpnboard # Nom de la base de données
  Username: root # Nom d'utilisateur de la base de données
  Password: votre-mot-de-passe # Mot de passe de la base de données (veuillez modifier)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Mot de passe Redis (si applicable)
  DB: 0

Administer:
  Password: password # Mot de passe administrateur (doit être modifié)
  Email: admin@ppanel.dev # Adresse e-mail de l'administrateur
```

> **Remarque** : Après avoir modifié le fichier de configuration, veuillez redémarrer le conteneur Docker pour appliquer les modifications.

## Obtenir de l'aide

En cas de problème, veuillez consulter la documentation officielle ou contacter l'équipe de support pour obtenir de l'aide.
