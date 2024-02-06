const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  target: 'node', // webpack5通过target支持node模块 https://webpack.js.org/concepts/targets/
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist'),
  },
})
