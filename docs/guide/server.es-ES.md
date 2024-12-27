---
title: Servidor
order: 2
nav:
  title: Guía
  order: 1
group:
  title: Despliegue
  order: 1
toc: content
---

## Requisitos del entorno de ejecución

| Componente      | Requisitos                              |
| --------------- | --------------------------------------- |
| Configuración del servidor | Mínimo: 1 núcleo de CPU, 2GB de RAM; Recomendado: 2 núcleos de CPU, 4GB de RAM |
| MySQL           | 5.7 o superior (se recomienda MySQL 8) |
| Redis           | 6 o superior                            |
| NGINX/Apache    | Cualquier versión                       |

## Instalación de Docker

Ejecute el siguiente comando para instalar Docker rápidamente:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Comenzar rápidamente

### Inicialización a través de la interfaz web

PPanel admite la inicialización basada en la web, lo que simplifica el proceso de configuración manual.

### Pasos de inicialización

1. **Crear el archivo de configuración necesario**: Primero, cree y configure manualmente el archivo `/app/etc/ppanel.yaml` para la configuración posterior.

2. **Ejecutar el contenedor de Docker**:

   ```sh
   docker run -d \
     --network host \
     --name ppanel-server \
     -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
     --restart=always \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     ppanel/ppanel-server:beta
   ```

3. **Acceder a la página de inicialización**: En su navegador, acceda a `http://IP_del_servidor:8080/init`.

4. **Completar la configuración**: Siga las instrucciones para configurar la cuenta de administrador, la base de datos MySQL y el servidor Redis.

5. **Hacer clic en el botón de inicialización**: Después de completar la configuración, haga clic en el botón "Inicializar", la aplicación guardará automáticamente la configuración y se reiniciará.

   > **Nota**: PPanel utiliza el puerto **8080** por defecto, asegúrese de que este puerto sea accesible y ajuste la configuración del firewall si es necesario.

## Despliegue usando Docker

PPanel utiliza el puerto **8080** por defecto, asegúrese de que este puerto sea accesible y ajuste la configuración del firewall si es necesario.

Si no utiliza la inicialización web, puede iniciar sesión con la cuenta de administrador predeterminada:

- **Nombre de usuario**: `admin@ppanel.dev`
- **Contraseña**: `password`

> **Nota**: Cambie la contraseña predeterminada lo antes posible después del primer inicio de sesión para garantizar la seguridad.

### Crear el archivo de configuración necesario

Antes de comenzar el despliegue de Docker, primero cree y configure manualmente el archivo `/app/etc/ppanel.yaml` para garantizar que el sistema funcione correctamente. Para ejemplos detallados de las opciones de configuración, consulte la sección [Ejemplo de opciones de configuración](#ejemplo-de-opciones-de-configuración) de la documentación.

### Ejecutar el contenedor de Docker

Ejecute el siguiente comando para iniciar el contenedor:

```sh
docker run -d \
  --network host \
  --name ppanel-server \
  -v /app/etc/ppanel.yaml:/app/etc/ppanel.yaml \
  --restart=always \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  ppanel/ppanel-server:beta
```

## Despliegue usando Docker Compose

PPanel utiliza el puerto **8080** por defecto, asegúrese de que este puerto sea accesible y ajuste la configuración del firewall si es necesario.

### Crear el archivo de configuración necesario

Antes de comenzar el despliegue de Docker Compose, primero cree y configure manualmente el archivo `/app/etc/ppanel.yaml` para garantizar que el sistema funcione correctamente. Para ejemplos detallados de las opciones de configuración, consulte la sección [Ejemplo de opciones de configuración](#ejemplo-de-opciones-de-configuración) de la documentación.

### Crear el archivo de configuración de Docker Compose

Cree el archivo `docker-compose.yml`:

```yaml
version: '3'

services:
  ppanel-server:
    image: ppanel/ppanel-server:beta
    container_name: ppanel-server
    network_mode: host
    volumes:
      - /app/etc/ppanel.yaml:/app/etc/ppanel.yaml
    restart: always
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
```

### Iniciar el servicio

Ejecute el siguiente comando para iniciar el servicio:

```sh
docker compose up -d
```

## Consejos importantes

- **Seguridad**: Asegúrese de cambiar la contraseña y la clave predeterminadas para garantizar la seguridad de la aplicación.
- **Configuración de puertos**: Asegúrese de que los puertos necesarios estén abiertos para evitar problemas de acceso a la red.
- **Persistencia de datos**: Se recomienda montar volúmenes de datos al ejecutar contenedores para lograr la persistencia de datos.

## Ejemplo de opciones de configuración

A continuación se muestra un ejemplo de las opciones de configuración de `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # IP de escucha
Port: 8080 # Puerto de ejecución
Debug: true # Activar modo de depuración
JwtAuth:
  AccessSecret: your-secret-key # Clave del token (por favor, modifique)
  AccessExpire: 604800 # Duración del token (segundos)
Logger:
  FilePath: ./ppanel.log # Ruta del archivo de registro
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Nivel de registro: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Dirección de la base de datos
  Dbname: vpnboard # Nombre de la base de datos
  Username: root # Nombre de usuario de la base de datos
  Password: your-password # Contraseña de la base de datos (por favor, modifique)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Contraseña de Redis (si la hay)
  DB: 0

Administer:
  Password: password # Contraseña del administrador (debe cambiarse)
  Email: admin@ppanel.dev # Dirección de correo electrónico del administrador
```

> **Nota**: Después de modificar el archivo de configuración, reinicie el contenedor de Docker para aplicar los cambios.

## Obtener soporte

Si encuentra problemas, consulte la documentación oficial o comuníquese con el equipo de soporte para obtener ayuda.

