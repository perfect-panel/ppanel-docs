---
title: Docker
order: 0
group:
  title: Gyors telepítés
  order: 1
toc: content
---

# Gyors telepítési útmutató

> **Telepítés előtti figyelmeztetések**
>
> - **A kezelőfelület alapértelmezett portja 8080**: Kérjük, előre állítsa be a domain név feloldást, vagy győződjön meg arról, hogy van elérhető IP-címe, hogy zökkenőmentesen befejezhesse a kezelőfelület és a felhasználói felület telepítését.
> - Szolgáltató: További információkért kérjük, nézze meg a [szolgáltatót](/guide/server).
> - Kezelőfelület: További információkért kérjük, nézze meg a [kezelőfelületet](/guide/admin).
> - Felhasználói felület: További információkért kérjük, nézze meg a [felhasználói felületet](/guide/user).

## Egylépéses telepítés

Használja az alábbi bármelyik parancsot az PPanel egylépéses telepítéséhez, beleértve a szolgáltatót, a kezelőfelületet és a felhasználói felületet:

### Opció 1: `curl` használatával

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opció 2: `wget` használatával

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

