import type { FlatConfig } from '../interface'
import { pluginStylistic } from '~/plugins'

export function stylistic(jsx = false): FlatConfig[] {
  return [
    {
      plugins: {
        stylistic: pluginStylistic
      },
      rules: {
        'stylistic/array-bracket-spacing': ['error', 'never'],
        'stylistic/arrow-spacing': ['error', { before: true, after: true }],
        'stylistic/block-spacing': ['error', 'always'],
        'stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'stylistic/comma-dangle': ['error', {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }],
        'stylistic/comma-spacing': ['error', { before: false, after: true }],
        'stylistic/comma-style': ['error', 'last'],
        'stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
        'stylistic/dot-location': ['error', 'property'],
        'stylistic/eol-last': 'error',
        'stylistic/func-call-spacing': ['error', 'never'],
        'stylistic/generator-star-spacing': ['error', { before: true, after: true }],
        'stylistic/indent': ['error', 2, {
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          SwitchCase: 1,
          VariableDeclarator: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
          ],
          offsetTernaryExpressions: true,
          outerIIFEBody: 1
        }],
        'stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'stylistic/keyword-spacing': ['error', { before: true, after: true }],
        'stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'stylistic/multiline-ternary': ['error', 'always-multiline'],
        'stylistic/new-parens': 'error',
        'stylistic/no-extra-parens': ['error', 'functions'],
        'stylistic/no-floating-decimal': 'error',
        'stylistic/no-mixed-spaces-and-tabs': 'error',
        'stylistic/no-multi-spaces': 'error',
        'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'stylistic/no-whitespace-before-property': 'error',
        'stylistic/object-curly-spacing': ['error', 'always'],
        'stylistic/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
        'stylistic/padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
        'stylistic/quote-props': ['error', 'as-needed'],
        'stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        'stylistic/rest-spread-spacing': ['error', 'never'],
        'stylistic/semi': ['error', 'never'],
        'stylistic/semi-spacing': ['error', { before: false, after: true }],
        'stylistic/space-before-blocks': ['error', 'always'],
        'stylistic/space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'stylistic/space-in-parens': ['error', 'never'],
        'stylistic/space-infix-ops': 'error',
        'stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
        'stylistic/spaced-comment': ['error', 'always', {
          line: { markers: ['/'], exceptions: ['/', '#'] },
          block: { balanced: true, markers: ['!'], exceptions: ['*'] }
        }],
        'stylistic/template-curly-spacing': 'error',
        'stylistic/template-tag-spacing': ['error', 'never'],
        'stylistic/type-annotation-spacing': ['error', {}],
        'stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
        'stylistic/yield-star-spacing': ['error', 'both'],
        ...jsx
          ? {
              'stylistic/jsx-closing-bracket-location': 'error',
              'stylistic/jsx-closing-tag-location': 'error',
              'stylistic/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
              'stylistic/jsx-curly-newline': 'error',
              'stylistic/jsx-curly-spacing': ['error', 'never'],
              'stylistic/jsx-equals-spacing': 'error',
              'stylistic/jsx-first-prop-new-line': 'error',
              'stylistic/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
              'stylistic/jsx-indent-props': ['error', 2],
              'stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
              'stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
              'stylistic/jsx-quotes': 'error',
              'stylistic/jsx-tag-spacing': [
                'error',
                {
                  afterOpening: 'never',
                  beforeClosing: 'never',
                  beforeSelfClosing: 'always',
                  closingSlash: 'never'
                }
              ],
              'stylistic/jsx-wrap-multilines': [
                'error',
                {
                  arrow: 'parens-new-line',
                  assignment: 'parens-new-line',
                  condition: 'parens-new-line',
                  declaration: 'parens-new-line',
                  logical: 'parens-new-line',
                  prop: 'parens-new-line',
                  return: 'parens-new-line'
                }
              ]
            }
          : {}
      }
    }
  ]
}
