# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Color Customization & Theme System

To make editing the website colors simple and centralized, all theme colors have been configured to load dynamically from CSS variables defined in [index.css](file:///d:/match%20make%20clone/wumamatchfigma/src/index.css).

### How to Change Colors
Open [index.css](file:///d:/match%20make%20clone/wumamatchfigma/src/index.css) and edit the raw RGB values inside the `:root` block:

```css
:root {
  --color-brand-teal: 15 149 152;       /* Primary Teal (#0F9598) */
  --color-brand-gold: 155 122 91;       /* Warm Gold Accent (#9B7A5B) */
  --color-brand-cream: 249 248 244;     /* Luxury Sand/Cream Background (#F9F8F4) */
  --color-brand-charcoal: 28 27 25;     /* Charcoal Text/Headers (#1C1B19) */
  --color-brand-dark-teal: 7 20 21;     /* Background Dark Teal (#071415) */
  --color-accent-gold: 212 168 83;      /* Featured Bold Gold (#D4A853) */
}
```

*Note: The space-separated RGB format is required so Tailwind can correctly apply background, text, and border opacity modifiers (e.g. `bg-brand-teal/20`).*

### Recoloring SVG Logos (Press Logos Filter)
In [FeaturedSection.tsx](file:///d:/match%20make%20clone/wumamatchfigma/src/components/sections/FeaturedSection.tsx), a CSS filter is used to convert the black SVG logos to match the primary brand color dynamically:

```css
[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(23%)_saturate(1321%)_hue-rotate(140deg)_brightness(91%)_contrast(96%)]
```

If you change the brand teal color (`--color-brand-teal`), you will need to re-compute this filter value:
1. Go to the [CSS Filter Generator](https://codepen.io/sosuke/pen/gKGJyY).
2. Enter your new HEX color code.
3. Copy the output filter rules.
4. Replace the filter value inside [FeaturedSection.tsx](file:///d:/match%20make%20clone/wumamatchfigma/src/components/sections/FeaturedSection.tsx#L99).

