/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import path from 'path';
import merge from 'webpack-merge';
import baseConfig, { rootDir } from '../webpack.config.base';
import { publicPath } from './common/devserver';
import plugins from './common/plugins';

const config = merge.smart(baseConfig, {
  name: 'workers',
  target: 'electron-renderer',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    grpc: path.join(rootDir, 'renderer/workers', 'grpc.worker')
  },
  output: {
    filename: '[name].worker.js',
    publicPath,
    globalObject: 'this'
  },
  resolve: {
    alias: {
      config: path.resolve(rootDir, 'dist/config.json')
    }
  },
  stats: {
    children: false
  },
  plugins,
  node: {
    __dirname: false,
    __filename: false
  },
  optimization: {
    noEmitOnErrors: true
  }
});

export default config;
