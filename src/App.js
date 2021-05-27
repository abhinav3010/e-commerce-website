import './App.css';
import React, { useEffect } from 'react';
import CategoryMenu from './components/category-menu/category-menu';
import ShopPage from './components/shop-page/shop-page.jsx';
import SignInSignUpPage from './components/signin-signup-page/signin-signup-page';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import { auth, storeUserToDb } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import CheckoutPage from './components/checkout-page/checkout-page';

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await storeUserToDb(user);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <CategoryMenu />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/signin">
          {currentUser ? <Redirect to="/" /> : <SignInSignUpPage />}
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
