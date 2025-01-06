```markdown
---
title: مقدمه
order: 0
group: 
  title: راهنما
  order: 0
nav: راهنما
toc: content
---

## راهنمای منابع

- [کاربر (سایت نمایشی)](https://user.ppanel.dev)
- [مدیر (سایت نمایشی)](https://admin.ppanel.dev)
- [کاربر (کد منبع)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [مدیر (کد منبع)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## توضیحات اصطلاحات

برخی از اصطلاحات PPanel با سایر سیستم‌های پنل متفاوت است. برای اطمینان از درک صحیح محتوای مستندات و جلوگیری از سوءتفاهم، پیشنهاد می‌شود قبل از مطالعه با اصطلاحات زیر آشنا شوید:

- **کاربر**
  رابطی که به کاربران نهایی ارائه می‌شود و کاربران از طریق آن با سیستم تعامل می‌کنند. شما می‌توانید این رابط را بر اساس نیازهای خود سفارشی‌سازی یا بازسازی کنید تا شخصی‌سازی سایت را انجام دهید.

- **مدیر**
  رابطی که برای عملیات مدیران استفاده می‌شود و مسئول مدیریت سیستم، کاربران و داده‌ها است. شما می‌توانید این رابط را بر اساس نیازهای خود سفارشی‌سازی یا بازسازی کنید تا با نیازهای مدیریتی شما سازگار باشد.

- **سرور**
  لایه API PPanel که تمام تعاملات داده‌ای با فرانت‌اند را مدیریت می‌کند و مسئول اجرای منطق کسب‌وکار و ارائه خدمات داده است.

- **نود**
  مسئول ارتباط بین سرور PPanel و نودهای مختلف (نقاط پایانی) است و اطمینان حاصل می‌کند که اتصال و ثبات خدمات شبکه برقرار است.

- **کلاینت**
  برنامه‌ای که کاربران برای اتصال به سیستم استفاده می‌کنند، معمولاً به نرم‌افزار یا برنامه‌ای که در دستگاه کاربر است اشاره دارد و مسئول برقراری ارتباط با سیستم و استفاده از خدمات مربوطه است.

## فهرست مشارکت‌کنندگان

مشارکت‌کنندگان اصلی ppanel:

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


