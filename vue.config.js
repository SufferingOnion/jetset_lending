const path = require('path');

module.exports = {
  outputDir: 'docs',
  publicPath: '/',
  productionSourceMap: false,
  pluginOptions: {
    dll: {
      entry: ['vue', 'vue-router'],
      cacheFilePath: path.resolve(__dirname, './public')
    }
  }
}
