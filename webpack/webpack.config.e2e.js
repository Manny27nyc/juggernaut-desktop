/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * Webpack config for use with testcafe (e2e).
 */

import path from 'path';
import os from 'os';
import prodConfig from './webpack.config.prod';

// Disable minification for compatibility with testcafe-react-selectors.
prodConfig.map(config => {
  config.optimization.minimizer = [];

  return config;
});
// patch mainConfig. use mock keytar on linux
// TODO remove and add support for linux in e2e
if (os.platform() === 'linux') {
  prodConfig[2].resolve.alias.keytar = path.resolve(
    __dirname,
    '../test/unit/__mocks__/keytar'
  );
}

export default prodConfig;
