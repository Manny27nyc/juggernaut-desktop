/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import walletsReducer from './features/wallets/walletsSlice';
import conversationsReducer from './features/conversations/conversationsSlice';
import messagesReducer from './features/messages/messagesSlice';
import walletReducer from './features/wallet/walletSlice';
import channelsReducer from './features/channels/channelsSlice';
import transactionsReducer from './features/transactions/transactionsSlice';
import peersReducer from './features/peers/peersSlice';
import nodesReducer from './features/nodes/nodesSlice';
import chatReducer from './features/chat/chatSlice';
import appReducer from './features/app/appSlice';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    wallets: walletsReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    wallet: walletReducer,
    channels: channelsReducer,
    transactions: transactionsReducer,
    peers: peersReducer,
    nodes: nodesReducer,
    chat: chatReducer,
    app: appReducer
  });
}
