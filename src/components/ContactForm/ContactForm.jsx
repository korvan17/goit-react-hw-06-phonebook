import React from 'react';
import PropTypes from 'prop-types';
export default function ContactForm({ onSabmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { name, number } = e.target;
    onSabmit(name.value, number.value);
  };
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="button" type="submit">
          Add Contact
        </button>
      </form>
    );
}

ContactForm.propTypes = {
  onSabmit: PropTypes.func.isRequired,
};
