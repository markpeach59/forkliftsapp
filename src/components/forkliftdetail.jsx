import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

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
import Sideleverhydraulics from "./sideleverhydraulic";

import Platforms from "./platform";
import Armguards from "./armguard";
import Fork2ds from "./fork2d";
import Bfss from "./bfs";

import Loadbackrests from "./loadbackrest";
import Steerings from "./steering";

import Batterys from "./battery";
import Chargers from "./charger";
import QuoteSave from "./quotesave";

import { getForkliftDetail } from "../services/forkliftDetailService";
import { savequote } from "../services/quotesService";

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
      sideleverhydraulics: forky.sideleverhydraulic,

      armguards: forky.armguard,

      steerings: forky.steering,
      loadbackrests: forky.loadbackrest,
      fork2ds: forky.forks2d,

      heaters: forky.heater,
      aircons: forky.aircon,

      batterys: forky.batteries,
      bfss: forky.bfs,
      totalprice: forky.basePrice,
      baseprice: forky.basePrice
    });
  }

  handleResetFilters = () => {
    //console.log("Been Reset");

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
      selectedSideleverhydraulic: undefined,
      selectedBattery: undefined,
      selectedCharger: undefined,

      selectedArmguard: undefined,
      selectedPlatform: undefined,

      selectedLoadbackrest: undefined,
      selectedSteering: undefined,

      selectedFork2d: undefined,
      selectedBfs: undefined,

      chargers: undefined,

      totalprice: this.state.baseprice
    });
  };

  handleQuoteSave = async () => {
    const quote = {};

    quote.model = this.state.model;
    quote.price = this.state.totalprice;

    console.log("Quote Save Clicked", quote);

    try {
      const { data: savedquote } = await savequote(quote.model, quote.price);
    } catch (error) {
      console.log("did not save quote");
    }
  };

  handleMastSel = mast => {
    this.setState({ selectedMast: mast });
  };

  handleMastSizeSel = (mastsize, masttype) => {
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
    const oldprice = this.state.selectedFork
      ? this.state.selectedFork.price
      : 0;
    const newprice = this.state.totalprice + fork.price - oldprice;

    this.setState({ selectedFork: fork, totalprice: newprice });
  };

  handleFork2dSel = fork2d => {
    const oldprice = this.state.selectedFork2d
      ? this.state.selectedFork2d.price
      : 0;
    const newprice = this.state.totalprice + fork2d.price - oldprice;

    this.setState({ selectedFork2d: fork2d, totalprice: newprice });
  };

  handleSideShiftSel = sideshift => {
    const oldprice = this.state.selectedSideShift
      ? this.state.selectedSideShift.price
      : 0;
    const newprice = this.state.totalprice + sideshift.price - oldprice;

    this.setState({ selectedSideShift: sideshift, totalprice: newprice });
  };

  handleValveSel = valve => {
    const oldprice = this.state.selectedValve
      ? this.state.selectedValve.price
      : 0;
    const newprice = this.state.totalprice + valve.price - oldprice;

    this.setState({ selectedValve: valve, totalprice: newprice });
  };

  handleReargrabSel = reargrab => {
    const oldprice = this.state.selectedReargrab
      ? this.state.selectedReargrab.price
      : 0;
    const newprice = this.state.totalprice + reargrab.price - oldprice;

    this.setState({ selectedReargrab: reargrab, totalprice: newprice });
  };

  handleSideleverhydraulicSel = sideleverhydraulic => {
    const oldprice = this.state.selectedSideleverhydraulic
      ? this.state.selectedSideleverhydraulic.price
      : 0;
    const newprice =
      this.state.totalprice + sideleverhydraulic.price - oldprice;

    this.setState({
      selectedSideleverhydraulic: sideleverhydraulic,
      totalprice: newprice
    });
  };

  handlePlatformSel = platform => {
    const oldprice = this.state.selectedPlatform
      ? this.state.selectedPlatform.price
      : 0;
    const newprice = this.state.totalprice + platform.price - oldprice;

    this.setState({ selectedPlatform: platform, totalprice: newprice });
  };

  handleArmguardSel = armguard => {
    const oldprice = this.state.selectedArmguard
      ? this.state.selectedArmguard.price
      : 0;
    const newprice = this.state.totalprice + armguard.price - oldprice;

    this.setState({ selectedArmguard: armguard, totalprice: newprice });
  };

  handleBfsSel = bfs => {
    const oldprice = this.state.selectedBfs ? this.state.selectedBfs.price : 0;
    const newprice = this.state.totalprice + bfs.price - oldprice;

    this.setState({ selectedBfs: bfs, totalprice: newprice });
  };

  handleLoadbackrestSel = loadbackrest => {
    const oldprice = this.state.selectedLoadbackrest
      ? this.state.selectedLoadbackrest.price
      : 0;
    const newprice = this.state.totalprice + loadbackrest.price - oldprice;

    this.setState({ selectedLoadbackrest: loadbackrest, totalprice: newprice });
  };

  handleSteeringSel = steering => {
    const oldprice = this.state.selectedSteering
      ? this.state.selectedSteering.price
      : 0;
    const newprice = this.state.totalprice + steering.price - oldprice;

    this.setState({ selectedSteering: steering, totalprice: newprice });
  };

  handleTyreSel = tyre => {
    const oldprice = this.state.selectedTyre
      ? this.state.selectedTyre.price
      : 0;
    const newprice = this.state.totalprice + tyre.price - oldprice;

    this.setState({ selectedTyre: tyre, totalprice: newprice });
  };

  handleBatterySel = battery => {
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
    const oldprice = this.state.selectedCharger
      ? this.state.selectedCharger.price
      : 0;
    const newprice = this.state.totalprice + charger.price - oldprice;

    this.setState({ selectedCharger: charger, totalprice: newprice });
  };

  handleSeatSel = seat => {
    const oldprice = this.state.selectedSeat
      ? this.state.selectedSeat.price
      : 0;
    const newprice = this.state.totalprice + seat.price - oldprice;

    this.setState({ selectedSeat: seat, totalprice: newprice });
  };

  handleCabinSel = cabin => {
    const oldprice = this.state.selectedCabin
      ? this.state.selectedCabin.price
      : 0;
    const newprice = this.state.totalprice + cabin.price - oldprice;

    this.setState({ selectedCabin: cabin, totalprice: newprice });
  };

  handleColdStoreProtSel = coldstoreprot => {
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
    const oldprice = this.state.selectedHeater
      ? this.state.selectedHeater.price
      : 0;
    const newprice = this.state.totalprice + heater.price - oldprice;

    this.setState({ selectedHeater: heater, totalprice: newprice });
  };

  handleAirconSel = aircon => {
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
            {this.state.selectedFork2d
              ? "Fork Length - " + this.state.selectedFork2d.forklength
              : null}
            <br />
            {this.state.selectedSideShift
              ? "Side Shift - " + this.state.selectedSideShift.sideshifttype
              : null}
            <br />
            {this.state.selectedSideleverhydraulic
              ? "Side Lever Hydraulics"
              : null}
            <br />
            {this.state.selectedColdStoreProt ? "Cold Store Protection" : null}
            <br />
            {this.state.selectedReargrab ? "Rear Grab Handle with Horn " : null}
            <br />
            {this.state.selectedArmguard ? "with Arm Guard" : null}
            <br />
            {this.state.selectedPlatform ? "with Platform " : null}
            <br />
            {this.state.selectedSteering ? "Electronic Steering " : null}
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
            {this.state.selectedBfs ? "with BFS" : null}
            <br />
            {this.state.selectedLoadbackrest ? "with Load Backrest " : null}
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
            <QuoteSave onQuoteSave={this.handleQuoteSave} />
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

            {this.state.fork2ds && this.state.fork2ds.length > 0 ? (
              <Fork2ds
                fork2ds={this.state.fork2ds}
                selectedFork2d={this.state.selectedFork2d}
                onFork2dSel={this.handleFork2dSel}
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

            {this.state.platforms && this.state.platforms.length > 0 ? (
              <Platforms
                platforms={this.state.platforms}
                selectedPlatform={this.state.selectedPlatform}
                onPlatformSel={this.handlePlatformSel}
              />
            ) : null}

            {this.state.armguards && this.state.armguards.length > 0 ? (
              <Armguards
                armguards={this.state.armguards}
                selectedArmguard={this.state.selectedArmguard}
                onArmguardSel={this.handleArmguardSel}
              />
            ) : null}

            {this.state.sideleverhydraulics &&
            this.state.sideleverhydraulics.length > 0 ? (
              <Sideleverhydraulics
                sideleverhydraulics={this.state.sideleverhydraulics}
                selectedSideleverhydraulic={
                  this.state.selectedSideleverhydraulic
                }
                onSideleverhydraulicSel={this.handleSideleverhydraulicSel}
              />
            ) : null}

            {this.state.steerings && this.state.steerings.length > 0 ? (
              <Steerings
                steerings={this.state.steerings}
                selectedSteering={this.state.selectedSteering}
                onSteeringSel={this.handleSteeringSel}
              />
            ) : null}

            {this.state.loadbackrests && this.state.loadbackrests.length > 0 ? (
              <Loadbackrests
                loadbackrests={this.state.loadbackrests}
                selectedLoadbackrest={this.state.selectedLoadbackrest}
                onLoadbackrestSel={this.handleLoadbackrestSel}
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

            {this.state.bfss && this.state.bfss.length > 0 ? (
              <Bfss
                bfss={this.state.bfss}
                selectedBfs={this.state.selectedBfs}
                onBfsSel={this.handleBfsSel}
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
