```markdown
---
title: 前言
order: 0
group: 
  title: 指南
  order: 0
nav: 指南
toc: content
---

## 資源導航

- [用戶端 (演示站)](https://user.ppanel.dev)
- [管理端 (演示站)](https://admin.ppanel.dev)
- [用戶端 (源碼)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [管理端 (源碼)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## 術語說明

PPanel 的一些術語與其他面板系統存在差異，為確保您能準確理解文檔內容並避免誤解，建議在閱讀前先了解以下術語：

- **用戶端**
  為最終用戶提供的界面，用戶通過該界面與系統進行交互。您可以根據需求自定義或重構該界面，實現站點的個性化定制。

- **管理端**
  用於管理員操作的界面，負責管理系統、用戶及數據。您可以根據需求對該界面進行定制或重構，以適應您的管理需求。

- **服務端**
  PPanel 的 API 層，處理與前端的所有數據交互，負責業務邏輯的執行與數據服務的提供。

- **節點端**
  負責 PPanel 服務端與各節點（落地端）的通信，確保網絡節點的連接與服務的穩定性。

- **客戶端**
  用戶用來連接系統的應用程序，通常是指用戶的設備端軟件或應用，負責與系統建立連接並使用相關服務。

## 貢獻者列表

ppanel核心貢獻者:

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


