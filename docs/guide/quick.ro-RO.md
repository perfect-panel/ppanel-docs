---
title: Implementare rapidă
order: 1
nav:
  title: Ghid
  order: 1
group:
  title: Implementare
  order: 1
toc: content
---

# Ghid de implementare rapidă

> **Observații înainte de implementare**
>
> - **Portul implicit pentru panoul de administrare este 8080**: Vă rugăm să configurați în prealabil rezolvarea numelui de domeniu sau să vă asigurați că aveți o adresă IP disponibilă pentru a finaliza cu succes instalarea panoului de administrare și a celui de utilizator.
> - Server: Pentru mai multe informații, consultați [Server](/guide/server).
> - Panou de administrare: Pentru mai multe informații, consultați [Panou de administrare](/guide/admin).
> - Panou de utilizator: Pentru mai multe informații, consultați [Panou de utilizator](/guide/user).

## Implementare cu un singur clic

Utilizați oricare dintre comenzile de mai jos pentru a implementa PPanel cu un singur clic, inclusiv serverul, panoul de administrare și panoul de utilizator:

### Opțiunea 1: Folosind `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opțiunea 2: Folosind `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

