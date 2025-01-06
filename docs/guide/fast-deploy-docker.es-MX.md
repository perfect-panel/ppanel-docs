---
title: Docker
order: 0
group:
  title: Despliegue Rápido
  order: 1
toc: content
---

# Guía de Despliegue Rápido

> **Consideraciones Previas al Despliegue**
>
> - **El puerto predeterminado del panel de administración es el 8080**: Asegúrate de configurar la resolución de nombres de dominio o de tener una dirección IP disponible para completar sin problemas la instalación del panel de administración y del panel de usuario.
> - Servidor: Para más información, consulta [Servidor](/guide/server).
> - Panel de administración: Para más información, consulta [Panel de administración](/guide/admin).
> - Panel de usuario: Para más información, consulta [Panel de usuario](/guide/user).

## Despliegue con un Solo Comando

Utiliza cualquiera de los siguientes comandos para desplegar PPanel de manera sencilla, incluyendo el servidor, el panel de administración y el panel de usuario:

### Opción 1: Usando `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opción 2: Usando `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

