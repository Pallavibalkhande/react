package src/components/PrimaryButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton({ label, onClick }) {
  return (
    <button className="primary-button" onClick={onClick}>
      {label}
    </button>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;