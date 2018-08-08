const webpack = require('webpack');
const path = require('path')

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');
const isProduction = process.argv[2].includes('production')

const conf = {
  context: sourcePath,
  entry: {
    main: './app.tsx',
    react_libs: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: outPath,
    filename: "[name].js",
  },
  mode: process.argv[2],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  //watch : true,
  watch: process.argv[2].includes('development') ? true : false, //while this assumes --mode as 3rd argument here // double check it in the package.json
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: isProduction
          ? 'awesome-typescript-loader?module=es6'
          : [
            'awesome-typescript-loader'
          ]
      },
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
//console.log(process)
//console.log('WEBPACK RUNNING ON '+ proc )