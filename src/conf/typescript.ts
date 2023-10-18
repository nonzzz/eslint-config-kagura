import {FlatConfig} from '../interface'
import {GLOB_JS, GLOB_JSX, GLOB_TS,GLOB_TSX} from '~/constants'
import {parserTypeScript,pluginTypeScript} from '~/plugins'

export function typescript():FlatConfig[]{
    return [{
        plugins:{
            '@typescript':pluginTypeScript
        },
        files:[GLOB_TS,GLOB_TSX],
        languageOptions:{
            parser:parserTypeScript,
        },
        rules:{
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/space-infix-ops': 'error',
            '@typescript-eslint/type-annotation-spacing': ['error', {
              before: false,
              after: true
            }]
        }
    }]
}