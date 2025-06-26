/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConversationDetail from './ConversationDetail';
import Loader from '../common/Loader';
import {
  hideConversationDetails,
  fetchConversationDetails
} from './conversationsSlice';
import { nodeDetailsType } from '../../types';
import { Page, FixedHeader, ScrollableContent } from '../common';

const ConversationDetailPage = props => {
  const {
    id,
    color,
    withPubkey,
    walletPubkey,
    displayName,
    conversationDetailsLoading,
    conversationDetails,
    fetchConversationDetails,
    hideConversationDetails
  } = props;

  useEffect(() => {
    fetchConversationDetails(withPubkey);
  }, [withPubkey]);

  const loading = conversationDetailsLoading || !conversationDetails;

  return (
    <Page>
      <FixedHeader
        backCallback={hideConversationDetails}
        title="Manage Channels"
        details="A channel lets you open a direct connection to a node for a one time fee. Once the channel is open you will be able to send unlimited messages to that node without any additional routing fees. You will also be able to use this channel as a new path to route messages to other nodes through."
      />
      <ScrollableContent>
        {loading && <Loader />}
        {!loading && (
          <ConversationDetail
            conversationId={id}
            walletPubkey={walletPubkey}
            pubkey={withPubkey}
            displayName={displayName}
            color={color}
            conversationDetails={conversationDetails}
          />
        )}
      </ScrollableContent>
    </Page>
  );
};

ConversationDetailPage.propTypes = {
  id: PropTypes.number.isRequired,
  withPubkey: PropTypes.string.isRequired,
  walletPubkey: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  fetchConversationDetails: PropTypes.func.isRequired,
  hideConversationDetails: PropTypes.func.isRequired,
  conversationDetailsLoading: PropTypes.bool.isRequired,
  conversationDetails: nodeDetailsType
};

ConversationDetailPage.defaultProps = {
  conversationDetails: null
};

const mapDispatchToProps = {
  fetchConversationDetails,
  hideConversationDetails
};

const mapStateToProps = state => {
  const {
    conversationDetailsLoading,
    conversationDetails
  } = state.conversations;

  return {
    conversationDetailsLoading,
    conversationDetails
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationDetailPage);
