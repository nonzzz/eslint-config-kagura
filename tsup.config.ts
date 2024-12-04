import { defineConfig } from 'tsup'

export const tsup = defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  minify: true,
  dts: true,
  format: ['esm', 'cjs']
})
