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
> - **El puerto predeterminado del panel de administración es el 8080**: Asegúrese de configurar previamente la resolución de nombres de dominio o de tener una dirección IP disponible para completar con éxito la instalación del panel de administración y del panel de usuario.
> - Servidor: Para más información, consulte [Servidor](/guide/server).
> - Panel de administración: Para más información, consulte [Panel de administración](/guide/admin).
> - Panel de usuario: Para más información, consulte [Panel de usuario](/guide/user).

## Despliegue con un Solo Comando

Utilice cualquiera de los siguientes comandos para desplegar PPanel de manera rápida, incluyendo el servidor, el panel de administración y el panel de usuario:

### Opción 1: Usando `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opción 2: Usando `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

