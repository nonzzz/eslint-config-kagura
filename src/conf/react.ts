import { FlatConfig } from 'src/interface'
import { GLOB_JSX, GLOB_TSX } from '~/constants'
import { pluginJsxA11y, pluginReact, pluginReactHooks } from '~/plugins'

// https://github.com/SukkaW/eslint-config-sukka/blob/master/packages/@eslint-react/src/index.ts

export function react(): FlatConfig[] {
  return [
    {
      files: [GLOB_TSX, GLOB_JSX],
      plugins: {
        '@eslint-react': pluginReact as any,
        'jsx-a11y': pluginJsxA11y,
        'react-hooks': pluginReactHooks
      },
      settings: {
        react: {
          react: { version: 'detect' }
        }
      },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        ...pluginJsxA11y.configs.recommended.rules,
        ...pluginReact.configs.recommended.rules,
        '@eslint-react/no-string-refs': 'error',
        '@eslint-react/no-comment-textnodes': 'error',
        '@eslint-react/dom/no-unsafe-target-blank': 'error',
        '@eslint-react/no-children-prop': 'error',
        '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
        '@eslint-react/dom/no-render-return-value': 'error',
        '@eslint-react/no-direct-mutation-state': 'error',
        '@eslint-react/dom/no-find-dom-node': 'error',
        '@eslint-react/no-unsafe-component-will-mount': 'warn',
        '@eslint-react/no-unsafe-component-will-receive-props': 'warn',
        '@eslint-react/no-unsafe-component-will-update': 'warn',
        '@eslint-react/no-unused-state': 'error',
        '@eslint-react/no-access-state-in-setstate': 'error',
        '@eslint-react/dom/no-script-url': 'error',
        '@eslint-react/no-unused-class-component-members': 'error',
        '@eslint-react/naming-convention/filename': [
          'error',
          { rule: 'kebab-case' }
        ],
        '@eslint-react/naming-convention/filename-extension': [
          'error',
          { allow: 'as-needed' }
        ],
        'react-prefer-function-component/react-prefer-function-component':
          'error',
        '@eslint-react/naming-convention/use-state': 'error',
        '@eslint-react/prefer-shorthand-boolean': 'error',
        '@eslint-react/no-missing-key': 'error',
        '@eslint-react/no-array-index-key': 'error',
        '@eslint-react/no-duplicate-key': 'error',
        '@eslint-react/no-implicit-key': 'error',
        '@eslint-react/no-useless-fragment': 'error',

        // Prevent react contexts from taking non-stable values
        '@eslint-react/no-unstable-context-value': 'error',

        // Prevent creating uns dable components inside components
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/no-unstable-nested-components.md
        // 'react/no-unstable-nested-components': 'off',
        '@eslint-react/no-nested-components': 'error',

        // Enforce sandbox attribute on iframe elements
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c8833f301314dab3e79ef7ac4cf863e4d5fa0019/docs/rules/iframe-missing-sandbox.md
        // 'react/iframe-missing-sandbox': 'off',
        '@eslint-react/dom/no-missing-iframe-sandbox': 'warn',
        '@eslint-react/dom/no-unsafe-iframe-sandbox': 'warn',

        // Prevent problematic leaked values from being rendered
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-leaked-render.md
        // 'react/jsx-no-leaked-render': 'off',
        '@eslint-react/no-leaked-conditional-rendering': 'error',

        // To prevent potential unnecessary rerenders, and performance regressions
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/66b58dd4864678eb869a7bf434c72ff7ac530eb1/docs/rules/no-object-type-as-default-prop.md
        // 'react/no-object-type-as-default-prop': 'off',
        '@eslint-react/no-unstable-default-props': 'error',

        // default type is "submit" which refresh the page
        // 'react/button-has-type': 'off',
        '@eslint-react/dom/no-missing-button-type': 'error',

        // <svg:rect> react does not support
        // 'react/no-namespace': 'off',
        '@eslint-react/dom/no-namespace': 'error',

        'class-methods-use-this': [
          'error',
          {
            exceptMethods: [
              'render',
              'getInitialState',
              'getDefaultProps',
              'getChildContext',
              'componentWillMount',
              'UNSAFE_componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'UNSAFE_componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'UNSAFE_componentWillUpdate',
              'componentDidUpdate',
              'componentWillUnmount',
              'componentDidCatch',
              'getSnapshotBeforeUpdate'
            ]
          }
        ],

        'jsx-a11y-minimal/alt-text': [
          'warn',
          {
            elements: ['img'],
            img: ['Image']
          }
        ],
        'jsx-a11y-minimal/aria-props': 'warn',
        'jsx-a11y-minimal/aria-proptypes': 'warn',
        'jsx-a11y-minimal/aria-unsupported-elements': 'warn',
        'jsx-a11y-minimal/role-has-required-aria-props': 'warn',
        'jsx-a11y-minimal/role-supports-aria-props': 'warn'
      }
    }
  ]
}
