'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const glob = require("glob")
// HTML模版
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

/**
 * 返回匹配路径下所有文件的信息
 * @param: 文件路径, 匹配规则
 * @return: {fileName: filePath}
 */
exports.getFilesInfo = (path, regExp) => {
  const info = {};
  glob.sync(path + regExp).forEach(filePath => {
    info[filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'))] = filePath;
  });
  return info;
};

/**
 * HTML模版Helper
 * @param
 *  htmlObj: 模版html信息{index: index.html绝对路径}
 *  plugins: webpack plugins 项
 * @return null
 * */
exports.htmlWPHelper = (htmlObj = {}, plugins = [], type='dev') => {
  Object.keys(htmlObj).map(filename => {
    const filePath = htmlObj[filename];
    const fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.length);

    console.warn(type)

    /*HtmlWebpackPlugin 开发、生产模式配置项*/
    const htmlPlugin = type === 'dev'
      ? {
        filename: fileName,
        template: filePath,
        inject: true,
        chunks: ['commons', filename]
      } : {
        filename: fileName,
        template: filePath,
        inject: true,
        chunks: ['manifest', 'vendor', filename],
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      };
    plugins.push(new HtmlWebpackPlugin(htmlPlugin))
  });
}
