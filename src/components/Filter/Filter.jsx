import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <>
      <h4>Find contacts by name</h4>
      <input type="text" name="find" onChange={onChange} />
    </>
  );
}

Filter.prototype = {
  findChange: PropTypes.func.isRequired,
};
