---
title: Nopea käyttöönotto
order: 1
nav:
  title: Opas
  order: 1
group:
  title: Käyttöönotto
  order: 1
toc: content
---

# Nopea käyttöönotto-opas

> **Huomioitavaa ennen käyttöönottoa**
>
> - **Hallintapaneelin oletusportti on 8080**: Varmista, että olet määrittänyt verkkotunnuksen tai että sinulla on käytettävissä oleva IP-osoite, jotta hallinta- ja käyttäjäpään asennus sujuu ongelmitta.
> - Palvelin: Lisätietoja löytyy [palvelinosasta](/guide/server).
> - Hallintapaneeli: Lisätietoja löytyy [hallintapaneelista](/guide/admin).
> - Käyttäjäpää: Lisätietoja löytyy [käyttäjäpäästä](/guide/user).

## Yhden komennon käyttöönotto

Voit käyttää mitä tahansa seuraavista komennoista PPanelin nopeaan käyttöönottoon, mukaan lukien palvelin, hallintapaneeli ja käyttäjäpää:

### Vaihtoehto 1: Käytä `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Vaihtoehto 2: Käytä `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

