const htmlWebpackPlugin =  require('html-webpack-plugin')
module.exports = {
  mode: 'development',

  entry: './app.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  //含source-map的devtool模式都可以锁定代码行数
  devtool:
      // 'source-map',//生成sourceMap文件,
      // 'inline-source-map',//生成一个dataUrl形式的SourceMap文件
      // 'eval-source-map',//每个module通过eval执行，并生成一个dataUrl形式的SourceMap文件
      // 'cheap-source-map',//map文件中的属性mapping没有记录列数，只记录了行数，而source-map都记录了
      'cheap-module-source-map',//map文件中的属性mapping没有记录列数，只记录了行数，并且引入的插件也进行转义



  plugins: [
      new htmlWebpackPlugin()
  ]
}