```markdown
---
title: บทนำ
order: 0
group: 
  title: คู่มือ
  order: 0
nav: คู่มือ
toc: content
---

## การนำทางทรัพยากร

- [ผู้ใช้ (เว็บไซต์สาธิต)](https://user.ppanel.dev)
- [ผู้ดูแล (เว็บไซต์สาธิต)](https://admin.ppanel.dev)
- [ผู้ใช้ (ซอร์สโค้ด)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [ผู้ดูแล (ซอร์สโค้ด)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## คำอธิบายศัพท์

คำศัพท์บางคำใน PPanel อาจแตกต่างจากระบบแผงควบคุมอื่น ๆ เพื่อให้แน่ใจว่าคุณสามารถเข้าใจเนื้อหาของเอกสารได้อย่างถูกต้องและหลีกเลี่ยงความเข้าใจผิด แนะนำให้ทำความเข้าใจกับคำศัพท์ต่อไปนี้ก่อนอ่าน:

- **ผู้ใช้**
  เป็นอินเทอร์เฟซที่ให้บริการแก่ผู้ใช้สุดท้าย ผู้ใช้สามารถโต้ตอบกับระบบผ่านอินเทอร์เฟซนี้ คุณสามารถปรับแต่งหรือสร้างใหม่ตามความต้องการเพื่อให้เหมาะสมกับการปรับแต่งเว็บไซต์ของคุณ

- **ผู้ดูแล**
  เป็นอินเทอร์เฟซที่ใช้สำหรับการดำเนินการของผู้ดูแลระบบ รับผิดชอบในการจัดการระบบ ผู้ใช้ และข้อมูล คุณสามารถปรับแต่งหรือสร้างใหม่ตามความต้องการเพื่อให้เหมาะสมกับความต้องการในการจัดการของคุณ

- **เซิร์ฟเวอร์**
  เป็นชั้น API ของ PPanel ที่จัดการการแลกเปลี่ยนข้อมูลทั้งหมดกับส่วนหน้า รับผิดชอบในการดำเนินธุรกิจและการให้บริการข้อมูล

- **โหนด**
  รับผิดชอบการสื่อสารระหว่างเซิร์ฟเวอร์ PPanel กับโหนดต่าง ๆ (ปลายทาง) เพื่อให้แน่ใจว่าการเชื่อมต่อของโหนดในเครือข่ายและความเสถียรของบริการ

- **ไคลเอนต์**
  เป็นโปรแกรมที่ผู้ใช้ใช้ในการเชื่อมต่อกับระบบ โดยทั่วไปหมายถึงซอฟต์แวร์หรือแอปพลิเคชันที่อยู่บนอุปกรณ์ของผู้ใช้ ซึ่งรับผิดชอบในการสร้างการเชื่อมต่อกับระบบและใช้บริการที่เกี่ยวข้อง

## รายชื่อผู้มีส่วนร่วม

ผู้มีส่วนร่วมหลักของ ppanel:

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


