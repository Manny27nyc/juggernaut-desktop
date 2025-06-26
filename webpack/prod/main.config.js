/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * Webpack config for production electron main process
 */

import path from 'path';
import merge from 'webpack-merge';
import baseConfig, { rootDir } from '../webpack.config.base';
import plugins from './common/plugins';

const config = merge.smart(baseConfig, {
  name: 'main',
  target: 'electron-main',
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.join(rootDir, 'electron', 'main')
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'native-ext-loader'
      }
    ]
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
