import React from 'react';
import './styles/custom-button.scss';

function CustomButton({ children, isGoogleSigninBtn, ...otherProps }) {
  return (
    <button
      className={`custom-button ${
        isGoogleSigninBtn ? 'google-signin-btn' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
