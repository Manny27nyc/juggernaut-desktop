// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
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
