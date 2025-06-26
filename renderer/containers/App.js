/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { screenResize } from '../features/app/appSlice';

const App = props => {
  const { children, screenResize } = props;

  const handleResize = () => screenResize();
  useEffect(() => {
    screenResize();
    window.addEventListener('resize', handleResize);
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  screenResize: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  screenResize
};

export default connect(null, mapDispatchToProps)(App);
