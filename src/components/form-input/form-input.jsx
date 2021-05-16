import React from 'react';
import './styles/form-input.scss';

function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? 'shrink' : ''
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
