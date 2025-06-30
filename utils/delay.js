// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/**
 * delay - Promisified setTimeout.
 *
 * @param  {number} time Time (ms)
 * @returns {Promise} Promise that resolves after time ms
 */
const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

export default delay;
