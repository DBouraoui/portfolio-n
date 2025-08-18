// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt([
  {
    languageOptions: {
      globals: {
        $t: 'readonly',
        $tc: 'readonly',
        useI18n: 'readonly',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'no-undef': 'off',
      'vue/no-undef-properties': 'off',
      'prettier/prettier': ['error'],
    },
  },
  prettierConfig,
])
