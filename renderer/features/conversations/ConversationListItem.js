// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Avatar } from 'rmwc';
import { conversationType } from '../../types';
import { switchSide } from '../chat/chatSlice';

class ConversationListItem extends Component {
  render() {
    const { conversation, selected, select, id, switchSide } = this.props;
    const {
      color,
      displayName,
      mostRecentMessageAt,
      mostRecentMessageContent,
      unreadMessages
    } = conversation;

    let createdAtTime;
    const displayLastMessage = mostRecentMessageContent || '';
    let className = 'conversation-list-item';
    if (selected) {
      className += ' selected';
    }

    if (mostRecentMessageAt) {
      createdAtTime = moment(mostRecentMessageAt);
      if (
        moment().format('YYYY-MM-DD') === createdAtTime.format('YYYY-MM-DD')
      ) {
        createdAtTime = createdAtTime.format('h:mm A');
      } else {
        createdAtTime = createdAtTime.format('M/D/YY');
      }
    } else {
      createdAtTime = '';
    }

    return (
      <div
        onKeyPress={() => {}}
        onClick={() => {
          select({ id });
          switchSide({ side: 'right' });
        }}
        className={className}
      >
        <div className="list-item-graphic">
          <Avatar
            style={{
              width: '48px',
              height: '48px',
              marginRight: '10px',
              backgroundColor: `${color}`,
              color: 'white'
            }}
            size="xlarge"
            name={displayName.toUpperCase()}
          />
        </div>
        <div className="list-item-text">
          <div className="alias">{displayName}</div>
          <div className="last-message">{displayLastMessage}</div>
        </div>
        <div className="timestamp">{createdAtTime}</div>
        <div className="unread-messages-wrapper">
          {unreadMessages > 0 && (
            <div className="unread-messages">
              <span>{unreadMessages}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ConversationListItem.propTypes = {
  conversation: conversationType.isRequired,
  selected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  switchSide: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  switchSide
};

export default connect(null, mapDispatchToProps)(ConversationListItem);
