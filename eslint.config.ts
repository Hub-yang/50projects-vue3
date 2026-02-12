import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
  ],
})
