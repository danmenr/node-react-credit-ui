var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');

const devConfiguration = env => {
  return merge([
    {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
        contentBase: './dist'
      }
    }
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), devConfiguration(env));
}