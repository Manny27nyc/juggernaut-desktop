/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';

const MessageText = props => {
  const { content } = props;
  return <div className="message-text">{content}</div>;
};

MessageText.propTypes = {
  content: PropTypes.string.isRequired
};

export default MessageText;
