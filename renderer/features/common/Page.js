// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';
import PropTypes from 'prop-types';

const Page = props => {
  const { children } = props;

  return <div className="page">{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
