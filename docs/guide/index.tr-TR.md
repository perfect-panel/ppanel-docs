```markdown
---
title: Ön Söz
order: 0
group: 
  title: Kılavuz
  order: 0
nav: Kılavuz
toc: içerik
---

## Kaynak Navigasyonu

- [Kullanıcı Arayüzü (Demo)](https://user.ppanel.dev)
- [Yönetici Arayüzü (Demo)](https://admin.ppanel.dev)
- [Kullanıcı Arayüzü (Kaynak Kodu)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [Yönetici Arayüzü (Kaynak Kodu)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## Terim Açıklamaları

PPanel'in bazı terimleri diğer panel sistemlerinden farklılık göstermektedir. Belge içeriğini doğru bir şekilde anlayabilmeniz ve yanlış anlamalardan kaçınabilmeniz için, okumadan önce aşağıdaki terimleri anlamanız önerilir:

- **Kullanıcı Arayüzü**
  Nihai kullanıcılara sunulan arayüzdür; kullanıcılar bu arayüz aracılığıyla sistemle etkileşimde bulunurlar. İhtiyaçlarınıza göre bu arayüzü özelleştirebilir veya yeniden yapılandırabilirsiniz, böylece sitenizin kişiselleştirilmiş bir tasarımını elde edebilirsiniz.

- **Yönetici Arayüzü**
  Yöneticilerin işlemlerini gerçekleştirdiği arayüzdür; sistem, kullanıcılar ve verilerin yönetiminden sorumludur. İhtiyaçlarınıza göre bu arayüzü özelleştirebilir veya yeniden yapılandırabilirsiniz.

- **Sunucu**
  PPanel'in API katmanı, ön uç ile tüm veri etkileşimlerini yönetir; iş mantığının yürütülmesi ve veri hizmetlerinin sağlanmasından sorumludur.

- **Düğüm Arayüzü**
  PPanel sunucusu ile çeşitli düğümler (yerel uçlar) arasındaki iletişimi sağlar; ağ düğümlerinin bağlantısını ve hizmetin istikrarını garanti eder.

- **İstemci**
  Kullanıcıların sistemi bağlanmak için kullandığı uygulamadır; genellikle kullanıcıların cihaz yazılımı veya uygulaması anlamına gelir ve sistemle bağlantı kurup ilgili hizmetleri kullanmaktan sorumludur.

## Katkıda Bulunanlar Listesi

ppanel'in ana katkıda bulunanları:

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


