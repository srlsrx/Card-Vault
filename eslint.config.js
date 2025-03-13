import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,jsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'no-duplicate-imports': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'eqeqeq': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 80 }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'no-implicit-coercion': 'warn',
  },},
  {settings: { react: { version: 'detect' }}},
];