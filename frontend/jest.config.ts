export default {
  transform: {
    ".+\\.(css|scss|png|jpg|svg|webp)$": "jest-transform-stub",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/styleMock.js",
  },
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"]
};
