/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import { Button as RmwcBtn } from 'rmwc';

const styles = { btn: { margin: 10 } };

/* eslint-disable react/jsx-props-no-spreading */
const Button = props => {
  return <RmwcBtn style={styles.btn} {...props} />;
};

export default Button;
