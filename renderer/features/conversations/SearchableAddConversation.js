/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Page, FixedHeader } from '../common';
import FilteredNodeList from '../nodes/FilteredNodeList';
import {
  addConversation,
  hideNewConversationForm,
  selectConversation
} from './conversationsSlice';
import { createConversation } from '../../../utils/db';
import { NewConversationIcon as HeaderNewConversationIcon } from '../images';
import NewConversationIcon from '../images/icons/NewConversationIcon';
import { switchSide } from '../chat/chatSlice';

const SearchableAddConversation = ({ walletId }) => {
  const dispatch = useDispatch();

  const handleNewConversation = async ({ pubKey, alias, color }) => {
    const conversation = await createConversation(
      pubKey,
      walletId,
      alias,
      color
    );
    dispatch(addConversation(conversation));
    dispatch(hideNewConversationForm());
    dispatch(selectConversation(conversation));
    dispatch(switchSide({ side: 'right' }));
  };

  return (
    <Page>
      <FixedHeader
        title="Start New Conversation"
        details="Search for someone to chat with using their alias or public key."
        ImageComponent={HeaderNewConversationIcon}
      />

      <FilteredNodeList
        cta={{
          type: 'icon',
          icon: <NewConversationIcon />,
          action: handleNewConversation,
          tooltip: 'Start Conversation'
        }}
        viewType="simple"
        filterConversations
      />
    </Page>
  );
};

SearchableAddConversation.propTypes = {
  walletId: PropTypes.number.isRequired
};

export default SearchableAddConversation;
