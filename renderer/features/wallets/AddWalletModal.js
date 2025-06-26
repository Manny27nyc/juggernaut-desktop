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
