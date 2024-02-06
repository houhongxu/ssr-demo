const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: './client/index.js',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'dist'),
  },
})
