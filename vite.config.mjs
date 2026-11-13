import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const src = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
    plugins: [react()],
    resolve: {
        // webpack resolved bare imports from src (e.g. 'components', 'util/apis/ip')
        alias: [
            { find: /^(apps|charts|components|data|demo|img|util|widgets)(\/.*)?$/, replacement: `${src}/$1$2` }
        ]
    },
    server: { port: 8080 },
    build: {
        outDir: 'dist',
        target: 'es2020',
        // a few imports name exports that no longer exist (Button, Code, Select, ...);
        // webpack let them through as undefined, so do the same
        rollupOptions: { shimMissingExports: true }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/setup-tests.js',
        include: ['src/**/*.test.{js,jsx}']
    }
})
