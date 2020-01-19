import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import { getQuoteDetail } from "../services/quotesService";

import "typeface-roboto";

class QuoteDetail extends Component {
  state = {};

  async componentDidMount() {
    const handle = this.props.match.params._id;
    //console.log("Params", handle);
    const { data: forky } = await getQuoteDetail(handle);
    //console.log("Detail", forky);

    this.setState({
      model: forky.model,

      price: forky.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h2>{this.state.model}</h2>
            <br />
            Price Includes :
            <br />
            ISO Safety System
            <br />
            Full LED Road Lighting
            <br />
            Amber Beacon, Safety Blue Spot
            <br />
            Reverse Alarm
            <br />
            <br />
            <strong>Quote Price : £{this.state.price}</strong>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default QuoteDetail;
