module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['standard'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        System: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    ignorePatterns: [],
    rules: {
        indent: ['error', 4],
        'no-unused-vars': 0
    },
    settings: {
        react: {
            pragma: 'React',
            version: '16.12.1'
        }
    }
}
