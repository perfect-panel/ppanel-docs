---
title: Benutzerseite - Konfigurationsanleitung
order: 4
group: 
  title: Frontend-Bereitstellung
  order: 3
toc: content
---

# **PPanel Bereitstellungsanleitung**

Diese Anleitung beschreibt detailliert, wie die PPanel-Benutzerseite bereitgestellt wird, einschließlich verschiedener Bereitstellungsmethoden wie Docker, Vercel, PM2 sowie der direkten Verwendung von Node.js oder Bun.

---

## **1. Vorbereitung der Umgebung**

Stellen Sie vor der Bereitstellung sicher, dass die folgenden Tools installiert sind:

- **Node.js** (empfohlen wird die Installation über NVM, Version >= 22)
- **Bun** (schnelle JavaScript-Laufzeit)
- **PM2** (Prozessmanagement-Tool zur effizienten Verwaltung von Diensten)
- **Docker** (für containerisierte Bereitstellungen)

---

## **2. Konfiguration der Umgebungsvariablen**

Vor der Bereitstellung müssen Sie die folgenden Umgebungsvariablen konfigurieren:

```env
# Anwendungs-Konfiguration
NEXT_PUBLIC_DEFAULT_LANGUAGE=de-DE
NEXT_PUBLIC_SITE_URL=https://admin.beispiel.com
NEXT_PUBLIC_API_URL=https://api.beispiel.com

# Standardbenutzer
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@beispiel.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=passwort123
```

---

