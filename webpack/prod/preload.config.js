/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import path from 'path';
import merge from 'webpack-merge';
import baseConfig, { rootDir } from '../webpack.config.base';
import plugins from './common/plugins';

const config = merge.smart(baseConfig, {
  name: 'preload',
  target: 'electron-preload',
  mode: 'production',
  devtool: 'source-map',
  entry: {
    preload: path.join(rootDir, 'electron', 'preload')
  },
  output: {
    filename: '[name].js',
    path: path.join(rootDir, 'dist')
  },
  plugins,
  node: {
    __dirname: false,
    __filename: false
  }
});

export default config;
