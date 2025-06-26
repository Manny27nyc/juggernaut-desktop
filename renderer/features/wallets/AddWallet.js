/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React, { useState } from 'react';
import { Card, TabBar, Tab } from 'rmwc';
import AddWalletForm from './AddWalletForm';
import { Page, FixedHeader } from '../common';
import { AddWalletIcon } from '../images';

const AddWallet = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Page>
      <FixedHeader
        title="Add Node"
        details="Enter your nodes connection details using either LND Connect format or manually specify each field."
        ImageComponent={AddWalletIcon}
      />
      <Card style={{ marginTop: '25px' }}>
        <TabBar
          activeTabIndex={activeTab}
          onActivate={evt => setActiveTab(evt.detail.index)}
        >
          <Tab>LND Connect</Tab>
          <Tab>Manual</Tab>
        </TabBar>
      </Card>
      <Card
        style={{
          marginTop: '10px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          overflow: 'auto',
          marginBottom: '15px',
          padding: '5px'
        }}
      >
        <AddWalletForm activeTab={activeTab} />
      </Card>
    </Page>
  );
};
export default AddWallet;
