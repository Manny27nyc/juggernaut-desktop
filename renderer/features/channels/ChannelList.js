/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import ChannelListItem from './ChannelListItem';
import EmptyChannelList from './EmptyChannelList';
import { channelType, pendingChannelType } from '../../types';

const ChannelList = props => {
  const { channels, pendingChannels, closingChannels } = props;

  const allChannels = channels.concat(pendingChannels).concat(closingChannels);

  if (allChannels.length === 0) {
    return (
      <div className="channel-list">
        <EmptyChannelList />
      </div>
    );
  }
  return (
    <div className="channel-list">
      {allChannels.map(channel => {
        const { channelPoint } = channel;
        return <ChannelListItem key={channelPoint} channel={channel} />;
      })}
    </div>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(channelType),
  pendingChannels: PropTypes.arrayOf(pendingChannelType),
  closingChannels: PropTypes.arrayOf(pendingChannelType)
};

ChannelList.defaultProps = {
  channels: [],
  pendingChannels: [],
  closingChannels: []
};

export default ChannelList;
