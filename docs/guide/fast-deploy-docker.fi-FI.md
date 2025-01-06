---
title: Docker
order: 0
group:
  title: Nopea käyttöönotto
  order: 1
toc: content
---

# Nopean käyttöönoton opas

> **Huomioitavaa ennen käyttöönottoa**
>
> - **Hallintapaneelin oletusportti on 8080**: Varmista, että olet määrittänyt verkkotunnuksen tai että sinulla on käytettävissä oleva IP-osoite, jotta hallintapaneelin ja käyttäjäpaneelin asennus sujuu ongelmitta.
> - Palvelin: Lisätietoja löytyy [palvelimesta](/guide/server).
> - Hallintapaneeli: Lisätietoja löytyy [hallintapaneelista](/guide/admin).
> - Käyttäjäpaneeli: Lisätietoja löytyy [käyttäjäpaneelista](/guide/user).

## Yhden komennon käyttöönotto

Voit käyttää mitä tahansa seuraavista komennoista ottaaksesi PPanelin käyttöön yhdellä komennolla, mukaan lukien palvelin, hallintapaneeli ja käyttäjäpaneeli:

### Vaihtoehto 1: Käytä `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Vaihtoehto 2: Käytä `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

