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
        'no-unused-vars': 0,
        camelcase: ['error', { properties: 'never', allow: ['^UNSAFE_'] }]
    },
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx'],
            env: { jest: true },
            globals: { vi: 'readonly' }
        }
    ],
    settings: {
        'import/extensions': ['.js', '.jsx'],
        'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
        react: {
            pragma: 'React',
            version: 'detect'
        }
    }
}
