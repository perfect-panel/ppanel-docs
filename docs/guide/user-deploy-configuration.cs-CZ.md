---
title: Uživatelský rozhraní - Konfigurační pokyny
order: 4
group: 
  title: Nasazení na front-end
  order: 3
toc: content
---

# **PPanel Průvodce nasazením**

Tento průvodce podrobně popisuje, jak nasadit uživatelské rozhraní PPanel, včetně různých metod nasazení pomocí Dockeru, Vercelu, PM2 a přímého použití Node.js nebo Bunu.

---

## **1. Příprava prostředí**

Před nasazením se ujistěte, že máte nainstalovány následující nástroje:

- **Node.js** (doporučuje se instalace pomocí NVM, verze >= 22)
- **Bun** (rychlý JavaScript runtime)
- **PM2** (nástroj pro správu procesů, určený pro efektivní správu služeb)
- **Docker** (pro nasazení v kontejnerech)

---

## **2. Konfigurace proměnných prostředí**

Před nasazením je třeba nakonfigurovat následující proměnné prostředí:

```env
# Konfigurace aplikace
NEXT_PUBLIC_DEFAULT_LANGUAGE=cs-CZ
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Výchozí uživatel
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

