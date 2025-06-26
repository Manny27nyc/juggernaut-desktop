/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { promisify } from 'util';

/**
 * promisifiedCall - Promisifies specified method and calls it with @thisArg as this and passes @args as an object.
 *
 * @param {*} thisArg This arg
 * @param {*} method Method to promisy
 * @param {*} args Arguments to pass call method with
 * @returns {Function} Promisified method
 */
export default function promisifiedCall(thisArg, method, ...args) {
  return promisify(method).call(thisArg, ...args);
}
