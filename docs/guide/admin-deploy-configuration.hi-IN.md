---
title: प्रबंधन पैनल - कॉन्फ़िगरेशन विवरण
order: 0
group: 
  title: फ्रंट-एंड तैनाती
  order: 3
toc: content
---

# **PPanel प्रबंधन पैनल तैनाती गाइड**

यह गाइड PPanel प्रबंधन पैनल को तैनात करने के विभिन्न तरीकों का विस्तृत विवरण प्रदान करती है, जिसमें Docker, Vercel, PM2, और सीधे Node.js या Bun का उपयोग शामिल है।

---

## **1. पर्यावरण तैयारी**

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

