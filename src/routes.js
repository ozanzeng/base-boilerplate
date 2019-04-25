// App pages
import ProductPage from './containers/ProductPage/ProductPage';
import StaticPage from './containers/StaticPage/StaticPage';

// Auth pages
import LoginPage from './containers/LoginPage/LoginPage';

var routes = [
  {
    path: "/product",
    name: "Product",
    component: ProductPage,
    layout: "/default"
  },
  {
    path: "/home",
    name: "Home",
    component: StaticPage,
    layout: "/default"
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    layout: "/auth"
  }
];

export default routes;
