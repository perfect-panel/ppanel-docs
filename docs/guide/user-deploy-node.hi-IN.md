---
title: उपयोगकर्ता अंत-Node
order: 6
group: 
  title: फ्रंटेंड तैनाती
  order: 3
toc: content
---

### PM2, Node.js या Bun का उपयोग करके तैनाती

#### कोड डाउनलोड करें

आधिकारिक GitHub रिपॉजिटरी से कोड प्राप्त करें:

```bash
# नवीनतम संस्करण का कोड डाउनलोड करें
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-user-web.tar.gz

# फ़ाइल को अनज़िप करें
tar -xzvf ppanel-user-web.tar.gz

# कोड निर्देशिका में जाएं
cd ppanel-user-web
```

#### पर्यावरण चर कॉन्फ़िगर करें

`apps/user/.env` फ़ाइल बनाएं और आवश्यक पर्यावरण चर जोड़ें (ऊपर दिए गए पर्यावरण चर कॉन्फ़िगरेशन को संदर्भित करें)।

#### PM2 कॉन्फ़िगर करें

`ecosystem.config.js` फ़ाइल बनाएं, सामग्री इस प्रकार है:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-user-web',
      script: 'apps/user/server.js',
      interpreter: 'bun', // इसे node में बदल सकते हैं
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

#### PM2 का उपयोग करके सेवा प्रारंभ करें

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Node.js या Bun का उपयोग करके सेवा प्रारंभ करें

- **Node.js प्रारंभ**:

  ```bash
  node apps/user/server.js
  ```

- **Bun प्रारंभ**:

  ```bash
  bun apps/user/server.js
  ```

---

## **4. तैनाती की पुष्टि करें**

### **4.1 PM2 सेवा स्थिति**

जांचने के लिए निम्नलिखित कमांड चलाएँ:

```bash
pm2 list
```

### **4.2 ब्राउज़र से पहुँचें**

सेवा की स्थिति की पुष्टि करने के लिए `http://<आपका सर्वर IP>:3000` पर जाएं।

---

## **5. सेवा प्रबंधन**

### **PM2 कमांड**

- सेवा रोकें:

  ```bash
  pm2 stop ppanel-user-web
  ```

- सेवा पुनः प्रारंभ करें:

  ```bash
  pm2 restart ppanel-user-web
  ```

- सेवा हटाएँ:

  ```bash
  pm2 delete ppanel-user-web
  ```

