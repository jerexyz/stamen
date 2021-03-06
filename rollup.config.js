import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: ['immer', 'fast-deep-equal', 'gery', 'cross-fetch', 'react', 'react-dom'],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
    }),
  ],
}
