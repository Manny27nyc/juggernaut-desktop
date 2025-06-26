/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { autoUpdater } from 'electron-updater';
import { updaterLog } from '../utils/log';

autoUpdater.logger = updaterLog;

class JuggernautUpdater {
  constructor() {
    autoUpdater.checkForUpdatesAndNotify();
  }
}

export default JuggernautUpdater;
