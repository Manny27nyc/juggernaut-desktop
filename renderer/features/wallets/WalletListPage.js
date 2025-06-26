/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React, { Component } from 'react';
import { Card } from 'rmwc';
import { Page, FixedHeader } from '../common';
import WalletList from './WalletList';
import { WalletListIcon } from '../images';

class WalletListPage extends Component {
  render() {
    return (
      <Page>
        <FixedHeader
          title="Nodes"
          details="A node is how you connect and communicate with the lightning network.  Choose which node you would like to use for this session."
          ImageComponent={WalletListIcon}
        />
        <Card
          style={{
            marginTop: '25px',
            borderRadius: '10px',
            marginBottom: '15px',
            overflow: 'auto'
          }}
        >
          <WalletList />
        </Card>
      </Page>
    );
  }
}

export default WalletListPage;
