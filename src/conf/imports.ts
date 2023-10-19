import type { FlatConfig } from '../interface'
import { pluginImport } from '~/plugins'

export function imports(): FlatConfig[] {
  return [
    {
      plugins: {
        import: pluginImport
      },
      rules: {
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'import/newline-after-import': ['error', { count: 1, considerComments: true }],
        'import/no-self-import': 'error',
        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
            allowSeparatedGroups: false
          }
        ]
      }
    }
  ]
}
