const conf = {
  context: __dirname,
    entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  resolve: {
    extensions : ['.js', '.jsx'],
  },
  watch: process.argv[2].includes('development') ? true : false, //while this assumes --mode as 3rd argument here // double check it in the package.json
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      }
    ]
  }
}

module.exports = conf


console.log('------------------------')
//console.log(conf)
//console.log('dirname', conf.context)
//console.log('entry', conf.entry)
console.log(process)
//console.log('WEBPACK RUNNING ON '+ proc )