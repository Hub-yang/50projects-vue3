import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: true,
    markdown: false,
  },
  oxlint.configs['flat/recommended'],
)
