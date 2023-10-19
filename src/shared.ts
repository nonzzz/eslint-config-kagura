import type { LinterRules } from './interface'

export function rewriteRulesPrefix(rules: LinterRules, actually: string, expect: string) {
  return Object.fromEntries(Object.entries(rules).map(([key, value]) => {
    if (key.startsWith(actually)) { return [expect + key.slice(actually.length), value] }
    return [key, value]
  }))
}
