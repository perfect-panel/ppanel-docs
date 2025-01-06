```markdown
---
title: Forord
order: 0
group: 
  title: Veiledning
  order: 0
nav: Veiledning
toc: content
---

## Ressursnavigasjon

- [Brukergrensesnitt (demonstrasjonsnettsted)](https://user.ppanel.dev)
- [Administrasjonsgrensesnitt (demonstrasjonsnettsted)](https://admin.ppanel.dev)
- [Brukergrensesnitt (kildekode)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [Administrasjonsgrensesnitt (kildekode)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## Terminologibeskivelse

Noen termer i PPanel kan avvike fra andre panel-systemer. For å sikre at du forstår dokumentasjonen korrekt og unngår misforståelser, anbefales det å sette seg inn i følgende termer før lesing:

- **Brukergrensesnitt**
  Grensesnittet som tilbys til sluttbrukeren, hvor brukeren interagerer med systemet. Du kan tilpasse eller omstrukturere dette grensesnittet etter behov for å oppnå en personlig tilpasning av nettstedet.

- **Administrasjonsgrensesnitt**
  Grensesnittet for administratoroperasjoner, ansvarlig for å administrere systemet, brukere og data. Du kan tilpasse eller omstrukturere dette grensesnittet etter behov for å imøtekomme dine administrasjonsbehov.

- **Tjenestelag**
  API-laget til PPanel, som håndterer all datakommunikasjon med frontend, ansvarlig for utførelsen av forretningslogikk og levering av datatjenester.

- **Node-grensesnitt**
  Ansvarlig for kommunikasjonen mellom PPanel tjenestelag og de ulike nodene (sluttpunktene), og sikrer tilkoblingen og stabiliteten til nettverksnoder.

- **Klient**
  Applikasjonen brukeren bruker for å koble seg til systemet, vanligvis referert til som programvaren eller appen på brukerens enhet, ansvarlig for å etablere tilkobling til systemet og bruke relaterte tjenester.

## Bidragsytere

Kjernebidragsytere til ppanel:

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


