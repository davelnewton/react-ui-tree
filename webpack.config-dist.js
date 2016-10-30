var path = require('path')

module.exports = {
  entry: './lib/index.js',

  output: {
    path:           __dirname + '/dist',
    filename:       'react-ui-tree.js',
    libraryName:    'react-ui-tree',
    libraryTarget:  'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test:    /\.js?$/,
        exclude: /(node_modules)/,
        loader:  'babel',

        query: {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ],

          plugins: [
            ['transform-decorators-legacy'],
          ]
        },
      },

      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader'
      },

      {
        test:   /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },

  resolve: {
    root:       path.resolve('./lib'),
    extensions: ['', '.js']
  },

  externals: {
    'react':     'React',
    'react-dom': 'ReactDOM'
  },

  devtool: 'source-map'
}
