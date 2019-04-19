import React, { Component } from 'react';

import HomePage from './containers/HomePage/HomePage';

import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="product">Product</Link>
        <Route path="/product" component={HomePage}></Route>
      </div>

    );
  }
}

export default App;
