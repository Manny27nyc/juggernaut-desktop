/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * Webpack config for development builds.
 */

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import preloadConfig from './dev/preload.config';
import mainConfig from './dev/main.config';
import workersConfig from './dev/workers.config';

preloadConfig.plugins.unshift(
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!config.json', '!preload.js']
  })
);

export default [preloadConfig, workersConfig, mainConfig];
