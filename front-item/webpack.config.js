//const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              data: `
                @import "@/_variables.sass";
              `
            }
          }
        ]
      }
    ]
  },
  // plugin omitted
  /*vue: {
    loaders: {
      sass: 'style!css!sass?indentedSyntax',
      scss: 'style!css!sass'
    }
  }*/
  /*plugins: [
    new VueLoaderPlugin()
  ]*/
}