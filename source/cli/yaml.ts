import { writeFileSync } from 'fs'
import { dump } from 'js-yaml'

// lineWidth: -1 disables folding, so long translations stay on one line
// instead of turning into `>-` blocks.
const OPTIONS = {
  lineWidth: -1,
  quotingType: '"',
  forceQuotes: false,
} as const

export function stringify(data: unknown): string {
  return dump(data, OPTIONS)
}

export function writeYaml(filePath: string, data: unknown): void {
  writeFileSync(filePath, stringify(data))
}
