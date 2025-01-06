```markdown
---
title: Binario
order: 2
group: 
  title: Despliegue del Servidor
  order: 2
toc: content
---

### Instrucciones de Instalación

#### Requisitos del Sistema

- Mysql 5.7+ (se recomienda usar 8.0)
- Redis 6.0+ (se recomienda usar 7.0)

#### Instalación Binaria

1. Determina la arquitectura del sistema y descarga el archivo binario correspondiente.

Dirección de descarga: `https://github.com/perfect-panel/ppanel/releases`

Ejemplo: sistema: Linux amd64, usuario: root, directorio actual: /root

- Descarga el archivo binario

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Descomprime el archivo binario

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Entra en el directorio descomprimido

```shell
cd ppanel-server-linux-amd64
```

- Asigna permisos de ejecución al archivo binario

```shell
chmod +x ppanel
```

- Crea el archivo de servicio systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=Servidor PPANEL
After=network.target

[Service]
ExecStart=/root/ppanel-server-linux-amd64/ppanel
Restart=always
User=root
WorkingDirectory=/root/ppanel-server-linux-amd64

[Install]
WantedBy=multi-user.target
EOF
```

- Recarga el servicio systemd

```shell
systemctl daemon-reload
```

- Inicia el servicio

```shell
systemctl start ppanel
```

##### Otras Notas

1. Ruta de instalación: el archivo binario se descomprimirá en el directorio /root/ppanel-server-linux-amd64.

2. Servicio systemd:
   - Nombre del servicio: ppanel
   - Archivo de configuración del servicio: /etc/systemd/system/ppanel.service
   - Comando para iniciar el servicio: systemctl start ppanel
   - Comando para detener el servicio: systemctl stop ppanel
   - Comando para reiniciar el servicio: systemctl restart ppanel
   - Comando para verificar el estado del servicio: systemctl status ppanel
   - Activar el inicio automático del servicio: systemctl enable ppanel

3. Para habilitar el inicio automático, puedes usar el siguiente comando:

   ```shell
   systemctl enable ppanel
   ```

4. Registro del servicio: los registros del servicio se guardan por defecto en el archivo /root/ppanel-server-linux-amd64/ppanel.log.

5. Puedes ver los registros del servicio con `journalctl -u ppanel -f`.

6. Cuando el archivo de configuración está vacío o no existe, el servicio se iniciará con la configuración predeterminada, y la ruta del archivo de configuración es: `./etc/ppanel.yaml`. Por favor, inicializa la configuración del sistema a través de `http://dirección_del_servidor:8080/init`.

#### Configuración de Proxy Inverso NGINX

A continuación se muestra un ejemplo de configuración de proxy inverso, que dirige el servicio `ppanel` al dominio `api.ppanel.dev`.

```nginx
server {
    listen 80;
    server_name ppanel.dev;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_http_version 1.1;
        
        add_header X-Cache $upstream_cache_status;
        
       # Establecer caché de Nginx
       
        set $static_filezbsQiET1 0;
        if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
        {
            set $static_filezbsQiET1 1;
            expires 1m;
            }
        if ( $static_filezbsQiET1 = 0 )
        {
            add_header Cache-Control no-cache;
        }
    }
}
```

Si utilizas el servicio de proxy de Cloudflare, necesitarás obtener la IP real del usuario. Por favor, añade lo siguiente en la sección Http del archivo de configuración de Nginx:

- Dependencia: **ngx_http_realip_module**, utiliza el comando nginx -V para verificar si Nginx ya ha sido compilado con este módulo; si no, necesitarás compilarlo tú mismo.

```nginx
    # cloudflare Inicio
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Fin
```
```

