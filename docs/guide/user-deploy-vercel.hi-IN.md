---
title: उपयोगकर्ता अंत-Vercel
order: 7
group: 
  title: फ्रंट-एंड डिप्लॉयमेंट
  order: 3
toc: content
---

### Vercel का उपयोग करके डिप्लॉय करें\*\*

त्वरित डिप्लॉयमेंट के लिए निम्नलिखित बटन पर क्लिक करें:

[![Vercel पर डिप्लॉय करें](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=PPanel%20is%20a%20pure%2C%20professional%2C%20and%20perfect%20open-source%20proxy%20panel%20tool%2C%20designed%20to%20be%20your%20ideal%20choice%20for%20learning%20and%20practical%20use\&demo-image=https%3A%2F%2Furlscan.io%2Fliveshot%2F%3Fwidth%3D1920%26height%3D1080%26url%3Dhttps%3A%2F%2Fuser.ppanel.dev\&demo-title=PPanel%20user%20Web\&demo-url=https%3A%2F%2Fuser.ppanel.dev%2F\&from=.\&project-name=ppanel-user-web\&repository-name=ppanel-web\&repository-url=https%3A%2F%2Fgithub.com%2Fperfect-panel%2Fppanel-web\&root-directory=apps%2Fuser\&skippable-integrations=1)

**चरण:**

1. [Vercel](https://vercel.com/) पर लॉगिन करें या रजिस्टर करें।
2. डिप्लॉय बटन पर क्लिक करें, रिपॉजिटरी को फोर्क करें और `apps/user` चुनें।
3. पर्यावरण चर कॉन्फ़िगर करें।
4. डिप्लॉयमेंट शुरू करने के लिए **Deploy** पर क्लिक करें।

---

### **3.3 PM2, Node.js या Bun का उपयोग करके डिप्लॉय करें**

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

