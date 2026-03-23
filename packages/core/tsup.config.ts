import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    external: ['react', 'react-dom'],
    treeshake: true,
  },
  {
    entry: ['src/cli/index.ts'],
    format: ['cjs'],
    clean: false,
    outDir: 'dist/cli',
    banner: { js: '#!/usr/bin/env node' },
  },
])
