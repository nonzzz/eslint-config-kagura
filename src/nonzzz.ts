import { imports, javascript, react, stylistic } from './conf'
import type { FlatConfig } from './interface'
import type { OptionsTypescriptWithTypes } from './conf/typescript'

interface ESLintNonzzzOptions {
  ts?: boolean | OptionsTypescriptWithTypes
  react?: boolean
  jsx?: boolean
  unusedImports?: boolean
}

function enable(opt: boolean | NonNullable<unknown> | undefined): boolean {
  if (!opt) return false
  if (typeof opt === 'boolean') return opt
  return Object.keys(opt).length > 1
}

export async function nonzzz(opts?: ESLintNonzzzOptions, ...userOptions: FlatConfig[]): Promise<FlatConfig[]> {
  const configs: FlatConfig[][] = []

  configs.push(javascript(opts?.unusedImports ?? true), imports(), stylistic(opts?.jsx))

  if (enable(opts?.ts)) {
    const { typescript } = await import('./conf/typescript')
    configs.push(typescript(typeof opts?.ts === 'object' ? opts.ts : {}))
  }
  if (enable(opts?.react)) configs.push(react())

  configs.push(userOptions)
  return configs.flat()
}
