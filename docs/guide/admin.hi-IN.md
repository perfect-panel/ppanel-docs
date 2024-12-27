---
title: प्रबंधन पैनल
order: 3
nav:
  title: मार्गदर्शिका
  order: 1
group:
  title: तैनाती
  order: 1
toc: content
---

# **PPanel प्रबंधन पैनल तैनाती मार्गदर्शिका**

यह मार्गदर्शिका PPanel प्रबंधन पैनल की तैनाती के लिए विस्तृत जानकारी प्रदान करती है, जिसमें Docker, Vercel, PM2, और सीधे Node.js या Bun का उपयोग करके तैनाती के विभिन्न तरीके शामिल हैं।

---

## **1. पर्यावरण की तैयारी**

तैनाती से पहले, कृपया सुनिश्चित करें कि निम्नलिखित उपकरण स्थापित हैं:

- **Node.js** (NVM के माध्यम से स्थापित करने की सिफारिश की जाती है, संस्करण >= 22)
- **Bun** (तेज़ JavaScript रनटाइम)
- **PM2** (प्रक्रिया प्रबंधन उपकरण, सेवाओं के कुशल प्रबंधन के लिए)
- **Docker** (कंटेनराइज्ड तैनाती के लिए)

---

## **2. पर्यावरण चर कॉन्फ़िगरेशन**

तैनाती से पहले, आपको निम्नलिखित पर्यावरण चर कॉन्फ़िगर करने की आवश्यकता है:

```env
# एप्लिकेशन कॉन्फ़िगरेशन
NEXT_PUBLIC_DEFAULT_LANGUAGE=hi-IN
NEXT_PUBLIC_SITE_URL=https://admin.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# डिफ़ॉल्ट उपयोगकर्ता
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123
```

---

## **3. तैनाती विकल्प**

### **3.1 Docker का उपयोग करके तैनाती**

#### Docker स्थापित करें

Docker स्थापित करने के लिए निम्नलिखित कमांड चलाएँ:

```bash
curl -fsSL https://get.docker.com | bash
```

#### Docker का उपयोग करके सेवा प्रारंभ करें

कंटेनर प्रारंभ करने के लिए निम्नलिखित कमांड चलाएँ:

```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_DEFAULT_LANGUAGE=hi-IN \
  -e NEXT_PUBLIC_SITE_URL=https://admin.example.com \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@example.com \
  -e NEXT_PUBLIC_DEFAULT_USER_PASSWORD=password123 \
  --name ppanel-admin-web \
  ppanel/ppanel-admin-web:latest
```

#### Docker Compose का उपयोग करके तैनाती

एक `docker-compose.yml` फ़ाइल बनाएं, जिसमें निम्नलिखित सामग्री हो:

```yaml
version: '3'

services:
  ppanel-admin-web:
    image: ppanel/ppanel-admin-web:latest
    ports:
      - '3000:3000'
    environment:
      NEXT_PUBLIC_DEFAULT_LANGUAGE: hi-IN
      NEXT_PUBLIC_SITE_URL: https://admin.example.com
      NEXT_PUBLIC_API_URL: https://api.example.com
      NEXT_PUBLIC_DEFAULT_USER_EMAIL: admin@example.com
      NEXT_PUBLIC_DEFAULT_USER_PASSWORD: password123
```

सेवा प्रारंभ करें:

```bash
docker compose up -d
```

---

### **3.2 Vercel का उपयोग करके तैनाती**

त्वरित तैनाती के लिए निम्नलिखित बटन पर क्लिक करें:

[![Vercel पर तैनात करें](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fadmin.ppanel.dev&demo-title=PPanel%20Admin%20Web&demo-url=https%3A%2F%2Fadmin.ppanel.dev%2F&from=.&project-name=ppanel-admin-web&repository-name=ppanel-web&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web&root-directory=apps%2Fadmin&skippable-integrations=1)

**चरण:**

1. [Vercel](https://vercel.com/) पर लॉगिन या पंजीकरण करें।
2. तैनाती बटन पर क्लिक करें, रिपॉजिटरी को फोर्क करें और `apps/admin` चुनें।
3. पर्यावरण चर कॉन्फ़िगर करें।
4. तैनाती शुरू करने के लिए **Deploy** पर क्लिक करें।

---

### **3.3 PM2, Node.js या Bun का उपयोग करके तैनाती**

#### कोड डाउनलोड करें

आधिकारिक GitHub रिपॉजिटरी से कोड प्राप्त करें:

```bash
# नवीनतम संस्करण का कोड डाउनलोड करें
curl -LO https://github.com/perfect-panel/ppanel-web/releases/download/v1.0.0/ppanel-admin-web.tar.gz

# फ़ाइल को अनज़िप करें
tar -xzvf ppanel-admin-web.tar.gz

# कोड निर्देशिका में जाएं
cd ppanel-admin-web
```

#### पर्यावरण चर कॉन्फ़िगर करें

`apps/admin/.env` फ़ाइल बनाएं और आवश्यक पर्यावरण चर जोड़ें (ऊपर दिए गए पर्यावरण चर कॉन्फ़िगरेशन का संदर्भ लें)।

#### PM2 कॉन्फ़िगर करें

`ecosystem.config.js` फ़ाइल बनाएं, जिसमें निम्नलिखित सामग्री हो:

```javascript
module.exports = {
  apps: [
    {
      name: 'ppanel-admin-web',
      script: 'apps/admin/server.js',
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
  node apps/admin/server.js
  ```
- **Bun प्रारंभ**:
  ```bash
  bun apps/admin/server.js
  ```

---

## **4. तैनाती की पुष्टि करें**

### **4.1 PM2 सेवा स्थिति**

जांचने के लिए निम्नलिखित कमांड चलाएँ:

```bash
pm2 list
```

### **4.2 ब्राउज़र पहुंच**

सेवा की स्थिति की पुष्टि करने के लिए `http://<आपका सर्वर IP>:3000` पर जाएं।

---

## **5. सेवा प्रबंधन**

### **PM2 कमांड**

- सेवा रोकें:
  ```bash
  pm2 stop ppanel-admin-web
  ```
- सेवा पुनः प्रारंभ करें:
  ```bash
  pm2 restart ppanel-admin-web
  ```
- सेवा हटाएं:
  ```bash
  pm2 delete ppanel-admin-web
  ```
