---
title: Rychlé nasazení
order: 1
nav:
  title: Příručka
  order: 1
group:
  title: Nasazení
  order: 1
toc: content
---

# Rychlá příručka pro nasazení

> **Poznámky před nasazením**
>
> - **Výchozí port pro správu je 8080**: Předem si prosím nastavte DNS nebo se ujistěte, že máte k dispozici IP adresu, abyste mohli úspěšně dokončit instalaci správy a uživatelského rozhraní.
> - Server: Pro více informací se podívejte na [server](/guide/server).
> - Správa: Pro více informací se podívejte na [správu](/guide/admin).
> - Uživatelské rozhraní: Pro více informací se podívejte na [uživatelské rozhraní](/guide/user).

## Jednoduché nasazení

Použijte jakýkoli z následujících příkazů pro jednoduché nasazení PPanelu, včetně serveru, správy a uživatelského rozhraní:

### Možnost 1: Použití `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Možnost 2: Použití `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

