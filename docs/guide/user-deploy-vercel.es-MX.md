---
title: Usuario - Vercel
order: 7
group: 
  title: Despliegue Frontend
  order: 3
toc: content
---

### Despliegue con Vercel

Haz clic en el siguiente botón para desplegar rápidamente:

[![Desplegar en Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20es%20una%20herramienta%20de%20panel%20proxy%20abierto%20pura%2C%20profesional%20y%20perfecta%2C%20diseñada%20para%20ser%20tu%20opción%20ideal%20para%20el%20aprendizaje%20y%20uso%20práctico\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20usuario%20Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**Pasos:**

1. Inicia sesión o regístrate en [Vercel](https://vercel.com/) .
2. Haz clic en el botón de despliegue, forkea el repositorio y selecciona `apps/user`.
3. Configura las variables de entorno.
4. Haz clic en **Deploy** para comenzar el despliegue.

---

### **3.3 Despliegue usando PM2, Node.js o Bun**

#### Descargar el código

Obtén el código desde el repositorio oficial de GitHub:

```bash
# Descargar la última versión del código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Descomprimir el archivo
tar -xzvf ppanel-user-web.tar.gz

# Entrar al directorio del código
cd ppanel-user-web
```

#### Configurar las variables de entorno

Crea el archivo `apps/user/.env` y agrega las variables de entorno necesarias (consulta la configuración de variables de entorno anterior).

#### Configurar PM2

Crea el archivo `ecosystem.config.js` con el siguiente contenido:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // se puede cambiar a node
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

