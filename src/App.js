import './App.css';
import React, { useState, useEffect } from 'react';
import CategoryMenu from './components/category-menu/category-menu';
import ShopPage from './components/shop-page/shop-page.jsx';
import SignInSignUpPage from './components/signin-signup-page/signin-signup-page';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <CategoryMenu />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/signin">
          <SignInSignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
