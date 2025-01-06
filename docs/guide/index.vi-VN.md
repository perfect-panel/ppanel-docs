```markdown
---
title: Lời giới thiệu
order: 0
group: 
  title: Hướng dẫn
  order: 0
nav: Hướng dẫn
toc: content
---

## Điều hướng tài nguyên

- [Giao diện người dùng (trang demo)](https://user.ppanel.dev)
- [Giao diện quản trị (trang demo)](https://admin.ppanel.dev)
- [Giao diện người dùng (mã nguồn)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/user)
- [Giao diện quản trị (mã nguồn)](https://github.com/perfect-panel/ppanel-web/tree/main/apps/admin)

## Giải thích thuật ngữ

Một số thuật ngữ của PPanel có sự khác biệt so với các hệ thống bảng điều khiển khác. Để đảm bảo bạn có thể hiểu chính xác nội dung tài liệu và tránh hiểu lầm, chúng tôi khuyên bạn nên tìm hiểu các thuật ngữ sau trước khi đọc:

- **Giao diện người dùng**
  Là giao diện cung cấp cho người dùng cuối, người dùng tương tác với hệ thống thông qua giao diện này. Bạn có thể tùy chỉnh hoặc tái cấu trúc giao diện này theo nhu cầu để thực hiện việc cá nhân hóa trang web.

- **Giao diện quản trị**
  Là giao diện dành cho quản trị viên, chịu trách nhiệm quản lý hệ thống, người dùng và dữ liệu. Bạn có thể tùy chỉnh hoặc tái cấu trúc giao diện này theo nhu cầu quản lý của bạn.

- **Máy chủ**
  Là lớp API của PPanel, xử lý tất cả các tương tác dữ liệu với giao diện người dùng, chịu trách nhiệm thực hiện logic kinh doanh và cung cấp dịch vụ dữ liệu.

- **Giao diện nút**
  Chịu trách nhiệm về việc giao tiếp giữa máy chủ PPanel và các nút (điểm cuối), đảm bảo kết nối và tính ổn định của các nút mạng.

- **Khách hàng**
  Là ứng dụng mà người dùng sử dụng để kết nối với hệ thống, thường chỉ phần mềm hoặc ứng dụng trên thiết bị của người dùng, chịu trách nhiệm thiết lập kết nối với hệ thống và sử dụng các dịch vụ liên quan.

## Danh sách người đóng góp

Các đóng góp chính của ppanel:

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


