// @ts-check

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import pluginPromise from 'eslint-plugin-promise'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default tseslint.config(
  eslint.configs.recommended,
  prettierPlugin,
  pluginPromise.configs['flat/recommended'],
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  //   "exclude": ["**/node_modules/*", "**/.*/", "dist", "build", ".next", "coverage", "bin", ".nixpacks"]
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: [
      '.next/*',
      'next-env.d.ts',
      'src/convex/_generated/*',
      'dist/*',
      'build/*',
      '.nixpacks/*',
      '**/.*/',
      'coverage/*',
      'bin/*',
    ],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@tanstack/query/no-unstable-deps': 'off',
    },
  },
)
