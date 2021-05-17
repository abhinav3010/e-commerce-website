import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './styles/signup-form.scss';

import { auth, storeUserToDb } from '../../firebase/firebase.utils';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      case 'confirm_password': {
        setConfirmPassword(value);
        break;
      }
      case 'display_name': {
        setDisplayName(value);
        break;
      }
      default:
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await storeUserToDb(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signup-form">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          onChange={onChange}
          name="display_name"
          required
        />
        <FormInput
          type="email"
          label="Email"
          value={email}
          onChange={onChange}
          name="email"
          required
        />
        <FormInput
          type="password"
          label="Password"
          value={password}
          onChange={onChange}
          name="password"
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
          name="confirm_password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUpForm;
