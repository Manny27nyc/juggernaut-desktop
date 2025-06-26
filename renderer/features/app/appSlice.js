/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { send } from 'redux-electron-ipc';
import { createSlice } from '@reduxjs/toolkit';
import { disconnectWallet } from '../wallets/WalletAPI';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    screenWidth: window.innerWidth
  },
  reducers: {
    screenResize: state => {
      state.screenWidth = window.innerWidth;
    }
  }
});

export const { screenResize } = appSlice.actions;

export default appSlice.reducer;

export const terminateApp = () => {
  return async dispatch => {
    try {
      await disconnectWallet();
      dispatch(send('terminateAppSuccess'));
    } catch (e) {
      dispatch(send('terminateAppFailure'));
    }
  };
};
