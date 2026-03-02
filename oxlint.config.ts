import { defineConfig } from 'oxlint'

export default defineConfig({
  $schema: './node_modules/oxlint/configuration_schema.json',
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'vue'],
  env: {
    browser: true,
    es2024: true,
  },
  categories: {
    correctness: 'error',
  },
})
