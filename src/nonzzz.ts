import { imports, javaScript, stylistic, typescript } from './conf'

export function nonzzz() {
  return [javaScript(), imports(), typescript(), stylistic()].flat()
}
