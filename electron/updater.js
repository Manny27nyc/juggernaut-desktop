// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { autoUpdater } from 'electron-updater';
import { updaterLog } from '../utils/log';

autoUpdater.logger = updaterLog;

class JuggernautUpdater {
  constructor() {
    autoUpdater.checkForUpdatesAndNotify();
  }
}

export default JuggernautUpdater;
