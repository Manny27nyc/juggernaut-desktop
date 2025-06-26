/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { lndRPC } from '../renderer/workers';

export default function getNodeInterface(nodeType = 'lnd') {
  if (nodeType === 'lnd') {
    return lndRPC;
  }
}
