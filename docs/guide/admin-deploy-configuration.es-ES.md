---
title: Guía de Configuración del Panel de Administración
order: 0
group: 
  title: Despliegue Frontend
  order: 3
toc: content
---

# **Guía de Despliegue del Panel de Administración PPanel**

Esta guía detalla cómo desplegar el Panel de Administración PPanel, incluyendo múltiples métodos de despliegue como Docker, Vercel, PM2, así como el uso directo de Node.js o Bun.

---

## **1. Preparación del Entorno**

Antes de desplegar, asegúrese de que las siguientes herramientas estén instaladas:

- **Node.js** (se recomienda instalar a través de NVM, versión >= 22)
- **Bun** (un entorno de ejecución de JavaScript rápido)
- **PM2** (herramienta de gestión de procesos para una gestión eficiente de servicios)
- **Docker** (para despliegue en contenedores)

---

## **2. Configuración de Variables de Entorno**

Antes de desplegar, necesita configurar las siguientes variables de entorno:

```env
# Configuración de la aplicación
NEXT_PUBLIC_DEFAULT_LANGUAGE=es-ES
NEXT_PUBLIC_SITE_URL=https://admin.ejemplo.com
NEXT_PUBLIC_API_URL=https://api.ejemplo.com

# Usuario por defecto
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@ejemplo.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

