/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { productName, version } from '../package.json';

/**
 * getPackageDetails - Get package details from package.json.
 *
 * @returns {{productName:string, version:string}} Package details
 */
const getPackageDetails = () => {
  return { productName, version };
};

export default getPackageDetails;
