---
title: Administrasjonsgrensesnitt - Konfigurasjonsbeskrivelse
order: 0
group: 
  title: Frontend Distribusjon
  order: 3
toc: content
---

# **PPanel Administrasjonsgrensesnitt Distribusjonsguide**

Denne guiden gir en detaljert beskrivelse av hvordan man distribuerer PPanel administrasjonsgrensesnittet, inkludert Docker, Vercel, PM2, samt flere distribusjonsmetoder ved å bruke Node.js eller Bun direkte.

---

## **1. Miljøforberedelse**

Før distribusjon, vennligst sørg for at følgende verktøy er installert:

- **Node.js** (anbefales å installere via NVM, versjon >= 22)
- **Bun** (rask JavaScript-runtime)
- **PM2** (prosesshåndteringsverktøy for effektiv tjenesteforvaltning)
- **Docker** (for containerbasert distribusjon)

---

## **2. Konfigurasjon av Miljøvariabler**

Før distribusjon må du konfigurere følgende miljøvariabler:

```env
# Applikasjonskonfigurasjon
NEXT_PUBLIC_DEFAULT_LANGUAGE=no-NO
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Standardbruker
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

