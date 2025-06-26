/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { showOpenChannelModal } from '../channels/channelsSlice';
import FilteredNodeList from './FilteredNodeList';
import { Page, FixedHeader } from '../common';
import { NodeListIcon } from '../images';

const NodeListPage = () => {
  const dispatch = useDispatch();

  return (
    <Page>
      <FixedHeader
        title="Open a Channel"
        details="A channel allows you to send and receive payments and messages on the lightning network with that node and anyone they are connected to."
        ImageComponent={NodeListIcon}
      />
      <FilteredNodeList
        cta={{
          label: 'Open',
          type: 'button',
          action: node => {
            dispatch(showOpenChannelModal({ pubkey: node.pubKey }));
          }
        }}
      />
    </Page>
  );
};

export default NodeListPage;
