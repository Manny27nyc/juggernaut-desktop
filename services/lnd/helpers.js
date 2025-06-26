/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { grpcLog } from '../../utils/log';

/**
 * logGrpcCmd - Logs a service method invocation.
 *
 * @param {string} method Name of method to log
 * @param {any} payload Payload of method to log
 */
export function logGrpcCmd(method, payload) {
  grpcLog.info(`Calling ${method} with payload: %o`, payload);
}
