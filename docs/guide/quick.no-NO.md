---
title: Rask distribusjon
order: 1
nav:
  title: Veiledning
  order: 1
group:
  title: Distribusjon
  order: 1
toc: content
---

# Rask distribusjonsveiledning

> **Viktige punkter før distribusjon**
>
> - **Standardport for administrasjonsgrensesnittet er 8080**: Vennligst konfigurer domenenavnoppløsning på forhånd eller sørg for at det er en tilgjengelig IP-adresse for å sikre en smidig installasjon av både administrasjons- og brukergrensesnittet.
> - Tjenestekontakt: For mer informasjon, vennligst se [Tjenestekontakt](/guide/server).
> - Administrasjonsgrensesnitt: For mer informasjon, vennligst se [Administrasjonsgrensesnitt](/guide/admin).
> - Brukergrensesnitt: For mer informasjon, vennligst se [Brukergrensesnitt](/guide/user).

## Én-kommando distribusjon

Bruk en av følgende kommandoer for å distribuere PPanel med ett klikk, inkludert tjenestekontakt, administrasjonsgrensesnitt og brukergrensesnitt:

### Alternativ 1: Bruk `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Alternativ 2: Bruk `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

