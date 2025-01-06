---
title: Hallintapaneeli - Konfigurointiohjeet
order: 0
group: 
  title: Etupään käyttöönotto
  order: 3
toc: content
---

# **PPanel Hallintapaneelin käyttöönotto-opas**

Tässä oppaassa käsitellään yksityiskohtaisesti, kuinka PPanel hallintapaneeli otetaan käyttöön, mukaan lukien Docker, Vercel, PM2 sekä useita suoria käyttöönotto- ja käyttötapoja Node.js:llä tai Bunilla.

---

## **1. Ympäristön valmistelu**

Ennen käyttöönottoa varmista, että seuraavat työkalut on asennettu:

- **Node.js** (suositellaan asennettavaksi NVM:n kautta, versio >= 22)
- **Bun** (nopea JavaScript-suoritin)
- **PM2** (prosessi- ja palvelunhallintatyökalu)
- **Docker** (säilöityyn käyttöönottoon)

---

## **2. Ympäristömuuttujien konfigurointi**

Ennen käyttöönottoa sinun on määritettävä seuraavat ympäristömuuttujat:

```env
# Sovelluksen konfigurointi
NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI
NEXT_PUBLIC_SITE_URL=https://admin.esimerkki.com
NEXT_PUBLIC_API_URL=https://api.esimerkki.com

# Oletuskäyttäjä
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@esimerkki.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=salasana123
```

---

