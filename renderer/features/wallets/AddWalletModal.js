// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import AddWallet from './AddWallet';
import { hideAddWalletModal } from './walletsSlice';

const AddWalletModal = props => {
  const { addWalletModalVisible, hideAddWalletModal } = props;

  return (
    <Modal isOpen={addWalletModalVisible} onClose={hideAddWalletModal}>
      <AddWallet />
    </Modal>
  );
};

AddWalletModal.propTypes = {
  hideAddWalletModal: PropTypes.func.isRequired,
  addWalletModalVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { addWalletModalVisible } = state.wallets;
  return {
    addWalletModalVisible
  };
};

const mapDispatchToProps = {
  hideAddWalletModal
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWalletModal);
