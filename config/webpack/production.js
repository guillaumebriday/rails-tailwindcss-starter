process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

environment.plugins.append('PurgecssWebpackPlugin', require('./plugins/purgecss-webpack-plugin'))

module.exports = environment.toWebpackConfig()
