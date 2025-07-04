// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import ChannelsPage from './ChannelsPage';
import { hideManageChannelsModal } from './channelsSlice';

const ManageChannelsModal = props => {
  const { manageChannelsModalVisible, hideManageChannelsModal } = props;

  return (
    <Modal
      isOpen={manageChannelsModalVisible}
      onClose={hideManageChannelsModal}
    >
      <ChannelsPage />
    </Modal>
  );
};

ManageChannelsModal.propTypes = {
  hideManageChannelsModal: PropTypes.func.isRequired,
  manageChannelsModalVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { manageChannelsModalVisible } = state.channels;
  return {
    manageChannelsModalVisible
  };
};

const mapDispatchToProps = {
  hideManageChannelsModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageChannelsModal);
