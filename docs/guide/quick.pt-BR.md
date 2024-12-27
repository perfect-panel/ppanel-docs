---
title: Implantação Rápida
order: 1
nav:
  title: Guia
  order: 1
group:
  title: Implantação
  order: 1
toc: content
---

# Guia de Implantação Rápida

> **Considerações antes da implantação**
>
> - **A porta padrão do painel de gerenciamento é 8080**: Certifique-se de configurar a resolução de domínio ou de ter um endereço IP disponível para concluir a instalação do painel de gerenciamento e do painel do usuário sem problemas.
> - Servidor: Para mais informações, consulte [Servidor](/guide/server).
> - Painel de gerenciamento: Para mais informações, consulte [Painel de gerenciamento](/guide/admin).
> - Painel do usuário: Para mais informações, consulte [Painel do usuário](/guide/user).

## Implantação com um Clique

Use qualquer um dos comandos abaixo para implantar o PPanel com um clique, incluindo o servidor, o painel de gerenciamento e o painel do usuário:

### Opção 1: Usando `curl`

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

### Opção 2: Usando `wget`

```bash
bash <(wget -qO- https://raw.githubusercontent.com/perfect-panel/ppanel-script/refs/heads/main/install.sh)
```

