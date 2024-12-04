import unusedImports from 'eslint-plugin-unused-imports'
import type { FlatESLintConfig } from '../interface'

export function imports(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        'unused-imports': unusedImports
      },
      rules: {
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' }
        ]
      }
    }
  ]
}
