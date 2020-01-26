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

      price: forky.price,
      masttype: forky.masttype,
      mastsize: forky.mastsize,

      forks: forky.forks,

      valve: forky.valve,

      sideshift: forky.sideshift,
      tyre: forky.tyre,
      coldstoreprot: forky.coldstoreprot,
      seat: forky.seat,
      cabin: forky.cabin,

      aircon: forky.aircon,
      heater: forky.heater,
      reargrab: forky.reargrab,
      sideleverhydraulic: forky.sideleverhydraulic,
      battery: forky.battery,
      charger: forky.charger,

      armguard: forky.armguard,
      platform: forky.platform,

      loadbackrest: forky.loadbackrest,
      steering: forky.steering,

      fork2d: forky.fork2d,
      bfs: forky.bfs
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h2>{this.state.model}</h2>
            {this.state.masttype
              ? "Mast Type : " + this.state.masttype
              : null}{" "}
            <br />
            {this.state.mastsize
              ? "Mast Height : " + this.state.mastsize
              : null}
            <br />
            {this.state.forks ? "Forks : " + this.state.forks : null}
            <br />
            {this.state.fork2d ? "Forks : " + this.state.fork2d : null}
            <br />
            {this.state.sideshift
              ? "Side Shift : " + this.state.sideshift
              : null}
            <br />
            {this.state.coldstoreprot ? "Cold Store Protection" : null}
            <br />
            {this.state.seat ? "Seat : " + this.state.seat : null}
            <br />
            {this.state.seat ? "Tyres : " + this.state.tyre : null}
            <br />
            {this.state.aircon ? "Air Con" : null}
            <br />
            {this.state.heater ? "Heater" : null}
            <br />
            {this.state.reargrab ? "Rear Grab Handle" : null}
            <br />
            {this.state.battery ? "Battery : " + this.state.battery : null}
            <br />
            {this.state.charger ? "Charger : " + this.state.charger : null}
            <br />
            {this.state.bfs ? "BFS" : null}
            <br />
            {this.state.armguard ? "Armguard" : null}
            <br />
            {this.state.platform ? "Platform" : null}
            <br />
            {this.state.loadbackrest ? "Load Back Rest" : null}
            <br />
            {this.state.steering ? "Electric Steering" : null}
            <br />
            {this.state.cabin ? "Cabin : " + this.state.cabin : null}
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
