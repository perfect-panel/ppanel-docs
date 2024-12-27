---
title: Server
order: 2
nav:
  title: Guide
  order: 1
group:
  title: Deployment
  order: 1
toc: content
---

## System Requirements

| Component       | Requirements                           |
| --------------- | -------------------------------------- |
| Server Config   | Minimum: 1 CPU core, 2GB RAM; Recommended: 2 CPU cores, 4GB RAM |
| MySQL           | 5.7 or higher (Recommended: MySQL 8)  |
| Redis           | 6 or higher                            |
| NGINX/Apache    | Any version                            |

## Install Docker

Run the following command to quickly install Docker:

```sh
curl -fsSL https://get.docker.com | bash -s docker
```

## Quick Start

### Initialize via Web Interface

PPanel supports web-based initialization, simplifying the manual configuration process.

### Initialization Steps

1. **Create Required Configuration File**: First, manually create and configure the `/app/etc/ppanel.yaml` file for subsequent configuration.

2. **Run Docker Container**:

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

3. **Access Initialization Page**: Open your browser and go to `http://ServerIP:8080/init`.

4. **Complete Configuration**: Follow the prompts to set up the admin account, configure the MySQL database, and Redis server.

5. **Click the Initialize Button**: After completing the configuration, click the "Initialize" button. The application will automatically save the configuration and restart.

   > **Note**: PPanel uses port **8080** by default. Please ensure this port is accessible and adjust firewall settings if necessary.

## Deploy Using Docker

PPanel uses port **8080** by default. Please ensure this port is accessible and adjust firewall settings if necessary.

If you do not use web initialization, you can log in with the default admin account:

- **Username**: `admin@ppanel.dev`
- **Password**: `password`

> **Note**: Please change the default password promptly after the first login to ensure security.

### Create Required Configuration File

Before starting the Docker deployment, manually create and configure `/app/etc/ppanel.yaml` to ensure the system runs smoothly. For detailed configuration examples, refer to the [Configuration Examples](#configuration-examples) section of the documentation.

### Run Docker Container

Run the following command to start the container:

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

## Deploy Using Docker Compose

PPanel uses port **8080** by default. Please ensure this port is accessible and adjust firewall settings if necessary.

### Create Required Configuration File

Before starting the Docker Compose deployment, manually create and configure `/app/etc/ppanel.yaml` to ensure the system runs smoothly. For detailed configuration examples, refer to the [Configuration Examples](#configuration-examples) section of the documentation.

### Create Docker Compose Configuration File

Create a `docker-compose.yml` file:

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

### Start the Service

Run the following command to start the service:

```sh
docker compose up -d
```

## Important Notes

- **Security**: Be sure to change the default password and keys to ensure application security.
- **Port Configuration**: Ensure necessary ports are open to avoid network access issues.
- **Data Persistence**: It is recommended to mount data volumes when running containers to achieve data persistence.

## Configuration Examples

Here is an example configuration for `ppanel.yaml`:

```yaml
Host: 0.0.0.0 # Listening IP
Port: 8080 # Running port
Debug: true # Enable debug mode
JwtAuth:
  AccessSecret: your-secret-key # Token secret (please modify)
  AccessExpire: 604800 # Token expiration (seconds)
Logger:
  FilePath: ./ppanel.log # Log file path
  MaxSize: 50
  MaxBackup: 3
  MaxAge: 30
  Compress: true
  LogType: json
  Level: info # Log level: info, debug, error
MySQL:
  Addr: 127.0.0.1:3306 # Database address
  Dbname: vpnboard # Database name
  Username: root # Database username
  Password: your-password # Database password (please modify)
  Config: charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai
  MaxIdleConns: 10
  MaxOpenConns: 10
  LogMode: dev
  LogZap: false
  SlowThreshold: 1000
Redis:
  Host: 127.0.0.1:6379
  Pass: # Redis password (if any)
  DB: 0

Administer:
  Password: password # Admin password (should be changed)
  Email: admin@ppanel.dev # Admin email address
```

> **Note**: After modifying the configuration file, please restart the Docker container to apply the changes.

## Get Support

If you encounter any issues, please refer to the official documentation or contact the support team for assistance.

