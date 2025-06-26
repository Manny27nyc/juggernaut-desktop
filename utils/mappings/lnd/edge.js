/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import mapRoutingPolicy from './routing_policy';

const mapEdge = edge => {
  const mappedEdge = {
    channelId: edge.channelId,
    chanPoint: edge.chanPoint,
    lastUpdate: edge.lastUpdate,
    node1Pub: edge.node1_pub,
    node2Pub: edge.node2_pub,
    capacity: edge.capacity,
    node1Policy: mapRoutingPolicy(edge.node1_policy),
    node2Policy: mapRoutingPolicy(edge.node2_policy)
  };

  return mappedEdge;
};

export default mapEdge;
