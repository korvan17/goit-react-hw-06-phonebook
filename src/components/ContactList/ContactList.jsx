import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDelete }) {

  function clickDelete(id) {
    onDelete(id);
  };
    return (
      <ul>
        {contacts.map(val => (
          <li className="item" key={val.id}>
            <p>
              {val.name} {val.number}
            </p>
            {val.name !== 'no matches found' && (
              <button
                className="button"
                type="button"
                onClick={() => clickDelete(val.id)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    );

}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
