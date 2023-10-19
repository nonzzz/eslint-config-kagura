import { FlatConfig } from 'src/interface'
import { GLOB_JSX, GLOB_TSX } from '~/constants'
import { pluginJsxA11y, pluginReact, pluginReactHooks } from '~/plugins'

// https://github.com/SukkaW/eslint-config-sukka/blob/master/packages/react/src/index.ts

export function react(): FlatConfig[] {
  return [
    {
      files: [GLOB_TSX, GLOB_JSX],
      plugins: {
        react: pluginReact,
        'jsx-a11y': pluginJsxA11y,
        'react-hooks': pluginReactHooks
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs['jsx-runtime'].rules,
        ...pluginReactHooks.configs.recommended.rules,
        ...pluginJsxA11y.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['warn', {
          extensions: ['.jsx', '.tsx']
        }],
        'react/prop-types': 'off',
        'react/display-name': ['off', { ignoreTranspilerName: false }],
        'react/no-unknown-property': ['error', { ignore: ['css', 'jsx'] }],
        'react/jsx-boolean-value': ['error', 'never', { always: [] }],
        'react/jsx-handler-names': ['off', {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on'
        }],
        'react/jsx-no-bind': ['error', {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true
        }],
        'react/jsx-pascal-case': ['error', {
          allowAllCaps: true,
          ignore: []
        }],
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': ['error', {
          order: [
            'static-variables',
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^handle.+$/',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering'
          ],
          groups: {
            lifecycle: [
              'displayName',
              'propTypes',
              'contextTypes',
              'childContextTypes',
              'mixins',
              'statics',
              'defaultProps',
              'constructor',
              'getDefaultProps',
              'getInitialState',
              'state',
              'getChildContext',
              'getDerivedStateFromProps',
              'componentWillMount',
              'UNSAFE_componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'UNSAFE_componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'UNSAFE_componentWillUpdate',
              'getSnapshotBeforeUpdate',
              'componentDidUpdate',
              'componentDidCatch',
              'componentWillUnmount'
            ],
            rendering: [
              '/^render.+$/',
              'render'
            ]
          }
        }
        ],
        'react/no-array-index-key': 'off',
        'react/void-dom-elements-no-children': 'error',
        'react/no-unused-state': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-this-in-sfc': 'error',
        'react/jsx-no-script-url': ['error', [
          {
            name: 'Link',
            props: ['to', 'href']
          },
          {
            name: 'NextLink',
            props: ['href']
          }
        ]],
        'react/jsx-key': ['warn', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
        'react/jsx-uses-vars': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/hook-use-state': 'off',
        'react/iframe-missing-sandbox': 'warn',
        'react/jsx-no-leaked-render': 'off',
        'react/no-object-type-as-default-prop': 'warn',
        'react/button-has-type': 'error',
        'react/no-namespace': 'error' 
      }
    }
  ]
}
