import './App.css';
import React, { useEffect } from 'react';
import CategoryMenu from './components/category-menu/category-menu';
import ShopPage from './components/shop-page/shop-page.jsx';
import SignInSignUpPage from './components/signin-signup-page/signin-signup-page';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import { auth, storeUserToDb } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

function App(props) {
  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await storeUserToDb(user);
        userRef.onSnapshot((snapshot) => {
          props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        props.setCurrentUser(null);
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
          <SignInSignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
