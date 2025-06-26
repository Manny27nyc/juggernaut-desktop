/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import NodeListPage from './NodeListPage';
import { hideNodeListPageModal } from './nodesSlice';

const NodeListPageModal = props => {
  const { nodeListPageModalVisible, hideNodeListPageModal } = props;

  return (
    <Modal isOpen={nodeListPageModalVisible} onClose={hideNodeListPageModal}>
      <NodeListPage />
    </Modal>
  );
};

NodeListPageModal.propTypes = {
  hideNodeListPageModal: PropTypes.func.isRequired,
  nodeListPageModalVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { nodeListPageModalVisible } = state.nodes;
  return {
    nodeListPageModalVisible
  };
};

const mapDispatchToProps = {
  hideNodeListPageModal
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeListPageModal);
