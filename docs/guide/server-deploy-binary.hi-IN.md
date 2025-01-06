```markdown
---
title: बाइनरी
order: 2
group: 
  title: सर्वर तैनाती
  order: 2
toc: content
---

### स्थापना निर्देश

#### पूर्व प्रणाली आवश्यकताएँ

- Mysql 5.7+ (8.0 का उपयोग करने की सिफारिश की जाती है)
- Redis 6.0+ (7.0 का उपयोग करने की सिफारिश की जाती है)

#### बाइनरी स्थापना

1. प्रणाली आर्किटेक्चर निर्धारित करें और संबंधित बाइनरी फ़ाइल डाउनलोड करें

डाउनलोड पता: `https://github.com/perfect-panel/ppanel/releases`

उदाहरण विवरण: प्रणाली: Linux amd64, उपयोगकर्ता: root, वर्तमान निर्देशिका: /root

- बाइनरी फ़ाइल डाउनलोड करें

```shell
wget https://github.com/perfect-panel/ppanel/releases/download/v0.1.0/ppanel-server-linux-amd64.tar.gz
```

- बाइनरी फ़ाइल को अनज़िप करें

```shell
tar -zxvf ppanel-server-linux-amd64.tar.gz
```

- अनज़िप की गई निर्देशिका में जाएँ

```shell
cd ppanel-server-linux-amd64
```

- बाइनरी फ़ाइल को निष्पादन अधिकार दें

```shell
chmod +x ppanel
```

- systemd सेवा फ़ाइल बनाएँ

```shell
$ cat > /etc/systemd/system/ppanel.service <<EOF
[Unit]
Description=PPANEL सर्वर
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

- systemd सेवा को फिर से लोड करें

```shell
systemctl daemon-reload
```

- सेवा प्रारंभ करें

```shell
systemctl start ppanel
```

##### अन्य विवरण

1. स्थापना पथ: बाइनरी फ़ाइल /root/ppanel-server-linux-amd64 निर्देशिका में अनज़िप की जाएगी

2. systemd सेवा:
   - सेवा नाम: ppanel
   - सेवा कॉन्फ़िगरेशन फ़ाइल: /etc/systemd/system/ppanel.service
   - सेवा प्रारंभ करने का आदेश: systemctl start ppanel
   - सेवा रोकने का आदेश: systemctl stop ppanel
   - सेवा पुनः प्रारंभ करने का आदेश: systemctl restart ppanel
   - सेवा स्थिति आदेश: systemctl status ppanel
   - सेवा बूट पर स्वचालित प्रारंभ: systemctl enable ppanel

3. बूट पर स्वचालित प्रारंभ सेट करने के लिए निम्नलिखित आदेश का उपयोग करें

   ```shell
   systemctl enable ppanel
   ```

4. सेवा लॉग: सेवा लॉग डिफ़ॉल्ट रूप से /root/ppanel-server-linux-amd64/ppanel.log फ़ाइल में आउटपुट होती है

5. सेवा लॉग देखने के लिए `journalctl -u ppanel -f` का उपयोग करें

6. जब कॉन्फ़िगरेशन फ़ाइल खाली या अनुपस्थित होती है, तो सेवा डिफ़ॉल्ट कॉन्फ़िगरेशन के साथ प्रारंभ होती है, कॉन्फ़िगरेशन फ़ाइल का पथ: `./etc/ppanel.yaml` है,
   कृपया `http://सर्वर_पता:8080/init` के माध्यम से प्रणाली कॉन्फ़िगरेशन को प्रारंभ करें

#### NGINX रिवर्स प्रॉक्सी कॉन्फ़िगरेशन

नीचे रिवर्स प्रॉक्सी कॉन्फ़िगरेशन का उदाहरण है, जो `ppanel` सेवा को `api.ppanel.dev` डोमेन पर प्रॉक्सी करता है

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
        
       #Nginx कैश सेट करें
       
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

यदि आप Cloudflare प्रॉक्सी सेवा का उपयोग कर रहे हैं, तो आपको उपयोगकर्ता के वास्तविक आईपी को प्राप्त करने की आवश्यकता है। कृपया Nginx कॉन्फ़िगरेशन फ़ाइल में Http खंड में जोड़ें:

- आवश्यक निर्भरता: **ngx\_http\_realip\_module** मॉड्यूल, nginx -V कमांड का उपयोग करके देखें कि क्या nginx ने पहले से ही इस मॉड्यूल को संकलित किया है, यदि नहीं, तो आपको इसे स्वयं संकलित करना होगा।

```nginx
    # cloudflare प्रारंभ
    set_real_ip_from 0.0.0.0/0;
    real_ip_header  X-Forwarded-For;
    real_ip_recursive on;
    # cloudflare समाप्त
```
```

