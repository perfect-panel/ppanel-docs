---
title: Despliegue Rápido
order: 1
nav:
  title: Guía
  order: 1
group:
  title: Despliegue
  order: 1
toc: content
---

# Guía de Despliegue Rápido

> **Consideraciones Previas al Despliegue**
>
> - **El puerto predeterminado del panel de administración es 8080**: Asegúrese de configurar la resolución de nombres de dominio o de tener una dirección IP disponible para completar la instalación del panel de administración y del panel de usuario sin inconvenientes.
> - Servidor: Para más información, consulte [Servidor](/guide/server).
> - Panel de administración: Para más información, consulte [Panel de administración](/guide/admin).
> - Panel de usuario: Para más información, consulte [Panel de usuario](/guide/user).

## Despliegue con un Solo Comando

Utilice cualquiera de los siguientes comandos para realizar un despliegue con un solo comando de PPanel, que incluye el servidor, el panel de administración y el panel de usuario:

### Opción 1: Usar `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opción 2: Usar `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

