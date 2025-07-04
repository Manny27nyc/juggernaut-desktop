// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../common/actions';
import getNodeInterface from '../../../utils/getNodeInterface';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
    pendingChannels: [],
    closingChannels: [],
    loading: false,
    openChannelModalVisible: false,
    openChannelWithPubkey: null,
    manageChannelsModalVisible: false,
    error: null
  },
  extraReducers: {
    [logout]: state => {
      state.channels = [];
      state.pendingChannels = [];
      state.closingChannels = [];
      state.openChannelModalVisible = false;
      state.manageChannelsModalVisible = false;
      state.openChannelWithPubkey = null;
      state.loading = false;
      state.error = null;
    }
  },
  reducers: {
    fetchChannelsStart(state) {
      state.loading = true;
    },
    fetchChannelsSuccess(state, action) {
      const { active, pending, closing } = action.payload;
      state.loading = false;
      state.channels = active;
      state.pendingChannels = pending;
      state.closingChannels = closing;
    },
    fetchChannelsFailure(state, action) {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },
    showOpenChannelModal: (state, action) => {
      const { pubkey } = action.payload;
      state.openChannelModalVisible = true;
      state.openChannelWithPubkey = pubkey;
    },
    hideOpenChannelModal: state => {
      state.openChannelModalVisible = false;
    },
    showManageChannelsModal: state => {
      state.manageChannelsModalVisible = true;
    },
    hideManageChannelsModal: state => {
      state.manageChannelsModalVisible = false;
    }
  }
});

export const {
  fetchChannelsStart,
  fetchChannelsSuccess,
  fetchChannelsFailure,
  showOpenChannelModal,
  hideOpenChannelModal,
  showManageChannelsModal,
  hideManageChannelsModal
} = channelsSlice.actions;

export const fetchChannels = () => {
  return async dispatch => {
    dispatch(fetchChannelsStart());
    try {
      const lnNode = getNodeInterface();
      const { active, pending, closing } = await lnNode.listChannels();
      dispatch(fetchChannelsSuccess({ active, pending, closing }));
    } catch (e) {
      dispatch(fetchChannelsFailure({ error: e.message }));
    }
  };
};

export const receiveChannelEvent = () => dispatch => {
  setTimeout(() => {
    dispatch(fetchChannels());
  }, 3000);
};

export const receiveChannelGraphData = channelGraphData => () => {
  console.log(channelGraphData);
};

export default channelsSlice.reducer;
