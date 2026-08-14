import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',

      // This is a plain-JavaScript project with no TypeScript. Satisfying this
      // rule would mean adding the `prop-types` package and a block of
      // boilerplate to every component — and React 19 has deprecated
      // PropTypes anyway, so it is boilerplate with no future.
      'react/prop-types': 'off',

      // Apostrophes in ordinary prose ("Melissa's", "BooBaLoo's") are not
      // mistakes. On a recipe site this rule fires on nearly every new page
      // of writing, so leaving it on guarantees recurring noise for no gain.
      'react/no-unescaped-entities': 'off',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
