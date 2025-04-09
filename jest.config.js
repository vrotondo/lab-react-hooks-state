module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    },
    testEnvironment: 'jest-environment-jsdom',
};