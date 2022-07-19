const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react', //<-here
    },
    extensions: ['', '.js', '.ts'],

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
            loader: 'babel-loader',
            options: {
                "presets": [
                    "@babel/preset-env",
//                    "@babel/preset-react",
//                    "react-native",
                    "module:metro-react-native-babel-preset",
                    "@salesforce/babel-preset-design-system-react"
                ],
                "plugins": [
                    ["react-native-web", { "commonjs": true }],
                    "@babel/plugin-proposal-object-rest-spread",
                ]
            }
        },
      },
    ],
    loaders: [{
      test: /\.ts$/, loaders: ['babel-loader', 'ts-loader'], exclude: /node_modules/
    }],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
}