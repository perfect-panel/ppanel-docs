```markdown
---
title: Instructions de configuration
order: 0
group: 
  title: Déploiement du serveur
  order: 2
toc: content
---

## Exigences de l'environnement d'exécution

| Composant       | Exigences                               |
| --------------- | --------------------------------------- |
| Configuration du serveur | Minimum : 1 cœur CPU, 2 Go de RAM ; Recommandé : 2 cœurs CPU, 4 Go de RAM |
| MySQL           | 5.7 et supérieur (MySQL 8 recommandé)  |
| Redis           | 6 et supérieur                          |
| NGINX/Apache    | Toute version                          |

### Description du fichier de configuration

#### 1. Chemin du fichier de configuration

Le chemin par défaut du fichier de configuration est : `./etc/ppanel.yaml`, il peut être spécifié via le paramètre de démarrage `--config`.

#### 2. Format du fichier de configuration

- Le fichier de configuration est au format YAML, supporte les commentaires, et doit être nommé xxx.yaml.

```yaml
# Exemple de fichier de configuration
Host:               # Adresse d'écoute du service, par défaut : 0.0.0.0
Port:               # Port d'écoute du service, par défaut : 8080
Debug:              # Activer le mode débogage, désactive la fonction de journalisation en arrière-plan, par défaut : false
JwtAuth:            # Configuration de l'authentification JWT
  AccessSecret:     # Clé du jeton d'accès, par défaut : générée aléatoirement
  AccessExpire:     # Durée d'expiration du jeton d'accès, en secondes, par défaut : 604800
Logger:             # Configuration des journaux
  FilePath:         # Chemin du fichier journal, par défaut : ./ppanel.log
  MaxSize:          # Taille maximale du fichier journal, en Mo, par défaut : 50
  MaxBackup:        # Nombre maximal de sauvegardes de fichiers journaux, par défaut : 3
  MaxAge:           # Durée maximale de conservation des fichiers journaux, en jours, par défaut : 30
  Compress:         # Compresser les fichiers journaux, par défaut : true
  Level:            # Niveau de journalisation, par défaut : info, options : debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Adresse MySQL, obligatoire
  Username:         # Nom d'utilisateur MySQL, obligatoire
  Password:         # Mot de passe MySQL, obligatoire
  Dbname:           # Nom de la base de données MySQL, obligatoire
  Config:           # Valeurs par défaut de la configuration MySQL charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Nombre maximal de connexions inactives, par défaut : 10
  MaxOpenConns:     # Nombre maximal de connexions ouvertes, par défaut : 100
  LogMode:          # Niveau de journalisation, par défaut : info, options : debug, error, warn, info
  LogZap:           # Utiliser zap pour enregistrer les requêtes SQL, par défaut : true
  SlowThreshold:    # Seuil de requêtes lentes, en millisecondes, par défaut : 1000
Redis:
  Host:             # Adresse Redis, par défaut : localhost:6379
  Pass:             # Mot de passe Redis, par défaut : ""
  DB:               # Base de données Redis, par défaut : 0

Administer:
  Email:            # Email de connexion à l'interface d'administration, par défaut : admin@ppanel.dev
  Password:         # Mot de passe de connexion à l'interface d'administration, par défaut : password

```

#### 3. Description des paramètres du fichier de configuration

- `Host`: Adresse d'écoute du service, par défaut : **0.0.0.0**
- `Port`: Port d'écoute du service, par défaut : **8080**
- `Debug`: Activer le mode débogage, désactive la fonction de journalisation en arrière-plan, par défaut : **false**
- `JwtAuth`: Configuration de l'authentification JWT
  - `AccessSecret`: Clé du jeton d'accès, par défaut : **générée aléatoirement**
  - `AccessExpire`: Durée d'expiration du jeton d'accès, en secondes, par défaut : **604800**
- `Logger`: Configuration des journaux
- `FilePath`: Chemin du fichier journal, par défaut : **./ppanel.log**
- `MaxSize`: Taille maximale du fichier journal, en Mo, par défaut : **50**
- `MaxBackup`: Nombre maximal de sauvegardes de fichiers journaux, par défaut : **3**
- `MaxAge`: Durée maximale de conservation des fichiers journaux, en jours, par défaut : **30**
- `Compress`: Compresser les fichiers journaux, par défaut : **true**
- `Level`: Niveau de journalisation, par défaut : **info**, options : **debug, info, warn, error, panic, fatal**
- `MySQL`: Configuration MySQL
  - `Addr`: Adresse MySQL, obligatoire
  - `Username`: Nom d'utilisateur MySQL, obligatoire
  - `Password`: Mot de passe MySQL, obligatoire
  - `Dbname`: Nom de la base de données MySQL, obligatoire
  - `Config`: Valeurs par défaut de la configuration MySQL charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Nombre maximal de connexions inactives, par défaut : **10**
  - `MaxOpenConns`: Nombre maximal de connexions ouvertes, par défaut : **100**
  - `LogMode`: Niveau de journalisation, par défaut : **info**, options : **debug, error, warn, info**
  - `LogZap`: Utiliser zap pour enregistrer les requêtes SQL, par défaut : **true**
  - `SlowThreshold`: Seuil de requêtes lentes, en millisecondes, par défaut : **1000**
- `Redis`: Configuration Redis
- `Host`: Adresse Redis, par défaut : **localhost:6379**
- `Pass`: Mot de passe Redis, par défaut : **""**
- `DB`: Base de données Redis, par défaut : **0**
- `Administer`: Configuration de connexion à l'interface d'administration
  - `Email`: Email de connexion à l'interface d'administration, par défaut : **<admin@ppanel.dev>**
  - `Password`: Mot de passe de connexion à l'interface d'administration, par défaut : **password**

#### 4. Variables d'environnement

Les variables d'environnement prises en charge sont les suivantes :

| Variable d'environnement | Élément de configuration | Exemple                                      |
| ------------------------ | ----------------------- | :------------------------------------------ |
| PPANEL\_DB              | Configuration MySQL     | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS           | Configuration Redis     | redis\://localhost:6379                     |
```

