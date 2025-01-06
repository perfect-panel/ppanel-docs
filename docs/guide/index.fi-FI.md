```markdown
---
title: Esipuhe
order: 0
group: 
  title: Opas
  order: 0
nav: Opas
toc: content
---

## Resurssinavigointi

- [Käyttäjäpuoli (demonstraatioversio)](https://user.ppanel.dev)
- [Hallintapuoli (demonstraatioversio)](https://admin.ppanel.dev)
- [Käyttäjäpuoli (lähdekoodi)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [Hallintapuoli (lähdekoodi)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## Termien selitys

PPanelin jotkin termit poikkeavat muista paneelijärjestelmistä. Varmistaaksesi, että ymmärrät asiakirjan sisällön tarkasti ja vältät väärinkäsityksiä, suosittelemme, että tutustut seuraaviin termeihin ennen lukemista:

- **Käyttäjäpuoli**
  Käyttäjille tarjottu käyttöliittymä, jonka kautta käyttäjät vuorovaikuttavat järjestelmän kanssa. Voit mukauttaa tai rakentaa tämän käyttöliittymän uudelleen tarpeidesi mukaan, jotta voit toteuttaa sivuston henkilökohtaisen räätälöinnin.

- **Hallintapuoli**
  Hallinnoijille tarkoitettu käyttöliittymä, joka vastaa järjestelmän, käyttäjien ja tietojen hallinnasta. Voit mukauttaa tai rakentaa tämän käyttöliittymän uudelleen tarpeidesi mukaan hallintatarpeidesi täyttämiseksi.

- **Palvelinpuoli**
  PPanelin API-kerros, joka käsittelee kaikki tiedonsiirrot etupään kanssa, vastaa liiketoimintalogiikan toteuttamisesta ja tietopalveluiden tarjoamisesta.

- **Solmupiste**
  Vastaa PPanelin palvelinpuolen ja eri solmujen (loppupisteiden) välisestä viestinnästä, varmistaen verkon solmujen yhteyden ja palvelun vakauden.

- **Asiakasohjelma**
  Käyttäjien järjestelmään yhdistämiseen käyttämä sovellus, joka yleensä viittaa käyttäjän laitteiston ohjelmistoon tai sovellukseen, joka vastaa yhteyden muodostamisesta järjestelmään ja siihen liittyvien palveluiden käyttämisestä.

## Myötävaikuttajalista

ppanelin ydinmyötävaikuttajat:

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


