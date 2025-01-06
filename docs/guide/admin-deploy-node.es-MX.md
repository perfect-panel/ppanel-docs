---
title: Gestión de Node
order: 3
group: 
  title: Despliegue Frontend
  order: 3
toc: content
---

### Despliegue usando PM2, Node.js o Bun

#### Descargar el código

Obtén el código desde el repositorio oficial de GitHub:

```bash
# Descargar la última versión del código
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# Descomprimir el archivo
tar -xzvf ppanel-admin-web.tar.gz

# Entrar al directorio del código
cd ppanel-admin-web
```

#### Configurar variables de entorno

Crea el archivo `apps/admin/.env` y añade las variables de entorno necesarias (consulta la configuración de variables de entorno anterior).

#### Configurar PM2

Crea el archivo `ecosystem.config.js` con el siguiente contenido:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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

#### Iniciar el servicio usando PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Iniciar el servicio usando Node.js o Bun

- **Inicio con Node.js**:
  ```bash
  node apps/admin/server.js
  ```
- **Inicio con Bun**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. Verificar el despliegue**

### **4.1 Estado del servicio PM2**

Ejecuta el siguiente comando para verificar:

```bash
pm2 list
```

### **4.2 Acceso desde el navegador**

Visita `http://<su dirección IP del servidor>:3000` para verificar el estado del servicio.

---

## **5. Gestión del servicio**

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

