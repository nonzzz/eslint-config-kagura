import { imports, javascript, react, stylistic, typescript } from './conf'
import type { FlatConfig } from './interface'
import type { OptionsTypescriptWithTypes } from './conf'

interface ESLintNonzzzOptions {
  ts?: boolean | OptionsTypescriptWithTypes
  react?: boolean
  jsx?: boolean
}

function enable(opt: boolean | NonNullable<unknown> | undefined): boolean {
  if (!opt) return false
  if (typeof opt === 'boolean') return opt
  return Object.keys(opt).length > 1
}

export function nonzzz(opts?: ESLintNonzzzOptions, ...userOptions: FlatConfig[]): FlatConfig[] {
  const configs: FlatConfig[][] = []

  configs.push(javascript(), imports(), stylistic(opts?.jsx))

  if (enable(opts?.ts)) configs.push(typescript(typeof opts?.ts === 'object' ? opts.ts : {}))
  if (enable(opts?.react)) configs.push(react())

  configs.push(userOptions)
  return configs.flat()
}
