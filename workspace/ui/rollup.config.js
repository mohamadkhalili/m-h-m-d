// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: [
        {
            format: 'esm',
            file: 'dist/m-h-m-d.esm.js',
        },
        {
            format: 'cjs',
            file: 'dist/m-h-m-d.cjs.js',
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        vue(),
        typescript({
            tsconfigOverride: { compilerOptions: { declaration: true } },
        }),
    ],
    external: ['vue'],
};
