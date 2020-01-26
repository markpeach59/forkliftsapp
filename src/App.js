import React, { Component } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";

import jwtDecode from "jwt-decode";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

import Forklifts from "./components/forklifts";
import ForkliftDetail from "./components/forkliftdetail";
import NotFound from "./components/notFound";

import RegistrationForm from "./components/registrationform";
import DealerRegistrationForm from "./components/dealerregistrationform";

import LoginForm from "./components/loginform";
import Logout from "./components/logout";

import Quotes from "./components/quotes";

import QuoteDetail from "./components/quotedetail";

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
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (error) {}
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
                <Button color="inherit">Home</Button>
              </Link>
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
              <Link to={{ pathname: "/quotes" }}>
                <Button color="inherit">Quotes</Button>
              </Link>
            </ToolBar>
          </AppBar>
          <img src="/img/logo.jpg" alt="" />
          <div>
            <Switch>
              <Route path="/register" component={RegistrationForm} />
              <Route
                path="/registerdealer"
                component={DealerRegistrationForm}
              />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route
                exact
                path="/forkliftdetail/:modelName"
                component={ForkliftDetail}
              />
              <Route path="/forklifts" component={Forklifts} />
              <Route exact path="/quotes/:_id" component={QuoteDetail} />
              <Route path="/quotes" component={Quotes} />
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
