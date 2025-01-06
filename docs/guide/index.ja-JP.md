```markdown
---
title: 前書き
order: 0
group: 
  title: ガイド
  order: 0
nav: ガイド
toc: content
---

## リソースナビゲーション

- [ユーザーインターフェース (デモサイト)](https://user.ppanel.dev)
- [管理インターフェース (デモサイト)](https://admin.ppanel.dev)
- [ユーザーインターフェース (ソースコード)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [管理インターフェース (ソースコード)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## 用語説明

PPanel のいくつかの用語は他のパネルシステムと異なるため、文書の内容を正確に理解し、誤解を避けるために、以下の用語を事前に理解しておくことをお勧めします。

- **ユーザーインターフェース**
  最終ユーザーに提供されるインターフェースで、ユーザーはこのインターフェースを通じてシステムと対話します。ニーズに応じてこのインターフェースをカスタマイズまたは再構築し、サイトの個性を表現できます。

- **管理インターフェース**
  管理者が操作するためのインターフェースで、システム、ユーザー、およびデータの管理を担当します。ニーズに応じてこのインターフェースをカスタマイズまたは再構築し、管理要件に適応させることができます。

- **サーバーサイド**
  PPanel の API 層で、フロントエンドとのすべてのデータのやり取りを処理し、ビジネスロジックの実行とデータサービスの提供を担当します。

- **ノードサイド**
  PPanel サーバーと各ノード（エッジデバイス）との通信を担当し、ネットワークノードの接続とサービスの安定性を確保します。

- **クライアント**
  ユーザーがシステムに接続するために使用するアプリケーションで、通常はユーザーのデバイス上のソフトウェアやアプリを指し、システムとの接続を確立し、関連サービスを利用します。

## 貢献者リスト

ppanel のコア貢献者:

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


