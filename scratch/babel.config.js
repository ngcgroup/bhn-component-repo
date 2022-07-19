module.exports = {
  presets: [
    "@babel/preset-env",
    //"@babel/preset-react",    
    //"react-native",
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        "loose": true,
        "useBuiltIns": true
      }
    ],
    ["react-native-web", { commonjs: true }],
  ]
};
