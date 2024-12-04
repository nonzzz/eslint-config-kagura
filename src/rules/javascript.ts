import { browser, es2025, node } from 'globals/globals.json'
import type { FlatESLintConfig } from '../interface'

export function javascript() {
  const confg: FlatESLintConfig[] = [
    {
      linterOptions: {
        reportUnusedDisableDirectives: true
      }
    },
    {
      name: '@nonzzz/javascript',
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true
          }
        },
        globals: {
          ...es2025,
          ...browser,
          ...node
        }
      },
      rules: {
        'no-var': 'error',
        'object-shorthand': ['warn', 'properties'],
        'array-callback-return': ['error', {
          allowImplicit: false,
          checkForEach: false
        }],
        curly: ['error', 'multi-line'],
        'constructor-super': 'error',
        'default-case-last': 'error',
        'dot-notation': ['error', { allowKeywords: true }],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-useless-backreference': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-import-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 'error',
        'no-loss-of-precision': 'error',
        'no-misleading-character-class': 'error',
        'no-prototype-builtins': 'error',
        'no-useless-catch': 'error',
        'no-unused-expressions': ['error', {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }],
        'no-unused-vars': ['error', {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all'
        }],
        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'one-var': ['error', { initialized: 'never' }],
        'prefer-const': [1],
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'symbol-description': 'error',
        'unicode-bom': ['error', 'never'],
        'use-isnan': ['error', {
          enforceForSwitchCase: true,
          enforceForIndexOf: true
        }],
        'valid-typeof': ['error', { requireStringLiterals: true }],
        yoda: ['error', 'never']
      }
    }
  ]

  return confg
}
