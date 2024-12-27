---
title: Hızlı Dağıtım
order: 1
nav:
  title: Kılavuz
  order: 1
group:
  title: Dağıtım
  order: 1
toc: content
---

# Hızlı Dağıtım Kılavuzu

> **Dağıtım Öncesi Dikkat Edilmesi Gerekenler**
>
> - **Yönetim panelinin varsayılan portu 8080'dir**: Lütfen alan adı çözümlemesini önceden yapılandırın veya kullanılabilir bir IP adresine sahip olduğunuzdan emin olun, böylece yönetim paneli ve kullanıcı panelinin kurulumu sorunsuz bir şekilde tamamlanabilir.
> - Sunucu: Daha fazla bilgi için lütfen [Sunucu](/guide/server) bölümüne bakın.
> - Yönetim Paneli: Daha fazla bilgi için lütfen [Yönetim Paneli](/guide/admin) bölümüne bakın.
> - Kullanıcı Paneli: Daha fazla bilgi için lütfen [Kullanıcı Paneli](/guide/user) bölümüne bakın.

## Tek Tıkla Dağıtım

Aşağıdaki komutlardan birini kullanarak PPanel'i, sunucu, yönetim paneli ve kullanıcı paneli ile birlikte tek tıkla dağıtabilirsiniz:

### Seçenek 1: `curl` kullanarak

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Seçenek 2: `wget` kullanarak

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

