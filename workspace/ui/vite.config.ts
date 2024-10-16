// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ command }) => {
    // console.log('command');
    // console.log(command);

    // if (command === 'serve') {
    //     // Development mode configuration
    //     return {
    //         plugins: [vue()],
    //         resolve: {
    //             alias: {
    //                 '@': path.resolve(__dirname, 'src'),
    //             },
    //         },
    //         server: {
    //             open: '/index.html',
    //         },
    //     };
    // } else {
    //     // Production build configuration
    return {
        plugins: [vue(), dts()],
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'MyVueUIFramework',
                fileName: (format) => `m-h-m-d.${format}.js`,
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
    };
    // }
});
