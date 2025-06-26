/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './Loader';

const LoadingPage = props => {
  const { message } = props;

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div>
        <Loader />
        <div>{message}</div>
      </div>
    </div>
  );
};

LoadingPage.propTypes = {
  message: PropTypes.string
};

LoadingPage.defaultProps = {
  message: ''
};

const mapStateToProps = state => {
  const { loadingMessage } = state.wallet;
  return {
    message: loadingMessage
  };
};
export default connect(mapStateToProps)(LoadingPage);
