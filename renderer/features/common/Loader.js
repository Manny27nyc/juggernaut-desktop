/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress, Icon } from 'rmwc';

const Loader = props => {
  const { color } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <Icon icon={<CircularProgress style={{ color }} />} />
    </div>
  );
};

Loader.propTypes = {
  color: PropTypes.string
};

Loader.defaultProps = {
  color: 'purple'
};

export default Loader;
