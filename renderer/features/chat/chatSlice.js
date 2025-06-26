/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    selectedSide: 'left'
  },

  reducers: {
    switchSide: (state, action) => {
      const { side } = action.payload;
      state.selectedSide = side;
    }
  }
});

export const { switchSide } = chatSlice.actions;

export default chatSlice.reducer;
