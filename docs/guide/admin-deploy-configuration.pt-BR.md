---
title: Gerenciamento - Instruções de Configuração
order: 0
group: 
  title: Implantação Frontend
  order: 3
toc: content
---

# **Guia de Implantação do PPanel**

Este guia detalha como implantar o PPanel, incluindo Docker, Vercel, PM2, e várias maneiras de usar diretamente Node.js ou Bun.

---

## **1. Preparação do Ambiente**

Antes de implantar, certifique-se de que as seguintes ferramentas estão instaladas:

- **Node.js** (recomendado instalar via NVM, versão >= 22)
- **Bun** (runtime JavaScript rápido)
- **PM2** (ferramenta de gerenciamento de processos para gerenciar serviços de forma eficiente)
- **Docker** (para implantação em contêiner)

---

## **2. Configuração de Variáveis de Ambiente**

Antes da implantação, você precisará configurar as seguintes variáveis de ambiente:

```env
# Configuração do aplicativo
NEXT_PUBLIC_DEFAULT_LANGUAGE=pt-BR
NEXT_PUBLIC_SITE_URL=https://admin.exemplo.com
NEXT_PUBLIC_API_URL=https://api.exemplo.com

# Usuário padrão
NEXT_PUBLIC_DEFAULT_USER_EMAIL=admin@exemplo.com
NEXT_PUBLIC_DEFAULT_USER_PASSWORD=senha123
```

---

