---
title: Schnelle Bereitstellung
order: 1
nav:
  title: Anleitung
  order: 1
group:
  title: Bereitstellung
  order: 1
toc: content
---

# Schnelle Bereitstellungsanleitung

> **Hinweise vor der Bereitstellung**
>
> - **Standardport für das Verwaltungsportal ist 8080**: Bitte konfigurieren Sie im Voraus die Domainauflösung oder stellen Sie sicher, dass eine verfügbare IP-Adresse vorhanden ist, um die Installation des Verwaltungs- und Benutzerportals reibungslos abzuschließen.
> - Server: Weitere Informationen finden Sie unter [Server](/guide/server).
> - Verwaltungsportal: Weitere Informationen finden Sie unter [Verwaltungsportal](/guide/admin).
> - Benutzerportal: Weitere Informationen finden Sie unter [Benutzerportal](/guide/user).

## Ein-Klick-Bereitstellung

Verwenden Sie einen der folgenden Befehle, um PPanel mit einem Klick bereitzustellen, einschließlich Server, Verwaltungsportal und Benutzerportal:

### Option 1: Mit `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Option 2: Mit `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

