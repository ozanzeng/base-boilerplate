import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import AuthLayout from './layouts/AuthLayout';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/default" render={props => <DefaultLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/default/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
