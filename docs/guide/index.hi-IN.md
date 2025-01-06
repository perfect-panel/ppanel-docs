```markdown
---
title: प्रस्तावना
order: 0
group: 
  title: मार्गदर्शिका
  order: 0
nav: मार्गदर्शिका
toc: सामग्री
---

## संसाधन नेविगेशन

- [उपयोगकर्ता पक्ष (डेमो साइट)](https://user.ppanel.dev)
- [प्रबंधक पक्ष (डेमो साइट)](https://admin.ppanel.dev)
- [उपयोगकर्ता पक्ष (स्रोत कोड)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [प्रबंधक पक्ष (स्रोत कोड)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## शब्दावली स्पष्टीकरण

PPanel की कुछ शब्दावली अन्य पैनल सिस्टम से भिन्न है। दस्तावेज़ की सामग्री को सही ढंग से समझने और गलतफहमी से बचने के लिए, पढ़ने से पहले निम्नलिखित शब्दों को समझना उचित है:

- **उपयोगकर्ता पक्ष**
  अंतिम उपयोगकर्ताओं के लिए प्रदान किया गया इंटरफ़ेस, जिसके माध्यम से उपयोगकर्ता सिस्टम के साथ इंटरैक्ट करते हैं। आप आवश्यकताओं के अनुसार इस इंटरफ़ेस को अनुकूलित या पुनर्निर्मित कर सकते हैं, जिससे साइट की व्यक्तिगत अनुकूलन संभव हो सके।

- **प्रबंधक पक्ष**
  व्यवस्थापक संचालन के लिए इंटरफ़ेस, जो सिस्टम, उपयोगकर्ताओं और डेटा का प्रबंधन करता है। आप आवश्यकताओं के अनुसार इस इंटरफ़ेस को अनुकूलित या पुनर्निर्मित कर सकते हैं, ताकि यह आपकी प्रबंधन आवश्यकताओं के अनुकूल हो सके।

- **सर्वर पक्ष**
  PPanel का API स्तर, जो फ्रंट-एंड के साथ सभी डेटा इंटरैक्शन को संभालता है, व्यावसायिक तर्कों के निष्पादन और डेटा सेवाओं के प्रदान करने के लिए जिम्मेदार है।

- **नोड पक्ष**
  PPanel सर्वर और विभिन्न नोड्स (ग्राउंड एंड) के बीच संचार के लिए जिम्मेदार, नेटवर्क नोड्स के कनेक्शन और सेवाओं की स्थिरता सुनिश्चित करता है।

- **क्लाइंट पक्ष**
  उपयोगकर्ता द्वारा सिस्टम से कनेक्ट करने के लिए उपयोग किया जाने वाला एप्लिकेशन, आमतौर पर उपयोगकर्ता के डिवाइस सॉफ़्टवेयर या एप्लिकेशन को संदर्भित करता है, जो सिस्टम के साथ कनेक्शन स्थापित करने और संबंधित सेवाओं का उपयोग करने के लिए जिम्मेदार है।

## योगदानकर्ताओं की सूची

ppanel के मुख्य योगदानकर्ता:

```jsx
/**
 * inline: true
 */

import React from 'react';
export default () =>
<div>
      <style jsx>
      {`
      a {
        text-decoration: none;
        color: #1677ff;
        margin-top:10px;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
    
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/177191628?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='ChangLueTesn' />
    <a href='https://github.com/ChangLueTesn' >ChangLueTesn</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/182967760?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='goodpuppy12134' />
    <a href='https://github.com/goodpuppy12134' >goodpuppy12134</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/190634740?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='GoombaKio' />
    <a href='https://github.com/GoombaKio' >GoombaKio</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/170910308?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='lyndon986' />
    <a href='https://github.com/lyndon986' >lyndon986</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/60031666?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='QChWnd' />
    <a href='https://github.com/QChWnd' >QChWnd</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/182197017?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='web-ppanel' />
    <a href='https://github.com/web-ppanel' >web-ppanel</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/144473506?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='AceTaffy812' />
    <a href='https://github.com/AceTaffy812' >AceTaffy812</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/182533708?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='EUForest' />
    <a href='https://github.com/EUForest' >EUForest</a>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '10px', margin: '10px' }}>
    <img src='https://avatars.githubusercontent.com/u/24352157?v=4' style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt='wyx2685' />
    <a href='https://github.com/wyx2685' >wyx2685</a>
  </div>
</div>

```


