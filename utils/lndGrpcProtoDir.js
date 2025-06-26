/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { dirname, join } from 'path';
import isDev from 'electron-is-dev';
import appRootPath from './appRootPath';

/**
 * lndGrpcProtoDir - Get the OS specific path to the rpc.proto files that are provided by lnd-grpc.
 *
 * @returns {string} Path to the rpc.proto files
 */
const lndGrpcProtoDir = () => {
  return isDev
    ? join(
        dirname(require.resolve('@ln-juggernaut/lnd-grpc/package.json')),
        'proto'
      )
    : join(appRootPath(), 'resources', 'proto');
};

export default lndGrpcProtoDir;
