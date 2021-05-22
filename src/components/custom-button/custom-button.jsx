import React from 'react';
import './styles/custom-button.scss';

function CustomButton({
  children,
  inverted,
  isGoogleSigninBtn,
  ...otherProps
}) {
  return (
    <button
      className={`custom-button ${inverted ? 'inverted' : ''} ${
        isGoogleSigninBtn ? 'google-signin-btn' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
