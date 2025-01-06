```markdown
---
title: Бінарний
order: 2
group: 
  title: Деплоймент на сервері
  order: 2
toc: content
---

### Інструкції з установки

#### Попередні системні вимоги

- Mysql 5.7+ (рекомендується використовувати 8.0)
- Redis 6.0+ (рекомендується використовувати 7.0)

#### Встановлення бінарного файлу

1. Визначте архітектуру системи та завантажте відповідний бінарний файл

Завантажити за адресою: `https://github.com/perfect-panel/ppanel/releases`

Приклад: система: Linux amd64, користувач: root, поточний каталог: /root

- Завантажте бінарний файл

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- Розпакуйте бінарний файл

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- Перейдіть до розпакованого каталогу

```shell
cd ppanel-server-linux-amd64
```

- Надати бінарному файлу права на виконання

```shell
chmod +x ppanel
```

- Створіть файл служби systemd

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

- Перезавантажте службу systemd

```shell
systemctl daemon-reload
```

- Запустіть службу

```shell
systemctl start ppanel
```

##### Інші примітки

1. Шлях установки: бінарний файл буде розпакований у каталозі /root/ppanel-server-linux-amd64

2. Служба systemd:
   - Назва служби: ppanel
   - Файл конфігурації служби: /etc/systemd/system/ppanel.service
   - Команда для запуску служби: systemctl start ppanel
   - Команда для зупинки служби: systemctl stop ppanel
   - Команда для перезапуску служби: systemctl restart ppanel
   - Команда для перевірки статусу служби: systemctl status ppanel
   - Автозапуск служби при завантаженні: systemctl enable ppanel

3. Для налаштування автозапуску при завантаженні використовуйте наступну команду

   ```shell
   systemctl enable ppanel
   ```

4. Логи служби: логи служби за замовчуванням виводяться у файл /root/ppanel-server-linux-amd64/ppanel.log

5. Логи служби можна переглянути за допомогою `journalctl -u ppanel -f`

6. Якщо файл конфігурації порожній або не існує, служба буде запущена з конфігурацією за замовчуванням, шлях до файлу конфігурації: `./etc/ppanel.yaml`,
   будь ласка, ініціалізуйте системну конфігурацію через `http://адреса_сервера:8080/init`

#### Конфігурація зворотного проксі NGINX

Нижче наведено приклад конфігурації зворотного проксі, який проксіює службу `ppanel` на домен `api.ppanel.dev`

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
        
       # Налаштування кешу Nginx
       
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

Якщо ви використовуєте послуги проксі Cloudflare, потрібно отримати реальну IP-адресу користувача. Додайте до конфігураційного файлу Nginx у розділі Http:

- Потрібно залежати від: **ngx_http_realip_module**, перевірте, чи модуль вже скомпільований, використовуючи команду nginx -V. Якщо ні, потрібно скомпілювати самостійно.

```nginx
    # cloudflare Початок
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare Кінець
```
```

