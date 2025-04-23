module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageReporters: ["lcov"],
  testPathIgnorePatterns: [".*\\.test\\.ts$"], // ignore TypeScript tests
};
