import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Masts from "./masts";
import Forks from "./forks";
import SideShifts from "./sideshifts";
import Tyres from "./tyres";
import Seats from "./seats";
import Cabins from "./cabins";
import Valves from "./valves";
import ResetFilters from "./resetfilters";
import ForkliftImg from "./forkliftimg";

import ColdStoreProts from "./coldstoreprot";
import Heaters from "./heater";
import Aircons from "./aircon";
import Reargrabs from "./reargrab";

import Batterys from "./battery";
import Chargers from "./charger";

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
      seats: forky.seat,
      coldstoreprots: forky.coldstoreprot,
      cabins: forky.cabin,

      reargrabs: forky.reargrab,
      heaters: forky.heater,
      aircons: forky.aircon,

      batterys: forky.batteries,

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
      selectedColdStoreProt: undefined,
      selectedSeat: undefined,
      selectedCabin: undefined,

      selectedAircon: undefined,
      selectedHeater: undefined,
      selectedReargrab: undefined,

      selectedBattery: undefined,
      selectedCharger: undefined,

      chargers: undefined,

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

  handleReargrabSel = reargrab => {
    console.log("Current Reargrab Selected", this.state.selectedReargrab);

    console.log("PassedmReargrab", reargrab);

    const oldprice = this.state.selectedReargrab
      ? this.state.selectedReargrab.price
      : 0;
    const newprice = this.state.totalprice + reargrab.price - oldprice;

    this.setState({ selectedReargrab: reargrab, totalprice: newprice });
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

  handleBatterySel = battery => {
    console.log("Current Battery Selected", this.state.selectedBattery);

    console.log("PassedmBattery", battery);

    const oldprice = this.state.selectedBattery
      ? this.state.selectedBattery.price
      : 0;

    const oldprice2 = this.state.selectedCharger
      ? this.state.selectedCharger.price
      : 0;
    const newprice =
      this.state.totalprice + battery.price - oldprice - oldprice2;

    this.setState({
      selectedBattery: battery,
      selectedCharger: undefined,
      chargers: battery.chargers,
      totalprice: newprice
    });
  };

  handleChargerSel = charger => {
    console.log("Current Charger Selected", this.state.selectedCharger);

    console.log("PassedmCharger", charger);

    const oldprice = this.state.selectedCharger
      ? this.state.selectedCharger.price
      : 0;
    const newprice = this.state.totalprice + charger.price - oldprice;

    this.setState({ selectedCharger: charger, totalprice: newprice });
  };

  handleSeatSel = seat => {
    console.log("Current Seat Selected", this.state.selectedSeat);

    console.log("PassedmSeat", seat);

    const oldprice = this.state.selectedSeat
      ? this.state.selectedSeat.price
      : 0;
    const newprice = this.state.totalprice + seat.price - oldprice;

    this.setState({ selectedSeat: seat, totalprice: newprice });
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

  handleColdStoreProtSel = coldstoreprot => {
    console.log(
      "Current ColdStoreProt Selected",
      this.state.selectedColdStoreProt
    );

    console.log("PassedmColdStoreProt", coldstoreprot);

    const oldprice = this.state.selectedColdStoreProt
      ? this.state.selectedColdStoreProt.price
      : 0;
    const newprice = this.state.totalprice + coldstoreprot.price - oldprice;

    this.setState({
      selectedColdStoreProt: coldstoreprot,
      totalprice: newprice
    });
  };

  handleHeaterSel = heater => {
    console.log("Current Heater Selected", this.state.selectedHeater);

    console.log("PassedmHeater", heater);

    const oldprice = this.state.selectedHeater
      ? this.state.selectedHeater.price
      : 0;
    const newprice = this.state.totalprice + heater.price - oldprice;

    this.setState({ selectedHeater: heater, totalprice: newprice });
  };

  handleAirconSel = aircon => {
    console.log("Current Aircon Selected", this.state.selectedAircon);

    console.log("PassedmAircon", aircon);

    const oldprice = this.state.selectedAircon
      ? this.state.selectedAircon.price
      : 0;
    const newprice = this.state.totalprice + aircon.price - oldprice;

    this.setState({ selectedAircon: aircon, totalprice: newprice });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h2>{this.state.model}</h2>
            {this.state.imgName && this.state.imgName.length > 0 ? (
              <ForkliftImg imgName={this.state.imgName} />
            ) : null}
            <h2>{this.state.rangeCat}</h2>
            {this.state.model} {this.state.rangeCat} {this.state.engType}{" "}
            forklift
            <br />
            {this.state.liftcapacity}Kg
            <br /> {this.state.engType}
            <br />
            {this.state.engine} <br />
            {this.state.selectedMast ? this.state.selectedMast.masttype : null}
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
            {this.state.selectedColdStoreProt ? "Cold Store Protection" : null}
            <br />
            {this.state.selectedReargrab ? "Rear Grab Handle with Horn " : null}
            <br />
            {this.state.selectedTyre
              ? "Tyre - " + this.state.selectedTyre.tyretype
              : null}
            <br />
            {this.state.selectedBattery
              ? "Battery - " + this.state.selectedBattery.batterytype
              : null}
            <br />
            {this.state.selectedCharger
              ? "Charger - " + this.state.selectedCharger.chargertype
              : null}
            <br />
            {this.state.selectedSeat
              ? "Seat - " + this.state.selectedSeat.seattype
              : null}
            {this.state.selectedCabin
              ? "Cabin - " + this.state.selectedCabin.cabinoption
              : null}
            <br />
            {this.state.selectedHeater ? "Heater" : null}
            <br />
            {this.state.selectedAircon ? "Aircon " : null}
            <br />
            <br />
            <Typography variant="p">
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
            </Typography>
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

            {this.state.coldstoreprots &&
            this.state.coldstoreprots.length > 0 ? (
              <ColdStoreProts
                coldstoreprots={this.state.coldstoreprots}
                selectedColdStoreProt={this.state.selectedColdStoreProt}
                onColdStoreProtSel={this.handleColdStoreProtSel}
              />
            ) : null}

            {this.state.reargrabs && this.state.reargrabs.length > 0 ? (
              <Reargrabs
                reargrabs={this.state.reargrabs}
                selectedReargrab={this.state.selectedReargrab}
                onReargrabSel={this.handleReargrabSel}
              />
            ) : null}

            {this.state.seats && this.state.seats.length > 0 ? (
              <Seats
                seats={this.state.seats}
                selectedSeat={this.state.selectedSeat}
                onSeatSel={this.handleSeatSel}
              />
            ) : null}

            {this.state.batterys && this.state.batterys.length > 0 ? (
              <Batterys
                batterys={this.state.batterys}
                selectedBattery={this.state.selectedBattery}
                onBatterySel={this.handleBatterySel}
              />
            ) : null}

            {this.state.chargers && this.state.chargers.length > 0 ? (
              <Chargers
                chargers={this.state.chargers}
                selectedCharger={this.state.selectedCharger}
                onChargerSel={this.handleChargerSel}
              />
            ) : null}

            {this.state.cabins && this.state.cabins.length > 0 ? (
              <Cabins
                cabins={this.state.cabins}
                selectedCabin={this.state.selectedCabin}
                onCabinSel={this.handleCabinSel}
              />
            ) : null}

            {this.state.heaters && this.state.heaters.length > 0 ? (
              <Heaters
                heaters={this.state.heaters}
                selectedHeater={this.state.selectedHeater}
                onHeaterSel={this.handleHeaterSel}
              />
            ) : null}

            {this.state.aircons && this.state.aircons.length > 0 ? (
              <Aircons
                aircons={this.state.aircons}
                selectedAircon={this.state.selectedAircon}
                onAirconSel={this.handleAirconSel}
              />
            ) : null}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ForkliftDetail;
