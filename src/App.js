import React, { Component } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import ProtectedRoute from "./components/protectedroute";
import ProtectedAdminRoute from "./components/protectedadminroute";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Forklifts from "./components/forklifts";
import ForkliftDetail from "./components/forkliftdetail";
import NotFound from "./components/notFound";

import RegistrationForm from "./components/registrationform";
import DealerRegistrationForm from "./components/dealerregistrationform";

import LoginForm from "./components/loginform";
import Logout from "./components/logout";
import auth from "./services/authService";

import Quotes from "./components/quotes";

import QuoteDetail from "./components/quotedetail";

import Orders from "./components/orders";
import OrderDetail from "./components/orderdetail";

import DealerHeader from "./components/dealerheader";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Maxim (GB) {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

    /* if logged in get dealer details */
  }

  render() {
    return (
      <React.Fragment>
        <Container component="main">
          <CssBaseline />
          <AppBar>
            <ToolBar>
              {this.state.user ? "Hello " + this.state.user.fullname : null}
              <Link to={{ pathname: "/" }}>
                <Button color="inherit">Forklifts</Button>
              </Link>

              <Link to={{ pathname: "/quotes" }}>
                <Button color="inherit">Quotes</Button>
              </Link>

              <Link to={{ pathname: "/orders" }}>
                <Button color="inherit">Orders</Button>
              </Link>

              {this.state.user && this.state.user.isAdmin && (
                <Link to={{ pathname: "/register" }}>
                  <Button color="inherit">Register User</Button>
                </Link>
              )}

              {this.state.user && this.state.user.isAdmin && (
                <Link to={{ pathname: "/registerdealer" }}>
                  <Button color="inherit">Register Dealer</Button>
                </Link>
              )}

              {this.state.user && (
                <Link to={{ pathname: "/logout" }}>
                  <Button color="inherit">Logout</Button>
                </Link>
              )}
              {!this.state.user && (
                <Link to={{ pathname: "/login" }}>
                  <Button color="inherit">Login</Button>
                </Link>
              )}
            </ToolBar>
          </AppBar>

          <DealerHeader />

          <div>
            <Switch>
              <ProtectedRoute path="/register" component={RegistrationForm} />
              <ProtectedAdminRoute
                path="/registerdealer"
                component={DealerRegistrationForm}
              />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <ProtectedRoute
                exact
                path="/forkliftdetail/:modelName"
                component={ForkliftDetail}
              />
              <ProtectedRoute path="/forklifts" component={Forklifts} />
              <ProtectedRoute
                exact
                path="/quotes/:_id"
                component={QuoteDetail}
              />
              <ProtectedRoute path="/quotes" component={Quotes} />
              <ProtectedRoute
                exact
                path="/orders/:_id"
                component={OrderDetail}
              />
              <ProtectedRoute path="/orders" component={Orders} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/forklifts" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
