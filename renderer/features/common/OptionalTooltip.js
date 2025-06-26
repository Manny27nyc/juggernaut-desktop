/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'rmwc';

const OptionalTooltip = ({ content, children, ...otherProps }) => {
  if (!content) {
    return children;
  }

  return (
    <Tooltip content={content} {...otherProps}>
      {children}
    </Tooltip>
  );
};

OptionalTooltip.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node.isRequired
};

OptionalTooltip.defaultProps = {
  content: null
};

export default OptionalTooltip;
