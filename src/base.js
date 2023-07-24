// This is a common rule for eslint

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['./src/standard', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
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
