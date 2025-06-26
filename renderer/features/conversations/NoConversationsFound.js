/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'rmwc';

const NoConversationsFound = props => {
  const { searchQuery } = props;
  return (
    <div className="empty-conversation-list">
      <div>
        <Icon icon={{ icon: 'search', size: 'xlarge' }} />
      </div>
      <p>No conversations found matching &apos;{searchQuery}&apos;</p>
    </div>
  );
};

NoConversationsFound.propTypes = {
  searchQuery: PropTypes.string.isRequired
};

export default NoConversationsFound;
