# PPanel documentation

The PPanel documentation site is built with Next.js, Nextra, Tailwind CSS, and
Bun. The Chinese documentation under `pages/zh-CN/docs/` is the source for
translated operational documentation.

## Local development

This repository uses Bun 1.1.42.

```bash
bun install
bun run dev
```

Open <http://localhost:3000>.

## Documentation structure

- `pages/zh-CN/docs/`: canonical Chinese operational documentation.
- `pages/en-US/docs/`: maintained English documentation.
- `pages/<locale>/`: localized pages and Swagger entry points.
- `public/swagger/`: generated API specifications; do not edit generated JSON
  by hand.

The backend, frontend, and node projects are maintained separately:

- [Server](https://github.com/perfect-panel/server)
- [Frontend](https://github.com/perfect-panel/frontend)
- [PPanel Node](https://github.com/perfect-panel/ppanel-node)

## Translation workflow

Update Chinese source documentation first. The locale command translates all
`pages/zh-CN/docs/**/*.mdx` files into the configured locales and then formats
the result:

```bash
bun run locale
```

Review generated translations before committing, especially commands, URLs,
configuration names, and code blocks.

## Validation

```bash
bun run lint
bun run build
```

## Updating API documentation

Swagger JSON files are generated from the server repository. Update them from
the server's Swagger generation workflow, then copy the generated files into
`public/swagger/`. Do not manually change API paths or schemas in this
repository.
