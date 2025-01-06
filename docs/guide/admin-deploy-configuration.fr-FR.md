---
title: Gestion - Instructions de configuration
order: 0
group: 
  title: Déploiement frontal
  order: 3
toc: content
---

# **Guide de déploiement de l'interface de gestion PPanel**

Ce guide décrit en détail comment déployer l'interface de gestion PPanel, y compris les différentes méthodes de déploiement avec Docker, Vercel, PM2, ainsi que l'utilisation directe de Node.js ou Bun.

---

## **1. Préparation de l'environnement**

Avant de déployer, veuillez vous assurer que les outils suivants sont installés :

- **Node.js** (recommandé d'installer via NVM, version >= 22)
- **Bun** (runtime JavaScript rapide)
- **PM2** (outil de gestion de processus pour une gestion efficace des services)
- **Docker** (pour le déploiement en conteneur)

---

## **2. Configuration des variables d'environnement**

Avant le déploiement, vous devez configurer les variables d'environnement suivantes :

```env
# Configuration de l'application
NEXT_PUBLIC_DEFAULT_LANGUAGE=fr-FR
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Utilisateur par défaut
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

