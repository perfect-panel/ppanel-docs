---
title: Docker
order: 0
group:
  title: त्वरित तैनाती
  order: 1
toc: content
---

# त्वरित तैनाती गाइड

> **तैनाती से पहले ध्यान देने योग्य बातें**
>
> - **प्रबंधन पोर्ट डिफ़ॉल्ट रूप से 8080 है**: कृपया पहले से डोमेन नाम解析 या सुनिश्चित करें कि एक उपलब्ध IP पता है, ताकि प्रबंधन और उपयोगकर्ता端 की स्थापना सुचारू रूप से हो सके।
> - सर्वर: अधिक जानकारी के लिए कृपया [सर्वर](/guide/server) देखें।
> - प्रबंधन端: अधिक जानकारी के लिए कृपया [प्रबंधन端](/guide/admin) देखें।
> - उपयोगकर्ता端: अधिक जानकारी के लिए कृपया [उपयोगकर्ता端](/guide/user) देखें।

## एक-क्लिक तैनाती

नीचे दिए गए किसी भी आदेश का उपयोग करके PPanel को एक-क्लिक तैनाती करें, जिसमें सर्वर, प्रबंधन端 और उपयोगकर्ता端 शामिल हैं:

### विकल्प 1: `curl` का उपयोग करें

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### विकल्प 2: `wget` का उपयोग करें

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

