/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const extractMessagePreview = (content, contentType) => {
  if (contentType === 'text') {
    return content;
  }
  if (contentType === 'payment') {
    return 'Payment';
  }
  if (contentType === 'paymentrequest') {
    return 'Payment Request';
  }
  if (contentType === 'json') {
    return 'Data';
  }
  return 'Unknown Message';
};

export default extractMessagePreview;
