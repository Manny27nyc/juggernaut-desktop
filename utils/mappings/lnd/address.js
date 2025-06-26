/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const mapAddress = address => {
  return {
    network: address.network,
    addr: address.addr
  };
};

export default mapAddress;
