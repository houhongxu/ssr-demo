const path = require('path')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic', // react17+配置后不需要引入react即可使用jsx
              },
            ],
            ['@babel/preset-env'],
          ],
        },
      },
    ],
  },
}
