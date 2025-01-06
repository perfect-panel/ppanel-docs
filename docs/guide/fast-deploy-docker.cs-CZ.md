---
title: Docker
order: 0
group:
  title: Rychlé nasazení
  order: 1
toc: content
---

# Příručka pro rychlé nasazení

> **Poznámky před nasazením**
>
> - **Výchozí port pro správu je 8080**: Předem si prosím nastavte DNS nebo se ujistěte, že máte k dispozici IP adresu, aby bylo možné úspěšně dokončit instalaci správy a uživatelského rozhraní.
> - Server: Pro více informací prosím navštivte [server](/guide/server).
> - Správa: Pro více informací prosím navštivte [správu](/guide/admin).
> - Uživatel: Pro více informací prosím navštivte [uživatelské rozhraní](/guide/user).

## Jednoduché nasazení

Použijte jakýkoli z následujících příkazů pro jednoduché nasazení PPanel, včetně serveru, správy a uživatelského rozhraní:

### Možnost 1: Použití `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Možnost 2: Použití `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

