---
title: Docker
order: 0
group:
  title: Szybkie wdrożenie
  order: 1
toc: content
---

# Przewodnik po szybkim wdrożeniu

> **Uwagi przed wdrożeniem**
>
> - **Domyślny port panelu zarządzania to 8080**: Proszę wcześniej skonfigurować rozwiązywanie nazw domen lub upewnić się, że dostępny jest adres IP, aby pomyślnie zakończyć instalację panelu zarządzania i panelu użytkownika.
> - Serwer: Więcej informacji można znaleźć w [serwerze](/guide/server).
> - Panel zarządzania: Więcej informacji można znaleźć w [panelu zarządzania](/guide/admin).
> - Panel użytkownika: Więcej informacji można znaleźć w [panelu użytkownika](/guide/user).

## Wdrożenie jednym poleceniem

Użyj dowolnego z poniższych poleceń, aby wdrożyć PPanel, w tym serwer, panel zarządzania i panel użytkownika:

### Opcja 1: Użyj `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opcja 2: Użyj `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

