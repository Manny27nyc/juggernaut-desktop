/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DataTableRow, DataTableCell } from 'rmwc';

const EmptyNodeListItem = ({ query, columns }) => {
  return (
    <DataTableRow>
      <DataTableCell style={{ textAlign: 'center' }} colSpan={columns}>
        No nodes found with an alias or pubkey containing &apos;{query}&apos;.
      </DataTableCell>
    </DataTableRow>
  );
};

EmptyNodeListItem.propTypes = {
  query: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired
};

export default EmptyNodeListItem;
