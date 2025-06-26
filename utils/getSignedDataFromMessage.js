/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const getSignedDataFromMessage = (message, receiverPubkey) => {
  const receiverPubkeyBytes = Buffer.from(receiverPubkey, 'hex');

  const {
    senderBytes,
    timestampBytes,
    messageBytes,
    contentTypeBytes
  } = message;

  const data = [
    senderBytes,
    receiverPubkeyBytes,
    timestampBytes,
    messageBytes,
    contentTypeBytes
  ];

  return Buffer.concat(data);
};

export default getSignedDataFromMessage;
