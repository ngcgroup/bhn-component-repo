module.exports = {
  testEnvironment: "jsdom",
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
  ],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
