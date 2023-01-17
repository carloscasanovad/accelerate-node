export default {
  automock: false,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>"],
  preset: "ts-jest",
  rootDir: ".",
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/*.test.ts"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
