const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin }  = require('vue-loader');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  stats: {
    children: true, // This will provide more detailed information about child compilations
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',  // This handles .vue files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // This handles CSS files
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // This handles JS files with Babel
          options: {
            presets: ['@babel/preset-env'], // Use preset-env to transpile JS
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',  // Resolving Vue for Webpack
    },
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Correct way to set static directory
    },
    hot: true,
    open: true,
  },
};