// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { proxyValue } from 'comlinkjs';
import { createSlice } from '@reduxjs/toolkit';
import { getWalletDetails, getBalanceInformation } from '../wallets/WalletAPI';
import { readWallet } from '../../../utils/db';
import getNodeInterface from '../../../utils/getNodeInterface';
import { receiveMessage } from '../messages/messagesSlice';
import {
  receiveChannelGraphData,
  fetchChannelsSuccess,
  receiveChannelEvent
} from '../channels/channelsSlice';
import { fetchNodesSuccess } from '../nodes/nodesSlice';
import { receivePeerEvent } from '../peers/peersSlice';
import { receiveTransaction } from '../transactions/transactionsSlice';
import { logout, newMessage } from '../common/actions';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    walletId: null,
    loading: false,
    loadingMessage: null,
    locked: false,
    info: null,
    fundingAddress: null,
    availableBalance: null,
    pendingBalance: null,
    fetchingBalance: false,
    error: null,
    connected: false,
    connecting: false,
    loadingChatNodes: false,
    chatNodes: null
  },
  reducers: {
    connectWalletStart(state, action) {
      const { walletId } = action.payload;
      state.walletId = walletId;
      state.connecting = true;
      state.connected = false;
      state.locked = false;
      state.error = null;
    },
    walletLocked(state) {
      state.connecting = false;
      state.locked = true;
      state.connected = false;
    },
    walletActive(state) {
      state.connecting = false;
      state.locked = false;
      state.connected = true;
    },
    connectWalletFailure(state, action) {
      const { walletId, error } = action.payload;
      state.walletId = walletId;
      state.connecting = false;
      state.connected = false;
      state.error = error;
    },
    fetchWalletStart(state) {
      state.loading = true;
    },
    fetchWalletSuccess(state, action) {
      const {
        locked,
        info,
        availableBalance,
        pendingBalance,
        fundingAddress
      } = action.payload;
      state.locked = locked;
      state.info = info;
      state.availableBalance = availableBalance;
      state.pendingBalance = pendingBalance;
      state.fundingAddress = fundingAddress;
      state.loading = false;
      state.error = null;
    },
    fetchWalletFailure(state, action) {
      const error = action.payload;
      state.loading = false;
      state.error = error;
    },
    fetchBalanceStart(state) {
      state.fetchingBalance = true;
    },
    fetchBalanceSuccess(state, action) {
      const { availableBalance, pendingBalance } = action.payload;
      state.availableBalance = availableBalance;
      state.pendingBalance = pendingBalance;
      state.fetchingBalance = false;
      state.error = null;
    },
    fetchBalanceFailure(state, action) {
      const error = action.payload;
      state.fetchingBalance = false;
      state.error = error;
    },
    fetchChatNodesStart(state) {
      state.loadingChatNodes = true;
    },
    fetchChatNodesSuccess(state, action) {
      const { chatNodes } = action.payload;
      state.chatNodes = chatNodes;
      state.loadingChatNodes = false;
      state.error = null;
    },
    fetchChatNodesFailure(state, action) {
      const error = action.payload;
      state.loadingChatNodes = false;
      state.error = error;
    },
    walletUnlocked(state) {
      state.locked = false;
    },
    updateLoadingMessage(state, action) {
      const { message } = action.payload;
      state.loadingMessage = message;
    }
  },
  extraReducers: {
    [logout]: state => {
      state.locked = false;
      state.info = null;
      state.availableBalance = null;
      state.pendingBalance = null;
      state.fundingAddress = null;
      state.error = null;
      state.connected = false;
      state.connecting = false;
      state.loading = false;
      state.fetchingBalance = false;
      state.walletId = null;
      state.chatNodes = null;
      state.loadingChatNodes = false;
    },
    [newMessage]: () => {
      fetchBalance();
    }
  }
});

