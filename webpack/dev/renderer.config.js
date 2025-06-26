/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/* eslint global-require: 0, import/no-dynamic-require: 0 */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig, { rootDir } from '../webpack.config.base';
import devServer, { publicPath } from './common/devserver';
import plugins from './common/plugins';

const dll = path.resolve(rootDir, 'dll');
const manifest = path.resolve(dll, 'renderer.json');

const config = merge.smart(baseConfig, {
  name: 'renderer',
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    renderer: path.join(rootDir, 'renderer', 'index')
  },
  output: {
    filename: '[name].js',
    publicPath
  },
  stats: {
    children: false
  },
  devServer,
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join('renderer', 'app.html')
    }),
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifest),
      sourceType: 'var'
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join('dll', 'renderer.dll.js'),
      includeSourcemap: true
    })
  ],
  node: {
    fs: 'empty',
    module: 'empty'
  },
  optimization: {
    noEmitOnErrors: true
  }
});

export default config;
