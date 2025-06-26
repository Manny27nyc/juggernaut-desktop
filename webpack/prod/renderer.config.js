/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig, { rootDir } from '../webpack.config.base';
import plugins from './common/plugins';

const config = merge.smart(baseConfig, {
  name: 'renderer',
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  entry: {
    renderer: path.join(rootDir, 'renderer', 'index')
  },
  output: {
    filename: '[name].js',
    path: path.join(rootDir, 'dist')
  },
  stats: {
    children: false
  },
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join('renderer', 'app.html')
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
