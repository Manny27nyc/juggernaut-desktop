// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/**
 * Builds the DLL for development electron renderer process.
 */

import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import baseConfig, { rootDir } from './webpack.config.base';
import { dependencies } from '../package.json';

export default merge.smart(baseConfig, {
  context: process.cwd(),
  devtool: 'eval',
  target: 'web',
  mode: 'development',
  externals: [
    '@grpc/grpc-js',
    '@ln-juggernaut/proto-loader',
    'config',
    'electron',
    'electron-is-dev',
    'get-port',
    'lndconnect',
    '@ln-juggernaut/lnd-grpc',
    'react-hot-loader',
    'redux-electron-ipc',
    'rimraf',
    'source-map-support',
    'keytar'
  ],
  entry: {
    renderer: Object.keys(dependencies)
  },
  output: {
    path: path.join(rootDir, 'dll'),
    library: 'renderer',
    filename: '[name].dll.js',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join('dll', '[name].json'),
      name: '[name]'
    })
  ]
});
