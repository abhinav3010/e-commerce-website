import './App.css';
import React from 'react';
import CategoryMenu from './components/category-menu/category-menu';
import ShopPage from './components/shop-page/shop-page.jsx';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
