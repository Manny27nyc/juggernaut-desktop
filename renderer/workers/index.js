/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { proxy } from 'comlinkjs';
import proxymise from './proxymise';

const LndGrpcWrapper = proxy(new Worker('./grpc.worker.js'));

class GrpcInstance {
  constructor() {
    if (!GrpcInstance.instance) {
      GrpcInstance.instance = new LndGrpcWrapper();
    }
    return GrpcInstance.instance;
  }
}

export const lndRPC = proxymise(new GrpcInstance());
