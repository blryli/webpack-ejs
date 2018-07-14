'use strict'
const path = require('path')
const glob = require('glob')

// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的module文件夹
var PAGE_PATH = path.resolve(__dirname, '../src/pages');
// 用于做相应的merge处理
var merge = require('webpack-merge');
//img资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");

//多入口配置
// 通过glob模块读取module文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理

exports.entries = function () {
  var entryFiles = glob.sync(PAGE_PATH + '/*/index.js')
  var map = {}
  entryFiles.forEach((filePath) => {
    let array = filePath.split('/');
    let filename = array[array.length - 2];
    map[filename] = filePath
  })
  return map
}

//多页面输出配置
// 与上面的多页面入口配置相同，读取module文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = function () {
  let entryHtml = glob.sync(PAGE_PATH + '/*/index.js')
  let arr = []
  entryHtml.forEach((filePath) => {
    let array = filePath.split('/');
    let filename = array[array.length - 2];
    let conf = {
      // 文件名称
      filename: filename + '.html',
      // 模板来源
      template: PAGE_PATH + '/' + filename + '/' + 'layou.js',
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: [filename, 'common', 'vendor'],
      inject: true,
      hash: true, //开启hash  ?[hash]
    }
    let copyConf = [{
      from: path.resolve(PAGE_PATH + "/" + filename + "/img"),
			to: './assets/img/' + filename,
			ignore: ['.*']
    }]
    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: true, //折叠空白区域 也就是压缩代码
          removeAttributeQuotes: true, //去除属性引用
        },
        chunksSortMode: 'dependency'
      })
    }
    arr.push(new HtmlWebpackPlugin(conf))
    arr.push(new copyWebpackPlugin(copyConf))
  })
  return arr
}