import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Masts from "./masts";
import Forks from "./forks";
import SideShifts from "./sideshifts";
import Tyres from "./tyres";
import Cabins from "./cabins";
import Valves from "./valves";
import ResetFilters from "./resetfilters";

import { getForkliftDetail } from "../services/forkliftDetailService";

import "typeface-roboto";

class ForkliftDetail extends Component {
  state = {};

  async componentDidMount() {
    const handle = this.props.match.params.modelName;
    //console.log("Params", handle);
    const { data: forky } = await getForkliftDetail(handle);
    //console.log("Detail", forky);

    this.setState({
      model: forky.model,
      imgName: forky.imgName,
      engType: forky.engType,
      liftcapacity: forky.capacity,
      masts: forky.masts,
      valves: forky.valves,
      forks: forky.forks,
      sideshifts: forky.sideshift,
      tyres: forky.tyres,
      cabins: forky.cabin,
      totalprice: forky.basePrice,
      baseprice: forky.basePrice
    });
  }

  handleResetFilters = () => {
    console.log("Been Reset");

    this.setState({
      selectedMast: undefined,
      selectedMastSize: undefined,
      selectedValve: undefined,
      selectedFork: undefined,
      selectedSideShift: undefined,
      selectedTyre: undefined,
      selectedCabin: undefined,
      totalprice: this.state.baseprice
    });
  };

  handleMastSel = mast => {
    console.log("Current Mast Selected", this.state.selectedMast);

    console.log("Passedmask", mast);

    console.log("Mast Selected ", mast);

    this.setState({ selectedMast: mast });
  };

  handleMastSizeSel = (mastsize, masttype) => {
    console.log("Current Mast Size Selected", this.state.selectedMastSize);

    console.log("Passedmask", mastsize);

    console.log("Mast Selected ", mastsize);
    console.log("Mast Type Selected ", masttype);

    const oldprice = this.state.selectedMastSize
      ? this.state.selectedMastSize.price
      : 0;
    const newprice = this.state.totalprice + mastsize.price - oldprice;

    this.setState({
      selectedMastSize: mastsize,
      selectedMast: masttype,
      totalprice: newprice
    });
  };

  handleForkSel = fork => {
    console.log("Current Fork Selected", this.state.selectedFork);

    console.log("PassedmFork", fork);

    const oldprice = this.state.selectedFork
      ? this.state.selectedFork.price
      : 0;
    const newprice = this.state.totalprice + fork.price - oldprice;

    this.setState({ selectedFork: fork, totalprice: newprice });
  };

  handleSideShiftSel = sideshift => {
    console.log("Current Side Shift Selected", this.state.selectedSideShift);

    console.log("Side Shift Selected ", sideshift);

    const oldprice = this.state.selectedSideShift
      ? this.state.selectedSideShift.price
      : 0;
    const newprice = this.state.totalprice + sideshift.price - oldprice;

    this.setState({ selectedSideShift: sideshift, totalprice: newprice });
  };

  handleValveSel = valve => {
    console.log("Current Valve Selected", this.state.selectedValve);

    console.log("PassedmValve", valve);

    const oldprice = this.state.selectedValve
      ? this.state.selectedValve.price
      : 0;
    const newprice = this.state.totalprice + valve.price - oldprice;

    this.setState({ selectedValve: valve, totalprice: newprice });
  };

  handleTyreSel = tyre => {
    console.log("Current Tyre Selected", this.state.selectedTyre);

    console.log("PassedmTyre", tyre);

    const oldprice = this.state.selectedTyre
      ? this.state.selectedTyre.price
      : 0;
    const newprice = this.state.totalprice + tyre.price - oldprice;

    this.setState({ selectedTyre: tyre, totalprice: newprice });
  };

  handleCabinSel = cabin => {
    console.log("Current Cabin Selected", this.state.selectedCabin);

    console.log("PassedmCabin", cabin);

    const oldprice = this.state.selectedCabin
      ? this.state.selectedCabin.price
      : 0;
    const newprice = this.state.totalprice + cabin.price - oldprice;

    this.setState({ selectedCabin: cabin, totalprice: newprice });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h1>{this.state.model}</h1>

            <img src="https://fbtbucket.s3.eu-west-2.amazonaws.com/KB20.jpg" />

            <ul id="forkliftranges">
              <h2>{this.state.rangeCat}</h2>
              <img src={this.state.imgName} alt="" />
              <div></div>
              <li>
                {this.state.model} {this.state.rangeCat} {this.state.engType}{" "}
                forklift
                <br />
                {this.state.liftcapacity}Kg
                <br /> {this.state.engType}
                <br />
                {this.state.engine} <br />
                {this.state.selectedMast
                  ? this.state.selectedMast.masttype
                  : null}
                <br />
                {this.state.selectedMast
                  ? "Mast Type - " + this.state.selectedMast
                  : null}
                <br />
                {this.state.selectedMastSize
                  ? "Mast Size - " + this.state.selectedMastSize.mastlength
                  : null}
                <br />
                {this.state.selectedValve
                  ? "Valve - " + this.state.selectedValve.valvetype
                  : null}
                <br />
                {this.state.selectedFork
                  ? "Fork Length - " + this.state.selectedFork.forklength
                  : null}
                <br />
                {this.state.selectedSideShift
                  ? "Side Shift - " + this.state.selectedSideShift.sideshifttype
                  : null}
                <br />
                {this.state.selectedTyre
                  ? "Tyre - " + this.state.selectedTyre.tyretype
                  : null}
                <br />
                {this.state.selectedCabin
                  ? "Cabin - " + this.state.selectedCabin.cabinoption
                  : null}
                <br />
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
                <strong>Quote Price : £{this.state.totalprice}</strong>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ResetFilters onResetFilters={this.handleResetFilters} />

            {this.state.masts && this.state.masts.length > 0 ? (
              <Masts
                masts={this.state.masts}
                selectedMast={this.state.selectedMast}
                onMastSel={this.handleMastSel}
                onMastSizeSel={this.handleMastSizeSel}
                selectedMastSize={this.state.selectedMastSize}
              />
            ) : null}

            {this.state.valves && this.state.valves.length > 0 ? (
              <Valves
                valves={this.state.valves}
                selectedValve={this.state.selectedValve}
                onValveSel={this.handleValveSel}
              />
            ) : null}

            {this.state.forks && this.state.forks.length > 0 ? (
              <Forks
                forks={this.state.forks}
                selectedFork={this.state.selectedFork}
                onForkSel={this.handleForkSel}
              />
            ) : null}

            {this.state.sideshifts && this.state.sideshifts.length > 0 ? (
              <SideShifts
                sideshifts={this.state.sideshifts}
                selectedSideShift={this.state.selectedSideShift}
                onSideShiftSel={this.handleSideShiftSel}
              />
            ) : null}

            {this.state.tyres && this.state.tyres.length > 0 ? (
              <Tyres
                tyres={this.state.tyres}
                selectedTyre={this.state.selectedTyre}
                onTyreSel={this.handleTyreSel}
              />
            ) : null}

            {this.state.cabins && this.state.cabins.length > 0 ? (
              <Cabins
                cabins={this.state.cabins}
                selectedCabin={this.state.selectedCabin}
                onCabinSel={this.handleCabinSel}
              />
            ) : null}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ForkliftDetail;
