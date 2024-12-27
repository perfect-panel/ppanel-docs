---
title: Panel de Administración
order: 3
nav:
  title: Guía
  order: 1
group:
  title: Despliegue
  order: 1
toc: content
---

# **Guía de Despliegue del Panel de Administración PPanel**

Esta guía detalla cómo desplegar el Panel de Administración PPanel, incluyendo múltiples métodos de despliegue como Docker, Vercel, PM2, así como el uso directo de Node.js o Bun.

---

## **1. Preparación del Entorno**

Antes de desplegar, asegúrese de que las siguientes herramientas estén instaladas:

- **Node.js** (se recomienda instalar a través de NVM, versión >= 22)
- **Bun** (un entorno de ejecución de JavaScript rápido)
- **PM2** (herramienta de gestión de procesos para gestionar servicios de manera eficiente)
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
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=contraseña123
```

---

## **3. Opciones de Despliegue**

### **3.1 Despliegue con Docker**

#### Instalación de Docker

Ejecute el siguiente comando para instalar Docker:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Iniciar el servicio con Docker

Ejecute el siguiente comando para iniciar el contenedor:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=es-ES \
  -e NEXT_PUBLIC_SITE_URL=https://admin.ejemplo.com \
  -e NEXT_PUBLIC_API_URL=https://api.ejemplo.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@ejemplo.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=contraseña123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Despliegue con Docker Compose

Cree un archivo `docker-compose.yml` con el siguiente contenido:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: es-ES
      NEXT_PUBLIC_SITE_URL: https://admin.ejemplo.com
      NEXT_PUBLIC_API_URL: https://api.ejemplo.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@ejemplo.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: contraseña123
```

Inicie el servicio:

```bash
docker compose up -d
```

---

### **3.2 Despliegue con Vercel**

Haga clic en el siguiente botón para desplegar rápidamente:

[![Desplegar en Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20es%20una%20herramienta%20de%20panel%20proxy%20abierto%20y%20perfecto%2C%20diseñada%20para%20ser%20su%20opción%20ideal%20para%20el%20aprendizaje%20y%20uso%20práctico&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=Panel%20de%20Administración%20PPanel&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**Pasos:**

1. Inicie sesión o regístrese en [Vercel](https://vercel.com/).
2. Haga clic en el botón de despliegue, haga un fork del repositorio y seleccione `apps/admin`.
3. Configure las variables de entorno.
4. Haga clic en **Deploy** para comenzar el despliegue.

---

### **3.3 Despliegue con PM2, Node.js o Bun**

#### Descargar el código

Obtenga el código desde el repositorio oficial de GitHub:

```bash
# Descargar la última versión del código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Descomprimir el archivo
tar -xzvf ppanel-admin-web.tar.gz

# Entrar en el directorio del código
cd ppanel-admin-web
```

#### Configurar las variables de entorno

Cree un archivo `apps/admin/.env` y agregue las variables de entorno necesarias (consulte la configuración de variables de entorno anterior).

#### Configurar PM2

Cree un archivo `ecosystem.config.js` con el siguiente contenido:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
      interpreter: 'bun', // Puede cambiar a node
      watch: true,
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
      },
    },
  ],
};
```

#### Iniciar el servicio con PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Iniciar el servicio con Node.js o Bun

- **Inicio con Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Inicio con Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verificación del Despliegue**

### **4.1 Estado del Servicio PM2**

Ejecute el siguiente comando para verificar:

```bash
pm2 list
```

### **4.2 Acceso desde el Navegador**

Visite `http://<su dirección IP del servidor>:3000` para verificar el estado del servicio.

---

## **5. Gestión del Servicio**

### **Comandos de PM2**

- Detener el servicio:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- Reiniciar el servicio:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- Eliminar el servicio:
  ```bash
  pm2 delete ppanel-admin-web
  ```
