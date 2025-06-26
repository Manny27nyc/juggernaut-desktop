/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import mapAddress from './address';

const mapNode = node => {
  const mappedNode = {
    lastUpdate: node.last_update,
    pubKey: node.pub_key,
    alias: node.alias,
    color: node.color
  };

  if (node.addresses) {
    mappedNode.addresses = node.addresses.map(mapAddress);
  } else {
    node.addresses = [];
  }

  return mappedNode;
};

export default mapNode;
