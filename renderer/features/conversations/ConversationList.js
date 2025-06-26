/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { conversationType } from '../../types';
import ConversationListItem from './ConversationListItem';
import EmptyConversationList from './EmptyConversationList';
import NoConversationsFound from './NoConversationsFound';

const ConversationList = props => {
  const {
    conversations,
    selectedConversationId,
    selectConversation,
    searchQuery
  } = props;

  if (conversations.length === 0) {
    if (searchQuery === '') {
      return <EmptyConversationList />;
    }
    return <NoConversationsFound searchQuery={searchQuery} />;
  }

  return (
    <div className="conversation-list">
      {conversations.map(conversation => (
        <ConversationListItem
          key={conversation.id}
          id={conversation.id}
          select={selectConversation}
          selected={conversation.id === selectedConversationId}
          conversation={conversation}
        />
      ))}
    </div>
  );
};

ConversationList.propTypes = {
  conversations: PropTypes.arrayOf(conversationType).isRequired,
  selectedConversationId: PropTypes.number,
  selectConversation: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};

ConversationList.defaultProps = {
  selectedConversationId: null
};

export default ConversationList;
