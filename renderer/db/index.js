/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import Dexie from 'dexie';

const dbName = `juggernaut-${process.env.NODE_ENV}`;
const db = new Dexie(dbName);
export default db;
