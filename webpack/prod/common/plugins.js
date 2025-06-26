/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'production'
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: process.env.OPEN_ANALYZER === 'true' ? 'server' : 'disabled',
    openAnalyzer: process.env.OPEN_ANALYZER === 'true'
  })
];

export default plugins;
