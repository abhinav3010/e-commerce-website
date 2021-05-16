import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './styles/signin-form.scss';

function SignInForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="signin-form">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          onChange={onChange}
          label="Email"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          required
          onChange={onChange}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSigninBtn>
            Sign in using Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
