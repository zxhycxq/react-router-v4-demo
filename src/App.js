import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Products from "./Products";
import Category from "./Category";
import Login, { fakeAuth } from "./Login";

const Home = props => (
    <div>
      <h2>Home {console.log (props)}</h2>
    </div>
);

const Admin = ({match}) => {
  return (
      <div>
        {" "}
        <h2>欢迎管理员</h2>
      </div>
  )
}

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
      <Route
          {...rest}
          render={props =>
              fakeAuth.isAuthenticated === true ? (<Component {...props}/>)
                  : (
                      <Redirect
                          to={{pathname: '/login', state: {from: props.location}}}
                      />
                  )}
      />
  );
}

class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-light">
            <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/admin">Admin area</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/products" component={Products} />
          </Switch>
        </div>
    );
  }
}

export default App;
