```markdown
---
title: Бинарный файл
order: 2
group: 
  title: Развертывание сервера
  order: 2
toc: content
---

### Инструкции по установке

#### Предварительные системные требования

- Mysql 5.7+ (рекомендуется использовать 8.0)
- Redis 6.0+ (рекомендуется использовать 7.0)

#### Установка бинарного файла

1. Определите архитектуру системы и загрузите соответствующий бинарный файл

Ссылка для загрузки: `https://github.com/perfect-panel/ppanel/releases`

Пример: система: Linux amd64, пользователь: root, текущий каталог: /root

- Загрузите бинарный файл

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Распакуйте бинарный файл

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Перейдите в распакованную директорию

```shell
cd ppanel-server-linux-amd64
```

- Дайте бинарному файлу права на выполнение

```shell
chmod +x ppanel
```

- Создайте файл службы systemd

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL Server
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

- Перезагрузите службы systemd

```shell
systemctl daemon-reload
```

- Запустите службу

```shell
systemctl start ppanel
```

##### Дополнительные пояснения

1. Путь установки: бинарный файл будет распакован в директорию /root/ppanel-server-linux-amd64

2. Служба systemd:
   - Имя службы: ppanel
   - Файл конфигурации службы: /etc/systemd/system/ppanel.service
   - Команда для запуска службы: systemctl start ppanel
   - Команда для остановки службы: systemctl stop ppanel
   - Команда для перезапуска службы: systemctl restart ppanel
   - Команда для проверки статуса службы: systemctl status ppanel
   - Автозапуск службы при загрузке: systemctl enable ppanel

3. Для настройки автозапуска при загрузке используйте следующую команду

   ```shell
   systemctl enable ppanel
   ```

4. Логи службы: логи службы по умолчанию выводятся в файл /root/ppanel-server-linux-amd64/ppanel.log

5. Логи службы можно просмотреть с помощью `journalctl -u ppanel -f`

6. Если файл конфигурации пуст или отсутствует, служба будет запущена с конфигурацией по умолчанию, путь к файлу конфигурации: `./etc/ppanel.yaml`,
   пожалуйста, инициализируйте системную конфигурацию через `http://адрес_сервера:8080/init`

#### Конфигурация обратного прокси NGINX

Ниже приведен пример конфигурации обратного прокси, который проксирует службу `ppanel` на домен `api.ppanel.dev`

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
        
       # Установите кэш Nginx
       
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

Если вы используете услуги прокси Cloudflare, вам нужно получить реальный IP-адрес пользователя. Пожалуйста, добавьте в раздел Http вашего конфигурационного файла Nginx:

- Необходима зависимость: **ngx_http_realip_module**, используйте команду nginx -V, чтобы проверить, скомпилирован ли этот модуль в nginx; если нет, вам нужно будет скомпилировать его самостоятельно.

```nginx
    # cloudflare Начало
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Конец
```
```

