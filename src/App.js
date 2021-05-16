import './App.css';
import React from 'react';
import CategoryMenu from './components/category-menu/category-menu';
import ShopPage from './components/shop-page/shop-page.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
