/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import ElevatedSearchInput from '../common/ElevatedSearchInput';

const NodeListFilter = props => {
  const { query, setNodeQuery } = props;

  return (
    <ElevatedSearchInput
      query={query}
      setQuery={setNodeQuery}
      placeholder="Search by alias or pubkey"
    />
  );
};

NodeListFilter.propTypes = {
  setNodeQuery: PropTypes.func.isRequired,
  query: PropTypes.string
};

NodeListFilter.defaultProps = {
  query: ''
};

export default NodeListFilter;
