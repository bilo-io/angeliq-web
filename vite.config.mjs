import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const src = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
    plugins: [react()],
    resolve: {
        // webpack resolved bare imports from src (e.g. 'components', 'util/apis/ip').
        // Only paths into these folders, and the three barrels imported bare, so npm
        // packages such as 'util' still resolve to node_modules.
        alias: [
            { find: /^(apps|charts|components|data|demo|img|util|widgets)\//, replacement: `${src}/$1/` },
            { find: /^(charts|components|widgets)$/, replacement: `${src}/$1` }
        ]
    },
    css: {
        // the styles predate Dart Sass 1.80; keep its deprecation notices out of every build
        preprocessorOptions: { scss: { silenceDeprecations: ['import', 'global-builtin', 'color-functions'] } }
    },
    server: { port: 8080 },
    build: {
        outDir: 'dist',
        target: 'es2020'
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setup-tests.js',
        include: ['src/**/*.test.{js,jsx}']
    }
})
