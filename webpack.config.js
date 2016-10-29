module.exports = {
  entry: './example/app.js',

  output: {
    path: __dirname + '/example',
    filename: 'bundle.js',
    publicPath: "/example/",
  },

  module: {
    loaders: [
      {
        test:    /\.js?$/,
        exclude: /(node_modules)/,
        loader:  'babel',
        query:   {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ],
          plugins: [
            ["transform-decorators-legacy"],
          ]
        },
      },

      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  devtool: "source-map"
};
