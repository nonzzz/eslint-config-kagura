const base = require('./base')

module.exports = {
  ...base,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
        }
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/type-annotation-spacing': ['error', {
          before: false,
          after: true
        }]
      }
    }
  ]
}
