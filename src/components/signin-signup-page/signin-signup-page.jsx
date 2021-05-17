import React from 'react';
import './styles/signin-signup-page.scss';
import SignInForm from './signin-form';
import SignUpForm from './signup-form';

function SignInSignUpPage(props) {
  return (
    <div className="signin-signup-page">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignInSignUpPage;
