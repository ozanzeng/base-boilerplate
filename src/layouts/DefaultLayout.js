import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Router
import routes from '../routes';
import Header from '../components/Header';

class DefaultLayout extends Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/default") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return <Redirect key={key} to='/default/home'/>;
      }
    });
  };
  render() {
    return (
      <div>
          <Header paths={routes} />
          <Switch>{this.getRoutes(routes)}</Switch>
      </div>
    );
  }
}

export default DefaultLayout;
