import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import Forklifts from "./components/forklifts";
import Kbd from "./components/kbd";
import NotFound from "./components/notFound";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Your Website {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Switch>
            <Route path="/kbd" component={Kbd} />
            <Route path="/forklifts" component={Forklifts} />

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

export default App;
