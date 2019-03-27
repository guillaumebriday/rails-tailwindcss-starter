const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

// ensure classes with special chars like -mt-1 and md:w-1/3 are included
class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}

module.exports = new PurgecssPlugin({
  paths: glob.sync([
    path.join(__dirname, '../../../app/javascript/**/*.vue'),
    path.join(__dirname, '../../../app/javascript/**/*.js'),
    path.join(__dirname, '../../../app/views/**/*.erb')
  ]),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['html', 'js', 'vue', 'erb']
    }
  ]
})
