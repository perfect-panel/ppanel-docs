```markdown
---
title: Instrucciones de Configuración
order: 0
group: 
  title: Despliegue del Servidor
  order: 2
toc: content
---

## Requisitos del Entorno de Ejecución

| Componente      | Requisitos                              |
| --------------- | --------------------------------------- |
| Configuración del Servidor | Mínimo: 1 núcleo de CPU, 2GB de RAM; Recomendado: 2 núcleos de CPU, 4GB de RAM |
| MySQL           | 5.7 o superior (Recomendado MySQL 8)   |
| Redis           | 6 o superior                            |
| NGINX/Apache    | Cualquier versión                       |

### Descripción del Archivo de Configuración

#### 1. Ruta del Archivo de Configuración

La ruta predeterminada del archivo de configuración es: `./etc/ppanel.yaml`, se puede especificar la ruta del archivo de configuración mediante el parámetro de inicio `--config`.

#### 2. Formato del Archivo de Configuración

- El archivo de configuración está en formato YAML, admite comentarios y se nombra como xxx.yaml.

```yaml
# Ejemplo de archivo de configuración
Host:               # Dirección de escucha del servicio, predeterminado: 0.0.0.0
Port:               # Puerto de escucha del servicio, predeterminado: 8080
Debug:              # Si se habilita el modo de depuración, no se podrá usar la función de registro en segundo plano, predeterminado: false
JwtAuth:            # Configuración de autenticación JWT
  AccessSecret:     # Clave del token de acceso, predeterminado: generado aleatoriamente
  AccessExpire:     # Tiempo de expiración del token de acceso, en segundos, predeterminado: 604800
Logger:             # Configuración de registro
  FilePath:         # Ruta del archivo de registro, predeterminado: ./ppanel.log
  MaxSize:          # Tamaño máximo del archivo de registro, en MB, predeterminado: 50
  MaxBackup:        # Número máximo de copias de seguridad del archivo de registro, predeterminado: 3
  MaxAge:           # Tiempo máximo de conservación del archivo de registro, en días, predeterminado: 30
  Compress:         # Si se comprime el archivo de registro, predeterminado: true
  Level:            # Nivel de registro, predeterminado: info, opciones: debug, info, warn, error, panic, fatal
MySQL:
  Addr:             # Dirección de MySQL, obligatorio
  Username:         # Nombre de usuario de MySQL, obligatorio
  Password:         # Contraseña de MySQL, obligatorio
  Dbname:           # Nombre de la base de datos de MySQL, obligatorio
  Config:           # Valores predeterminados de configuración de MySQL charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns:     # Número máximo de conexiones inactivas, predeterminado: 10
  MaxOpenConns:     # Número máximo de conexiones abiertas, predeterminado: 100
  LogMode:          # Nivel de registro, predeterminado: info, opciones: debug, error, warn, info
  LogZap:           # Si se utiliza zap para registrar SQL, predeterminado: true
  SlowThreshold:    # Umbral de consultas lentas, en milisegundos, predeterminado: 1000
Redis:
  Host:             # Dirección de Redis, predeterminado: localhost:6379
  Pass:             # Contraseña de Redis, predeterminado: ""
  DB:               # Base de datos de Redis, predeterminado: 0

Administer:
  Email:            # Correo electrónico de inicio de sesión en el panel de administración, predeterminado: admin@ppanel.dev
  Password:         # Contraseña de inicio de sesión en el panel de administración, predeterminado: password

```

#### 3. Descripción del Archivo de Configuración

- `Host`: Dirección de escucha del servicio, predeterminado: **0.0.0.0**
- `Port`: Puerto de escucha del servicio, predeterminado: **8080**
- `Debug`: Si se habilita el modo de depuración, no se podrá usar la función de registro en segundo plano, predeterminado: **false**
- `JwtAuth`: Configuración de autenticación JWT
  - `AccessSecret`: Clave del token de acceso, predeterminado: **generado aleatoriamente**
  - `AccessExpire`: Tiempo de expiración del token de acceso, en segundos, predeterminado: **604800**
- `Logger`: Configuración de registro
- `FilePath`: Ruta del archivo de registro, predeterminado: **./ppanel.log**
- `MaxSize`: Tamaño máximo del archivo de registro, en MB, predeterminado: **50**
- `MaxBackup`: Número máximo de copias de seguridad del archivo de registro, predeterminado: **3**
- `MaxAge`: Tiempo máximo de conservación del archivo de registro, en días, predeterminado: **30**
- `Compress`: Si se comprime el archivo de registro, predeterminado: **true**
- `Level`: Nivel de registro, predeterminado: **info**, opciones: **debug, info, warn, error, panic, fatal**
- `MySQL`: Configuración de MySQL
  - `Addr`: Dirección de MySQL, obligatorio
  - `Username`: Nombre de usuario de MySQL, obligatorio
  - `Password`: Contraseña de MySQL, obligatorio
  - `Dbname`: Nombre de la base de datos de MySQL, obligatorio
  - `Config`: Valores predeterminados de configuración de MySQL charset=utf8mb4\&parseTime=true\&loc=Asia%2FShanghai
  - `MaxIdleConns`: Número máximo de conexiones inactivas, predeterminado: **10**
  - `MaxOpenConns`: Número máximo de conexiones abiertas, predeterminado: **100**
  - `LogMode`: Nivel de registro, predeterminado: **info**, opciones: **debug, error, warn, info**
  - `LogZap`: Si se utiliza zap para registrar SQL, predeterminado: **true**
  - `SlowThreshold`: Umbral de consultas lentas, en milisegundos, predeterminado: **1000**
- `Redis`: Configuración de Redis
- `Host`: Dirección de Redis, predeterminado: **localhost:6379**
- `Pass`: Contraseña de Redis, predeterminado: **""**
- `DB`: Base de datos de Redis, predeterminado: **0**
- `Administer`: Configuración de inicio de sesión en el panel de administración
  - `Email`: Correo electrónico de inicio de sesión en el panel de administración, predeterminado: **<admin@ppanel.dev>**
  - `Password`: Contraseña de inicio de sesión en el panel de administración, predeterminado: **password**

#### 4. Variables de Entorno

Las variables de entorno soportadas son las siguientes:

| Variable de Entorno | Opción de Configuración | Ejemplo                                      |
| ------------------- | ---------------------- | :------------------------------------------ |
| PPANEL\_DB          | Configuración de MySQL | root:password\@tcp(localhost:3306)/vpnboard |
| PPANEL\_REDIS       | Configuración de Redis  | redis\://localhost:6379                     |
```

