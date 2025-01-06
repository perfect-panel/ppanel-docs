---
title: Cliente - Node
order: 6
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
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# Descomprimir el archivo
tar -xzvf ppanel-user-web.tar.gz

# Entrar en el directorio del código
cd ppanel-user-web
```

#### Configurar variables de entorno

Crea el archivo `apps/user/.env` y añade las variables de entorno necesarias (consulta la configuración de variables de entorno anterior).

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

#### Iniciar el servicio con Node.js o Bun

- **Inicio con Node.js**:

  ```bash
  node apps/user/server.js
  ```

- **Inicio con Bun**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. Verificar el despliegue**

### **4.1 Estado del servicio PM2**

Ejecuta el siguiente comando para comprobar:

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
  pm2 stop ppanel-user-web
  ```

- Reiniciar el servicio:

  ```bash
  pm2 restart ppanel-user-web
  ```

- Eliminar el servicio:

  ```bash
  pm2 delete ppanel-user-web
  ```

