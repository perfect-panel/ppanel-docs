---
title: Käyttäjäpuoli - Konfigurointiohjeet
order: 4
group: 
  title: Etupään käyttöönotto
  order: 3
toc: content
---

# **PPanelin käyttöönotto-opas**

Tässä oppaassa käsitellään PPanelin käyttäjäpuolen käyttöönottoa, mukaan lukien Docker, Vercel, PM2 sekä suora käyttö Node.js:llä tai Bunilla useilla eri käyttöönotto- ja asennustavoilla.

---

## **1. Ympäristön valmistelu**

Ennen käyttöönottoa varmista, että seuraavat työkalut on asennettu:

- **Node.js** (suositellaan asennettavaksi NVM:n kautta, versio >= 22)
- **Bun** (nopea JavaScript-suoritin)
- **PM2** (prosessi- ja palvelunhallintatyökalu)
- **Docker** (säilötyön käyttöönottoon)

---

## **2. Ympäristömuuttujien konfigurointi**

Ennen käyttöönottoa sinun on määritettävä seuraavat ympäristömuuttujat:

```env
# Sovelluksen konfigurointi
NEXT_PUBLIC_DEFAULT_LANGUAGE=fi-FI
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Oletuskäyttäjä
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

