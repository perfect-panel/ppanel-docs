---
title: Déploiement rapide
order: 1
nav:
  title: Guide
  order: 1
group:
  title: Déploiement
  order: 1
toc: content
---

# Guide de déploiement rapide

> **Remarques avant le déploiement**
>
> - **Le port par défaut de l'interface de gestion est 8080** : Veuillez configurer à l'avance la résolution de nom de domaine ou vous assurer d'avoir une adresse IP disponible pour faciliter l'installation de l'interface de gestion et de l'interface utilisateur.
> - Serveur : Pour plus d'informations, veuillez consulter [Serveur](/guide/server).
> - Interface de gestion : Pour plus d'informations, veuillez consulter [Interface de gestion](/guide/admin).
> - Interface utilisateur : Pour plus d'informations, veuillez consulter [Interface utilisateur](/guide/user).

## Déploiement en un clic

Utilisez l'une des commandes suivantes pour déployer PPanel en un clic, y compris le serveur, l'interface de gestion et l'interface utilisateur :

### Option 1 : Utiliser `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Option 2 : Utiliser `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

