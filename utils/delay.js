/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * delay - Promisified setTimeout.
 *
 * @param  {number} time Time (ms)
 * @returns {Promise} Promise that resolves after time ms
 */
const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

export default delay;
