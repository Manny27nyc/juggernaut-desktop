/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'rmwc';
import { showNewConversationForm } from './conversationsSlice';

const EmptyConversationList = () => {
  const dispatch = useDispatch();

  return (
    <div className="empty-conversation-list">
      <div>
        <Icon icon={{ icon: 'chat', size: 'xlarge' }} />
      </div>
      <p>
        You have no conversations yet,{' '}
        <a
          tabIndex="0"
          role="link"
          onKeyPress={() => {}}
          onClick={() => {
            dispatch(showNewConversationForm());
          }}
        >
          create one
        </a>{' '}
        to get started.
      </p>
    </div>
  );
};

export default EmptyConversationList;
