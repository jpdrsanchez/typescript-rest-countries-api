// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  modulePaths: ['<rootDir>/src/']
}

module.exports = createJestConfig(customJestConfig)
