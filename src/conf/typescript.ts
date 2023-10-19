import { FlatConfig } from '../interface'
import { rewriteRulesPrefix } from '../shared'
import { GLOB_SRC } from '~/constants'
import { parserTypeScript, pluginImport, pluginTypeScript } from '~/plugins'

export interface OptionsTypescriptWithTypes {
  tsconfigPath?: string
}

export function typescript(options?: OptionsTypescriptWithTypes): FlatConfig[] {
  const { tsconfigPath } = options ?? {}
  return [
    {
      plugins: {
        typescript: pluginTypeScript,
        import: pluginImport
      }
    },
    {
      files: [GLOB_SRC],
      languageOptions: {
        parser: parserTypeScript,
        ...tsconfigPath
          ? {
              project: [tsconfigPath],
              tsconfigRootDir: process.cwd()
            }
          : {}
      },
      rules: {
        ...rewriteRulesPrefix(pluginTypeScript.configs['eslint-recommended'].overrides![0].rules!, '@typescript-eslint/',
          'typescript/'),
        'typescript/no-explicit-any': 'off'
      }
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    }
  ]
}
