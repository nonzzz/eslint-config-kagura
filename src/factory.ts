// From now on this rule collection don't provide any formatter rules anymore.
import type { FlatESLintConfig } from './interface'
import { imports } from './rules/imports'
import { javascript } from './rules/javascript'
import { typescript } from './rules/typescript'

export interface NonzzzESLintConfigOptions {
  typescript?: boolean
}

export function nonzzz(opt: NonzzzESLintConfigOptions = {}, ...userOptions: FlatESLintConfig[]) {
  const { typescript: ts = true } = opt
  const configs = [javascript(), imports()]
  if (ts) {
    configs.push(typescript())
  }

  configs.push(userOptions)
  return configs.flat()
}
