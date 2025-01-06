---
title: Docker
order: 0
group:
  title: Schnelle Bereitstellung
  order: 1
toc: content
---

# Schnellbereitstellungsanleitung

> **Hinweise vor der Bereitstellung**
>
> - **Standardport für das Verwaltungs-Interface ist 8080**: Bitte konfigurieren Sie im Voraus die Domain-Weiterleitung oder stellen Sie sicher, dass eine verfügbare IP-Adresse vorhanden ist, um die Installation des Verwaltungs- und Benutzer-Interfaces erfolgreich abzuschließen.
> - Server: Weitere Informationen finden Sie unter [Server](/guide/server).
> - Verwaltungs-Interface: Weitere Informationen finden Sie unter [Verwaltungs-Interface](/guide/admin).
> - Benutzer-Interface: Weitere Informationen finden Sie unter [Benutzer-Interface](/guide/user).

## Ein-Klick-Bereitstellung

Verwenden Sie einen der folgenden Befehle, um PPanel mit einem Klick bereitzustellen, einschließlich Server, Verwaltungs-Interface und Benutzer-Interface:

### Option 1: Mit `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Option 2: Mit `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

