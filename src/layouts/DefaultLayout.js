import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
// Router
import routes from '../routes';

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
        return <Redirect to='/default/home'/>;;
      }
    });
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  static propTypes = {

  }

  render() {
    return (
      <div>
          <Link to="/default/product">Product</Link>
          <Link to="/default/home">Home</Link>
          <Link to="/auth/login">Login</Link>
          <Switch>{this.getRoutes(routes)}</Switch>
      </div>
    );
  }
}

export default DefaultLayout;