const {
  fetchWalletStart,
  fetchWalletSuccess,
  fetchWalletFailure,
  fetchBalanceStart,
  fetchBalanceSuccess,
  fetchBalanceFailure,
  fetchChatNodesStart,
  fetchChatNodesSuccess,
  fetchChatNodesFailure,
  connectWalletStart,
  connectWalletFailure,
  walletLocked,
  walletActive,
  updateLoadingMessage
} = walletSlice.actions;

export const fetchChatNodes = () => {
  return async dispatch => {
    dispatch(fetchChatNodesStart());
    const lnNode = getNodeInterface();

    try {
      const chatNodes = await lnNode.getChatNodes();
      dispatch(fetchChatNodesSuccess({ chatNodes }));
    } catch (e) {
      dispatch(fetchChatNodesFailure(e.message));
    }
  };
};
export const fetchWallet = walletId => {
  return async dispatch => {
    dispatch(fetchWalletStart());
    try {
      const lnNode = getNodeInterface();
      const wallet = await readWallet(walletId);
      dispatch(
        updateLoadingMessage({
          message: 'processing invoices and network graph...'
        })
      );
      const walletDetails = await getWalletDetails(wallet);
      const { active, pending, closing } = await lnNode.listChannels();

      const nodes = await lnNode.getAllNodes();
      dispatch(fetchNodesSuccess({ nodes }));
      dispatch(fetchChannelsSuccess({ active, pending, closing }));
      dispatch(fetchWalletSuccess(walletDetails));
    } catch (e) {
      dispatch(fetchWalletFailure(e.message));
    }
  };
};

export function fetchBalance() {
  return async dispatch => {
    dispatch(fetchBalanceStart());

    try {
      const balanceInformation = await getBalanceInformation();
      dispatch(fetchBalanceSuccess(balanceInformation));
    } catch (e) {
      dispatch(fetchBalanceFailure(e.message));
    }
  };
}

export const connectWallet = walletId => {
  return async dispatch => {
    dispatch(connectWalletStart({ walletId }));

    const lnNode = getNodeInterface();
    const wallet = await readWallet(walletId);

    const handleMessageSubscription = proxyValue(message =>
      dispatch(receiveMessage(message))
    );

    const handleInvoiceEventData = proxyValue(() => dispatch(fetchBalance()));

    const handeSendPaymentEvent = proxyValue(() => dispatch(fetchBalance()));

    const handleChannelGraphSubscription = proxyValue(channelGraphData =>
      dispatch(receiveChannelGraphData(channelGraphData))
    );

    const handleTransactionData = proxyValue(transaction => {
      dispatch(receiveTransaction(transaction));
      dispatch(fetchBalance());
    });

    const handleChannelEventData = proxyValue(channelEvent => {
      dispatch(receiveChannelEvent(channelEvent));
      dispatch(fetchBalance());
    });

    const handlePeerEventData = proxyValue(peerEvent =>
      dispatch(receivePeerEvent(peerEvent))
    );
    const handleWalletLocked = proxyValue(() => dispatch(walletLocked()));
    const handleWalletActive = proxyValue(() => dispatch(walletActive()));

    lnNode.on('subscribeMessages.data', handleMessageSubscription);
    lnNode.on('subscribeInvoices.data', handleInvoiceEventData);
    lnNode.on('paymentSent', handeSendPaymentEvent);
    lnNode.on('subscribeChannelGraph.data', handleChannelGraphSubscription);
    lnNode.on('subscribeTransactions.data', handleTransactionData);
    lnNode.on('subscribeChannelEvents.data', handleChannelEventData);
    lnNode.on('subscribePeerEvent.data', handlePeerEventData);
    lnNode.on('WALLET_LOCKED', handleWalletLocked);
    lnNode.on('WALLET_ACTIVE', handleWalletActive);

    try {
      await lnNode.connect({
        ...wallet,
        protoDir: window.Juggernaut.lndProtoDir
      });
    } catch (e) {
      dispatch(connectWalletFailure({ walletId, error: e.message }));
    }
  };
};

export const { walletUnlocked, updateAvailableBalance } = walletSlice.actions;
export default walletSlice.reducer;
