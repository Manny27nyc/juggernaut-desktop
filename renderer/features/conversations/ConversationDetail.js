/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'rmwc';
import { nodeDetailsType } from '../../types';
import { showOpenChannelModal } from '../channels/channelsSlice';
import FilteredChannelList from '../channels/FilteredChannelList';

const ConversationDetail = props => {
  const { conversationId, conversationDetails } = props;
  const dispatch = useDispatch();

  const { pubKey, alias } = conversationDetails;
  return (
    <div data-id={conversationId} className="conversation-detail">
      <div className="channel-list">
        <div className="channel-list-header">
          {pubKey === '' && <h2>Channels</h2>}
          {pubKey !== '' && <h2>Channels with {alias}</h2>}
          <Button
            icon="add"
            label="Open Channel"
            outlined
            onClick={() => {
              dispatch(showOpenChannelModal({ pubkey: pubKey }));
            }}
          />
        </div>
        <FilteredChannelList pubkey={pubKey} />
      </div>
    </div>
  );
};

ConversationDetail.propTypes = {
  conversationId: PropTypes.number.isRequired,
  conversationDetails: nodeDetailsType.isRequired
};

export default ConversationDetail;
