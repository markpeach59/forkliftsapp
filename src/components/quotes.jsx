import _ from "lodash";
import React, { Component } from "react";

import { Link } from "react-router-dom";

import { getQuotes } from "../services/quotesService";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
//import TableHead from "@material-ui/core/TableHead";

import TableBody from "@material-ui/core/TableBody";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import "typeface-roboto";

class Quotes extends Component {
  state = {
    quotes: []
  };

  async componentDidMount() {
    const { data: quotes } = await getQuotes();
    //console.log("Quotes Returned", quotes);
    this.setState({
      quotes
    });
  }

  render() {
    const t = this.state.quotes;
    //console.log("LL", t);

    const { length: count } = this.state.quotes;

    if (count === 0) return <p>There are no quotes in the database</p>;

    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>List of Quotes</h2>

            <Table>
              <TableBody>
                {t.map(x => (
                  <TableRow key={x._id}>
                    <TableCell>
                      <Link to={{ pathname: "/quotes/" + x._id }}>
                        <Button>
                          {_.slice(x.createdAt, 0, 10)}{" "}
                          {_.slice(x.createdAt, 11, 19)}
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell> {x.model}</TableCell>
                    <TableCell>
                      {" £"}
                      {x.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Quotes;
