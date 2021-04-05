const ignorePaths = [
    '/cache/',
    '/cypress/',
    '/node_modules/'
]

module.exports = {
    verbose: true,
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    modulePaths: [
        '<rootDir>',
        'source',
    ],
    moduleDirectories: [
        '<rootDir>',
        'node_modules',
        'source',
    ],
    modulePathIgnorePatterns: [
        ...ignorePaths
    ],
    coveragePathIgnorePatterns: [
        ...ignorePaths
    ],
    testPathIgnorePatterns: [
        ...ignorePaths
    ]
}