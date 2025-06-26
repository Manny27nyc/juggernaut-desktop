/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';

const FixedContent = props => {
  const { children } = props;

  return <div className="fixed-content">{children}</div>;
};

FixedContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default FixedContent;
