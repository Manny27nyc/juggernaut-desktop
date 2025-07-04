// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import Dexie from 'dexie';

const dbName = `juggernaut-${process.env.NODE_ENV}`;
const db = new Dexie(dbName);
export default db;
