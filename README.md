# Docs Template

A stylish documentation template built with Fumadocs, Next.js 16, and Tailwind CSS. It allows anyone to easily create documentation and offers extensive customization options.

## Features

- 📚 Built with Fumadocs
- ⚡ Powered by Next.js 16
- 🎨 Styled with Tailwind CSS
- 📝 MDX-based documentation
- 🌙 Dark mode support
- 🔍 Built-in search
- 📱 Fully responsive
- 🧩 Easy to customize
- 🚀 Ready for production

## Getting Started

```bash
# Clone the repository
git clone https://github.com/hexui-sh/docs-template.git
cd docs-template

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Directory Structure

```text
docs-template/
├── app/                        # Next.js routes, layout, global CSS, and API handlers
│   ├── [[...slug]]/page.tsx    # Resolves every documentation URL
│   ├── api/search/route.ts     # Full-text search endpoint
│   ├── layout.tsx              # Root HTML, providers, and default metadata
│   ├── not-found.tsx           # 404 route
│   └── globals.css             # Tailwind imports and theme tokens
├── components/                 # Reusable React components used by routes and MDX
│   └── ui/                     # Application-owned UI primitives (e.g. Button)
├── content/docs/                # Documentation collections
│   ├── documentation/          # Guides, features, customization docs
│   ├── api-reference/          # API reference docs
│   └── meta.json               # Navigation metadata
├── lib/                         # Site configuration, content loader, and helpers
│   ├── site-config.ts          # Branding and global-link source of truth
│   ├── docs-collections.ts     # Top-level collections and redirects
│   ├── source.ts               # Generated Fumadocs source
│   └── layout.shared.tsx       # Layout options derived from site configuration
├── public/                       # Static files served from `/`
├── patches/                      # pnpm dependency patches
├── source.config.ts              # Defines the `content/docs` collection
├── mdx-components.tsx             # Registers components available in all MDX
├── next.config.ts                 # Next.js configuration wrapped with createMDX()
├── components.json                 # shadcn component aliases and styling choices
├── tsconfig.json                   # Strict TypeScript and `@/*` aliases
└── package.json                    # Commands and dependencies
```

> More details are available in [Project Structure](./content/docs/documentation/project-structure.mdx).

## Adding a Document

You can add a new document by creating an MDX file in `content/docs/`.

```mdx
---
title:
description:
---

Your content goes here.
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Licensed under the [MIT license](https://github.com/hexui-sh/docs-template/blob/main/LICENSE).
