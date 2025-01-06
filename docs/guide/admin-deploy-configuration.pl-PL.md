---
title: Panel zarządzania - Instrukcja konfiguracji
order: 0
group: 
  title: Wdrożenie front-endu
  order: 3
toc: content
---

# **Przewodnik wdrażania panelu zarządzania PPanel**

Niniejszy przewodnik szczegółowo opisuje, jak wdrożyć panel zarządzania PPanel, w tym różne metody wdrożenia za pomocą Docker, Vercel, PM2 oraz bezpośrednio przy użyciu Node.js lub Bun.

---

## **1. Przygotowanie środowiska**

Przed wdrożeniem upewnij się, że następujące narzędzia są zainstalowane:

- **Node.js** (zalecane instalowanie przez NVM, wersja >= 22)
- **Bun** (szybkie środowisko uruchomieniowe JavaScript)
- **PM2** (narzędzie do zarządzania procesami, służące do efektywnego zarządzania usługami)
- **Docker** (do wdrożeń w kontenerach)

---

## **2. Konfiguracja zmiennych środowiskowych**

Przed wdrożeniem musisz skonfigurować następujące zmienne środowiskowe:

```env
# Konfiguracja aplikacji
NEXT_PUBLIC_DEFAULT_LANGUAGE=pl-PL
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Domyślny użytkownik
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

