import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist']},
  { extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.strict,
      ...pluginVue.configs['flat/strongly-recommended'],
    ],
    files: ['**/*{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      }
    }
  },
  eslintConfigPrettier,
)