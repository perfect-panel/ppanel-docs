---
title: Admin Panel - Konfigurációs Útmutató
order: 0
group: 
  title: Frontend Telepítés
  order: 3
toc: content
---

# **PPanel Admin Panel Telepítési Útmutató**

Ez az útmutató részletesen bemutatja, hogyan telepíthető a PPanel admin panel, beleértve a Docker, Vercel, PM2, valamint a Node.js vagy Bun közvetlen használatával történő telepítési módokat.

---

## **1. Környezet Előkészítése**

A telepítés előtt győződjön meg arról, hogy az alábbi eszközök telepítve vannak:

- **Node.js** (ajánlott NVM-en keresztül telepíteni, verzió >= 22)
- **Bun** (gyors JavaScript futtatókörnyezet)
- **PM2** (folyamatkezelő eszköz a szolgáltatások hatékony kezelésére)
- **Docker** (konténerizált telepítéshez)

---

## **2. Környezeti Változók Konfigurálása**

A telepítés előtt szükséges az alábbi környezeti változók konfigurálása:

```env
# Alkalmazás konfiguráció
NEXT_PUBLIC_DEFAULT_LANGUAGE=hu-HU
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Alapértelmezett felhasználó
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

