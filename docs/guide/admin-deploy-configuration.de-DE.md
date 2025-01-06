---
title: Verwaltungsoberfläche - Konfigurationsanleitung
order: 0
group: 
  title: Frontend-Bereitstellung
  order: 3
toc: content
---

# **PPanel Verwaltungsoberfläche Bereitstellungsanleitung**

Diese Anleitung beschreibt im Detail, wie die PPanel Verwaltungsoberfläche bereitgestellt wird, einschließlich verschiedener Bereitstellungsmethoden wie Docker, Vercel, PM2 sowie der direkten Verwendung von Node.js oder Bun.

---

## **1. Vorbereitung der Umgebung**

Stellen Sie vor der Bereitstellung sicher, dass die folgenden Werkzeuge installiert sind:

- **Node.js** (empfohlen wird die Installation über NVM, Version >= 22)
- **Bun** (schnelle JavaScript-Laufzeitumgebung)
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

